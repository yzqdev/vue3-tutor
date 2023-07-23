<template>
  <div class="app-wrapper">
    <headerBar></headerBar>

    <!-- main -->
    <router-view class="main-container"></router-view>

    <footerBar></footerBar>
  </div>
</template>

<script>
import HeaderBar from "./headerBar.vue";
import footerBar from "./footerBar.vue";
export default {
  name: "layout",
  components: {
    HeaderBar,
    footerBar
  }
};
</script>
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
}
.main-container {
  width: 100%;
  height: e("calc(100% - 1rem)");
  position: relative;
}
</style>
