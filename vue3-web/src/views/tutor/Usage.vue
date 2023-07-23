<template>
  <div class="usage">
    <h2>这里是走马灯</h2>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="(item, index) in pics" :key="index">
        <img class="carousel-img" :src="item.url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts">
import { luna, zhaojun, zhuangzhou } from "@/constants/imgs";
const pics =  ref([{ url: zhuangzhou }, { url: zhaojun }, { url: luna }]);
</script>
<style lang="scss" scoped>
:deep(.usage) {
  .carousel-img {
    width: 100%;
  }
  .el-carousel__container {
    height: 100vh;
  }
}
</style>
