import * as Browser from "./types";
import bcd from "@mdn/browser-compat-data";
import { CompatStatement, Identifier, SimpleSupportStatement, SupportBlock } from "@mdn/browser-compat-data/types";
import { camelToHyphenCase } from "./utils/css.js";
import { filterMapRecord, isEmptyRecord } from "./utils/record.js";
import { mapDefined } from "./helpers.js";

// TODO: Block every types that are not in BCD, with an allowlist

const forceKeepAlive: Record<string, string[]> = {
  // Things that are incorrectly reported as unsupported.
  // These should be filed to https://github.com/mdn/browser-compat-data/issues
  "AbstractRange": [ // Blink only implements them in the subinterfaces
    "collapsed",
    "endContainer",
    "endOffset",
    "startContainer",
    "startOffset"
  ],
  "Animation": ["finished", "pending", "ready", "updatePlaybackRate"],
  "AnimationPlaybackEvent": ["currentTime", "timelineTime"],
  "Attr": ["name", "ownerElement", "specified", "value"],
  "BarProp": ["visible"],
  "BeforeUnloadEvent": ["returnValue"],
  "ByteLengthQueuingStrategy": ["size"],
  "console": [
    "assert",
    "clear",
    "count",
    "countReset",
    "debug",
    "dir",
    "dirxml",
    "error",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeLog",
    "timeStamp",
    "trace",
    "warn",
  ],
  "ConstantSourceNode": ["offset"],
  "CountQueuingStrategy": ["size"],
  "CSSConditionRule": ["conditionText"],
  "CSSGroupingRule": ["cssRules", "deleteRule", "insertRule"],
  "CSSStyleDeclaration": [
    "alignContent",
    "alignItems",
    "alignSelf",
    "alignmentBaseline",
    "baselineShift",
    "breakAfter",
    "breakBefore",
    "breakInside",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "columnGap",
    "dominantBaseline",
    "fill",
    "fillOpacity",
    "fillRule",
    "floodColor",
    "floodOpacity",
    "fontSizeAdjust",
    "fontVariantPosition",
    "gap",
    "gridColumnGap",
    "gridGap",
    "gridRowGap",
    "justifyContent",
    "justifyItems",
    "justifySelf",
    "lightingColor",
    "marker",
    "markerEnd",
    "markerMid",
    "markerStart",
    "placeContent",
    "placeItems",
    "placeSelf",
    "rotate",
    "rowGap",
    "scale",
    "shapeRendering",
    "stopColor",
    "stopOpacity",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "textAnchor",
    "translate",
    "webkitAlignContent",
    "webkitAlignItems",
    "webkitAlignSelf",
    "webkitJustifyContent",
    "webkitMaskBoxImageOutset",
    "webkitMaskBoxImageRepeat",
    "webkitMaskBoxImageSlice",
    "webkitMaskBoxImageSource",
    "webkitMaskBoxImageWidth",
    "wordWrap", // TODO: Support for alternative names
  ],
  "CloseEvent": ["code", "reason", "wasClean"],
  "DOMRectList": ["item", "length"],
  "DOMMatrix": [
    "invertSelf",
    "multiplySelf",
    "preMultiplySelf",
    "rotateAxisAngleSelf",
    "rotateFromVectorSelf",
    "rotateSelf",
    "setMatrixValue",
    "skewXSelf",
    "skewYSelf",
    "translateSelf",
    "fromFloat32Array",
    "fromFloat64Array",
    "fromMatrix",
  ],
  "DOMMatrixReadOnly": ["fromFloat32Array", "fromFloat64Array"],
  "DOMPoint": ["fromPoint"],
  "DOMRect": ["fromRect"],
  "DOMRectReadOnly": ["toJSON"],
  "Document": [
    "charset",
    "inputEncoding",
    "elementFromPoint",
    "elementsFromPoint",
    "getSelection",
  ],
  "Element": ["webkitMatchesSelector"],
  "ExtendableMessageEvent": ["lastEventId", "origin", "ports", "source"],
  "FileReader": ["onloadstart"],
  "Gamepad": ["hapticActuators"],
  "GamepadHapticActuator": ["type"],
  "GlobalEventHandlers": [
    "onabort",
    "ontouchcancel",
    "ontouchend",
    "ontouchmove",
    "ontouchstart"
  ],
  "HTMLAnchorElement": ["ping"],
  "HTMLAreaElement": ["ping"],
  "HTMLDirectoryElement": ["compact"],
  "HTMLEmbedElement": [
    "align",
    "height",
    "name",
    "src",
    "type",
    "width",
    "getSVGDocument"
  ],
  "HTMLHRElement": ["align", "color", "noShade", "size", "width"],
  "HTMLHtmlElement": ["version"],
  "HTMLIFrameElement": ["allowPaymentRequest", "getSVGDocument"],
  "HTMLInputElement": [
    "accept",
    "align",
    "alt",
    "checked",
    "defaultChecked",
    "defaultValue",
    "dirName",
    "disabled",
    "form",
    "max",
    "maxLength",
    "min",
    "minLength",
    "name",
    "readOnly",
    "select",
    "selectionEnd",
    "selectionStart",
    "size",
    "src",
    "step",
    "type",
    "useMap",
    "value",
    "valueAsDate",
    "valueAsNumber",
    "width",
  ],
  "HTMLLegendElement": ["align", "form"],
  "HTMLLinkElement": [
    "charset",
    "href",
    "hreflang",
    "imageSizes",
    "imageSrcset",
    "integrity",
    "media",
    "rev",
    "target",
    "type",
  ],
  "HTMLMetaElement": ["content", "httpEquiv", "name", "scheme"],
  "HTMLScriptElement": ["integrity"],
  "HTMLTextAreaElement": [
    "checkValidity",
    "cols",
    "defaultValue",
    "dirName",
    "disabled",
    "form",
    "maxLength",
    "minLength",
    "name",
    "placeholder",
    "readOnly",
    "required",
    "rows",
    "select",
    "selectionDirection",
    "selectionEnd",
    "selectionStart",
    "setCustomValidity",
    "setRangeText",
    "setRangeText",
    "setSelectionRange",
    "type",
    "validationMessage",
    "validity",
    "value",
    "willValidate",
    "wrap",
  ],
  "KeyframeEffect": [
    "composite",
    "iterationComposite",
    "getKeyframes",
    "setKeyframes",
  ],
  "MutationEvent": [
    "attrChange",
    "attrName",
    "newValue",
    "prevValue",
    "relatedNode",
    "initMutationEvent",
    "ADDITION",
    "MODIFICATION",
    "REMOVAL",
  ],
  "NavigatorStorage": ["storage"],
  "NavigatorPlugins": ["javaEnabled", "mimeTypes", "plugins"],
  "OfflineAudioContext": ["resume"],
  "PaymentRequest": ["shippingAddress"],
  "PictureInPictureWindow": [
    "requestPictureInPicture",
    "onenterpictureinpicture",
    "onleavepictureinpicture",
    "autoPictureInPicture",
    "disablePictureInPicture",
  ],
  "Plugin": ["length"],
  "Request": ["keepalive"],
  "ResizeObserverSize": ["blockSize", "inlineSize"],
  "RTCDtlsTransport": ["onstatechange", "state"],
  "RTCPeerConnection": ["canTrickleIceCandidates", "getTransceivers"],
  "RTCRtpSender": ["transport"],
  "RTCStatsReport": [],
  "SharedWorkerGlobalScope": ["close"],
  "ServiceWorkerGlobalScope": ["onmessageerror"],
  "SVGAngle": [
    "unitType",
    "value",
    "valueAsString",
    "valueInSpecifiedUnits",
    "convertToSpecifiedUnits",
    "newValueSpecifiedUnits",
  ],
  "SVGAnimatedAngle": ["animVal", "baseVal"],
  "SVGAnimatedBoolean": ["animVal", "baseVal"],
  "SVGAnimatedEnumeration": ["animVal", "baseVal"],
  "SVGAnimatedInteger": ["animVal", "baseVal"],
  "SVGAnimatedLength": ["animVal", "baseVal"],
  "SVGAnimatedLengthList": ["animVal", "baseVal"],
  "SVGAnimatedNumber": ["animVal", "baseVal"],
  "SVGAnimatedNumberList": ["animVal", "baseVal"],
  "SVGAnimatedPreserveAspectRatio": ["animVal", "baseVal"],
  "SVGAnimatedRect": ["animVal", "baseVal"],
  "SVGAnimatedTransformList": ["animVal", "baseVal"],
  "SVGClipPathElement": ["transform"],
  "SVGComponentTransferFunctionElement": [
    "amplitude",
    "exponent",
    "intercept",
    "offset",
    "slope",
    "tableValues",
    "type",
  ],
  "SVGElement": [
    "className",
    "ownerSVGElement",
    "viewportElement",
  ],
  "SVGFEBlendElement": ["in1", "in2", "mode"],
  "SVGFEComponentTransferElement": ["in1"],
  "SVGFECompositeElement": [
    "in1",
    "in2",
    "k1",
    "k2",
    "k3",
    "k4",
    "operator",
  ],
  "SVGFEConvolveMatrixElement": [
    "bias",
    "divisor",
    "edgeMode",
    "in1",
    "kernelMatrix",
    "kernelUnitLengthX",
    "kernelUnitLengthY",
    "orderX",
    "orderY",
    "preserveAlpha",
    "targetX",
    "targetY",
  ],
  "SVGFEDiffuseLightingElement": [
    "diffuseConstant",
    "in1",
    "kernelUnitLengthX",
    "kernelUnitLengthY",
    "surfaceScale",
  ],
  "SVGFEDisplacementMapElement": [
    "in1",
    "in2",
    "scale",
    "xChannelSelector",
    "yChannelSelector",
  ],
  "SVGFEDistantLightElement": ["azimuth", "elevation"],
  "SVGFEDropShadowElement": [
    "dx",
    "dy",
    "in1",
    "stdDeviationX",
    "stdDeviationY",
    "setStdDeviation",
  ],
  "SVGFEGaussianBlurElement": [
    "in1",
    "stdDeviationX",
    "stdDeviationY",
    "setStdDeviation",
  ],
  "SVGFEImageElement": ["preserveAspectRatio"],
  "SVGFEMergeNodeElement": ["in1"],
  "SVGFEMorphologyElement": [
    "in1",
    "operator",
    "radiusX",
    "radiusY",
  ],
  "SVGFEOffsetElement": ["dx", "dy", "in1"],
  "SVGFEPointLightElement": ["x", "y", "z"],
  "SVGFESpecularLightingElement": [
    "in1",
    "kernelUnitLengthX",
    "kernelUnitLengthY",
    "specularConstant",
    "specularExponent",
    "surfaceScale",
  ],
  "SVGFESpotLightElement": [
    "limitingConeAngle",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "specularExponent",
    "x",
    "y",
    "z",
  ],
  "SVGFETileElement": ["in1"],
  "SVGFETurbulenceElement": [
    "baseFrequencyX",
    "baseFrequencyY",
    "numOctaves",
    "seed",
    "stitchTiles",
    "type",
  ],
  "SVGFilterElement": [
    "filterUnits",
    "height",
    "primitiveUnits",
    "width",
    "x",
    "y",
  ],
  "SVGForeignObjectElement": [
    "height",
    "width",
    "x",
    "y",
  ],
  "SVGGradientElement": [
    "gradientTransform",
    "gradientUnits",
    "spreadMethod",
  ],
  "SVGLength": [
    "unitType",
    "value",
    "valueAsString",
    "valueInSpecifiedUnits",
    "convertToSpecifiedUnits",
    "newValueSpecifiedUnits",
  ],
  "SVGLengthList": [
    "length",
    "numberOfItems",
    "appendItem",
    "clear",
    "getItem",
    "initialize",
    "insertItemBefore",
    "removeItem",
    "replaceItem",
  ],
  "SVGLinearGradientElement": ["x1", "x2", "y1", "y2"],
  "SVGMarkerElement": [
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "orientAngle",
    "orientType",
    "refX",
    "refY",
    "setOrientToAngle",
    "setOrientToAuto",
  ],
  "SVGNumber": ["value"],
  "SVGNumberList": [
    "length",
    "numberOfItems",
    "appendItem",
    "clear",
    "getItem",
    "initialize",
    "insertItemBefore",
    "removeItem",
    "replaceItem",
  ],
  "SVGPointList": [
    "appendItem",
    "clear",
    "getItem",
    "initialize",
    "insertItemBefore",
    "length",
    "numberOfItems",
    "replaceItem",
    "removeItem",
  ],
  "SVGPreserveAspectRatio": ["align", "meetOrSlice"],
  "SVGRadialGradientElement": ["cx", "cy", "fr", "fx", "fy", "r"],
  "SVGScriptElement": ["type"],
  "SVGStopElement": ["offset"],
  "SVGStringList": [
    "numberOfItems",
    "appendItem",
    "clear",
    "getItem",
    "initialize",
    "insertItemBefore",
    "removeItem",
    "replaceItem",
  ],
  "SVGStyleElement": ["media", "title", "type"],
  "SVGTransform": [
    "angle",
    "matrix",
    "type",
    "setMatrix",
    "setRotate",
    "setScale",
    "setSkewX",
    "setSkewY",
    "setTranslate",
  ],
  "SVGTransformList": [
    "numberOfItems",
    "appendItem",
    "clear",
    "consolidate",
    "createSVGTransformFromMatrix",
    "getItem",
    "initialize",
    "insertItemBefore",
    "removeItem",
    "replaceItem",
  ],
  "ServiceWorker": ["postMessage"],
  "SpeechSynthesisEvent": ["charLength"],
  "TextDecoderStream": [],
  "TextEncoderStream": [],
  "TextTrackCue": ["onenter", "onexit"],
  "TextTrackCueList": ["getCueById", "length"],
  "TextTrackList": ["onchange", "onaddtrack", "onremovetrack"],
  "TrackEvent": ["track"],
  "TransformStream": ["readable", "writable"],
  "ValidityState": [
    "customError",
    "patternMismatch",
    "rangeOverflow",
    "rangeUnderflow",
    "stepMismatch",
    "typeMismatch",
    "valid",
    "valueMissing",
  ],
  "VTTRegion": [
    "id",
    "lines",
    "regionAnchorX",
    "regionAnchorY",
    "scroll",
    "viewportAnchorX",
    "viewportAnchorY",
    "width",
  ],
  "WebAssembly": [
    "compile",
    "compileStreaming",
    "instantiate",
    "instantiateStreaming",
    "validate",
  ],
  "WebKitCSSMatrix": [],
  "Window": [
    "closed",
    "captureEvents",
  ],
  "WindowEventHandlers": ["onmessage"],
  "WritableStream": ["abort", "close", "getWriter", "locked"],
  "XMLSerializer": ["serializeToString"],
  "XPathEvaluator": [],
  "XPathResult": [
    "booleanValue",
    "numberValue",
    "singleNodeValue",
    "snapshotLength",
    "stringValue",
  ],
  // (WebAssembly namespace members)
  // TODO: Shouldn't these be inside "WebAssembly"?
  "Instance": ["exports"],
  "CompileError": [],
  "Global": ["value", "valueOf"],
  "LinkError": [],
  "Memory": ["buffer", "grow"],
  "Module": ["customSections", "exports", "imports"],
  "RuntimeError": [],
  "Table": ["length", "get", "grow", "set"],

  // Widely supported but without being correctly exposed to global
  "ReadableStreamDefaultReader": ["closed", "cancel", "read", "releaseLock"],
  "ReadableStreamDefaultController": ["desiredSize", "close", "enqueue", "error"],
  "TransformStreamDefaultController": ["desiredSize", "enqueue", "error", "terminate"],
  "WebGLVertexArrayObjectOES": [],
  "WritableStreamDefaultController": ["error"],
  "WritableStreamDefaultWriter": [
    "abort",
    "close",
    "closed",
    "desiredSize",
    "ready",
    "releaseLock",
    "write",
  ],

  // Should ultimately be removed but not now
  "SVGElementInstance": []
};

