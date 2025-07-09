import { parse } from "kdljs";
import { Enum, Event, Method, Property } from "../types";
import { readdir, readFile } from "fs/promises";
import { merge } from "../helpers.js";

interface MethodDescriptor {
  [x: string]: Omit<Method, "signature">;
}

interface EnumDescriptor {
  [x: string]: Enum;
}
interface PropertyDescriptor {
  [x: string]: Omit<Property, "type">;
}

interface InterfaceMixin {
  [x: string]: {
    events?: { event: Event[] };
    methods?: { method: MethodDescriptor };
  };
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
  const interfaces: InterfaceMixin = {};

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
    } else {
      // Handle interface-mixin
      const name = node.values?.[0]?.toString() ?? "";
      const iface: {
        events?: { event: Event[] };
        methods?: { method: MethodDescriptor };
        properties?: { property: PropertyDescriptor };
      } = {};

      const events: Event[] = [];
      const methods: MethodDescriptor = {};
      const properties: PropertyDescriptor = {};

      for (const child of node.children ?? []) {
        const name = child.values?.[0]?.toString() ?? "";
        if (child.name === "event") {
          events.push({
            name,
            type: child.properties?.type?.toString() ?? "",
          });
        } else if (child.name === "method") {
          methods[name] = {
            name,
            overrideSignatures: [
              child.properties?.overrideSignatures?.toString() ?? "",
            ],
          };
        } else if (child.name === "property") {
          properties[name] = {
            name,
            exposed: child.properties?.exposed?.toString(),
          };
        }
      }

      if (events.length) iface.events = { event: events };
      if (Object.keys(methods).length) iface.methods = { method: methods };
      if (Object.keys(properties).length)
        iface.properties = { property: properties };

      interfaces[name] = iface;
    }
  }

  return { mixins: { mixin: interfaces }, enums: { enum: enums } };
}

/**
 * Recursively collect all KDL file URLs in a directory.
 */
async function getAllKDLFileURLs(folder: URL, file: string): Promise<URL[]> {
  const entries = await readdir(folder, { withFileTypes: true });

  const results: URL[] = [];

  for (const entry of entries) {
    const child = new URL(entry.name + "/", folder);

    if (
      entry.isDirectory() &&
      !child.pathname.includes("mdn") &&
      !child.pathname.includes("idl")
    ) {
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
export default async function readKDL(
  inputFolder: URL,
  file: string,
): Promise<any> {
  const fileUrls = await getAllKDLFileURLs(inputFolder, file);

  const parsedContents = await Promise.all(fileUrls.map(readInputKDL));

  return parsedContents.reduce((acc, current) => merge(acc, current), {});
}
