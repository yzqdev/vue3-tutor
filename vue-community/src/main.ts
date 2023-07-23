import {createApp} from "vue";
import App from "./App.vue";
import router from "@/router";




import {Dialog} from 'vant'
const app=createApp(App)
app.use(Dialog)
import axios from './plugins/request/http'


app.config.globalProperties.$axios=axios
/* eslint-disable no-new */
 app.use(router)
app.mount('#app')
