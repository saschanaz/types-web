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

    return deepFilterUnexposedTypes(worker, knownWorkerAllTypes);
}

function deepFilterUnexposedTypes(webidl: Browser.WebIdl, knownTypes: Set<string>) {
    return deepClone(webidl, o => {
        if (Array.isArray(o.type)) {
            return { ...o, type: filterUnknownTypeFromUnion(o.type) }
        }
        if (Array.isArray(o.signature)) {
            return { ...o, signature: o.signature.map(filterUnknownTypeFromSignature) };
        }
    });

    function filterUnknownTypeFromUnion(union: Browser.Typed[]): Browser.Typed[] {
        const result: Browser.Typed[] = [];
        for (const type of union) {
            if (Array.isArray(type.type)) {
                const filteredUnion = filterUnknownTypeFromUnion(type.type);
                if (filteredUnion.length) {
                    result.push({ ...type, type: filteredUnion });
                }
            }
            else if (type["override-type"] || knownTypes.has(type.type)) {
                result.push(type);
            }
        }
        return result;
    }

    function filterUnknownTypeFromSignature(signature: Browser.Signature) {
        if (!signature.param) {
            return signature;
        }
        const param: Browser.Param[] = [];
        for (const p of signature.param) {
            const types = Array.isArray(p.type) ? p.type : [p];
            const filtered = filterUnknownTypeFromUnion(types);
            if (filtered.length > 1) {
                param.push({ ...p, type: filtered });
            }
            else if (filtered.length === 1) {
                param.push({ ...p, ...filtered[0] });
            }
            else if (!p.optional) {
                throw new Error("A non-optional parameter has unknown type");
            }
            else {
                // safe to skip
                break;
            }
        }
        return { ...signature, param };
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
