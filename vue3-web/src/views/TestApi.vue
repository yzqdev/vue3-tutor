<template>
  <div>
    <el-button @click="getData">点击</el-button>
  </div>
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
    getData() {
      axios.get("/bing", {
        headers: {
          "sec-fetch-site": "cross-site",
          "signaturekey": "U2FsdGVkX1+ICfYD6Qvr+SENz60GSHrAkzvXjzcnhf8=",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.66 Safari/537.36 Edg/103.0.1264.44",
          "version": "1.2.35"
        }
      }).then((res) => {
        console.log(res)
      })
    },
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
