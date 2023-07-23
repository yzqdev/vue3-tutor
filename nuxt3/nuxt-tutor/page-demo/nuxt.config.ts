import {defineNuxtConfig} from "nuxt/config";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // target:'static',
  // ssr:false,
  // meta
  ssr: false,
  $meta: {
    title: "ElementPlus + Nuxt3",
    meta: [
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {
        hid: "description",
        name: "description",
        content: "ElementPlus + Nuxt3",
      },
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
  },

  // css
  // css: ["~/assets/scss/index.scss"],

  // build
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },

  // build modules
  modules: [
    // "@pinia/nuxt",
    // "@nuxtjs/svg",
    // "@vueuse/nuxt",
    // "nuxt-windicss",
    // "unplugin-icons/nuxt",
  ],

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      Components({
        dts: true,
        resolvers: [IconsResolver({})],
      }),
    ],
  },

  // vueuse


  // windicss

});
