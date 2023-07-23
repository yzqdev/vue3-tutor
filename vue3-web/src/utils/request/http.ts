import axios, { AxiosInstance } from "axios";
import qs from "qs";
import { ElMessage } from "element-plus";
interface MyAxios extends AxiosInstance {
  postFormdata: Function;
  postQuery: Function;
}

const instance: MyAxios = axios.create({
  baseURL: "http://localhost:5400/api",
  timeout: 15000,
});

// 请求操作
instance.interceptors.request.use(
  (config) => {
    // 这里的config包含每次请求的内容
    // 判断token
    // if (store.state.token.length || localStorage.getItem("token")) {
    //   if (!store.state.token.length) {
    //     config.headers.Authorization = localStorage.getItem("token");
    //   } else {
    //     config.headers.Authorization = `${store.state.token}`;
    //   }
    // }
    config.headers.Authorization = "0";
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//响应的拦截
instance.interceptors.response.use(
  (response) => {
    console.log("userSuccess");
    if (response.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (err) => {
    // if (error.response.status) {
    ElMessage.error(err);
    console.warn(err && err.response);
    if (err && err.response) {
      console.warn(err.response);
      let errorItem = err.response.status;
      let info = new Map([
        [400, "请求错误(400)"],
        [403, "登录过期，请重新登录"],
        [404, `请求出错(404)`],
        [408, "请求超时(408)"],
        [500, "服务器错误(500)"],
        [502, "网络错误(502)"],
        [503, "服务不可用(503)"],
        [504, "网络超时(504)"],
        [505, "HTTP版本不受支持(505)"],
        ["default", `连接出错(${err.response.status})!`],
      ]);
      // errorMessage(info.get(errorItem));

      //
      // switch (err.response.status) {
      if (errorItem === 401) {
        // location.assign('/dist/#/login')
        let msg = err.response.data.messageList[0].value || "请重新登录";
        // errorMessage(msg);
      }

      return Promise.reject(err.response);
    } else {
      ElMessage.error(err.message);
      return Promise.reject(err.response);
    }
  }
);
instance.postFormdata = (url, params) => {
  return instance.post(url, params, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
instance.postQuery = (url, params) => {
  return instance.post(url, qs.stringify(params));
};

export default instance;
