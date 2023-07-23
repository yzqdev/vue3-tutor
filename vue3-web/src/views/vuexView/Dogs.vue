<template>
  <div>
    <DogListOne></DogListOne>
    <DogListTwo></DogListTwo>
    <pinia-view></pinia-view>
  </div>
</template>
<script setup>
import DogListOne from "@/components/vuex-demo/dogs/DogListOne.vue";
import DogListTwo from "@/components/vuex-demo/dogs/DogListTwo.vue";
import PiniaView from "@/views/vuexView/PiniaView.vue";
</script>
