// vite.config.js
const resolve = path.resolve;
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
const pathSrc = path.resolve(__dirname, "src");
import { genScssOptions } from "./config";
import * as path from "path";
export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    AutoImport({
      imports: ["vue", "vue-router", "vue/macros", ],
      resolvers: [VantResolver()],
      dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [VantResolver()],
      dts: path.resolve(pathSrc, "types", "components.d.ts"),
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: genScssOptions("vite"),
    },
  },
  resolve: {
    //导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },

    ],
  },
  build: {
    // sourcemap: true,
    minify: false,
  },
  server: {
    port: 3600,
    proxy: {
      "/api": {
        // target: 'http://localhost:1500',
        target: "https://vue-js.com/api/v1/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

// 这里的 options 可配置 vueTemplateOptions， jsx
// 详情查看 https://github.com/underfin/vite-plugin-vue2
