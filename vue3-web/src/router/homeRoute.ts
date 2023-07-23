import Index from "@/layout/Index.vue";
import Page from "@/views/home/Page.vue";
import LocationPage from "@/views/home/Location.vue";
import SamplePage from '@/views/home/SamplePage.vue'
export const homeRoute = {
  path: "/home",
  meta: {
    title: "首页",
    icon: "iconfont el-iconfont-outlet",
  },
  name: "home",
  component: Index,
  children: [
    {
      path: "page",
      name: "Page",
      meta: {
        title: "首页啊",
        icon: "el-iconfont-pound",
      },
      component: Page,
    },{
      path: "sample",
      name: "Sample",
      meta: {
        title: "例子",
        icon: "el-iconfont-pound",
      },
      component: SamplePage,
    },
    {
      path: "main",
      name: "HomeMain",
      meta: {
        title: "工作台",
        icon: "el-iconfont-pound",
      },
      component: () => import("@/views/home/Main.vue"),
    },
    {
      path: "chart-page",
      name: "ChartPage",
      meta: {
        title: "echarts",
        icon: "el-iconfont-pound",
      },
      component: () => import("@/views/home/ChartPage.vue"),
    },
    {
      path: "wang",
      name: "Wang",
      meta: {
        title: "wang",
      },
      component: () => import("@/views/home/WangPage.vue"),
    },
    {
      path: "tinymce",
      name: "Tinymce",
      meta: {
        title: "tinymce",
      },
      component: () => import("@/views/home/TinymcePage.vue"),
    },
    {
      path: "password",
      name: "Password",
      meta: {
        title: "加密字符串",
      },
      component: () => import("@/views/home/Password.vue"),
    },
    {
      path: "number-page",
      name: "NumberPage",
      meta: {
        title: "number操作",
      },
      component: () => import("@/views/home/NumberPage.vue"),
    },
    {
      path: "location",
      name: "Location",
      meta: {
        title: "地理位置",
      },
      component: LocationPage,
    },
  ],
};
