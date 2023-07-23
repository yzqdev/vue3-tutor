<template>
  <el-scrollbar>
    <el-card class="m-2">
      欢迎啊
      <div>
        <select-popover v-model="vis"></select-popover>
        <select-popover v-model="vis"></select-popover>
        <select-department v-model="vis"></select-department>
      </div>
      <el-divider />
      <sample-popover></sample-popover>
      <el-divider />
      <select-department-model v-model:name="form.name" v-model:id="form.id"></select-department-model>
      <div id="vs" ref="xigua" style="height: 400px; width: 100%"></div>
    </el-card>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import SelectDepartment from "@/components/SelectDepartment.vue";
import SelectPopover from "@/components/SelectPopover.vue";
import SamplePopover from "@/components/SamplePopover.vue";
import SelectDepartmentModel from "@/components/SelectDepartmentModel.vue";
import { clog } from "@/utils/clog";
// import consola from 'consola'
const form = reactive({
  date: "",
  id: "",
  name: "",
});
let vis = ref("aaa");
let xigua = ref();
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";

function getName(val) {
  console.log(val);
}

onMounted((params) => {
  // window.consola=console
  // let data={
  //   name:'aaa',
  //   sex:'bbb'
  // }
  // consola.level = 5
  //
  // consola.wrapAll()
  //
  // for (let type of Object.keys(consola._types).sort()) {
  //   consola[type]('Open developer tools to see the magic!')
  // }
  //
  // consola.withTag('customTag').info('Im from custom world!')
  //
  // consola.error(new Error('Whoo Haha'))
  let player = new Player({
    id: "vs",
    url: "//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo.mp4",
    playsinline: true,
    poster: "//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
    plugins: [],
    fluid: false,
    thumbnail: {
      pic_num: 44,
      width: 160,
      height: 90,
      col: 10,
      row: 10,
      urls: [""],
    },
    screenShot: true,
    pip: true,
    download: true,
  });
});
</script>
<style></style>
