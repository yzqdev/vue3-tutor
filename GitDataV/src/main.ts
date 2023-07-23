import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import Vcomp from "./components/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/iconfont/iconfont.css";
import "./assets/css/global.scss";
import i18n from "./lang";
import http from '@/plugins/http'

const app = createApp(App)

app.config.globalProperties.$axios = http
app.use(Vcomp);
app.use(i18n);

app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')


