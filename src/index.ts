import * as Browser from "./types.js";
import * as fs from "fs";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { merge, resolveExposure, markAsDeprecated, mapToArray, arrayToMap } from "./helpers.js";
import { Flavor, emitWebIdl } from "./emitter.js";
import { convert } from "./widlprocess.js";
import { getExposedTypes } from "./expose.js";
import { getDeprecationData, getRemovalData } from "./bcd.js";

const require = createRequire(import.meta.url);

function mergeNamesakes(filtered: Browser.WebIdl) {
    const targets = [
        ...Object.values(filtered.interfaces!.interface),
        ...Object.values(filtered.mixins!.mixin),
        ...filtered.namespaces!
    ];
    for (const i of targets) {
        if (!i.properties || !i.properties.namesakes) {
            continue;
        }
        const { property } = i.properties!;
        for (const [prop] of Object.values(i.properties.namesakes)) {
            if (prop && !(prop.name in property)) {
                property[prop.name] = prop;
            }
        }
    }
}

interface EmitOptions {
    flavor: Flavor;
    global: string;
    name: string;
    outputFolder: URL;
}

function emitFlavor(webidl: Browser.WebIdl, forceKnownTypes: Set<string>, options: EmitOptions) {
    const exposed = getExposedTypes(webidl, options.global, forceKnownTypes);
    mergeNamesakes(exposed);

    const result = emitWebIdl(exposed, options.flavor, false);
    fs.writeFileSync(new URL(`${options.name}.generated.d.ts`, options.outputFolder), result);

    const iterators = emitWebIdl(exposed, options.flavor, true);
    fs.writeFileSync(new URL(`${options.name}.iterable.generated.d.ts`, options.outputFolder), iterators);
}

