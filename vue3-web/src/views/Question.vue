<template>
  <div>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <el-input v-model="question" style="width: 300px"></el-input>
      </p>
      <p>{{ answer }}</p>

      <br />
    </div>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  name: "TestVue",
  props: [],
  components: {},
  data() {
    return {
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
    };
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question(newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    },
  },
  created() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
  },
  methods: {
    getAnswer() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      this.$axios
        .get("https://yesno.wtf/api")
        .then((response) => {
          this.answer = _.capitalize(response.data.answer);
        })
        .catch((error) => {
          this.answer = "Error! Could not reach the API. " + error;
        });
    },
  },
};
</script>
