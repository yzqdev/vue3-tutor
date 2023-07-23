import vue from "@vitejs/plugin-vue2";
import vueJsx from "@vitejs/plugin-vue2-jsx";
import { defineConfig } from "vite";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import * as path from "node:path";
const pathSrc = path.resolve(__dirname, "src");
const resolve = path.resolve;
export default defineConfig({
  plugins: [
    vue({}),
    vueJsx(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      // Specify symbolId format
      symbolId: 'icon-[name]',

      /**
       * custom insert position
       * @default: body-last
       */
        inject : 'body-last'  ,

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__',
    }),
    // viteMockServe({
    //   ignore: /^\_/,
    //   mockPath: "mock",
    //   localEnabled: true,
    //   prodEnabled: true,
    //   injectCode: `
    //    import { setupProdMockServer } from '../mock/_createProductionServer'
    //
    //       setupProdMockServer()
    //       `,
    // }),
  ],

  resolve: {
    //导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
