<template>
  <div
    class="list"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="100"
  >
    <a v-for="data in datas" :href="data.url" target="view_window">
      <v-card :data="data"></v-card>
    </a>
  </div>
</template>

<script setup>
import VCard from "../card.vue";
import {defineProps, nextTick, reactive, toRefs} from "vue";
import {useStore} from "vuex";

defineProps({type: {
    type: String
  }})
let state=reactive({
  datas: [],
  page: 1,
  busy: false
})
let {datas,page,busy}=toRefs(state)
let store=useStore()
function loadTop() {
  store.commit("updateLoading", true);
  this.$axios
      .get(`/data/category/GanHuo/type/${state.type}/page/${state.page}/count/10`)
      .then(res => {
        state.datas = state.datas.concat(res.data.data);
       state.busy = false;
         nextTick(() => {
          store.commit("updateLoading", false);
        });
      });
}
function loadMore() {
  state.busy = true;
   loadTop();
  state.page++;
}
</script>
<style >
.list {
  padding: 15px;
}
</style>
