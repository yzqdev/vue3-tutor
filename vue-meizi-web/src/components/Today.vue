<template>
  <div>
<img src="https://api.nmb.show/1985acg.php" />
    <img src="http://api.nmb.show/xiaojiejie1.php" />
    <img src="http://api.nmb.show/xiaojiejie2.php" />
  </div>
</template>

<script>
export default {
  name: "Today",
  props: [],
  data() {
    return {
      name: ""
    };
  },
  watch() {},
  mounted() {
    this.getToday();
  },
  methods: {
    getToday() {
      this.$axios.get("/today").then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>

<style scoped></style>
