import fs from "fs";
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
    return sentenceMatch[0]; // Return the first full sentence
  }

  return normalizedText.split(" ")[0] || ""; // Fallback: first word if no sentence found
}

function getDirectories(dirPath: URL): URL[] {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => new URL(entry.name + "/", dirPath));
  } catch (error) {
    console.error("Error reading directories:", error);
    return [];
  }
}

function getIndexMdContents(folders: URL[]): { [key: string]: string } {
  const results: { [key: string]: string } = {};

  for (const folder of folders) {
    const indexPath = new URL("index.md", folder);

    try {
      const content = fs.readFileSync(indexPath, "utf-8");

      // Improved title extraction
      const titleMatch = content.match(/title:\s*["']?([^"'\n]+)["']?/);
      const filename = basename(folder.toString());
      const title = titleMatch
        ? titleMatch[1].replace(/ extension$/, "")
        : filename || "";

      const summary = extractSummary(content);
      results[title] = summary;
    } catch (error) {
      console.warn(`Skipping ${indexPath}: ${error}`);
    }
  }

  return results;
}

export function generateDescriptions(): Record<string, string> {
  const stats = fs.statSync(basePath);
  if (!stats.isDirectory()) {
    throw new Error(
      "MDN submodule does not exist; try running `git submodule update --init`",
    );
  }

  try {
    const folders = getDirectories(basePath);
    if (folders.length > 0) {
      return getIndexMdContents(folders);
    }
  } catch (error) {
    console.error("Error generating API descriptions:", error);
  }

  return {};
}
