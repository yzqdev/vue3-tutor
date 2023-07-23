import Index from "@/layout/Index.vue";
import Dogs from "@/views/vuexView/Dogs.vue";
import { pages } from "@/views/vuexView/genRoute";

export const piniaRoute = {
  path: "/pinia",
  component: Index,
  name: "pinia",
  meta: {
    title: "pinia用法",
    icon: "el-iconfont-codeworking",
  },
  children: [
    {
      path: "dogs",
      name: "Dogs",
      meta: {
        title: "小狗",
      },
      component: Dogs,
    },
    ...pages,
  ],
};
