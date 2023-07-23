<template>
  <div>
    <label for="textare"></label>
    <md-editor v-model="text"></md-editor>
  </div>
</template>

<script setup lang="ts">
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
const text = ref("# Hello Editor");
</script>

<style scoped></style>
