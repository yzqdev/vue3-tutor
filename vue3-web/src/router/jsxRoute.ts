import Index from "@/layout/Index.vue";
import Vuejsx from "@/views/jsx/Vuejsx";
import VueTricks from "@/views/jsx/VueTricks";

export const jsxRoute = {
  path: "/jsx",
  component: Index,
  name: "jsx",
  meta: {
    title: "tsx用法",
    icon: "el-iconfont-ios-copy",
  },
  children: [
    {
      path: "vue-jsx",
      name: "Vuejsx",
      meta: {
        title: "jsx",
      },
      component: Vuejsx,
    },
    {
      path: "first",
      name: "Vuejsx2",
      meta: {
        title: "jsx2",
      },
      component: VueTricks,
    },
  ],
};
