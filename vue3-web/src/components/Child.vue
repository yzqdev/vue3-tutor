<template>
  <div>
    <p>我的长和宽分别是{{ width }}和{{ height }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

let emit = defineEmits(["show-title"]);
const props = defineProps({
  width: {
    type: String, //传入值限定类型
    // type 值可为String,Number,Boolean,Array,Object,Date,Function,Symbol
    // type 还可以是一个自定义的构造函数，并且通过 instanceof 来进行检查确认
    required: true, //是否必传
    default: "200", //默认值,对象或数组默认值必须从一个工厂函数获取如 default:()=>[]
  },
  height: {
    type: String,
    default: "300",
  },
});
onMounted(() => {
  emit("show-title", "mount title");
});

defineExpose({ props });
</script>

<style scoped></style>
