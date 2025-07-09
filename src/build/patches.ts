import { parse } from "kdljs";
import { Enum } from "./types";
import { readdir, readFile } from "fs/promises";
import { merge } from "./helpers.js";

interface EnumDescriptor {
  [x: string]: Enum;
}

/**
 * Converts patch files in KDL to match the [types](types.d.ts).
 */
export function parseKDL(kdlText: string) {
  const { output, errors } = parse(kdlText);

  if (errors.length) {
    throw new Error("KDL parse errors", { cause: errors });
  }

  const nodes = output!;
  const enums: EnumDescriptor = {};

  for (const node of nodes) {
    if (node.name === "enum") {
      // Handle enum
      const enumName = node.values[0];
      if (typeof enumName !== "string") {
        throw new Error("Missing enum name");
      }
      const name = enumName;
      const values: string[] = [];

      for (const child of node.children ?? []) {
        if (child.name !== "value" || typeof child.values[0] !== "string") {
          throw new Error(
            "enum values should be in the form of `value {name}`",
          );
        }
        values.push(child.values[0]);
      }

      enums[enumName] = { name, value: values };
    }
  }

  return { enums: { enum: enums } };
}

/**
 * Recursively collect all KDL file URLs in a directory.
 */
async function getAllKDLFileURLs(folder: URL, file: string): Promise<URL[]> {
  const entries = await readdir(folder, { withFileTypes: true });

  const results: URL[] = [];

  for (const entry of entries) {
    const child = new URL(entry.name + "/", folder);

    if (entry.isDirectory()) {
      results.push(...(await getAllKDLFileURLs(child, file)));
    } else if (entry.isFile() && entry.name == file) {
      results.push(new URL(entry.name, folder));
    }
  }

  return results;
}

/**
 * Read and parse a single KDL file.
 */
export async function readInputKDL(fileUrl: URL): Promise<any> {
  const text = await readFile(fileUrl, "utf8");
  return parseKDL(text);
}

/**
 * Read, parse, and merge all KDL files under the input folder.
 */
export default async function readKDL(file: string): Promise<any> {
  const inputFolder = new URL("../../inputfiles/patches/", import.meta.url);
  const fileUrls = await getAllKDLFileURLs(inputFolder, file);

  const parsedContents = await Promise.all(fileUrls.map(readInputKDL));

  return parsedContents.reduce((acc, current) => merge(acc, current), {});
}
