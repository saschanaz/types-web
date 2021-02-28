import * as Browser from "./types";
import bcd from "@mdn/browser-compat-data";
import {
  CompatStatement,
  SimpleSupportStatement,
  SupportBlock,
} from "@mdn/browser-compat-data/types";
import { camelToHyphenCase } from "./utils/css.js";
import { filterMapRecord, isEmptyRecord } from "./utils/record.js";
import { mapDefined } from "./helpers.js";

const forceKeepAlive: Record<string, string[]> = {
  // Things that are incorrectly reported as unsupported.
  // These should be filed to https://github.com/mdn/browser-compat-data/issues
  AbstractRange: [
    // Blink only implements them in the subinterfaces
    "collapsed",
    "endContainer",
    "endOffset",
    "startContainer",
    "startOffset",
  ],
  AnimationPlaybackEvent: ["currentTime", "timelineTime"],
  BeforeUnloadEvent: ["returnValue"],
  console: [
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
  ConstantSourceNode: ["offset"],
  CSSConditionRule: ["conditionText"],
  CSSGroupingRule: ["cssRules", "deleteRule", "insertRule"],
  CSSStyleDeclaration: [
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
  CloseEvent: ["code", "reason", "wasClean"],
  DOMRectList: ["item", "length"],
  DOMMatrix: ["fromFloat32Array", "fromFloat64Array", "fromMatrix"],
  DOMPoint: ["fromPoint"],
  DOMRect: ["fromRect"],
  Document: ["charset", "inputEncoding"],
  Element: ["webkitMatchesSelector"],
  ExtendableMessageEvent: ["lastEventId", "origin", "ports", "source"],
  FileReader: ["onloadstart"],
  Gamepad: ["hapticActuators"],
  HTMLIFrameElement: ["allowPaymentRequest"],
  KeyframeEffect: ["iterationComposite"],
  LinkStyle: ["sheet"],
  MediaCapabilities: ["encodingInfo"],
  MutationEvent: [
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
  OfflineAudioContext: ["resume"],
  PaymentRequest: ["shippingAddress"],
  PictureInPictureWindow: [
    "requestPictureInPicture",
    "onenterpictureinpicture",
    "onleavepictureinpicture",
    "autoPictureInPicture",
    "disablePictureInPicture",
  ],
  Request: ["keepalive"],
  ResizeObserverSize: ["blockSize", "inlineSize"],
  RTCDtlsTransport: ["onstatechange", "state"],
  RTCPeerConnection: ["canTrickleIceCandidates"],
  ServiceWorkerGlobalScope: ["onmessageerror"],
  SVGAnimatedTransformList: ["animVal", "baseVal"],
  SVGElement: ["ownerSVGElement", "viewportElement"],
  SVGTransformList: [
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
  SpeechSynthesisEvent: ["charLength"],
  TextDecoderStream: [],
  TextEncoderStream: [],
  TransformStream: ["readable", "writable"],
  WebAssembly: [
    "compile",
    "compileStreaming",
    "instantiate",
    "instantiateStreaming",
    "validate",
  ],
  WindowEventHandlers: ["onmessage"],
  WorkerGlobalScope: ["onrejectionhandled", "onunhandledrejection"],
  WorkletGlobalScope: [],
  WritableStream: ["abort", "close", "getWriter", "locked"],
  // (WebAssembly namespace members)
  // TODO: Shouldn't these be inside "WebAssembly"?
  Instance: ["exports"],
  Global: ["value", "valueOf"],
  Memory: ["buffer", "grow"],
  Module: ["customSections", "exports", "imports"],
  Table: ["length", "get", "grow", "set"],

  // Widely supported but without being correctly exposed to global
  ReadableStreamDefaultReader: ["closed", "cancel", "read", "releaseLock"],
  ReadableStreamDefaultController: ["desiredSize", "close", "enqueue", "error"],
  TransformStreamDefaultController: [
    "desiredSize",
    "enqueue",
    "error",
    "terminate",
  ],
  WebGLVertexArrayObjectOES: [],
  WritableStreamDefaultController: ["error"],
  WritableStreamDefaultWriter: [
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
  function hasStableImplementation(
    browser: SimpleSupportStatement | SimpleSupportStatement[] | undefined
  ) {
    if (!browser) {
      return false;
    }
    const latest = !Array.isArray(browser)
      ? browser
      : browser.find(i => i.prefix === prefix); // first one if no prefix
    if (!latest) {
      return false;
    }
    return (
      latest.version_added &&
      !latest.version_removed &&
      !latest.flags &&
      latest.prefix === prefix &&
      !latest.alternative_name
    );
  }
  let count = 0;
  if (
    hasStableImplementation(support.chrome) ||
    hasStableImplementation(support.chrome_android)
  ) {
    count += 1;
  }
  if (
    hasStableImplementation(support.firefox) ||
    hasStableImplementation(support.firefox_android)
  ) {
    count += 1;
  }
  if (
    hasStableImplementation(support.safari) ||
    hasStableImplementation(support.safari_ios)
  ) {
    count += 1;
  }
  return count >= 2;
}

function isSuitable(
  key: string,
  compat?: CompatStatement,
  parentKey?: string,
  prefix?: string
) {
  const forceAlive = parentKey
    ? forceKeepAlive[parentKey]?.includes(key)
    : !!forceKeepAlive[key];
  if (compat && hasMultipleImplementations(compat.support, prefix)) {
    if (forceAlive) {
      if (parentKey) {
        console.warn(`Redundant forceKeepAlive item: ${parentKey}#${key}`);
      } else if (!forceKeepAlive[key].length) {
        console.warn(`Redundant forceKeepAlive item: ${key}`);
      }
    }
    return true;
  }
  return forceAlive;
}

export function getRemovalData(webidl: Browser.WebIdl): Browser.WebIdl {
  return mapToBcdCompat(webidl, ({ key, parentKey, compat, mixin }) => {
    // Allow:
    // * all mixins, for now
    // * mixin members that has no compat data
    if (mixin && (!compat || !parentKey)) {
      return;
    }
    if (isSuitable(key, compat, parentKey)) {
      return;
    }

    if (parentKey === "CSSStyleDeclaration") {
      const hyphenCase = camelToHyphenCase(key);
      const bcdCssItem = bcd.css.properties[hyphenCase];
      if (
        bcdCssItem &&
        isSuitable(hyphenCase, bcdCssItem.__compat, parentKey)
      ) {
        return;
      }
      if (hyphenCase.startsWith("-webkit-")) {
        const noPrefix = hyphenCase.slice(8);
        const bcdWebKitItem = bcd.css.properties[noPrefix];
        if (
          bcdWebKitItem &&
          isSuitable(noPrefix, bcdWebKitItem.__compat, parentKey, "-webkit-")
        ) {
          return;
        }
      } else if (forceKeepAlive[parentKey]?.includes(key)) {
        return;
      }
    }

    return { exposed: "" };
  }) as Browser.WebIdl;
}

function mapToBcdCompat(
  webidl: Browser.WebIdl,
  mapper: ({
    key,
    compat,
    webkit,
  }: {
    key: string;
    compat?: CompatStatement;
    webkit?: boolean;
    mixin: boolean;
    parentKey?: string;
  }) => any
): Browser.WebIdl | undefined {
  function mapInterfaceLike(name: string, i: Browser.Interface) {
    const intCompat = bcd.api[name]?.__compat;
    const mapped = mapper({ key: name, compat: intCompat, mixin: !!i.mixin });
    if (!intCompat) {
      if (mapped) {
        return { name: i.name, ...mapped };
      }
      return;
    }
    const result = { ...mapped };

    const recordMapper = (key: string) => {
      const compat = bcd.api[name][key]?.__compat;
      return mapper({
        key,
        parentKey: name,
        webkit: key.startsWith("webkit"),
        compat,
        mixin: !!i.mixin,
      });
    };
    const methods = filterMapRecord(i.methods?.method, recordMapper);
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
  const interfaces = filterMapRecord(
    webidl.interfaces?.interface,
    mapInterfaceLike
  );
  const mixins = filterMapRecord(webidl.mixins?.mixin, mapInterfaceLike);
  const namespaces = mapDefined(webidl.namespaces, n =>
    mapInterfaceLike(n.name, n)
  );
  if (
    !isEmptyRecord(interfaces) ||
    !isEmptyRecord(mixins) ||
    !isEmptyRecord(namespaces)
  ) {
    return {
      interfaces: interfaces && { interface: interfaces },
      mixins: mixins && { mixin: mixins },
      namespaces,
    };
  }
}

export function getDeprecationData(webidl: Browser.WebIdl): Browser.WebIdl {
  const webkitExceptions = ["webkitLineClamp"];
  return mapToBcdCompat(webidl, ({ key, compat, webkit }) => {
    if (
      compat?.status?.deprecated ||
      (!compat && webkit && !webkitExceptions.includes(key))
    ) {
      return { deprecated: 1 };
    }
  }) as Browser.WebIdl;
}
