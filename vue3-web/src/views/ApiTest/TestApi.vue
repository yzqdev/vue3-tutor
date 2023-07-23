<template>
  <div>
    <el-button @click="getData">点击</el-button>
    <div>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="(item, index) in imgs" :key="index">
          <img class="carousel-img" :src="item.fullSrc" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

const name =  ref("");
onBeforeMount(() => {
  getData();
});
const imgs =  ref([]);
function getData() {
  axios
    .get("/bing", {
      headers: {
        "sec-fetch-site": "cross-site",
        signaturekey: "U2FsdGVkX1+ICfYD6Qvr+SENz60GSHrAkzvXjzcnhf8=",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.66 Safari/537.36 Edg/103.0.1264.44",
        version: "1.2.35",
      },
    })
    .then((res) => {
      imgs.value = res.data.data;
    });
}

function tdoctor() {
  axios
    .get("https://tdoctor.dedvl.com/v1/user/queryHelpDoc?helpDocName=&helpDocType=&pageNumber=0&pageSize=20")
    .then((res) => {
      console.log("rep", res);
       // items = res.data;
      // console.log(this.items)
    })
    .catch((error) => {
      console.log("错误", error);
    });
}
</script>

<style scoped></style>
