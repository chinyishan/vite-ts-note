import { resolve } from 'path';
import { defineConfig } from 'vite';
// https://www.npmjs.com/package/vite-plugin-eslint
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  root: 'src',
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
      output: {
        dir: resolve(__dirname, 'dist'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    // 把 eslint show 到畫面上
    eslint(),
  ],
});
