<template>
  <div class="welfare-wrapper" ref="wrapper">
    <div class="welfare-center">
      <figure
          v-show="dataList.length > 0"
          v-for="data in dataList"
          @click="selectDetails(data._id)"
      >
        <v-img :imgUrl="data.url"></v-img>
      </figure>
      <v-btn @click="loadMore">惦记我啊</v-btn>
    </div>
  </div>
</template>

<script setup>
import VImg from "@/components/lazyloadImg/lazyimg.vue";
import {useStore} from "vuex";
import {nextTick, onMounted, reactive, toRefs} from "vue";
import {useRouter} from "vue-router";
import {getWalfare} from "@/plugins/request/api";

let store = useStore()
let router = useRouter()
let state = reactive({
  dataList: [],
  scroll: "",
  busy: false,
  page: 1,
  pageCount: 50,
  detailsData: {},
  time: ""
})
let {dataList, scroll, busy, page, pageCount, detailsData, time} = toRefs(state)

function loadTop() {
  store.commit("updateLoading", true);


      getWalfare({pageNum:state.page,pageSize:state.pageCount}).then((res) => {
        console.log(res, "获取列表信息");
        state.dataList.push(...res.data.data);

        state.busy = false;
        // $nextTick() 在dom 重新渲染完后执行
        nextTick(() => {

          store.commit("updateLoading", false);
        });
      });
}

function loadMore() {
  state.page++;
  loadTop();

}

function selectDetails(id) {
  store.commit("updateLoading", true);
  router.push("/welfare-detail/" + id);
}

onMounted(() => {

  window.onscroll = function () {
    //变量scrollTop是滚动条滚动时，距离顶部的距离
    var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    //变量windowHeight是可视区的高度
    var clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
    //变量scrollHeight是滚动条的总高度
    var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
    //滚动条到底部的条件
    console.log(scrollTop, clientHeight, scrollHeight)
    if (scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
      console.log('到底了')
      loadMore()
    }
  };
   loadTop();
})
</script>

<style lang="scss">
.welfare-wrapper {
  display: flex;
  overflow: scroll;

  .welfare-center {
    width: 100%;

    max-width: 1100px;

    figure {
      width: 95%;
      background: #fefefe;
      border: 2px solid #fcfcfc;
      box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
      margin: 0 2px 15px;
      display: inline-block;
      z-index: 11;

      img {
        width: 100%;
        height: auto;
      }

      figcaption {
        font-size: 0.9rem;
        color: #444;
        line-height: 1.5;
      }
    }
  }
}
</style>
