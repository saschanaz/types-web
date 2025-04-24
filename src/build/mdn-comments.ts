import fs from "fs/promises";
import { basename, dirname, relative, resolve, sep } from "path";
import { fileURLToPath } from "url";

const basePath = new URL(
  "../../inputfiles/mdn/files/en-us/web/api/",
  import.meta.url,
);
const baseDir = fileURLToPath(basePath);

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
  return sentenceMatch ? sentenceMatch[0] : normalizedText.split(" ")[0] || "";
}

async function walkDirectory(dirPath: string): Promise<string[]> {
  let results: string[] = [];

  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = resolve(dirPath, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(await walkDirectory(fullPath));
    } else if (entry.isFile() && entry.name === "index.md") {
      results.push(fullPath);
    }
  }

  return results;
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
    const indexPaths = await walkDirectory(baseDir);

    for (const filePath of indexPaths) {
      try {
        const content = await fs.readFile(filePath, "utf-8");

        const titleMatch = content.match(/title:\s*["']?([^"'\n]+)["']?/);
        const filename = basename(filePath.toString());
        const title = titleMatch
          ? titleMatch[1].replace(/ extension$/, "").split(":")[0]
          : filename || "";
        // Get relative path to the file, excluding index.md
        const relPath = relative(baseDir, dirname(filePath));
        const parentKey = relPath.split(sep).filter(Boolean).join(".");
        const fullKey = parentKey.includes(".")
          ? parentKey.includes(title.toLowerCase())
            ? parentKey
            : `${parentKey}.${title}`
          : title;

        const summary = extractSummary(content);
        results[fullKey] = summary;
      } catch (error) {
        console.warn(`Skipping ${filePath}: ${error}`);
      }
    }
  } catch (error) {
    console.error("Error generating API descriptions:", error);
  }

  return results;
}
