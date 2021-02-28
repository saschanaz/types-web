import { createRequire } from "module";
import { fileURLToPath } from "url";
import { tryReadFile } from "./utils/fs.js";
import { createTryRequire } from "./utils/require.js";

const webrefDir = new URL("../../node_modules/webref/ed/", import.meta.url);
const webrefIdlDir = new URL("idl/", webrefDir);
const webrefCssDir = new URL("css/", webrefDir);

const require = createRequire(import.meta.url);
const tryRequire = createTryRequire(import.meta.url);

function hyphenToCamelCase(name: string) {
  const camel = name
    .replace(/^-(\w)/, (_, c) => c)
    .replace(/-(\w)/g, (_, c) => c.toUpperCase());
  return camel === "float" ? "_float" : camel;
}

function generateWebIdlFromCssProperties(properties: string[]) {
  return `partial interface CSSStyleDeclaration {${properties
    .map(
      property =>
        `\n  [CEReactions] attribute [LegacyNullToEmptyString] CSSOMString ${hyphenToCamelCase(
          property
        )};`
    )
    .join("")}\n};`;
}

function tryGetCss(title: string) {
  const path = new URL(`${title}.json`, webrefCssDir);
  const data = tryRequire(fileURLToPath(path));
  if (!data) {
    return;
  }
  const properties = Object.keys(data.properties);
  if (!properties.length) {
    return;
  }
  return generateWebIdlFromCssProperties(properties);
}

export async function getIdl(specShortName: string): Promise<string> {
  const sources = [
    await tryReadFile(new URL(`${specShortName}.idl`, webrefIdlDir)),
    tryGetCss(specShortName),
  ].filter(t => t !== undefined);

  return sources.join("\n");
}

interface WebrefDefinition {
  type: string;
  for: string[];
  linkingText: string[];
}

interface WebrefResult {
  dfns: WebrefDefinition[];
}

interface WebrefCrawl {
  results: WebrefResult[];
}

export function getINameToEventMap(): Map<string, string[]> {
  const { results } = require(fileURLToPath(
    new URL("crawl.json", webrefDir)
  )) as WebrefCrawl;
  const events = results
    .map(r => r.dfns.filter(d => d.type === "event"))
    .filter(a => a.length)
    .flat();
  const map = new Map<string, string[]>();
  for (const event of events) {
    const targets: string[] = event.for!;
    for (const target of targets) {
      const recorded = map.get(target) ?? [];
      recorded.push(event.linkingText[0]);
      map.set(target, recorded);
    }
  }
  return map;
}
