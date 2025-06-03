import fs from "fs/promises";
const basePath = new URL(
  "../../inputfiles/mdn/files/en-us/web/api/",
  import.meta.url,
);

function extractSummary(markdown: string): string {
  // Remove frontmatter (--- at the beginning)
  markdown = markdown.replace(/^---[\s\S]+?---\n/, "");

  // Normalize line breaks by collapsing consecutive newlines into a single space
  const normalizedText = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter(
      (line) =>
        line &&
        !line.startsWith("#") &&
        !line.startsWith(">") &&
        !line.startsWith("{{"),
    )
    .join(" ")
    .replace(
      /\{\{\s*(Glossary|HTMLElement|SVGAttr|SVGElement|cssxref|jsxref|HTTPHeader)\s*\(\s*["']((?:\\.|[^"\\])*?)["'].*?\)\s*\}\}/gi,
      "$2",
    ) // Extract first argument from multiple templates, handling escaped quotes & spaces
    .replace(
      /\{\{\s*domxref\s*\(\s*["']((?:\\.|[^"\\])*?)["'][^}]*\)\s*\}\}/gi,
      "$1",
    ) // Extract first argument from domxref, handling spaces
    .replace(
      /\{\{\s*(?:event|jsxref|cssref|specname)\s*\|\s*([^}]+)\s*\}\}/gi,
      "$1",
    ) // Handle event, jsxref, cssref, etc.
    .replace(/\{\{\s*([^}]+)\s*\}\}/g, (_, match) => `[MISSING: ${match}]`) // Catch any remaining unhandled templates
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Keep link text but remove URLs
    .replace(/\s+/g, " ") // Normalize spaces
    .replace(/\n\s*/g, "\n") // Ensure line breaks are preserved
    .replace(/"/g, "'")
    .trim();

  // Extract the first sentence (ending in . ! or ?)
  const sentenceMatch = normalizedText.match(/(.*?[.!?])(?=\s|$)/);
  if (sentenceMatch) {
    return sentenceMatch[0]; // Return the first full sentence
  }

  const firstWord = normalizedText.split(" ")[0];
  return firstWord || "";
}

async function walkDirectory(dir: URL): Promise<URL[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const parentDirName = dir.pathname.split("/").at(-1);
  let results: URL[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === parentDirName) continue;
      const subDir = new URL(`${entry.name}/`, dir);
      results = results.concat(await walkDirectory(subDir));
    } else if (entry.isFile() && entry.name === "index.md") {
      results.push(new URL(entry.name, dir));
    }
  }

  return results;
}

const paths: Record<string, string[]> = {
  "web-api-instance-property": ["properties", "property"],
  "web-api-static-property": ["properties", "property"],
  "web-api-instance-method": ["methods", "method"],
  "web-api-static-method": ["methods", "method"],
  "web-api-interface": [],
  "webgl-extension": [],
  "webgl-extension-method": ["methods", "method"],
};

function generatePath(content: string): string[] | undefined {
  const pageType = content.match(/\npage-type: (.+)\n/)!;
  const type = pageType[1];
  return paths[type];
}

function extractSlug(content: string): string[] {
  const match = content.match(/\nslug: (.+)\n/)!;
  const url = match[1].split(":").pop()!;
  const normalized = url.endsWith("_static") ? url.slice(0, -7) : url;
  const parts = normalized.split("/").slice(2); // skip `Web/API/...`
  return parts; // Keep only top-level and member name
}

function ensureLeaf(obj: Record<string, any>, keys: string[]) {
  let leaf = obj;
  for (const key of keys) {
    leaf[key] ??= {};
    leaf = leaf[key];
  }
  return leaf;
}

function insertComment(
  root: Record<string, any>,
  slug: string[],
  summary: string,
  path: string[],
) {
  if (!paths.length) {
    const iface = ensureLeaf(root, slug);
    iface.comment = summary;
  } else {
    const [ifaceName, memberName] = slug;
    const target = ensureLeaf(root, [ifaceName, ...path, memberName]);
    target.comment = summary;
  }
}

export async function generateDescriptions(): Promise<{
  interfaces: { interface: Record<string, any> };
}> {
  const stats = await fs.stat(basePath);
  if (!stats.isDirectory()) {
    throw new Error(
      "MDN submodule does not exist; try running `git submodule update --init`",
    );
  }

  const results: Record<string, any> = {};
  const indexPaths = await walkDirectory(basePath);

  await Promise.all(
    indexPaths.map(async (fileURL) => {
      const content = await fs.readFile(fileURL, "utf-8");
      const slug = extractSlug(content);
      const generatedPath = generatePath(content);
      if (!slug || slug.length === 0 || !generatedPath) return;

      const summary = extractSummary(content);
      insertComment(results, slug, summary, generatedPath);
    }),
  );
  return { interfaces: { interface: results } };
}
