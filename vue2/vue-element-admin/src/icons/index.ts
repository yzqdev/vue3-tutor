import Vue from 'vue'
import SvgIconLegacy from '@/components/SvgIcon/index.vue'
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
// svg component

// register globally
Vue.component('svg-icon', SvgIconLegacy)
const routeFiles = import.meta.glob('./svg/*.svg')
let allRoutes=[]
for (const path in routeFiles) {
  allRoutes.push(routeFiles[path] )
}

