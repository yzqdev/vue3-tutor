<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  name: "TestApi",
  // 对象
  props: {},

  data() {
    return {
      name: "",
    };
  },
  watch: {},
  mounted() {
    this.function();
  },
  methods: {
    function() {
      axios
        .get(
          "https://tdoctor.dedvl.com/v1/user/queryHelpDoc?helpDocName=&helpDocType=&pageNumber=0&pageSize=20"
        )
        .then((res) => {
          console.log("rep", res);
          this.items = res.data;
          // console.log(this.items)
        })
        .catch((error) => {
          console.log("错误", error);
        });
    },
  },
};
</script>

<style scoped></style>
