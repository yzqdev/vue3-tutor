import Index from "@/layout/Index.vue";

export const libRoute = {
  path: "/libs",
  component: Index,
  name: "libs",
  meta: {
    title: "好用的库",
  },
  children: [
    {
      path: "md",
      name: "Markdown",
      meta: {
        title: "markdown",
      },
      component: () => import("@/views/libs/Edit.vue"),
    },
    {
      path: "vueuse",
      name: "Vueuse",
      meta: {
        title: "vueuse",
      },
      component: () => import("@/views/libs/VueusePage.vue"),
    },
  ],
};
