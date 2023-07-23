 
import app from "./modules/app";
import search from "./modules/search";
import user from "./modules/user";
import home from "./modules/home";
import headline from "./modules/headline";
import video from "./modules/video";
import record from "./modules/record";
import getters from "./getters";
import { createStore } from "vuex";

 

const store = createStore({
  modules: {
    app,
    search,
    user,
    home,
    video,
    headline,
    record
  },
  getters
});

export default store;
