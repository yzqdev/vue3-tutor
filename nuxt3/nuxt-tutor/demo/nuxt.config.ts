import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({



  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {

  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-tutor',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-plus/dist/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  modules: [


  ],
  http: {
    // proxyHeaders: false
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-plus/]
  }
})
