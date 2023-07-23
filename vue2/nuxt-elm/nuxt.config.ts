import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import {defineNuxtConfig} from 'nuxt/config'

const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  // target:'static',
    ssr:false,


  app: {
    head: {
      title: "饿了么",
      htmlAttrs: {
        lang: 'zh-cn'
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: ''}
      ],
      link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
    }
  },
  // meta


  // css
  css: ["~/assets/styles/base.scss"],

  // build
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },
  modules: ['@vant/nuxt'],
  // build modules
  buildModules: [
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
  vueuse: {
    ssrHandlers: true,
  },

  // windicss

});
