<template>
  <div>
    <el-input
      @keydown.enter="searchSongs"
      v-model="input"
      placeholder="请输入要查找的歌曲"
    ></el-input>
    <el-button @click="getUser">获取米哈游</el-button>
    <div>{{recommend}}</div>
  </div>
</template>

<script setup>
import axios from "axios";
import FetchApi from "@/plugins/request/FetchApi";
console.log(axios.defaults)
let input = $ref("");
let recommend=$ref({})
function searchSongs() {
  axios
    .get(`/musicApi/search?keywords= ${ input}`)
    .then((response) => {
      console.log(response)
    })
    .catch((res) => {
      console.log(res);
    });
}
 function getUser() {
   FetchApi.get('/mihoyo/user/wapi/recommendActive?gids=2&page_size=5').then((res) => {
      console.log(res)
     recommend=res.data
    })

}
</script>

<style scoped></style>
