import videoJson from "./video.json";
const video = {
  state: {
    list: [],
    loading: false,
    loadingMore: false,
    end: false,
  },
  actions: {
    getVideoList({ commit, state }, params = {}) {
      if (state.loadingMore) return;
      state.loading = true;
      commit("GETVIDEOLIST",videoJson.data.list);
      state.loading=false
      return (videoJson.data.list);
      // return new Promise((resolve, reject) => {
      //   axios
      //     .get("video/list", params)
      //     .then(res => {
      //       console.log(res);
      //       state.loading = false;
      //       if (res.data.list.length < 6) {
      //         state.loadingMore = true;
      //         state.end = true;
      //       }
      //       commit("GETVIDEOLIST", res.data.list);
      //       resolve(res.data.list);
      //     })
      //     .catch(err => {
      //       reject(err);
      //     });
      // });
    },
  },
  mutations: {
    GETVIDEOLIST(state, list) {
      state.list = state.list.concat(list);
    },
  },
};
export default video;
