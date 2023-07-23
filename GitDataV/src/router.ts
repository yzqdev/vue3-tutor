 
import  { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/app/Home.vue";
import Data from "@/views/data/Data.vue";

 

export default createRouter({
history:createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Home,
    },
    {
      path: "/data",
      name: "data-home",
      component: Home,
    },
    {
      path: "/data/:user",
      name: "data",
      component: Data,
    },
  ],
});
