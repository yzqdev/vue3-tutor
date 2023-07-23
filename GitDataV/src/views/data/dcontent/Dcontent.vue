<template>
  <div class="content-cont">
    <div class="top-box">
      <div class="left">
        <dnumber
          :dheight="110"
          :title="$t('data.myevent.pubRepos')"
          :size="'4rem'"
          :dnumber="numberData.pubRepos"
          :icon="'kucunguanli'"
          :color="'#ffff43'"
        >
        </dnumber>
      </div>
      <div class="right">
        <div class="content">
          <dnumber
            :dheight="110"
            :title="$t('data.myevent.followers')"
            :size="'3rem'"
            :dnumber="numberData.followers"
            :icon="'jindu1'"
            :color="'#25f3e6'"
          >
          </dnumber>
          <dnumber
            :dheight="110"
            :title="$t('data.myevent.following')"
            :size="'3rem'"
            :dnumber="numberData.following"
            :icon="'success'"
            :color="'#f84a4a'"
          >
          </dnumber>
        </div>
      </div>
    </div>
    <div class="content-box">
      <databox
        :title="$t('data.myevent.accountData')"
        :dheight="350"
        :icon="'account'"
        :boxb="false"
      >
        <div class="content-wapper">
          <!-- <ve-line :data="chartData" :extend="extend"></ve-line>-->
          <div id="main" style="width:100%;height:  350px"></div>
          <nodata
            :nodata="$t('data.myevent.noRepoSize')"
            v-if="noRepoSize"
          ></nodata>
        </div>
      </databox>
      <databox
        :title="$t('data.myevent.myevent')"
        :dheight="220"
        :icon="'account'"
      >
        <MyEvent :data="myevent"></MyEvent>
        <nodata
          :nodata="$t('data.myevent.noMyevent')"
          v-if="noMyevent"
        ></nodata>
      </databox>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import Databox from '@/components/Databox.vue'
import Nodata from '@/components/Nodata.vue'
import Dnumber from "./Dnumber.vue";
import MyEvent from "./MyEvent.vue";
import { LINE_DATA } from "../test/data";
import { userEventsApi, userReposApi } from "@/plugins/apis";
type EChartsOption = echarts.EChartsOption;

let props = defineProps({
  numberData: Object,
  username: String,
});
let repoData = $ref<RepoData>({
  columns: ["reposName", "size", "forks"],
  rows: [],
});
let extend = $ref<EChartsOption>({});
interface RepoRows {
  reposName: string;
  size: string;
  forks: string;
}
interface RepoData {
  columns: string[];
  rows: RepoRows[];
}
let chartData = $ref(LINE_DATA);
let myevent = $ref([]);
let noMyevent = $ref(false);

let noRepoSize = $ref(false);

async function getData(username: string) {
  let res1 = await userEventsApi(username);
  //我最近操作
  let data1 = res1.data
  console.error(res1.data)
  if (data1.length < 1) {
    noMyevent = true;
  } else {
    myevent = data1;
    //console.log(this.myevent)
  }
  let res2 = await userReposApi(username);

  //每个仓库的大小
  let data2 = res2.data
  if (data2.length < 1) {
    noRepoSize = true;
  } else {
    let dataR = [];
    for (let i = 0; i < data2.length; i++) {
      let reposName = data2[i].name;
      let size = data2[i].size;
      let forks = data2[i].forks;
      let objR = {
        reposName: reposName,
        size: size,
        forks: forks,
      };
      dataR.push(objR);
    }
    //console.log(dataR);
    repoData.rows = dataR;
  }
  extend = {
    series: [
      {
        data: repoData.rows.map((item) => {
          return item.size;
        }),
        type: "bar",
      },
    ],
    legend: {
      textStyle: { color: "#fff" },
      right: "6%",
    },
    yAxis: {
      type: "value",
    },
    xAxis: {
      type: "category",
      data: repoData.columns,
    },
  };
  console.log(extend);
}
onBeforeMount( async () => {
  await getData(props.username);
});
onMounted(() => {
  const chartDom = document.getElementById("main")!;
  const myChart = echarts.init(chartDom);

  myChart.setOption(extend);
});
</script>

<style lang="scss">
.content-cont {
  width: 100%;
  height: 100%;
  .top-box {
    display: flex;
    width: 100%;
    height: 110px;
    overflow: hidden;
    .left {
      width: 1/3 * 100%;
      background: rgba(35, 72, 135, 0.4);
    }
    .right {
      flex: 1;
      padding-left: 15px;
      .content {
        width: 100%;
        height: 100%;
        background: rgba(35, 72, 135, 0.4);

        .number-box {
          width: 50%;
          float: left;
        }
      }
    }
  }
  .content-box {
    padding-top: 30px;
  }
}
</style>
