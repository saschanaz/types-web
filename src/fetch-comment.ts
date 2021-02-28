import * as fs from "fs";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import innerText from "styleless-innertext";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

await fetchIDLs(process.argv.slice(2));

interface IDLSource {
  url: string;
  title: string;
  shortName: string;
  deprecated?: boolean;
}

async function fetchIDLs(filter: string[]) {
  const idlSources = (require("../inputfiles/idlSources.json") as IDLSource[]).filter(
    source => !filter.length || filter.includes(source.shortName)
  );
  await Promise.all(
    idlSources.map(async source => {
      const { comments } = await fetchIDL(source);
      if (comments) {
        fs.writeFileSync(
          new URL(
            `../inputfiles/idl/${source.shortName}.commentmap.json`,
            import.meta.url
          ),
          comments + "\n"
        );
      }
    })
  );
}

async function fetchIDL(source: IDLSource) {
  const response = await fetch(source.url);
  const dom = JSDOM.fragment(await response.text());
  const comments = processComments(dom);
  return { comments };
}

function processComments(dom: DocumentFragment) {
  const elements = [...dom.querySelectorAll("dl.domintro")];
  if (!elements.length) {
    return undefined;
  }

  const result: Record<string, string> = {};
  for (const element of elements) {
    for (const { dt, dd } of generateDescriptionPairs(element)) {
      elements.push(...importNestedList(dd));
      const comment = dd
        .map(desc => {
          desc.normalize();
          convertChildPre(desc);
          return innerText(desc).replace(/’/g, "'");
        })
        .filter(text => text)
        .join("\n\n");
      for (const key of dt.map(term => getKey(term.innerHTML))) {
        if (!key) {
          continue;
        }
        const retargeted = retargetCommentKey(key, dom);
        // prefer the first description
        if (!result[retargeted]) {
          result[retargeted] = comment;
        }
      }
    }
  }
  if (!Object.keys(result).length) {
    return undefined;
  }
  return JSON.stringify(result, undefined, 4);
}

function convertChildPre(e: Element) {
  for (const pre of e.querySelectorAll("pre")) {
    const code = pre.querySelector(":scope > code") as HTMLElement;
    if (!code) {
      continue;
    }
    const text = innerText(code, {
      getComputedStyle() {
        return { whiteSpace: "pre" } as CSSStyleDeclaration;
      },
    });
    pre.textContent = "```\n" + text + "\n```";
  }
}

function getKey(s: string) {
  const keyRegexp = /#dom-([a-zA-Z0-9-_]+)/i;
  const match = s.match(keyRegexp);
  if (match) {
    return match[1];
  }
  return undefined;
}

function* generateDescriptionPairs(domIntro: Element) {
  const dt: HTMLElement[] = [];
  const dd: HTMLElement[] = [];
  let element = domIntro.firstElementChild;
  while (element) {
    switch (element.localName) {
      case "dt":
        if (dd.length) {
          yield { dt: [...dt], dd: [...dd] };
          dt.length = dd.length = 0;
        }
        dt.push(element as HTMLElement);
        break;
      case "dd":
        dd.push(element as HTMLElement);
        break;
      default:
        throw new Error(`Unexpected element ${element.localName}`);
    }
    element = element.nextElementSibling;
  }
  if (dd.length) {
    yield { dt: [...dt], dd: [...dd] };
  }
}

function* importNestedList(elements: Element[]) {
  for (const element of elements) {
    for (const dl of element.getElementsByTagName("dl")) {
      dl.remove();
      yield dl;
    }
  }
}

/**
 * Specifications tends to keep existing keys even after a member relocation
 * so that external links can be stable and won't broken.
 */
function retargetCommentKey(key: string, dom: DocumentFragment) {
  const [parent, member] = key.split(/-/g);
  if (!member) {
    return parent;
  }
  const dfn = dom.getElementById(`dom-${key}`);
  if (!dfn || !dfn.dataset.dfnFor) {
    // The optional third word is for overloads and can be safely ignored.
    return `${parent}-${member}`;
  }
  return `${dfn.dataset.dfnFor.toLowerCase()}-${member}`;
}
