import { parse } from "kdljs";
import { Enum } from "./types";
import { readdir, readFile } from "fs/promises";
import { merge } from "./helpers.js";

/**
 * Converts patch files in KDL to match the [types](types.d.ts).
 */
export function parseKDL(kdlText: string) {
  const { output, errors } = parse(kdlText);

  if (errors.length) {
    throw new Error("KDL parse errors", { cause: errors });
  }

  const nodes = output!;
  const enums: Record<string, Enum> = {};

  for (const node of nodes) {
    if (node.name === "enum") {
      // Handle enum
      const enumName = node.values[0];
      if (typeof enumName !== "string") {
        throw new Error("Missing enum name");
      }
      const values: string[] = [];

      for (const child of node.children ?? []) {
        if (child.name !== "value" || typeof child.values[0] !== "string") {
          throw new Error(
            "enum values should be in the form of `value {name}`",
          );
        }
        values.push(child.values[0]);
      }

      enums[enumName] = { name:enumName, value: values };
    }
  }

  return { enums: { enum: enums } };
}

/**
 * Recursively collect all KDL file URLs in a directory.
 */
async function getAllKDLFileURLs(folder: URL): Promise<URL[]> {
  const entries = await readdir(folder, { withFileTypes: true });
  return entries.map((entry) => new URL(entry.name, folder));
}

/**
 * Read and parse a single KDL file.
 */
export async function readPatch(fileUrl: URL): Promise<any> {
  const text = await readFile(fileUrl, "utf8");
  return parseKDL(text);
}

/**
 * Read, parse, and merge all KDL files under the input folder.
 */
export default async function readPatches(): Promise<any> {
  const inputFolder = new URL("../../inputfiles/patches/", import.meta.url);
  const fileUrls = await getAllKDLFileURLs(inputFolder);

  const parsedContents = await Promise.all(fileUrls.map(readPatch));

  return parsedContents.reduce((acc, current) => merge(acc, current), {});
}
