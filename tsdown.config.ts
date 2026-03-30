import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: "src/**/*.ts",
  dts: true,
  outDir: "dist/main",
  unbundle: true,
  deps: {
    skipNodeModulesBundle: true,
    neverBundle: [/.*/]
  }
});
