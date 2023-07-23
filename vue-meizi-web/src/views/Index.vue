<template>
  <div>
    <v-header></v-header>
    <loading :show="getLoadingShow"></loading>
    <router-view></router-view>
  </div>
</template>

<script setup>
import VMenu from "@/components/menu.vue";
import VHeader from "@/components/Vheader.vue";
import Loading from "@/components/loading/loading.vue";
import {mapGetters, mapState, useStore} from "vuex";
import {computed, reactive, toRefs} from "vue";
let state=reactive({firstShow: true, show: false })
let {firstShow,show}=toRefs(state)
let store=useStore()
let getLoadingShow=computed(()=>store.getters.getLoadingShow)
function isShow() {
  state.show = !state.show;
}
function hideDetail() {
  state.detailShow = false;
}
</script>

<style scoped></style>
