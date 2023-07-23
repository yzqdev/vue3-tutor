<template
  ><div class=" main">
    <van-tabs class="activeTab" :value="activeTab" @change="handleTabChange">
      <van-tab name="hasnot_read" title="未读消息"></van-tab>
      <van-tab name="has_read" title="已读消息"></van-tab>
      <span v-if="count" class="count">{{ count }}</span>
    </van-tabs>
    <!-- 未读消息列表 -->
    <mu-list
      v-if="accesstoken"
      class="lists"
      v-show="activeTab === 'hasnot_read'"
    >
      <router-link
        :to="{
          path: '/content',
          query: { id: item.topic.id }
        }"
        tag="li"
        class="list"
        v-for="item in hasnot_read_messages"
        :key="item.id"
      >
        <div class="user">
          <img :src="item.author.avatar_url" alt="user" />
          <span>{{ item.author.loginname }}</span>
        </div>
        <div class="content">
          <h2 v-html="markdownChange(item.reply.content)"></h2>
          <p>来自：《{{ item.topic.title }}》</p>
        </div>
        <div class="timer">
          <span>{{    timeago(item.reply.create_at) }}</span>
        </div>
      </router-link>
      <mu-list-item v-if="!hasnot_read_messages.length">暂无消息</mu-list-item>
    </mu-list>
    <!-- 已读消息列表 -->
    <mu-list v-if="accesstoken" class="lists" v-show="activeTab === 'has_read'">
      <router-link
        :to="{
          path: '/content',
          query: { id: item.topic.id }
        }"
        tag="li"
        class="list"
        v-for="item in has_read_messages"
        :key="item.id"
      >
        <div class="user">
          <img :src="item.author.avatar_url" alt="user" />
          <span>{{ item.author.loginname }}</span>
        </div>
        <div class="content">
          <h2
            v-if="item.reply.content"
            v-html="markdownChange(item.reply.content)"
          ></h2>
          <h2 v-if="!item.reply.content">此内容已被作者删除</h2>
          <p>来自：《{{ item.topic.title }}》</p>
        </div>
        <div v-if="item.reply.content" class="timer">
          <span>{{ item.reply.create_at | timeago }}</span>
        </div>
      </router-link>
      <mu-list-item v-if="!has_read_messages.length">暂无消息</mu-list-item>
    </mu-list>
    <p class="tips" v-if="!accesstoken">请先登录</p>
    <!-- 全部标记已读 -->
    <mu-button
      flat
      class="btn"
      v-if="count"
      v-show="activeTab === 'hasnot_read'"
      @click="mark_all"
      icon="done_all"
      primary
      >标记全部已读</mu-button
    >
  </div>
</template>

<script>
import {marked }from "marked";
import {format} from "timeago.js";
export default {
  name: "MessageContent",
  data() {
    return {
      activeTab: "hasnot_read",
      accesstoken: "",
      count: null,
      hasnot_read_messages: [],
      has_read_messages: []
    };
  },
  created() {
    this.accesstoken = localStorage.getItem("accesstoken");
    if (this.accesstoken) {
      this.getData();
    }
  },



  methods: {
      timeago(val) {
      let time = new Date(val);
      return  format(time, "zh_CN"); //将UTC时间转换格式---> 几天前,几小时前...
    },
    handleTabChange(val) {
      this.activeTab = val;
    },
    getData() {
      let url = "/messages?accesstoken=" + this.accesstoken;
      this.$axios.get(url).then(function(response) {
        //获取已读和未读消息
        // console.log(response.data.data)
        this.hasnot_read_messages = response.data.data.hasnot_read_messages;
        this.has_read_messages = response.data.data.has_read_messages;
      });

      this.$axios
        .get("/message/count?accesstoken=" + this.accesstoken)
        .then(response => {
          //获取未读消息数量
          this.count = response.data.data;
        });
    },
    markdownChange(val) {
      return marked(val);
    },
    mark_all() {
      this.$axios
        .post("/message/mark_all", {
          accesstoken: this.accesstoken
        })
        .then(function(response) {
          this.getData();
        });
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  height: 5rem;
}

.main {
  overflow: auto;
}

.tab .tabs {
  margin-top: 5rem;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-around;
}
.mu-tab-link,
.mu-tab-active {
  white-space: nowrap;
}
.mu-list {
  padding: 0;
}
.list {
  display: flex;
  border-bottom: 1px solid #999;
  padding: 1rem;
}

.list > img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list_title {
  /*display: flex;*/
}

.list_title > span {
  /*white-space:nowrap;*/
  background-color: #009688;
  color: #fff;
  padding: 0.2rem;
  border-radius: 0.2rem;
}

.list_title > h3 {
  display: inline;
  font-weight: 700;
}

.timer {
  display: flex;
  justify-content: space-between;
  color: #999;
}

.count {
  /*position: absolute;*/
  left: 10%;
  top: 20%;
  background-color: #ff5252;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 50%;
}

.lists {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

.btn {
  margin: 1rem;
}

.list {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 1rem;
  margin-bottom: 1rem;
}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6rem;
}

.user > img {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}

.user > span {
  text-align: center;
  max-width: 100%;
  word-wrap: break-word;
  word-break: normal;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.content > h2 {
  font-weight: 700;
  font-size: 16px;
}

.content > p {
  color: #999;
  font-size: 12px;
}

.timer {
  margin-left: 1rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.tips {
  padding: 1rem;
}
</style>
