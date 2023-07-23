<template>
  <div class="m-2">
    <el-card id="watch-example">
      <p>
        提出一个问题:
        <el-input v-model="question" style="width: 300px"></el-input>
      </p>
      <p>{{ answer }}</p>

      <br/>
    </el-card>
    <el-card class="mt-2">
      <el-button type="primary" @click="fetchData">点击获取</el-button>
      <pre>
        {{}}
      </pre>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import _ from "lodash";
import {petApi} from "@/utils/request/petApi";
import {catApi} from "@/utils/request/catApi";

const debouncedGetAnswer = _.debounce(getAnswer, 500);
const  question =  ref("");
const answer =  ref("I cannot give you an answer until you ask a question!");

async function getAnswer() {
  if (question.value.indexOf("?") === -1) {
    answer.value = "Questions usually contain a question mark. ;-)";
    return;
  }
  answer.value = "Thinking...";
  let res = await fetch("https://yesno.wtf/api");
  res
      .json()
      .then((response) => {
        answer.value = _.capitalize(response.data.answer);
      })
      .catch((error) => {
        answer.value = "Error! Could not reach the API. " + error;
      });
}

watch(question, (val, oldValue) => {
  answer.value = "Waiting for you to stop typing...";
  debouncedGetAnswer();
});

async function getCats() {
  try {
    let cats = await catApi.getCatList()
    console.warn(cats)
  } catch (e) {

  }
}

async function getSingleCat() {
  let cat = await catApi.getSingleCatApi()
  console.warn(cat)
}

async function fetchData() {

 await getCats()
 await getSingleCat()
}

onBeforeMount(() => {
});

// `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
// 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
// AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
// `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
</script>
