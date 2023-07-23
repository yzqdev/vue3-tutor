<template>
  <div id="app" data-app="true">

    <router-view></router-view>
  </div>
</template>

<script setup>
 import {loadFromlLocal} from "@/common/js/store";
 import {useRouter} from "vue-router";
let router=useRouter()


 if (!loadFromlLocal("gank", "wecome", false)) {
   router.push("/wecome");
 }
</script>

<style>



  #app .show {
    transform: translateX(250px);
  }

  #app .page-cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 7;
  }

  #app .first {
    position: fixed;
    top: 0px;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: red;
  }
</style>
