import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import settings from './modules/settings'
import tagsView from "@/store/modules/tagsView";
import user from '@/store/modules/user'

Vue.use(Vuex)


const store = new Vuex.Store({
  modules:{
    app, user,
    errorLog, permission, settings, tagsView,
  },
  getters
})

export default store
