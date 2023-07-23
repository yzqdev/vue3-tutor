 

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  //   buildModules: ["@wangeditor/editor-for-vue"],
  //   modules: [["@nuxtjs/axios", { proxyHeaders: false }]],
  plugins: [
    //   { src: "@/plugins/wang-editor", ssr: false },
  ],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      script: [
        // {
        //   src: "https://cdn.jsdelivr.net/npm/@wangeditor/editor@latest/dist/index.min.js",
        // },
        // {
        //   src: "",
        // },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "测试描述" },
        { name: "keywords", content: "关键词1,关键词2" },
      ],
      title: "MoneyBoxs-社区",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/static/favicon.ico" },
        // {
        //   rel: "stylesheet",
        //   herf: "https://cdn.jsdelivr.net/npm/@wangeditor/editor@latest/dist/css/style.css",
        // },
      ],
    },
  },
});
