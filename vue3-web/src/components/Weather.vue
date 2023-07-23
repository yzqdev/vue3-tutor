<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-col :span="24" class="toolbar">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="请输入城市名称" v-model="input2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="greet">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="24" v-if="show">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ city }}</span>
          <el-button style="float: right; padding: 3px 0" type="text">复制</el-button>
        </div>
        <strong>城市:{{ city }}</strong>
        &nbsp;&nbsp;&nbsp;
        <strong>温度:{{ temperature }}</strong>
        <div class="text item" v-for="item in yesterday">
          <strong>{{ item }}</strong>
        </div>
      </el-card>
    </el-col>
    <el-col :span="24" v-if="show">
      <el-table :data="gridData" stripe fit style="width: 80%; text-align: center">
        <el-table-column align="center" prop="date" label="日期"></el-table-column>

        <el-table-column align="center" prop="type" label="天气"></el-table-column>
        <el-table-column align="center" prop="high" label="日间温度"></el-table-column>
        <el-table-column align="center" prop="low" label="夜间温度"></el-table-column>
        <el-table-column align="center" prop="pressure" label="气压值"></el-table-column>
      </el-table>
    </el-col>
    <div class="border-2 border-solid border-b-blue-600">
      component v-model
      <PetName
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-96"
        v-model="pet"
      ></PetName>
    </div>
  </div>
</template>

<script setup lang="ts">
import PetName from "@/components/model/PetName.vue";
import axios from "axios";
import FetchApi from "@/utils/request/FetchApi";
const msg = ref("输入地址查询天气");
const pet = ref("pet");
const input2 = ref("合肥");
const show = ref(false);
const gridData = ref([]);
const city = ref(null);
const temperature = ref(null);
const yesterday = ref(null);

function greet() {
  FetchApi.get(`/bidianer/api/weather/get-info?city_name=${input2}&simple=true`)
    .then((res) => {
      console.log(res);
      city.value = res.data.city;
      temperature.value = res.data.data.wendu;
      const foresee = res.data.data.forecast;
      yesterday.value = res.data.data.yesterday;
      for (let i = 0; i < foresee.length; i++) {
        gridData.value.push({
          date: foresee[i].date,

          type: foresee[i].type,
          high: foresee[i].high,
          low: foresee[i].low,
        });
      }

      show.value = true;
    })
    .catch(function (response) {
      console.log(response);
    });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0);
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.el-table {
  margin: 5% 10%;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  /*width: 500px;*/
  margin: auto 400px;
  text-align: center;
}
</style>
