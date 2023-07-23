<template>
  <div class="wecome">
    <div class="loader-inner pacman">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script setup>
import { savaToLocal } from "@/common/js/store";
import {onMounted} from "vue";
import {useRouter} from "vue-router";
let router=useRouter()
onMounted(() => {
  setTimeout(() => {
     router.push({
      name: "welfare"
    });
    savaToLocal("gank", "wecome", true);
  }, 2000);
})

</script>
<style lang="scss">
@import './wecome';
</style>
