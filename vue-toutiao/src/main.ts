
import App from "./App.vue";
import router from "./router/permission.js";
import store from "./store";
import {createApp} from 'vue';
const app=createApp(App)
/*样式*/
import "./styles/index.css";
import "./styles/index.scss";

/*工具类*/
import "./utils/iconfont.js";
import "./utils/rem.js";

/*指令*/
import "./directive";

import { Cookie } from "@/utils/storage";
app.config.globalProperties.Cookie = Cookie;

// 返回
app.config.globalProperties.back = route => {
  route.animate = 2;
  history.go(-1);
};

// 跳转文章页
app.config.globalProperties.skip = (route, id) => {
  route.push("/article/" + id);
};

// 全局组件
import customComponents from "./custom-components.js";
// Vue.use(customComponents)

// swiper


import install from "./custom-components";
import { scrollDirective } from "./directive/scroll";
install(app)
 scrollDirective(app)
app.use(store)
app.use(router)
app .mount('#app')

