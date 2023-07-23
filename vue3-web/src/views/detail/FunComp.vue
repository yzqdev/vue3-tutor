<template>
  <div>{{ json }}</div>
</template>

<script setup lang="ts">
const json = reactive({});

onBeforeMount(() => {
  showData();
  showFun();
  console.log(showFun);
  console.log(showData);
  console.log(typeof showFun);
  console.log(typeof showData);
  console.log(getType(showFun));
  console.log(getType(showData));
});
function showFun() {
  console.log(this);
  console.log("showFun");
}
let showData = () => {
  console.log(this);
  console.log("showdata");
};
const getType = (val) => {
  return Object.prototype.toString.call(val);
};
</script>
