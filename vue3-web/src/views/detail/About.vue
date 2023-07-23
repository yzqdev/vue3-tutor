<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img class="img" :src="linzi" />
    <Swiper msg="这是swiper组建"></Swiper>
  </div>
</template>
<script setup lang="ts">
import Swiper from "@/components/Swiper.vue";
import { yinlin } from "@/constants/imgs";
const  linzi =  ref(yinlin);
</script>
<style lang="scss" scoped>
.about {
  .img {
    width: 50%;
  }
}
</style>