function hasMultipleImplementations(support: SupportBlock, prefix?: string) {
  function hasStableImplementation(browser: SimpleSupportStatement | SimpleSupportStatement[] | undefined) {
    if (!browser) {
      return false;
    }
    const latest =
      !Array.isArray(browser) ? browser :
      browser.find(i => i.prefix === prefix); // first one if no prefix
    if (!latest) {
      return false;
    }
    return latest.version_added && !latest.version_removed && !latest.flags && latest.prefix === prefix;
  }
  let count = 0;
  if (hasStableImplementation(support.chrome) || hasStableImplementation(support.chrome_android)) {
    count += 1;
  }
  if (hasStableImplementation(support.firefox) || hasStableImplementation(support.firefox_android)) {
    count += 1;
  }
  if (hasStableImplementation(support.safari) || hasStableImplementation(support.safari_ios)) {
    count += 1;
  }
  return count >= 2;
}

function isSuitable(key: string, value: Identifier, parentKey?: string, prefix?: string) {
  const forceAlive = parentKey ? forceKeepAlive[parentKey]?.includes(key) : !!forceKeepAlive[key];
  if (value.__compat && hasMultipleImplementations(value.__compat.support, prefix)) {
    if (forceAlive) {
      if (parentKey) {
        console.warn(`Redundant forceKeepAlive item: ${parentKey}#${key}`)
      } else if (!forceKeepAlive[key].length) {
        console.warn(`Redundant forceKeepAlive item: ${key}`)
      }
    }
    return true;
  }
  return forceAlive;
}
function getEachRemovalData(type: Browser.Interface, strict: boolean) {
  function getMemberRemovalData(memberKey: string) {
    const memberBcdData = bcdData && bcdData[memberKey];
    if (!memberBcdData) {
      if (strict && !forceKeepAlive[type.name]?.includes(memberKey)) {
        return { exposed: "" };
      }
      return;
    }

    if (!isSuitable(memberKey, memberBcdData, type.name)) {
      return { exposed: "" };
    }
  }

  const bcdData = bcd.api[type.name];
  // BCD hasn't decided what to do with mixins.
  // Allow "unsuitable" mixins until it gets a consistent mixin representation.
  // https://github.com/mdn/browser-compat-data/issues/472
  if (!bcdData || !isSuitable(type.name, bcdData)) {
    if (strict && !forceKeepAlive[type.name]) {
      return { exposed: "" };
    }
  }

  const methods: Record<string, object> = {};
  const properties: Record<string, object> = {};
  for (const memberKey of Object.keys(type.methods.method)) {
    const memberRemoval = getMemberRemovalData(memberKey);
    if (memberRemoval) {
      methods[memberKey] = memberRemoval;
    }
  }
  for (const memberKey of Object.keys(type.properties?.property || {})) {
    const memberRemoval = getMemberRemovalData(memberKey);
    if (memberRemoval) {
      if (type.name === "CSSStyleDeclaration") {
        const hyphenCase = camelToHyphenCase(memberKey);
        const bcdCssItem = bcd.css.properties[hyphenCase];
        if (!bcdCssItem || !isSuitable(hyphenCase, bcdCssItem, type.name)) {
          if (hyphenCase.startsWith("-webkit-")) {
            const noPrefix = hyphenCase.slice(8);
            const bcdWebKitItem = bcd.css.properties[noPrefix];
            if (!bcdWebKitItem || !isSuitable(noPrefix, bcdWebKitItem, type.name, "-webkit-")) {
              properties[memberKey] = memberRemoval;
            }
          }
          else if (!forceKeepAlive[type.name]?.includes(memberKey)) {
            properties[memberKey] = memberRemoval;
          }
        }
      } else {
        properties[memberKey] = memberRemoval;
      }
    }
  }
  const removalItem: Record<string, object> = {};
  if (!isEmptyRecord(methods)) {
    removalItem.methods = { method: methods };
  }
  if (!isEmptyRecord(properties)) {
    removalItem.properties = { property: properties };
  }
  if (!isEmptyRecord(removalItem)) {
    return removalItem;
  }
  return;
}

