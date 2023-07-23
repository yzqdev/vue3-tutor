<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String,
});
</script>

<style scoped></style>
