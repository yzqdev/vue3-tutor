import axios from "axios";
import qs from "qs";

// 环境的切换

axios.defaults.baseURL = "/api";

axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
axios.defaults.timeout = 15000;
// 请求操作
axios.interceptors.request.use(
  (config) => {
    // 这里的config包含每次请求的内容
    // 判断token
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
