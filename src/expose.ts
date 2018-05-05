import * as Browser from "./types";
import { getEmptyWebIDL, filter, exposesTo, followTypeReferences, collectTypeReferences, filterProperties, baseTypeConversionMap } from "./helpers";

export function getExposedTypes(webidl: Browser.WebIdl, forceKnownWorkerTypes: Set<string>, target: string) {
    const worker = getEmptyWebIDL();
    if (webidl.interfaces) worker.interfaces!.interface = filter(webidl.interfaces.interface, o => exposesTo(o, target));

    const knownWorkerIDLTypes = followTypeReferences(webidl, worker.interfaces!.interface);
    forceKnownWorkerTypes.forEach(t => knownWorkerIDLTypes.add(t));
    const knownWorkerAllTypes = new Set([
        ...knownWorkerIDLTypes,
        ...Object.keys(worker.interfaces!.interface),
        ...baseTypeConversionMap.keys()
    ]);
    const isKnownWorkerName = (o: { name: string }) => knownWorkerIDLTypes.has(o.name);

    if (webidl.typedefs) {
        worker.typedefs!.typedef = webidl.typedefs.typedef
            .filter(t => knownWorkerIDLTypes.has(t["new-type"]))
            .filter(t => t["override-type"] || collectTypeReferences(t).some(r => knownWorkerAllTypes.has(r)));
    }

    if (webidl["callback-functions"]) worker["callback-functions"]!["callback-function"] = filterProperties(webidl["callback-functions"]!["callback-function"], isKnownWorkerName);
    if (webidl["callback-interfaces"]) worker["callback-interfaces"]!.interface = filterProperties(webidl["callback-interfaces"]!.interface, isKnownWorkerName);
    if (webidl.dictionaries) worker.dictionaries!.dictionary = filterProperties(webidl.dictionaries.dictionary, isKnownWorkerName);
    if (webidl.enums) worker.enums!.enum = filterProperties(webidl.enums.enum, isKnownWorkerName);
    if (webidl.mixins) worker.mixins!.mixin = filterProperties(webidl.mixins.mixin, isKnownWorkerName);

    deepClone(webidl, o => {
        if (!Array.isArray(o.signatures)) {
            return;
        }
        o.signatures = o.signatures.map((s: any) => cutSignatureByType(s, knownWorkerAllTypes));
    })

    return worker;
}

function cutNeverFromUnions(union: Browser.Typed[], knownTypes: Set<string>): Browser.Typed[] {
    const result: Browser.Typed[] = [];
    for (const type of union) {
        if (Array.isArray(type.type)) {
            if (cutNeverFromUnions(type.type, knownTypes).length) {
                result.push(type);
            }
        }
        else if (knownTypes.has(type.type)) {
            result.push(type);
        }
    }
    return result;
}

function cutSignatureByType(signature: Browser.Signature, knownTypes: Set<string>) {
    if (!signature.param) {
        return signature;
    }
    const params: Browser.Param[] = [];
    for (const param of signature.param) {
        if (Array.isArray(param.type)) {
            if (cutNeverFromUnions(param.type, knownTypes).length) {
                params.push(param);
            }
            else {
                break;
            }
        }
        else if (knownTypes.has(param.type)) {
            
        }
    }
}

function deepClone<T>(o: T, custom: (o: any) => any): T {
    if (!o || typeof o !== "object") {
        return o;
    }
    if (Array.isArray(o)) {
        return o.map(v => deepClone(v, custom)) as any as T;
    }
    const mapped = custom(o);
    if (mapped !== undefined) {
        return mapped;
    }
    const clone: any = {};
    for (const key of Object.getOwnPropertyNames(o)) {
        clone[key] = deepClone((o as any)[key], custom);
    }
    return clone;
}
