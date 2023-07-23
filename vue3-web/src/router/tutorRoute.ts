import Index from "@/layout/Index.vue";
import NeteaseMusic from "@/views/tutor/NeteaseMusic.vue";
import ShowWeather from "@/views/tutor/ShowWeather.vue";
import Usage from "@/views/tutor/Usage.vue";
import TutorIndex from "@/views/tutor/TutorIndex.vue";
import Pictures from "@/views/tutor/Pictures.vue";

export const tutorRoute = {
  path: "/tutor",
  component: Index,
  name: "tutor",
  meta: {
    title: "教程",
    icon: "el-iconfont-geara",
  },
  children: [
    {
      path: "vmodel",
      name: "Vmodel",
      meta: {
        title: "v-model组件",
      },
      component: () => import("@/views/tutor/Vmodel.vue"),
    },
    {
      path: "html-comp",
      name: "HtmlComp",
      meta: {
        title: "原生组件",
      },
      component: () => import("@/views/tutor/HtmlComp.vue"),
    },
    {
      path: "netease",
      name: "netease",
      meta: {
        title: "网易云音乐",
      },
      component: NeteaseMusic,
    },
    {
      path: "show-weather",
      name: "ShowWeather",
      meta: {
        title: "天气",
      },
      component: ShowWeather,
    },
    {
      path: "usage",
      name: "Usage",
      meta: {
        title: "用法",
      },
      component: Usage,
    },
    {
      path: "tutor",
      name: "Tutor",
      meta: {
        title: "tutor",
      },
      component: TutorIndex,
    },
    {
      path: "pictures",
      name: "Pictures",
      meta: {
        title: "图片",
      },
      component: Pictures,
    },
  ],
};
