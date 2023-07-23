<template>
  <div class="left-content">
    <div class="left-box">
      <databox :title="''" :dheight="720">
        <Personal :personalData="personalData" :username="username"></Personal>
        <databox
            :title="$t('data.dleft.accountStars')"
            :dheight="280"
            :icon="'account'"
            :boxb="false"
        >
          <div id="dleftPie" :data="starData" style="height: 250px"></div>
          <nodata
              :nodata="$t('data.dleft.noStarData')"
              v-if="noStarData"
          ></nodata>
        </databox>
        <databox
            :title="$t('data.dleft.accountLeng')"
            :dheight="280"
            :icon="'account'"
            :boxb="false"
        >
          <ve-ring
              :data="languageData"
              :extend="extend"
              :height="'230px'"
          ></ve-ring>
          <nodata
              :nodata="$t('data.dleft.nolanguageData')"
              v-if="nolanguageData"
          ></nodata>
        </databox>
      </databox>
    </div>
  </div>
</template>

<script setup lang="ts">
import Personal from "./Person.vue";
import Databox from "@/components/Databox.vue";
import Nodata from "@/components/Nodata.vue";
import {userReposApi} from "@/plugins/apis";

let props = defineProps({
  personalData: Object,
  username: String
})
let personalD = $ref({})
let starData = $ref({
  columns: ["reposName", "getStars"],
  rows: []
})
let noStarData = $ref(false)
let languageData = $ref({
  columns: ["lang", "number"],
  rows: []
})
let nolanguageData = $ref(false)
let extend = $ref({
  legend: {
    textStyle: {color: "#fff"}
  },
  grid: {
    textStyle: {
      color: "#fff"
    }
  },
  series: {
    radius: ["0", "40%"],
    center: ["50%", "50%"]
  }
});
watch(props.username, (val, oldValue) => {
  if (val) {
    getData(val);
  }
})


function getData(username) {
  userReposApi(username)
      .then(response => {
        let data = JSON.parse(JSON.stringify(response.data));
        if (data.length < 1) {
          noStarData = true;
        } else {
          let rowdata = [];
          let languages = {};
          for (let i = 0; i < data.length; i++) {
            // 仓库和仓库star
            let reposName = data[i].name;
            let getStars = data[i].stargazers_count;
            let obj = {
              reposName: reposName,
              getStars: getStars
            };
            rowdata.push(obj);

            //梳理语言，计算语言类型和各个语言的数量
            let langData = data[i].language;
            if (langData) {
              if (langData in languages) {
                languages[langData]++;
              } else {
                languages[langData] = 1;
              }
            }
          }
          //把值附到starData.rows
          starData.rows = rowdata;
          //console.log(this.starData.rows)

          //重新组装语言封成对象
          let objL = JSON.parse(JSON.stringify(languages));
          let dataL = [];
          for (var key in objL) {
            dataL.push({lang: key, number: objL[key]});
          }
          languageData.rows = dataL;
          //console.log(objL)
          //console.log(this.languageData.rows)
        }
        return;
      })
      .catch(err => {
        console.log(err.message);
      });
}
</script>

<style lang="scss">
.left-content {
  width: 100%;
  height: 100%;

  .left-box {
    width: 100%;
    height: 720px;

    padding-bottom: 40px;

    .content-wapper {
      padding-top: 40px;
      height: 220px;
    }
  }
}
</style>
