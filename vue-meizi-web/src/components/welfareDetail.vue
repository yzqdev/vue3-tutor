<template>
  <div style="height: 100%">
    <section>
      <article>
        <span>{{ detailsData.title }}</span>
      </article>
      <article>{{ detailsData.desc }}</article>
    </section>
  </div>
</template>

<script setup>
import {nextTick, onBeforeMount, onMounted, reactive, toRefs} from "vue";
import {useStore} from "vuex";
import {getWalfareDetail} from "@/plugins/request/api";

let state = reactive({
  leftData: [],
  rightData: [],
  busy: false,
  page: 1,
  showLazy: false,
  pageCount: 10,
  detailsData: {},
  time: ""
})
let {leftData, rightData, busy, page, showLazy, pageCount, detailsData, time} = toRefs(state)
let store = useStore()

function loadTop() {
  store.commit("updateLoading",true)


      getWalfareDetail({pageNum:page,pageSize:pageCount})
      .then((res) => {
        console.log(res);
        let left = res.data.data.filter((data, i) => {
          return (i + 1) % 2 === 1;
        });
        let right = res.data.data.filter((data, i) => {
          return (i + 1) % 2 !== 1;
        });
        state.leftData = state.leftData.concat(left);
        state.rightData = state.rightData.concat(right);
        state.busy = false;
        // $nextTick() 在dom 重新渲染完后执行
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

function selectDetails(id) {
  store.commit("updateLoading", true);

  this.$axios.get(`/post/${id}`).then((res) => {
    let data = res.data.data;
    console.log(data, "详细");
    state.detailsData = data;
    this.$refs.details.show();
    nextTick(() => {
      store.commit("updateLoading", false);
    });
  });
}

onBeforeMount(() => {
  let id = this.$route.params.id;
  console.log(id, "来看看扩扩");
  this.$axios.get(`/post/${id}`).then((res) => {
    state.detailsData = res.data.data;
    nextTick(() => {
      store.commit("updateLoading", false);
    });
  });
})
onMounted(() => {
  loadTop()
})
</script>

<style lang="scss">

</style>
