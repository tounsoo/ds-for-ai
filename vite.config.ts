import { defineConfig } from 'vite';
import VitePluginCEM from 'vite-plugin-cem';

export default defineConfig({
  plugins: [
    VitePluginCEM({
      files: ['./src/components/**/*.ts'],
      lit: true,
    }),
  ],
});
