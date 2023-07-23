import Index from "@/layout/Index.vue";

export const apiTestRoute = {
  name: "ApiTest",
  path: "/api-test",
  meta: {
    icon: "el-iconfont-eye",
    title: "api测试",
  },
  component: Index,
  children: [
    {
      path: "form-page",
      name: "FormPage",
      meta: {
        title: "表单",
        icon: "el-iconfont-pound",
      },
      component: () => import("@/views/ApiTest/FormPage.vue"),
    },
    {
      path: "pets",
      name: "Pets",
      meta: {
        title: "宠物表",
        icon: "el-iconfont-pound",
      },
      component: () => import("@/views/ApiTest/PetList.vue"),
    },
    {
      path: "question",
      name: "Question",
      meta: {
        title: "vue用法",
      },
      component: () => import("@/views/ApiTest/Question.vue"),
    },
    {
      path: "test-api",
      name: "TestApi",
      meta: {
        title: "测试api",
      },
      component: () => import("@/views/ApiTest/TestApi.vue"),
    },
  ],
};
