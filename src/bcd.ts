import * as Browser from "./types";
import bcd from "@mdn/browser-compat-data";
import { CompatStatement, SimpleSupportStatement, SupportBlock } from "@mdn/browser-compat-data/types";
import { camelToHyphenCase } from "./utils/css.js";
import { filterMapRecord, isEmptyRecord } from "./utils/record.js";
import { mapDefined } from "./helpers.js";
import resolveMixinSupportData from "./bcd/resolve-mixin.js";

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
  "BeforeUnloadEvent": ["returnValue"],
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
  "GlobalEventHandlers": [
    "onabort",
    "ontouchcancel",
    "ontouchend",
    "ontouchmove",
    "ontouchstart"
  ],
  "HTMLAnchorElement": ["ping"],
  "HTMLAreaElement": ["ping"],
  "HTMLIFrameElement": ["allowPaymentRequest"],
  "HTMLLinkElement": [
    "charset",
    "disabled",
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
  "HTMLScriptElement": ["integrity"],
  "KeyframeEffect": [
    "iterationComposite",
  ],
  "LinkStyle": ["sheet"],
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
  "RTCStatsReport": [],
  "SharedWorkerGlobalScope": ["close"],
  "ServiceWorker": ["postMessage"],
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
  "SVGAnimationElement": ["getCurrentTime", "getSimpleDuration", "getStartTime"],
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
  "Global": ["value", "valueOf"],
  "Memory": ["buffer", "grow"],
  "Module": ["customSections", "exports", "imports"],
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

function forceAlive(key: string, parentKey?: string) {
  return parentKey ? forceKeepAlive[parentKey]?.includes(key) : !!forceKeepAlive[key];
}

function redundantForceAliveWarn(key: string, parentKey?: string) {
  if (parentKey) {
    console.warn(`Redundant forceKeepAlive item: ${parentKey}#${key}`)
  } else if (!forceKeepAlive[key].length) {
    console.warn(`Redundant forceKeepAlive item: ${key}`)
  }
}

function isSuitable(key: string, compat?: CompatStatement, parentKey?: string, prefix?: string) {
  const forcedAlive = parentKey ? forceKeepAlive[parentKey]?.includes(key) : !!forceKeepAlive[key];
  if (compat && hasMultipleImplementations(compat.support, prefix)) {
    if (forcedAlive) {
      redundantForceAliveWarn(key, parentKey);
    }
    return true;
  }
  return forcedAlive;
}

export function getRemovalData(webidl: Browser.WebIdl) {
  return mapToBcdCompat(webidl, ({ key, parentKey, compats }) => {
    const forcedAlive = forceAlive(key, parentKey);
    if (compats.some(compat => isSuitable(key, compat, parentKey))) {
      if (forcedAlive) {
        redundantForceAliveWarn(key, parentKey);
      }
      return;
    }
    if (forcedAlive) {
      return;
    }

    if (parentKey === "CSSStyleDeclaration") {
      const hyphenCase = camelToHyphenCase(key);
      const bcdCssItem = bcd.css.properties[hyphenCase];
      if (bcdCssItem && isSuitable(hyphenCase, bcdCssItem.__compat, parentKey)) {
        return;
      }
      if (hyphenCase.startsWith("-webkit-")) {
        const noPrefix = hyphenCase.slice(8);
        const bcdWebKitItem = bcd.css.properties[noPrefix];
        if (bcdWebKitItem && isSuitable(noPrefix, bcdWebKitItem.__compat, parentKey, "-webkit-")) {
          return;
        }
      }
      else if (forceKeepAlive[parentKey]?.includes(key)) {
        return;
      }
    }

    return { exposed: "" };
  }) as Browser.WebIdl;
}

function singleItemToArray<T>(item: T | undefined) {
  if (item) {
    return [item];
  }
  return [];
}

function mapToBcdCompat(webidl: Browser.WebIdl, mapper: ({}: { key: string, compats: CompatStatement[], webkit?: boolean, parentKey?: string }) => any): Browser.WebIdl | undefined {
  function mapInterfaceLike(name: string, i: Browser.Interface) {
    function getMemberCompat(memberName: string) {
      if (!i.mixin) {
        return singleItemToArray(bcd.api[name]?.[memberName]?.__compat);
      }
      const mixinDataMap = mixinSupportData.get(i.name);
      return mixinDataMap?.get(memberName) ?? singleItemToArray(bcd.api[name]?.[memberName]?.__compat);
    }

    const intCompat = bcd.api[name]?.__compat;
    const mapped = !i.mixin && mapper({ key: name, compats: singleItemToArray(intCompat) });
    if (!i.mixin && !intCompat) {
      if (mapped) {
        return { name: i.name, ... mapped };
      }
      return;
    }
    const result = { ...mapped };

    const recordMapper = (key: string) => {
      const compats = getMemberCompat(key);
      return mapper({ key, parentKey: name, webkit: key.startsWith("webkit"), compats });
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
      return { name: i.name, ...result };
    }
  }

  const mixinSupportData = resolveMixinSupportData(webidl);

  const interfaces = filterMapRecord(webidl.interfaces?.interface, mapInterfaceLike);
  const mixins = filterMapRecord(webidl.mixins?.mixin, mapInterfaceLike);
  const namespaces = mapDefined(webidl.namespaces, n => mapInterfaceLike(n.name, n));
  if (!isEmptyRecord(interfaces) || !isEmptyRecord(mixins) || !isEmptyRecord(namespaces)) {
    return {
      interfaces: interfaces && { interface: interfaces },
      mixins: mixins && { mixin: mixins },
      namespaces
    }
  }
}

export function getDeprecationData(webidl: Browser.WebIdl) {
  const webkitExceptions = ["webkitLineClamp"];
  return mapToBcdCompat(webidl, ({ key, compats, webkit }) => {
    if (compats.length && compats.every(compat => compat.status?.deprecated)) {
      return { deprecated: 1 };
    }
    if (!compats.length && webkit && !webkitExceptions.includes(key)) {
      return { deprecated: 1 };
    }
  }) as Browser.WebIdl;
}
