/**
 * Created by yi on 2017-01-06.
 */
import { createStore } from "vuex";

const NAME_TITILE = ["welfare", "day", "android", "ios", "web"];
// 告诉 vue “使用” store

// 创建一个对象来保存应用启动时的初始状态
const state = () => {
  return {
    headerTitle: "福利",
    menus: NAME_TITILE,
    menuShow: false,
    loadingShow: false,
    news: 5,
  };
};
const getters = {
  getHeaderTitle(state) {
    return state.headerTitle;
  },
  getLoadingShow(state) {
    return state.loadingShow;
  },
  getMenuShow(state) {
    return state.menuShow;
  },
};
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO: 放置我们的状态变更函数
  updateTitle(state, title) {
    console.log(title);
    state.headerTitle = title;
  },
  updateMenuShow(state) {
    state.menuShow = !state.menuShow;
  },
  updateLoading(state, data) {
    state.loadingShow = data;
  },
  updateNews(state) {
    state.news = 0;
  },
};

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default createStore({
  state: state,
  mutations,
  getters: getters,
});