function emitDom() {
    const inputFolder = new URL("../inputfiles/", import.meta.url);
    const outputFolder = new URL("../generated/", import.meta.url);

    // ${name} will be substituted with the name of an interface
    const removeVerboseIntroductions: [RegExp, string][] = [
        [/^(The|A) ${name} interface of (the\s*)*((?:(?!API)[A-Za-z\d\s])+ API)/, 'This $3 interface '],
        [/^(The|A) ${name} (interface|event|object) (is|represents|describes|defines)?/, ''],
        [/^An object implementing the ${name} interface (is|represents|describes|defines)/, ''],
        [/^The ${name} is an interface representing/, ''],
        [/^This type (is|represents|describes|defines)?/, ''],
        [/^The (((?:(?!API)[A-Za-z\s])+ API)) ${name} (represents|is|describes|defines)/, 'The $1 ']
    ];

    // Create output folder
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
    }

    const overriddenItems = require(fileURLToPath(new URL("overridingTypes.json", inputFolder)));
    const addedItems = require(fileURLToPath(new URL("addedTypes.json", inputFolder)));
    const comments = require(fileURLToPath(new URL("comments.json", inputFolder)));
    const deprecatedInfo = require(fileURLToPath(new URL("deprecatedMessage.json", inputFolder)));
    const documentationFromMDN = require(fileURLToPath(new URL('mdn/apiDescriptions.json', inputFolder)));
    const removedItems = require(fileURLToPath(new URL("removedTypes.json", inputFolder)));
    const idlSources: any[] = require(fileURLToPath(new URL("idlSources.json", inputFolder)));
    const widlStandardTypes = idlSources.map(convertWidl);

    function convertWidl({ title, deprecated }: { title: string; deprecated?: boolean }) {
        const idl: string = fs.readFileSync(new URL(`idl/${title}.widl`, inputFolder), { encoding: "utf-8" });
        const commentsMapFilePath = new URL(`idl/${title}.commentmap.json`, inputFolder);
        const commentsMap: Record<string, string> = fs.existsSync(commentsMapFilePath) ? require(fileURLToPath(commentsMapFilePath)) : {};
        commentCleanup(commentsMap);
        const result = convert(idl, commentsMap);
        if (deprecated) {
            mapToArray(result.browser.interfaces!.interface).forEach(markAsDeprecated);
            result.partialInterfaces.forEach(markAsDeprecated);
        }
        return result;
    }

    function commentCleanup(commentsMap: Record<string, string>) {
        for (const key in commentsMap) {
            // Filters out phrases for nested comments as we retargets them:
            // "This operation receives a dictionary, which has these members:"
            commentsMap[key] = commentsMap[key].replace(/[,.][^,.]+:$/g, ".");
        }
    }

    function mergeApiDescriptions(idl: Browser.WebIdl, descriptions: Record<string, string>) {
        const namespaces = arrayToMap(idl.namespaces!, i => i.name, i => i);
        for (const [key, value] of Object.entries(descriptions)) {
            const target = idl.interfaces!.interface[key] || namespaces[key];
            if (target) {
                if (value.startsWith("REDIRECT")) {
                    // When an MDN article for an interface redirects to a different one,
                    // it implies the interface was renamed in the specification and
                    // its old name should be deprecated.
                    markAsDeprecated(target);
                } else {
                    target.comment = transformVerbosity(key, value);
                }
            }
        }
        return idl;
    }

    function mergeDeprecatedMessage(idl: Browser.WebIdl, descriptions: Record<string, string>) {
        const namespaces = arrayToMap(idl.namespaces!, i => i.name, i => i);
        for (const [key, value] of Object.entries(descriptions)) {
            const target = idl.interfaces!.interface[key] || namespaces[key];
            if (target) {
                const comment = target.comment ?? "";
                const deprecated = "\n * @deprecated " + transformVerbosity(key, value);
                target.comment = comment + deprecated;
            }
        }
        return idl;
    }

    function transformVerbosity(name: string, description: string): string {
        for (const regTemplate of removeVerboseIntroductions) {
            const [{ source: template }, replace] = regTemplate;

            const reg = new RegExp(template.replace(/\$\{name\}/g, name) + '\\s*');
            const product = description.replace(reg, replace);
            if (product !== description) {
                return product.charAt(0).toUpperCase() + product.slice(1);
            }
        }

        return description;
    }

    /// Load the input file
    let webidl: Browser.WebIdl = require(fileURLToPath(new URL("browser.webidl.preprocessed.json", inputFolder)));

    const knownTypes = require(fileURLToPath(new URL("knownTypes.json", inputFolder)));

    for (const w of widlStandardTypes) {
        webidl = merge(webidl, w.browser, true);
    }
    for (const w of widlStandardTypes) {
        for (const partial of w.partialInterfaces) {
            // Fallback to mixins before every spec migrates to `partial interface mixin`.
            const base = webidl.interfaces!.interface[partial.name] || webidl.mixins!.mixin[partial.name];
            if (base) {
                if (base.exposed) resolveExposure(partial, base.exposed);
                merge(base.constants, partial.constants, true);
                merge(base.methods, partial.methods, true);
                merge(base.properties, partial.properties, true);
            }
        }
        for (const partial of w.partialMixins) {
            const base = webidl.mixins!.mixin[partial.name];
            if (base) {
                if (base.exposed) resolveExposure(partial, base.exposed);
                merge(base.constants, partial.constants, true);
                merge(base.methods, partial.methods, true);
                merge(base.properties, partial.properties, true);
            }
        }
        for (const partial of w.partialDictionaries) {
            const base = webidl.dictionaries!.dictionary[partial.name];
            if (base) {
                merge(base.members, partial.members, true);
            }
        }
        for (const include of w.includes) {
            const target = webidl.interfaces!.interface[include.target];
            if (target) {
                if (!target.implements) {
                    target.implements = [include.includes];
                } else if (!target.implements.includes(include.includes)) {
                    // This makes sure that browser.webidl.preprocessed.json
                    // does not already have the mixin reference
                    target.implements.push(include.includes);
                }
            }
        }
    }

    webidl = merge(webidl, getDeprecationData(webidl));
    webidl = merge(webidl, getRemovalData(webidl) as any);
    webidl = prune(webidl, removedItems);
    webidl = mergeApiDescriptions(webidl, documentationFromMDN);
    webidl = merge(webidl, addedItems);
    webidl = merge(webidl, overriddenItems);
    webidl = merge(webidl, comments);
    webidl = mergeDeprecatedMessage(webidl, deprecatedInfo);
    for (const name in webidl.interfaces!.interface) {
        const i = webidl.interfaces!.interface[name];
        if (i["override-exposed"]) {
            resolveExposure(i, i["override-exposed"]!, true);
        }
    }

    emitFlavor(webidl, new Set(knownTypes.Window), { name: "dom", flavor: Flavor.Window, global: "Window", outputFolder });
    emitFlavor(webidl, new Set(knownTypes.Worker), { name: "webworker", flavor: Flavor.Worker, global: "Worker", outputFolder });

    function prune(obj: Browser.WebIdl, template: Partial<Browser.WebIdl>): Browser.WebIdl {
        return filterByNull(obj, template);

        function filterByNull(obj: any, template: any) {
            if (!template) return obj;
            const filtered = { ...obj };
            for (const k in template) {
                if (!obj[k]) {
                    console.warn(`removedTypes.json has a redundant field ${k} in ${JSON.stringify(template)}`);
                } else if (Array.isArray(template[k])) {
                    if (!Array.isArray(obj[k])) {
                        throw new Error(`Removal template ${k} is an array but the original field is not`);
                    }
                    // template should include strings
                    filtered[k] = obj[k].filter((item: any) => {
                        const name = typeof item === "string" ? item : (item.name || item["new-type"]);
                        return !template[k].includes(name);
                    });
                    if (filtered[k].length === obj[k].length) {
                        const differences = template[k].filter((t: any) => !obj[k].includes(t));
                        console.warn(`removedTypes.json has a redundant array items: ${differences}`);
                    }
                }
                else if (template[k] !== null) {
                    filtered[k] = filterByNull(obj[k], template[k]);
                } else {
                    if (obj[k].exposed === "") {
                        console.warn(`removedTypes.json removes ${k} that has already been disabled by BCD.`)
                    }
                    delete filtered[k];
                }
            }
            return filtered;
        }
    }
}

emitDom();
