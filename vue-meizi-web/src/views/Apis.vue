<template>
  <div>
    <h3 class="head">干货集中营 API 文档</h3>
    <div class="main">
      <el-button @click="goto">http://gank.io/api</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Apis",
  props: [],
  data() {
    return {
      name: ""
    };
  },
  watch() {},
  mounted() {
    this.function();
  },
  methods: {
    goto() {
      location.assign("http://gank.io/api");
    },
    function() {}
  }
};
</script>

<style scoped>
.main {
  margin: 0 15%;
  background-color: #f1f1f1;
  height: 25em;
}

.head {
  text-align: center;
  font-size: 20px;
  color: #404040;
}
</style>
