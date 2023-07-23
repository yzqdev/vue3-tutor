import axios from "@/utils/fetch";
import toutiao from "./toutiao.json";
const headline = {
  state: {
    list: [],
    loading: false,
    loadingMore: false,
    end: false,
  },
  actions: {
    getHeadlineList({ commit, state }, params = {}) {
      if (state.loadingMore) return;
      state.loading = true;
      commit("GETHEADLINELIST", toutiao.data.list);
      state.loading=false
      return toutiao.data.list;
      // return new Promise((resolve, reject) => {
      //   axios
      //     .get("headline/list", params)
      //     .then(res => {
      //       console.log(res);
      //       state.loading = false;
      //       if (res.data.list.length < 5) {
      //         state.loadingMore = true;
      //         state.end = true;
      //       }
      //       commit("GETHEADLINELIST", res.data.list);
      //       resolve(res.data.list);
      //     })
      //     .catch(err => {
      //       reject(err);
      //     });
      // });
    },
    addHeadline({ commit, state }, params) {
      state.loading = true;
      return new Promise((resolve, reject) => {
        axios
          .post("headline/add", params)
          .then((res) => {
            console.log(res);
            state.loading = false;
            commit("ADDHEADLINE", res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  mutations: {
    GETHEADLINELIST(state, list) {
      state.list = state.list.concat(list);
    },
    ADDHEADLINE(state, info) {
      state.list.unshift(info);
    },
  },
};
export default headline;
