import Home from "@/views/Home.vue";
import Usage from "@/views/Usage.vue";
import NeteaseMusic from "@/views/NeteaseMusic.vue";
import Pictures from "@/components/Pictures.vue";
import TestVue from "@/views/Question.vue";
import  TestApi from '@/views/TestApi.vue'
import Dogs from "@/views/vuexView/Dogs.vue";
import Sidebar from "@/views/Sidebar.vue";
import TutorIndex from "@/views/TutorIndex.vue";
import VueTricks from "@/views/VueTricks.vue";
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
const About = () => import("@/views/About.vue");
const Edit = () => import("@/views/Edit.vue");
import ShowWeather from "@/views/ShowWeather.vue";
import {pages} from "@/views/vuexView/genRoute";

// 定义动态路由
// 定义动态路由

export default createRouter({
  history: createWebHashHistory(),

  routes: [
      ...pages,
    {
      path: "/netease",
      name: "netease",
      component: NeteaseMusic,
    },
    {
      path: "/",
      redirect: "/home",
    },

    {
      path: "/",
      component: Sidebar,
      children: [
        {
          path: "/home",
          name: "Home",
          component: Home,
        },
        {
          path: "/vue",
          name: "Vue",
          component: VueTricks,
        },
        {
          path: "/about",
          name: "About",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: About,
        },
        {
          path: "/md",
          name: "Markdown",

          component: Edit,
        },
        {
          path: "/show-weather",
          name: "ShowWeather",

          component: ShowWeather,
        },
        {
          path: "/usage",
          name: "Usage",
          component: Usage,
        },
        {
          path: "/tutor",
          name: "Tutor",
          component: TutorIndex,
        },
        {
          path: "/pictures",
          name: "Pictures",
          component: Pictures,
        },
        {
          path: "/test-vue",
          name: "TestVue",
          component: TestVue,
        },{
          path: "/test-api",
          name: "TestApi",
          component: TestApi,
        },

        {
          path: "/vuex-demo/dogs",
          name: "Dogs",
          component: Dogs,
        },
      ],
    },
  ],
});
