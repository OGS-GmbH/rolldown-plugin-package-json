import type { NormalizedOutputOptions, OutputBundle, Plugin, PluginContext } from "rolldown";
import { PackageJson } from "type-fest";
import { getExportsFromBundle } from "./exports";
import { merge } from "es-toolkit";
import path from "node:path";
import fs from "node:fs";
import { Options } from "./types";
import { isEnabled } from "./utils";
import { defaultCleanProperties } from "./options";

const fileName: string = "package.json";

/**
 * A Rollup plugin that generates a `package.json` file based on your root `package.json` and the generated bundle.
 *
 * @param options - An optional object to configure {@link Options} for the plugin's behavior.
 * @returns A Rollup plugin that generates a `package.json` file.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Plugin
 */
function packageJsonPlugin (
  options?: Options
): Plugin {
  const metaPath = path.join(
    process.cwd(),
    fileName
  );

  const metaContent = fs.readFileSync(metaPath, {
    encoding: "utf8",
    flag: "r"
  });

  const meta = JSON.parse(metaContent) as PackageJson;

  if (isEnabled(options?.clean)) {
    const properties = typeof options?.clean === "boolean"
      ? defaultCleanProperties
      : options?.clean?.properties
        ? options.clean.properties
        : defaultCleanProperties;

    properties.map((property) => {
      delete meta[property];
    });
  }

  if (
    isEnabled(options?.exports)
    && typeof options?.exports !== "boolean"
    && options?.exports?.override
  )
    meta.exports = options.exports.override;

  return {
    name: "package-json-plugin",
    generateBundle: async function (
      this: PluginContext,
      _outputOptions: NormalizedOutputOptions,
      bundle: OutputBundle
    ): Promise<void> {
      if (
        isEnabled(options?.exports)
        && (
          typeof options?.exports === "boolean"
          || options?.exports?.override === undefined
        )
      ) {
        const generatedExports = getExportsFromBundle.call(this, bundle);

        if (meta.exports) {
          // @ts-ignore
          meta.exports = merge(meta.exports, generatedExports);
        } else
          meta.exports = generatedExports;
      }

      const finalMetaContent = JSON.stringify(meta, null, 2);

      this.emitFile({
        type: "asset",
        fileName,
        originalFileName: metaPath,
        source: finalMetaContent
      });
    },
    buildEnd: function (
      this: PluginContext
    ) {
      this.info("'package.json' successfully created!");
    }
  }
}

export {
  packageJsonPlugin
}
