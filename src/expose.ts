import * as Browser from "./types";
import { getEmptyWebIDL, filter, exposesTo, followTypeReferences, collectTypeReferences, filterProperties, baseTypeConversionMap } from "./helpers";

export function getExposedTypes(webidl: Browser.WebIdl, target: string, forceKnownWorkerTypes: Set<string>) {
    const worker = getEmptyWebIDL();
    if (webidl.interfaces) worker.interfaces!.interface = filter(webidl.interfaces.interface, o => exposesTo(o, target));

    const knownWorkerIDLTypes = followTypeReferences(webidl, worker.interfaces!.interface);
    if (forceKnownWorkerTypes) {
        forceKnownWorkerTypes.forEach(t => knownWorkerIDLTypes.add(t));
    }
    const knownWorkerAllTypes = new Set([
        ...knownWorkerIDLTypes,
        ...Object.keys(worker.interfaces!.interface),
        ...baseTypeConversionMap.keys()
    ]);
    const isKnownWorkerName = (o: { name: string }) => knownWorkerIDLTypes.has(o.name);

    if (webidl.typedefs) {
        worker.typedefs!.typedef = [];
        webidl.typedefs.typedef
            .filter(t => knownWorkerIDLTypes.has(t["new-type"]))
            .forEach(t => {
                if (t["override-type"] || collectTypeReferences(t).some(r => knownWorkerAllTypes.has(r))) {
                    worker.typedefs!.typedef.push(t);
                }
                else {
                    knownWorkerAllTypes.delete(t["new-type"]);
                }
            });
    }

    if (webidl["callback-functions"]) worker["callback-functions"]!["callback-function"] = filterProperties(webidl["callback-functions"]!["callback-function"], isKnownWorkerName);
    if (webidl["callback-interfaces"]) worker["callback-interfaces"]!.interface = filterProperties(webidl["callback-interfaces"]!.interface, isKnownWorkerName);
    if (webidl.dictionaries) worker.dictionaries!.dictionary = filterProperties(webidl.dictionaries.dictionary, isKnownWorkerName);
    if (webidl.enums) worker.enums!.enum = filterProperties(webidl.enums.enum, isKnownWorkerName);
    if (webidl.mixins) worker.mixins!.mixin = filterProperties(webidl.mixins.mixin, isKnownWorkerName);

    return deepClone(worker, o => {
        if (Array.isArray(o.type)) {
            return {
                ...o,
                type: cutNeverFromUnions(o.type, knownWorkerAllTypes)
            }
        }
        if (Array.isArray(o.signature)) {
            return {
                ...o,
                signature: o.signature.map((s: any) => cutSignatureByType(s, knownWorkerAllTypes))
            };
        }
    });
}

function cutNeverFromUnions(union: Browser.Typed[], knownTypes: Set<string>): Browser.Typed[] {
    const result: Browser.Typed[] = [];
    for (const type of union) {
        if (Array.isArray(type.type)) {
            if (cutNeverFromUnions(type.type, knownTypes).length) {
                result.push(type);
            }
        }
        else if (type["override-type"] || knownTypes.has(type.type)) {
            result.push(type);
        }
    }
    return result;
}

function cutSignatureByType(signature: Browser.Signature, knownTypes: Set<string>) {
    if (!signature.param) {
        return signature;
    }
    const param: Browser.Param[] = [];
    for (const p of signature.param) {
        if (Array.isArray(p.type)) {
            const cut = cutNeverFromUnions(p.type, knownTypes);
            if (p.optional && !cut.length) {
                break;
            }
            else {
                if (cut.length > 1) {
                    param.push({ ...p, type: cut })
                }
                else if (cut.length === 1) {
                    param.push({ ...p, ...cut[0] });
                }
                continue;
            }
        }
        else if (p.optional && !knownTypes.has(p.type)) {
            break;
        }
        param.push(p);
    }
    return { ...signature, param };
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
