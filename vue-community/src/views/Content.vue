<template>
  <div class="wrapper">
    <van-nav-bar
      :title="data.title"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    ></van-nav-bar>
    <main class="main">
      <!-- 标题区 -->
      <header class="md_header">
        <h1>
          <span class="tag" v-if="data.top">置顶</span>
          <span class="tag" v-else-if="data.good">精华</span>
          {{ data.title }}
        </h1>
        <mu-checkbox
          v-if="accesstoken"
          v-model="collect"
          :label="collect_txt"
          class="demo-checkbox"
          uncheck-icon="favorite_border"
          checked-icon="favorite"
        ></mu-checkbox>
        <div class="label">
          <span>发布于 {{ data.create_at | timeago }}</span>
          <span>作者 {{ data.author.loginname }}</span>
          <span>{{ data.visit_count }} 次浏览</span>
          <span>来自 {{    tab (data.tab)}}</span>
        </div>
      </header>
      <!-- 内容区 -->
      <article class="md_content" v-html="data.content"></article>
      <!-- 评论区 -->
      <van-list v-if="data.replies.length" class="replies">
        <van-cell>{{ data.replies.length }}条回复</van-cell>
        <van-cell
          class="reply"
          v-for="(list, index) in data.replies"
          :key="list.id"
        >
          <section class="msg">
            <div class="author">
              <router-link
                :to="{
                  path: '/user',
                  query: { user: list.author.loginname }
                }"
                :src="list.author.avatar_url"
                tag="img"
                alt="user"
              >
              </router-link>
              <span class="name">{{ list.author.loginname }}</span>
              <span class="timer"
                >{{ index + 1 }}楼 • {{   timeago( list.create_at) }}</span
              >
            </div>
            <!-- 未登录状态下点赞 -->
            <div
              @click="open"
              v-if="list.ups.length && !accesstoken"
              class="ups"
            >
              <mu-icon value="thumb_up" size="16"></mu-icon>
              <span>{{ list.ups.length }}</span>
            </div>
            <!-- 登录状态下点赞 -->
            <div @click="open" v-if="accesstoken" class="ups">
              <mu-icon
                @click="like(index)"
                value="thumb_up"
                :size="16"
              ></mu-icon>
              <span>{{ list.ups.length }}</span>
              <van-button type="success" @click="changeReply(index)"
                >回复</van-button
              >
            </div>
          </section>
          <p v-html="list.content"></p>

          <van-dialog
            v-if="accesstoken"
            class="reply_show"
            v-model="list.reply_show"
            title="回复内容"
            show-cancel-button
          >
            <van-field
              v-model="single_reply"
              clearable
              placeholder="请输入回复内容..."
            ></van-field>
            <van-button color="primary" @click="single_reply_content(index)"
              >回复</van-button
            >
            <van-button
              color="primary"
              @click="exit_single_reply_content(index)"
              primary
              >取消</van-button
            >
          </van-dialog>
        </van-cell>
        <mu-divider></mu-divider>
      </van-list>
      <van-list v-if="accesstoken" class="replies">
        <van-cell>添加回复</van-cell>
        <van-cell>
          <van-field
            multi-line
            v-model="reply"
            class="reply"
            placeholder="请输入回复内容..."
          ></van-field>
          <van-button type="primary" @click="reply_content">回复</van-button>
        </van-cell>
      </van-list>
    </main>
    <!-- 弹出提示框 -->
    <van-dialog
      v-if="!accesstoken"
      :open="dialog"

      @close="close"
      class="reply_show"
      v-model="list.reply_show"
      title="回复内容"
      show-cancel-button
    >
      <van-field
        v-model="single_reply"
        clearable
        placeholder="请输入回复内容..."
      ></van-field>
      <van-button color="primary" @click="single_reply_content(index)"
        >回复</van-button
      >
      <van-button
        color="primary"
        @click="exit_single_reply_content(index)"
        primary
        >取消</van-button
      >
    </van-dialog>
  </div>
</template>
<script>
/*eslint-disable */
import isheader from "../components/Header.vue";

