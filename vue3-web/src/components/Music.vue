<template>
  <div>
    axios案例：
    <br />
    <br />
    <button @click="doRequest">发送请求</button>
    <br />
    <br />
    <ul>
      <li v-for="(result, index) in list" :key="index">
        <div class="ui-flex">
          <div>
            <img :src="result.album.blurPicUrl" width="100px" height="100px;" />
          </div>
          <div class="ui-flex-1">
            歌曲：{{ result.name }}
            <br />
            歌手：{{ result.artists[0].name }}
            <br />
            所属公司：{{ result.album.company }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// 导入axios
import axios from "@/axios";
const list =  ref([]);
function doRequest() {
  let url = "/wymusic?id=19723756";
  axios
    .get(url)
    .then((response) => {
      this.list = response.data.result.tracks;
    })
    .catch((error) => {
      console.log("发送失败");
      console.log(error);
    });
  // 如果使用finally 请升级浏览器,该方法是 ES2018 引入标准的
  /*.finally(f=>{
      console.log('释放资源操作,finally总是被执行');
    });*/
}
</script>
<style scoped>
.ui-flex {
  display: -webkit-box;
  display: box;
  margin-bottom: 5px;
}
.ui-flex-1 {
  -webkit-box-flex: 1;
  text-align: left;
  padding-left: 30px;
}
</style>
