> _We're OGS, check out our work on [github.com/ogs-gmbh](https://github.com/ogs-gmbh)_

# package.json Plugin for Rolldown

_A powerful and flexible plugin for Rolldown that enhances package.json handling._

![Preview](./docs/preview.avif)

<a href="./LICENSE" target="_blank"><img alt="license badge" src="https://img.shields.io/github/license/OGS-GmbH/rolldown-plugin-package-json?color=0f434e&logo=hackthebox&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://github.com/OGS-GmbH/rolldown-plugin-package-json/actions/workflows/main-trusted-deploy.yml" target="_blank"><img alt="workflow badge" src="https://img.shields.io/github/actions/workflow/status/OGS-GmbH/rolldown-plugin-package-json/main-trusted-deploy.yml?color=0f434e&logo=rocket&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://www.npmjs.com/package/@ogs-gmbh/rolldown-plugin-package-json" target="_blank"><img alt="npm badge" src="https://img.shields.io/npm/v/%40ogs-gmbh%2Frolldown-plugin-package-json?color=0f434e&logo=npm&logoColor=000000&labelColor=ffffff" /></a>

- **Package Transformation**\
  Automated copying and modification of `package.json`, allowing selective removal of fields to produce a clean, production-ready manifest.

- **Dynamic Exports Generation**\
  Automatically generates `exports` maps based on build outputs, ensuring correct module resolution for ESM and CommonJS environments.

- **Dependency Optimization**\
  Integrates with the build pipeline to control dependency handling and reduce unnecessary bundle inclusion.

- **Build-Time Integration**\
  Seamlessly hooks into the Rolldown lifecycle to perform transformations efficiently during the build process.

## Getting Started

> [!IMPORTANT]
> We're offering an extensive API-Reference covered with in-depth usage examples of this project.

To get a starting point, simply refer to our documentation at [ogs-gmbh.github.io/rolldown-plugin-package-json](https://ogs-gmbh.github.io/rolldown-plugin-package-json).

### Prerequisites

- Node.js version 18 or higher
- A package manager: e.g. npm, pnpm, ...

### Installation

Using npm:

```sh
$ npm add -D @ogs-gmbh/rolldown-plugin-package-json
```

<details>
  <summary>Using a different package manager?</summary>
  <br/>
  
  Using yarn:
  ```sh
  $ pnpm add -D @ogs-gmbh/rolldown-plugin-package-json
  ```
  
  Using pnpm:
  ```sh
  $ pnpm add -D @ogs-gmbh/rolldown-plugin-package-json
  ```
  
  Using bun:
  ```sh
  $ bun add -D @ogs-gmbh/rolldown-plugin-package-json
  ```

</details>

### Usage

`rolldown-plugin-package-json` can be integrated with either [`tsdown`](https://tsdown.dev/) or [`Rolldown`](https://rolldown.rs/). Here's an example showing the usage of this plugin with `tsdown`. You can get a deeper understanding about this plugin by taking a look into the [reference](https://ogs-gmbh.github.io/rolldown-plugin-package-json/reference).

```ts
import { defineConfig } from "tsdown";
import { packageJsonPlugin } from "@ogs-gmbh/rolldown-plugin-package-json";

export default defineConfig({
  entry: "src/**/*.ts",
  dts: true,
  outDir: "dist/main",
  unbundle: true,
  plugins: [
    packageJsonPlugin({
      clean: true,
      exports: {
        enabled: true,
        override: { ".": "./public-api.mjs", "./feature-a": "feature-a.mjs" }
      }
    })
  ]
});
```

## License

The MIT License (MIT) - Please have a look at the [LICENSE file](./LICENSE) for more details.

## Contributing

Contributions are always welcome and greatly appreciated. Whether you want to report a bug, suggest a new feature, or improve the documentation, your input helps make the project better for everyone.

Feel free to submit a pull request, issue or feature request.

### Issues and Feature Requests

Reporting an issue or creating a feature request is made by creating a new issue on this repository.

You can create a [new issue or feature request here](../../issues/new/choose).

### Pull Requests

GitHub offers a solid guideline for contributing to open source projects through pull requests, covering key practices. These best practices provide a reliable starting point for making effective contributions.

You can find the [guidelines here](https://docs.github.com/get-started/exploring-projects-on-github/contributing-to-a-project).

### Code Of Conduct

We are committed to keeping a welcoming, inclusive, and respectful community for everyone. To help us achieve this, we kindly ask that you adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Disclaimer

All trademarks and registered trademarks mentioned are property of their respective owners and are used for identification purposes only. Use of these names does not imply endorsement or affiliation.

This project is a trademark of OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH. The License does not grant rights to use the trademark without permission.

---

<a href="https://www.ogs.de/en/">
  <picture>
    <source
      srcset="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/light.svg"
      media="(prefers-color-scheme: dark)"
    />
    <img height="64" alt="OGS Logo" src="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/dark.svg"
  </picture>
</a>

Gesellschaft für Datenverarbeitung und Systemberatung mbH

[Imprint](https://www.ogs.de/en/imprint/) | [Contact](https://www.ogs.de/en/contact/) | [Careers](https://www.ogs.de/en/about-ogs/#Careers)
