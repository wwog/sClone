import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  treeshake: true,
  skipNodeModulesBundle: false,
  bundle: true,
  noExternal: ['core-js-pure/actual/structured-clone'],
  minify: true,
})
