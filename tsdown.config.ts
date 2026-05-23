import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/index.ts',
  format: 'esm',
  dts: true,
  outDir: 'dist',
  deps: { neverBundle: false },
  platform: 'browser',
  clean: true,
  sourcemap: true,
  treeshake: true,
});
