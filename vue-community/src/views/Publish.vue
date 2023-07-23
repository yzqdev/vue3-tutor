<template>
  <div class="wrapper">
    <Header title="发布话题"></Header>
    <main>
      <van-dropdown-menu label="选择板块" full-width>
        <van-dropdown-item
          v-model="selectedItem"
          :options="lists"
        ></van-dropdown-item>
      </van-dropdown-menu>

      <van-field
        v-model="title"
        class="text"
        label="标题"
        placeholder="标题字数 10字以上"
      ></van-field>
      <van-field
        v-model="content"
        label="发布内容"
        placeholder="输入文本，支持markdown格式"
        autosize
      ></van-field>
      <van-button type="primary" @click="setData">发布话题</van-button>
    </main>

    <BottomNavigation></BottomNavigation>
  </div>
</template>
<script>
import axios from "axios";
import {marked} from "marked";
import BottomNavigation from "@/components/BottomNavigation.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
    BottomNavigation
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      accessToken: "",
      selectedItem: "0",
      normal: "选择板块",
      list: 0,
      lists: [
        { text: "分享", value: "0" },
        { text: "问答", value: "1" },
        { text: "招聘", value: "2" },
        { text: "weex", value: "3" }
      ],
      title: "",
      tab: "",
      content: "",
      publish: false,
      tips: "请输入正确格式"
    };
  },
  created() {
    this.accessToken = localStorage.getItem("accesstoken");
    if (!this.accessToken) {
      this.$dialog
        .confirm({
          title: "提示",
          message: "请先登录"
        })
        .then(() => {
          this.$router.push({
            name: "login"
          }); // on confirm
        })
        .catch(() => {
          this.$router.push({
            name: "home"
          }); // on cancel
        });
    }
  },
  methods: {
    setData() {
      if (this.list === 0) {
        this.tab = "share";
      } else if (this.list === 1) {
        this.tab = "ask";
      } else if (this.list === 2) {
        this.tab = "job";
      }
      this.content = marked(this.content);
      // console.log(this.accessToken)
      // console.log(this.title)
      // console.log(this.tab)
      // console.log(this.content)
      this.$axios
        .post("/topics", {
          accesstoken: this.accessToken,
          title: this.title,
          tab: this.tab,
          content: this.content
        })
        .then(response => {
          // console.log(response.data)
          this.title = "";
          this.content = "";
          this.tips = "发表成功！";
          this.publish = true;
          setTimeout(function() {
            this.publish = false;
          }, 1500);
        })
        .catch(function(error) {
          this.publish = true;
        });
    },
    close() {
      this.publish = false;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  height: 5rem;
}

main {
  flex: 1;
  /*margin: 5rem 0;*/
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.text {
  /*font-size: 24px;*/
  width: 100%;
  /*text-align: center;*/
}

.content {
  flex: 1;
  background-color: #f7f7f7;
  padding: 1rem;
  overflow-y: auto;
}

textarea {
  height: 10rem;
}
</style>
