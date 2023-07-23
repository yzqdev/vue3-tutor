<template>
  <div class="container">
    <div class="images" v-viewer>
      <img class="img-item" v-for="src in images" :key="src" :src="src" />
    </div>
  </div>
</template>

<script setup>
import { luna, zhaojun, zhuangzhou } from "@/constants/imgs";
const images =  ref([zhuangzhou, zhaojun, luna]);
</script>

<style lang="scss" scoped>
.container {
  .images {
    .img-item {
      width: 30%;
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
</style>
