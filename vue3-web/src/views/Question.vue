<template>
  <div>
    <div id="watch-example">
      <p>
        提出一个问题:
        <el-input v-model="question" style="width: 300px"></el-input>
      </p>
      <p>{{ answer }}</p>

      <br/>
    </div>
  </div>
</template>
<script setup>
import _ from "lodash";

const debouncedGetAnswer = _.debounce(getAnswer, 500);
let question = $ref('')
let answer = $ref("I cannot give you an answer until you ask a question!")
async function getAnswer() {
  if (question.indexOf("?") === -1) {
    answer = "Questions usually contain a question mark. ;-)";
    return;
  }
  answer = "Thinking...";
  let res = await fetch("https://yesno.wtf/api")
  res.json().then((response) => {
   answer = _.capitalize(response.data.answer);
  })
      .catch((error) => {
        answer = "Error! Could not reach the API. " + error;
      });
}


watch(question, (val, oldValue) => {
  answer = "Waiting for you to stop typing...";
  debouncedGetAnswer()
})
onBeforeMount(() => {

})

// `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
// 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
// AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
// `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，

</script>
