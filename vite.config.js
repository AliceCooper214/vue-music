import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import apiPlugin from './plugins/registerRouter'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), apiPlugin(), Inspect()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
})
