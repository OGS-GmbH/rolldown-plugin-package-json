import { PackageJson } from "type-fest";

/**
 * A type that represents an object with an `enabled` property, which can be used to conditionally enable or disable certain features or options.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type WithEnabled<T> = T & { enabled: boolean };

/**
 * Options for the `clean` feature of the plugin, which allows you to specify which properties should be removed from the generated `package.json` file.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type CleanOption = {
  /**
   * An array of strings representing the properties to be removed from the generated `package.json` file. If not provided, a default set of properties will be removed.
   * @default ["scripts", "packageManager", "publishConfig"]
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  properties: string[];
};

/**
 * Options for the `exports` feature of the plugin, which allows you to specify a custom `exports` field for the generated `package.json` file.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type ExportsOption = {
  /**
   * An object representing the `exports` field to be included in the generated `package.json` file. This will override any automatically generated `exports` field based on the bundle.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  override: PackageJson.Exports;
};

/**
 * Options for the plugin, which can be used to configure its behavior. Each option can be either a `boolean` to enable/disable the feature or an `Object` with additional configuration.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Types
 */
type Options = Partial<{
  /**
   * Options for the `exports` feature of the plugin. See {@link ExportsOption} for more details.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  exports: boolean | WithEnabled<ExportsOption>;
  /**
   * Options for the `clean` feature of the plugin. See {@link CleanOption} for more details.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  clean: boolean | WithEnabled<CleanOption>;
}>;

export type { WithEnabled, CleanOption, ExportsOption, Options };
