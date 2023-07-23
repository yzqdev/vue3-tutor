export let networkErrorMsg = "网络连接失败";
export const iconCss = `https://at.alicdn.com/t/font_2410206_mfj6e1vbwo.css`;
export let defaultMenu = [
  {
    index: "/home",
    name: "Homepage",
    title: "首页",
    children: [
      { index: "/api", name: "HomeMain", title: "工作台" },
      { index: "/form-page", name: "FormPage", title: "表单" },
      { index: "/location", name: "Location", title: "地理位置" },
      { index: "/tinymce", name: "Tinymce", title: "tinymce" },
      { index: "/password", name: "Password", title: "加密字符串" },
      { index: "/number", name: "NumberPage", title: "number操作" },
    ],
  },
  {
    index: "/test-vue",
    name: "routername",
    title: "vue用法",
    icon: "aa",
    children: [
      { index: "/show-weather", name: "ShowWeather", title: "天气" },
      { index: "/usage", name: "Usage", title: "用法" },
      { index: "/title", name: "Markdown", title: "markdown" },
      { index: "/pictures", name: "Pictures", title: "图片" },
      { index: "/test-api", name: "TestApi", title: "api测试" },
    ],
  },
  {
    index: "/vuex-demo",
    name: "vuex",
    title: "vuex",
    children: [{ index: "/vuex/dog", name: "Dogs", title: "dog" }],
  },

  {
    index: "/tutor",
    name: "Tutor",
    title: "教程",
    children: [
      { index: "/vueuse", name: "Demo1", title: "demo1" },
      {
        index: "/color-reference",
        name: "ColorReference",
        title: "ColorReference",
      },
      { index: "/tutor", name: "Tutor", title: "tutor" },
    ],
  },
  {
    index: "/vue",
    name: "Vue",
    title: "tsx用法",
    children: [
      { index: "/vuejsx", name: "Vuejsx", title: "jsx" },
      { index: "/vuejsx2", name: "Vuejsx2", title: "jsx2" },
    ],
  },
  {
    index: "/tips",
    name: "Tips",
    title: "一些技巧",
    children: [
      { index: "/ele-table", name: "TableCombine", title: "table合并" },
      { index: "/table-demo", name: "TableDmo", title: "table模板" },
    ],
  },
  {
    index: "/detail",
    name: "aboutPage",
    title: "详情",
    children: [{ index: "/about", name: "About", title: "关于" }],
  },
];
