import { defineNuxtPlugin } from "#app";
import Antd from "ant-design-vue/lib";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd);
});
