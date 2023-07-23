<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>hello 我的名字是{{ nickname }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String,
  nickname: {
    type: String,
    default: "aa",
  },
  propE: {
    type: Object,
    // 对象或数组默认值必须从一个工厂函数获取
    default: function () {
      return { message: "hello" };
    },
  },
});
</script>

<style scoped></style>
