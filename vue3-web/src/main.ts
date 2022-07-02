import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./tail.scss";
import pinia from "./store";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import currency from "./utils/currency";
import axios from "./plugins/request/http";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
const app = createApp(App);
app.use(VueViewer);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$axios = axios;
app.config.globalProperties.currency = currency;

app.use(pinia);
app.use(router);
app.mount("#app");
