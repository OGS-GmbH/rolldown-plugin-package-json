---
prev: false
next: false
---

# Getting started

## Installation

### Prerequisites

- Node.js version 18 or higher.
- A package manager: e.g. npm, pnpm, ...

::: code-group

```sh [npm]
$ npm add -D @ogs-gmbh/rolldown-plugin-package-json
```

```sh [pnpm]
$ pnpm add -D @ogs-gmbh/rolldown-plugin-package-json
```

```sh [yarn]
$ yarn add -D @ogs-gmbh/rolldown-plugin-package-json
```

```sh [bun]
$ bun add -D @ogs-gmbh/rolldown-plugin-package-json
```

:::

### Usage

`rolldown-plugin-package-json` can be integrated with either [`tsdown`](https://tsdown.dev/) or [`Rolldown`](https://rolldown.rs/). Here's an example showing the usage of this plugin with `tsdown`. You can get a deeper understanding about this plugin by taking a look into the [reference](/reference).

```ts [tsdown.config.ts]
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
