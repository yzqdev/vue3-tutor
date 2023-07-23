import { createRouter, createWebHashHistory } from "vue-router";


import Home from "@/views/Home.vue";
import content from "@/views/Content.vue";
import user from "@/views/User.vue";
import login from "@/views/Login.vue";
import publish from "@/views/Publish.vue";
import personal from "@/views/Personal.vue";
import message from "@/views/Message.vue";
import test from "@/views/test.vue";
import Error404 from "@/views/error/Error404.vue";


export default createRouter({
  history:createWebHashHistory(),
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     console.log(savedPosition);
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
  routes: [
    {
     path: '/:pathMatch(.*)*',
      name: "404",
      meta: { title: "404页面" },
      component: Error404
    },
    {
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/content",
      name: "content",
      component: content
    },
    {
      path: "/index",
      name: "index",
      component: content
    },
    {
      path: "/user",
      name: "user",
      component: user
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/publish",
      name: "publish",
      component: publish
    },
    {
      path: "/personal",
      name: "personal",
      component: personal
    },
    {
      path: "/message",
      name: "message",
      component: message
    }
  ]
});
