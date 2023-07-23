<template>
  <article>
    <div class="account-container">
      <Head></Head>
      <Body></Body>
    </div>
    <footerBar></footerBar>
  </article>
</template>
<script>
import footerBar from "@/views/Layout/footerBar.vue";
import Head from "./AccountHead.vue";
import Body from "./AccountBody.vue";
export default {
  components: { footerBar, Head, Body },
  methods: {
    demo(obj) {
      console.log(obj);
    }
  }
};
</script>
<style lang="scss" scoped>
.account-container {
  height: e("calc(100% - 0.5rem)");
}
</style>
