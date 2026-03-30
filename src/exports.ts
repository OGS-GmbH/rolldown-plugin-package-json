import path from "node:path";
import type { OutputBundle, PluginContext } from "rolldown";
import { PackageJson } from "type-fest";

const fileExtensionToField: Record<string, keyof PackageJson.ExportConditions> = {
  ".js": "default",
  ".mjs": "import",
  ".cjs": "require",
  ".ts": "default",
  ".mts": "import",
  ".cts": "require"
};

const declarationMarker = ".d";
const relativeMarker = "./";

function getExportsFromBundle (
  this: PluginContext,
  bundle: OutputBundle
): PackageJson.Exports {
  const files: PackageJson.Exports = {};

  for (const [name, content] of Object.entries(bundle)) {
    const relativeName = `${relativeMarker}${name}`;

    if (content.type === "asset") {
      files[relativeName] = relativeName;

      continue;
    }

    const parsedPath = path.parse(name);

    // If we found a declaration file, we need to handle it differently
    if (parsedPath.name.endsWith(declarationMarker)) {
      const relativeVirtualPath = `${relativeMarker}${parsedPath.name.slice(0, -2)}`;
      const currentFile = files[relativeVirtualPath];

      files[relativeVirtualPath] = {
        ...(typeof currentFile === "object" ? currentFile : {}),
        types: relativeName
      }

      continue;
    }

    const relativeVirtualPath = `${relativeMarker}${parsedPath.name}`;
    const currentFile = files[relativeVirtualPath];
    const field = fileExtensionToField[parsedPath.ext];

    if (field === undefined) {
      this.warn(`Bundle file '${name}' doesn't match any export rule and is ignored.`);
      continue;
    }

    files[relativeVirtualPath] = {
      ...(typeof currentFile === "object" ? currentFile : {}),
      [field]: relativeName
    }
  }

  return files;
}

export {
  getExportsFromBundle
}
