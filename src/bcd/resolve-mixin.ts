import * as Browser from "../types";
import bcd from "@mdn/browser-compat-data";
import { CompatStatement } from "@mdn/browser-compat-data/types";


function addToArrayMap<T>(map: Map<string, T[]>, name: string, value: T) {
  const array = map.get(name) || [];
  array.push(value);
  map.set(name, array);
}

function trackMixinInclusions(interfaces: Browser.Interface[]) {
  const map = new Map<string, Browser.Interface[]>();
  for (const i of interfaces) {
    for (const include of i.implements ?? []) {
      addToArrayMap(map, include, i);
    }
  }
  return map;
}

export default function resolveMixinSupportData(webidl: Browser.WebIdl) {
  const inclusionMap = trackMixinInclusions(Object.values(webidl.interfaces?.interface ?? {}));
  const result: Map<string, Map<string, CompatStatement[]>> = new Map();
  for (const mixin of Object.values(webidl.mixins?.mixin ?? {})) {
    const interfaces = inclusionMap.get(mixin.name);
    if (!interfaces) {
      continue;
    }
    const mixinResult: Map<string, CompatStatement[]> = new Map();
    const memberKeys = [...Object.keys(mixin.methods.method), ...Object.keys(mixin.properties?.property ?? {})];
    for (const memberKey of memberKeys) {
      for (const i of interfaces) {
        const compat = bcd.api[i.name]?.[memberKey]?.__compat;
        if (compat) {
          addToArrayMap(mixinResult, memberKey, compat);
        }
      }
    }
  }
  return result;
}
