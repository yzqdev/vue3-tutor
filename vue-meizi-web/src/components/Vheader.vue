<template>
  <div>
    <div class="page-cover" v-show="getMenuShow" @click="isShow"></div>
    <header class="header" :class="{ show: getMenuShow }" @click="isShow">
      <header class="bar bar-nav">
        <div class="pull-left">
          <span class="iconfont icon-fenlei"></span>
        </div>
        <article class="title">{{ getHeaderTitle }}</article>
        <div class="pull-right">
          <span class="iconfont icon-sousuo_sousuo"></span>
        </div>
      </header>
    </header>
    <v-menu :show="getMenuShow"></v-menu>
  </div>
</template>

<script setup>
import VMenu from "@/components/menu.vue";
import {computed, ref} from "vue";
import { useStore} from "vuex";
let store=useStore()
let show=ref(false)
let detailShow=ref(true)
let getHeaderTitle=computed(() => {
  return store.getters.getHeaderTitle
})
let getMenuShow=computed(()=>store.getters.getMenuShow)

function isShow() {
  store.commit("updateMenuShow");
}
function hideDetail() {
   detailShow.value = false;
}
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  min-height: 50px;
  font-size: 1.8px;
  line-height: 50px;
  background-color: #03a9f4;
  color: #fff;
  text-align: center;
  display: table;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  .show {
    transform: translateX(200px);
  }
  .pull-right {
    padding: 0 10px;
    font-size: 16px;
    font-weight: 400;
    z-index: 2;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    float: right !important;
    .iconfont {
      font-size: 18px;
    }
  }
  .pull-left {
    padding: 0 10px;
    font-size: 16px;
    font-weight: 400;
    z-index: 2;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    float: left !important;
    .iconfont {
      font-size: 18px;
    }
  }
  .title {
    min-height: 50px;
    position: absolute;
    margin: 0;
    text-align: center;
    white-space: nowrap;
    right: 100px;
    left: 100px;
    font-size: 16px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 2;
    font-weight: 500;
  }
}
</style>
