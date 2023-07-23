<template>
  <div class="search-wrapper">
    <HeadComponent></HeadComponent>
    <BodyComponent></BodyComponent>
  </div>
</template>
<script>
import HeadComponent from "./SearchHead.vue";
import BodyComponent from "./SearchBody.vue";
export default {
  components: { HeadComponent, BodyComponent },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.search-wrapper {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
