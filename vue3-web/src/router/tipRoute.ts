import Index from "@/layout/Index.vue";

export const tipRoute = {
  path: "/tips",
  component: Index,
  name: "tips",
  meta: {
    title: "一些技巧",
    icon: "el-iconfont-androidlist",
  },
  children: [
    {
      path: "table-combine",
      name: "TableCombine",
      meta: {
        title: "table合并",
      },
      component: () => import("@/views/tips/TableCombine.vue"),
    },
    {
      path: "table-demo",
      name: "TableDemo",
      meta: {
        title: "table模板",
      },
      component: () => import("@/views/tips/TableDemo.vue"),
    },
    {
      path: "table-tmp",
      name: "TableTmp",
      meta: {
        title: "table教程",
      },
      component: () => import("@/views/tips/TableTmp.vue"),
    },
    {
      path: "color-reference",
      name: "ColorReference",
      meta: {
        title: "颜色",
      },
      component: () => import("@/views/tips/ColorReference.vue"),
    },
    {
      path: "vue-use",
      name: "VueUserDemo",
      meta: {
        title: "vue-use用法",
      },
      component: () => import("@/views/tips/VueUseDemo.vue"),
    },
    {
      path: "myicon",
      name: "MyIcon",
      meta: {
        title: "我的图标",
      },
      component: () => import("@/views/tips/MyIcon.vue"),
    },
  ],
};
