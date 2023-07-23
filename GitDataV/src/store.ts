 
import  { createStore } from "vuex";
import { getLanguage } from "@/lang";

 

export default createStore({
  state: {
    language: getLanguage()
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      localStorage.setItem("language", language);
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    }
  }
});