import axios from "axios";
import {format} from "timeago.js";
export default {
  data() {
    return {
      accesstoken: "",
      user_id: "",
      data: {
        author: {},
        replies: {}
      },
      dialog: false,
      reply: "",
      single_reply: "",
      isReply: false,
      tips: "",
      collect: false,
      collect_txt: "收藏主题",
      loginname: "",
      collected: false
    };
  },
  created() {
    this.accesstoken = localStorage.getItem("accesstoken");
    this.user_id = localStorage.getItem("user_id");
    this.loginname = localStorage.getItem("loginname");
    this.getData();
    // console.log(this.loginname)
  },
  watch: {
    collect(newVal) {
      if (newVal) {
        this.on_collect();
        this.collect_txt = "取消收藏";
      } else {
        this.off_collect();
        this.collect_txt = "收藏主题";
      }
    }
  },

  methods: { tab(val) {
      let valMap = new Map([
          ["share", "分享"],
          ["ask", "问答"],
          ["job", "招聘"]
        ]),
        result = valMap.get(val);
      return result;
    },timeago(val) {
      let time = new Date(val);
      return  format(time, "zh_CN"); //将UTC时间转换格式---> 几天前,几小时前...
    },
    getData() {
      // 主题详情
      let id = this.$route.query.id;
      this.$axios.get("/topic/" + id).then(response => {
        this.data = response.data.data;
        console.log(this.data);
        //每一项回复，添加标记
        console.log("文章内容");
        this.data.replies.map(item => {
          item.reply_show = false;
        });
      });
      if (this.accesstoken) {
        this.isCollected();
      }
    },
    isCollected() {
      //收藏
      this.$axios.get("/user/" + this.loginname).then(response => {
        // 获取收藏主题数组
        let arr = response.data.data.collect_topics;
        //本页主题id
        let collect_id = this.data.id;
        //find 本页主题是否在已收藏列表
        arr.find(function(item) {
          if (item.id === collect_id) {
            this.collect = true;
            this.collect_txt = "收藏主题";
          }
        });
      });
    },
    goBack() {
      this.$router.go(-1);
      // this.$router.back()
    },
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.isReply = false;
    },
    reply_content() {
      // 添加评论
      let id = this.$route.query.id;
      this.$axios
        .post("/topic/" + id + "/replies", {
          accesstoken: this.accesstoken,
          content: this.reply
        })
        .then(response => {
          this.tips = "回复成功！";
          this.isReply = true;
          setTimeout(function() {
            this.isReply = false;
          }, 1500);
          this.getData();
          this.reply = "";
        })
        .catch(error => {
          this.tips = "请输入回复内容...";
          this.isReply = true;
          setTimeout(function() {
            this.isReply = false;
          }, 1500);
        });
    },
    like(index) {
      //点赞
      let reply_id = this.data.replies[index].id;
      this.$axios
        .post("/reply/" + reply_id + "/ups", {
          accesstoken: this.accesstoken
        })
        .then(response => {
          // console.log(response.data)
          this.getData();
        });
    },
    single_reply_content(index) {
      // 对评论的回复
      let id = this.$route.query.id;
      this.$axios
        .post("/topic/" + id + "/replies", {
          accesstoken: this.accesstoken,
          content: this.single_reply,
          reply_id: this.data.replies[index].id
        })
        .then(response => {
          this.tips = "回复成功！";
          this.isReply = true;
          setTimeout(function() {
            this.isReply = false;
          }, 1500);
          this.getData();
          this.single_reply = "";
        })
        .catch(err => {
          this.tips = "请输入回复内容...";
          this.isReply = true;
          setTimeout(function() {
            this.isReply = false;
          }, 1500);
        });
    },
    changeReply(index) {
      //点击对评论进行回复
      let arr = this.data.replies;
      arr.map((item, i) => {
        index === i
          ?  item["reply_show"]=true
          :  item["reply_show"]=false
      });

      this.single_reply = "@" + this.data.replies[index].author.loginname + " ";
    },
    exit_single_reply_content(index) {
      //取消对评论的回复，清空内容
      this.single_reply = "";
      let arr = this.data.replies;
      arr[index].reply_show = false;
      // Vue.set(arr, index, arr[index]);
    },
    on_collect() {
      //收藏主题

      this.$axios
        .post("/topic/collect", {
          accesstoken: this.accesstoken,
          topic_id: this.data.id
        })
        .then(function(response) {
          // console.log(response.data)
        });
    },
    off_collect() {
      // 取消收藏

      this.$axios
        .post("/topic/de_collect", {
          accesstoken: this.accesstoken,
          topic_id: this.data.id
        })
        .then(function(response) {
          // console.log(response.data)
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.title {
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.tag {
  background-color: #009688;
  color: #fff;
  padding: 0.2rem 0.6rem;
  border-radius: 0.2rem;
}

.demo-checkbox {
  font-size: 20px;
  font-weight: 700;
}

.demo-checkbox .mu-checkbox-label {
  color: #009688;
}

.md_content {
  padding: 1rem;
  border-top: 1px solid #e5e5e5;
  margin-bottom: 2rem;
}

.md_content h1,
.md_content h2,
.md_content h3,
.md_content h4,
.md_content h5,
.md_content h6 {
  font-weight: 700;
}

.md_content p {
  font-size: 15px;
  line-height: 1.7em;
  overflow: auto;
}

.md_content h2 {
  font-size: 26px;
  margin: 30px 0 15px;
  border-bottom: 1px solid #eee;
}

.md_content h3 {
  margin: 30px 0 15px;
  border-bottom: 1px solid #eee;
  font-size: 24.5px;
}

.md_content pre {
  font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
  font-size: 14px;
  border-radius: 0;
  padding: 1rem;
  border: 0;
  margin: 1rem 0;
  border-width: 1px 0;
  background: #f7f7f7;
}

.md_content ul {
  list-style-type: disc;
  margin: 0 0 1rem 2rem;
}

.md_content ol {
  list-style: decimal;
  margin-left: 2em;
}

.md_content li {
  line-height: 2.5rem;
}

.md_content a {
  display: block;
}

.md_content img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
}

.md_header {
  padding: 1rem;
}

.md_header h1 {
  font-weight: 700;
}

.md_header .label span:before {
  content: "•";
  padding: 0 0.5rem;
}

.md_header .label span {
  font-size: 12px;
  color: #838383;
  font-weight: 400;
  padding: 0 0.2rem;
}

/*评论区样式*/

.replies > li {
  padding: 1rem;
}

.replies > li:first-child {
  background-color: #f6f6f6;
}
.reply {
  width: 100%;
  height: 150px;
  border-top: 1px solid #f0f0f0;
}

.reply > .msg {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.reply > p {
  margin-bottom: 2rem;
}

.author > img {
  width: 3rem;
  height: 3rem;
  /*border-radius: 50%;*/
  vertical-align: top;
}

.author > .name {
  color: #666;
  font-weight: 700;
}

.author > .timer {
  color: #08c;
  /*font-weight: 700;*/
}

.msg > .ups {
  display: flex;
  align-items: center;
  color: #009688;
}

.ups > span {
  margin-left: 0.5rem;
}

.reply_show {
  animation: reply_show 1s ease;
}

@keyframes reply_show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
