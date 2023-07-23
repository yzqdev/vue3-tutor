// require.ensure 是 Webpack 的特殊语法，用来设置 组件到底路径
/**
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */

import welfare from "@/components/welfare.vue";
import welfareDetail from "@/components/welfareDetail.vue";
import hottest from "@/components/hottest.vue";
import wecome from "@/components/wecome/wecome.vue";
import web from "@/components/lists/web.vue";
import android from "@/components/lists/android.vue";
import ios from "@/components/lists/ios.vue";
import Index from "@/views/Index.vue";
import Today from "@/components/Today.vue";
import Apis from "@/views/Apis.vue";
import { createRouter, createWebHistory } from "vue-router";

let routes = [
  {
    path: "/api",
    name: "api",
    component: Apis,
  },
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "/welfare",
        name: "welfare",
        component: welfare,
      },
      {
        path: "/welfare-detail/:id",

        name: "welfareDetail",
        component: welfareDetail,
      },
      {
        path: "/",

        name: "home",
        component: welfare,
      },
      {
        path: "/day",
        name: "day",
        component: hottest,
        meta: { requiresAuth: true },
      },
      {
        path: "/today",
        name: "today",
        component: Today,
      },
      {
        path: "/ios",
        name: "ios",
        component: ios,
        meta: { requiresAuth: true },
      },
      {
        path: "/android",
        name: "android",
        component: android,
      },
      {
        path: "/web",
        name: "web",
        component: web,
      },
    ],
  },
  {
    path: "/wecome",
    name: "wecome",
    component: wecome,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
