import { fileURLToPath } from "url";
import { tryReadFile } from "./utils/fs.js";
import { createTryRequire } from "./utils/require.js";

const webrefDir = new URL("../node_modules/webref/ed/idl/", import.meta.url);
const webrefCssDir = new URL("../node_modules/webref/ed/css/", import.meta.url);

const tryRequire = createTryRequire(import.meta.url);

function hyphenToCamelCase(name: string) {
  const camel = name
    .replace(/^-(\w)/, (_, c) => c)
    .replace(/-(\w)/g, (_, c) => c.toUpperCase());
  return camel === "float" ? "_float" : camel;
}

function generateWebIdlFromCssProperties(properties: string[]) {
  return `partial interface CSSStyleDeclaration {${
    properties.map(property => `\n  [CEReactions] attribute [LegacyNullToEmptyString] CSSOMString ${
      hyphenToCamelCase(property)
    };`).join("")
  }\n};`;
}

function tryGetCss(title: string) {
  let path = new URL(`${title}.json`, webrefCssDir);
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

export async function getIdl(specShortName: string) {
  const sources = [
    await tryReadFile(new URL(`${specShortName}.idl`, webrefDir)),
    tryGetCss(specShortName)
  ].filter(t => t !== undefined);

  return sources.join("\n");
}
