import fs from "fs/promises";
import { basename } from "path";
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
    return sentenceMatch[0];
  }

  const firstWord = normalizedText.split(" ")[0];
  return firstWord || "";
}

async function walkDirectory(dir: URL): Promise<URL[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  let results: URL[] = [];

  for (const entry of entries) {
    const fullPath = new URL(`${entry.name}/`, dir);
    const fullFile = new URL(entry.name, dir);

    if (entry.isDirectory()) {
      results = results.concat(await walkDirectory(fullPath));
    } else if (entry.isFile() && entry.name === "index.md") {
      results.push(fullFile);
    }
  }

  return results;
}

function generateTitle(content: string, file: URL) {
  const match = content.match(/title:\s*["']?([^"'\n]+)["']?/);
  if (match) {
    return match[1].replace(/ extension$/, "").split(":")[0];
  }
  return basename(file.pathname) || "";
}

export async function generateDescriptions(): Promise<Record<string, string>> {
  const stats = await fs.stat(basePath);
  if (!stats.isDirectory()) {
    throw new Error(
      "MDN submodule does not exist; try running `git submodule update --init`",
    );
  }

  const results: Record<string, string> = {};
  try {
    const indexPaths = await walkDirectory(basePath);

    for (const fileURL of indexPaths) {
      try {
        const content = await fs.readFile(fileURL, "utf-8");

        const title = generateTitle(content, fileURL);

        const relPath = fileURL.pathname
          .replace(basePath.pathname, "")
          .replace(/\/index\.md$/, "");
        const parentKey = relPath.split("/").filter(Boolean).join(".");
        const fullKey = parentKey.includes(".")
          ? parentKey.includes(title.toLowerCase())
            ? parentKey
            : `${parentKey}.${title}`
          : title;

        const summary = extractSummary(content);
        results[fullKey] = summary;
      } catch (error) {
        console.warn(`Skipping ${fileURL.href}: ${error}`);
      }
    }
  } catch (error) {
    console.error("Error generating API descriptions:", error);
  }

  return results;
}
