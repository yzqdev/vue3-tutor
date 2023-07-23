// vite.config.js

import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import   createVuePlugin   from "@vitejs/plugin-vue";
import * as path from "path";
const resolve = path.resolve;
const pathSrc = path.resolve(__dirname, "src");
export default defineConfig({
  plugins: [
    createVuePlugin(  { reactivityTransform:true }),
    AutoImport({
      imports: ["vue", "vue-router", "vue/macros", "pinia", "@vueuse/core"],
    
      dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),
    }),
  ],

  resolve: {
    //导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      { find: "@views", replacement: resolve(__dirname, "./src/views") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      { find: "@utils", replacement: path.resolve(__dirname, "./src/utils") },
    ],
  },
  build: {
    // sourcemap: true,
    minify: false,
  },
  server: {
    port: 4600,
    // proxy:{
    //   '/api': {
    //     target: 'https://api.github.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    // }
  },
});

 