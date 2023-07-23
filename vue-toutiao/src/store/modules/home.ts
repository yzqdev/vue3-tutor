import { newsList } from "./classify";
import { Local } from "@/utils/storage";
 
import homeJson from "./home.json";
const home = {
  state: {
    newsList: (function () {
      let newList = JSON.parse(Local.get("newList")) || newsList.slice(0, 12);
      newList.forEach((news) => {
        if (news.list) delete news.title;
      });
      Local.set("newList", JSON.stringify(newList));
      return newList;
    })(),
    newsIndex: 0,
    newsPrevIndex: 0,
    newsLoading: false,
    end: false,
  },
  actions: {
    addHomeTag({ commit }, news) {
      commit("ADDHOMETAG", news);
    },
    delHomeTag({ commit }, news) {
      commit("DELHOMETAG", news);
    },
    getHomeList({ commit, state }, params) {
      let obj = state.newsList.find((v) => v.id == params.id);
      if (obj.list) return;
      state.newsLoading = true;

      commit("GETHOMELIST", homeJson.data.list);
      state.newsLoading = false;
      return homeJson.data.list;
      // axios
      //   .get("./home.json", params)
      //   .then(res => {
      //     console.log(res);
      //     state.newsLoading = false;
      //     if (res.data.list.length < 11) {
      //       state.end = true;
      //     }
      //     commit("GETHOMELIST", res.data.list);
      //     resolve(res.data.list);
      //   })
      //   .catch(err => {
      //     reject(err);
      //   });
    },
  },
  mutations: {
    ADDHOMETAG(state, news) {
      if (state.newsList.every((tag) => tag.title !== news.title)) {
        state.newsList.push(news);
        Local.set("newList", JSON.stringify(state.newsList));
      }
    },
    DELHOMETAG(state, news) {
      let index = state.newsList.findIndex((tag) => tag.title === news.title);
      state.newsList.splice(index, 1);
      Local.set("newList", JSON.stringify(state.newsList));
    },
    GETHOMELIST(state, list) {
      state.newsList[state.newsIndex].list = list;
      // Vue.prototype.$set(
      //   state.newsList,
      //   state.newsIndex,
      //   state.newsList[state.newsIndex]
      // );
    },
  },
};
export default home;