export function getRemovalData(webidl: Browser.WebIdl) {
  const interfaces: Record<string, object> = {};
  const mixins: Record<string, object> = {};
  const namespaces: object[] = [];
  for (const type of Object.values(webidl.interfaces?.interface ?? {})) {
    const removalData = getEachRemovalData(type, true);
    if (removalData) {
      interfaces[type.name] = removalData;
    }
  }
  for (const type of Object.values(webidl.mixins?.mixin ?? {})) {
    const removalData = getEachRemovalData(type, false);
    if (removalData) {
      mixins[type.name] = removalData;
    }
  }
  for (const type of webidl.namespaces ?? []) {
    const removalData = getEachRemovalData(type, true);
    if (removalData) {
      namespaces.push({ name: type.name, ...removalData });
    }
  }
  return { interfaces: { interface: interfaces }, mixins: { mixin: mixins }, namespaces };
}

function mapToBcdCompat(webidl: Browser.WebIdl, mapper: (compat: CompatStatement) => any) {
  function mapInterfaceLike(name: string, i: Browser.Interface) {
    const result = {} as Browser.Interface;
    if (!bcd.api[name]?.__compat) {
      return;
    }
    Object.assign(result, mapper(bcd.api[name].__compat!));
    if (result.deprecated) {
      // Probably no need to mark recursively
      return result;
    }

    const recordMapper = (key: string) => {
      const compat = bcd.api[name][key]?.__compat;
      if (compat) {
        return mapper(compat);
      }
    };
    const methods = filterMapRecord(i.methods.method, recordMapper);
    const properties = filterMapRecord(i.properties?.property, recordMapper);
    if (!isEmptyRecord(methods)) {
      result.methods = { method: methods! };
    }
    if (!isEmptyRecord(properties)) {
      result.properties = { property: properties! };
    }
    if (!isEmptyRecord(result)) {
      return result;
    }
  }
  const interfaces = filterMapRecord(webidl.interfaces?.interface, mapInterfaceLike);
  const mixins = filterMapRecord(webidl.mixins?.mixin, mapInterfaceLike);
  const namespaces = mapDefined(webidl.namespaces, n => mapInterfaceLike(n.name, n));
  if (!isEmptyRecord(interfaces) || !isEmptyRecord(mixins) || !isEmptyRecord(namespaces)) {
    return {
      interfaces: { interface: interfaces },
      mixins: { mixin: mixins },
      namespaces
    }
  }
}

export function getDeprecationData(webidl: Browser.WebIdl) {
  return mapToBcdCompat(webidl, compat => {
    if (compat.status?.deprecated) {
      return { deprecated: 1 };
    }
  }) as Browser.WebIdl;
}
