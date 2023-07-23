<template>
  <el-main class="h-full bg-[#f5f6f7]" style="--el-main-padding:0">
    <div class="wrap" :class="[themeConfig.contentPadding ? 'bg-white p-6' : '']">
      <router-view />
    </div>
  </el-main>
</template>
<script setup lang="ts">
import { useThemeStore } from "@/store/themeConfig";

const themeStore = useThemeStore();
const themeConfig =  computed(() => {
  return themeStore.$state;
});
</script>
<style lang="scss" scoped>

  .wrap {
    min-height: calc(100% - 4rem);
  }

</style>
