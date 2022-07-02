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
<script>
import { luna, zhaojun, zhuangzhou } from "@/constants/imgs";

export default {
  data() {
    return {
      pics: [{ url: zhuangzhou }, { url: zhaojun }, { url: luna }],
    };
  },
  props: [],
};
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
