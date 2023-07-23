const resolve = path.resolve;
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import * as path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathSrc = path.resolve(__dirname, "src");
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
    vueJsx(),

    AutoImport({
      imports: ["vue", "vue/macros", "vue-router", "pinia", "@vueuse/core"],
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        ElementPlusResolver(), // 自动注册图标组件
      ],
      dts: path.resolve(pathSrc, "types", "components.d.ts"),
    }),
  ],

  resolve: {
    //导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  build: {
    target: "esnext",
  },
  server: {
    proxy: {
      "/musicApi": {
        target: "https://music.163.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/musicApi/, ""),
      },
      "/bidianer": {
        target: "https://www.bidianer.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bidianer/, ""),
      },
      "/mihoyo": {
        target: "https://bbs-api.mihoyo.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mihoyo/, ""),
      },
      "/map": {
        target: "https://api.map.baidu.com/geocoding",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/map/, ""),
      },
      // "/api": {
      //   target: "http://localhost:5400",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace("", ""),
      // },
      "/bing": {
        target: "https://api.codelife.cc/bing/list?page=4",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bing/, ""),
      },
    },
    port: 4700,
  },
});
