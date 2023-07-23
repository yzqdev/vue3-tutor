// tutor start
import Usage from "@/views/tutor/Usage.vue";
import NeteaseMusic from "@/views/tutor/NeteaseMusic.vue";
import Pictures from "@/views/tutor/Pictures.vue";
import TestApi from "@/views/tutor/TestApi.vue";
import TutorIndex from "@/views/tutor/TutorIndex.vue";

import ShowWeather from "@/views/tutor/ShowWeather.vue";
//tutor end
import Dogs from "@/views/vuexView/Dogs.vue";
import Index from "@/layout/Index.vue";
//composable start
import Demo1 from "@/views/tips/demo1.vue";
import ColorReference from "@/views/tips/ColorReference.vue";
//composable end
import LocationPage from "@/views/home/Location.vue";

import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const About = () => import("@/views/detail/About.vue");
import FunComp from '@/views/detail/FunComp.vue'
import { pages } from "@/views/vuexView/genRoute";
//jsx start
import Vuejsx from "@/views/jsx/Vuejsx";
import VueTricks from "@/views/jsx/VueTricks";
import Page from "@/views/home/Page.vue";
import { homeRoute } from "@/router/homeRoute";
import { apiTestRoute } from "@/router/apiTestRoute";
import { tutorRoute } from "@/router/tutorRoute";
import { jsxRoute } from "@/router/jsxRoute";
import { tipRoute } from "@/router/tipRoute";
import { piniaRoute } from "@/router/piniaRoute";
import { libRoute } from "@/router/libRoute";
//jsx end
// 定义动态路由
// 定义动态路由
export const constantRoutes = [
  homeRoute,
  apiTestRoute,
  tutorRoute,
  libRoute,
  jsxRoute,
  tipRoute,
  piniaRoute,
  {
    path: "/detail",
    meta: { title: "详情", icon: "el-iconfont-iosbook" },
    name: "detail",
    component: Index,
    children: [
      {
        path: "about",
        name: "About",
        meta: {
          title: "关于",
        },
        component: About,
      },
      {
        path: "fun-comp",
        name: "FunComp",
        meta: {
          title: "函数",
        },
        component: FunComp,
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      redirect: "/home/main",
    },
    {
      path: "/home",
      redirect: "/home/main",
    },
    ...constantRoutes,
  ],
});
