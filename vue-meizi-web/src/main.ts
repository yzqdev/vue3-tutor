import { createApp } from "vue";
import store from "@/store/store";
import App from "./App.vue";
import axios from "./plugins/request/http";
import { router } from "./router"; // 引入路由配置
// 引入图片懒加载模块
import "./common/css/index.scss"; // 引入公共样式
import { createVuetify } from "vuetify";
import "vuetify/dist/vuetify.min.css";

const app = createApp(App);
// 注册组件
app.config.globalProperties.$axios = axios;
const vuetify = createVuetify();
app.use(vuetify);
app.use(store);
app.use(router);

/**
 * 创建和挂载根实例。
 * 记得要通过 router 配置参数注入路由，
 * 从而让整个应用都有路由功能
 */
app.mount("#app");
