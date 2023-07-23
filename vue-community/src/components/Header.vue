<template>
  <div class="hello">
    <van-nav-bar :title="title">
      <img
        class="logo"
        slot="left"
        src="https://www.vue-js.com/public/images/vue.png"
    /></van-nav-bar>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      item: true
    };
  },
  props: ["title"],
  methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
  height: 5rem;
}
.logo {
  width: 40px;
  height: 40px;
}
.mu-icon-button {
  padding: 0.4rem;
}
</style>
