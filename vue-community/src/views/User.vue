<template>
  <div class="wrapper">
    <mu-appbar class="title" title="用户详情"></mu-appbar>
    <section class="user_msg">
      <!-- <h2>用户名片</h2> -->
      <img :src="user_msg.avatar_url" alt="avatar" />
      <span class="name">{{ user_msg.loginname }}</span>
      <span class="score">积分：{{ user_msg.score }}</span>
      <span class="create_at"
        >注册时间：{{  timeago (user_msg.create_at )}}</span
      >
      <div class="msg">
        <van-list>
          <van-cell
            v-if="user_msg.recent_topics"
            title="最近主题"
            toggleNested
            :open="false"
          >
            <mu-icon
              class="icon"
              slot="left"
              value="insert_drive_file"
            ></mu-icon>
            <mu-list-item
              :to="{ path: '/content', query: { id: item.id } }"
              v-for="item in user_msg.recent_topics"
              :key="item.id"
              slot="nested"
              :title="item.title"
            >
            </mu-list-item>
            <span class="count">{{ user_msg.recent_topics.length }}个</span>
          </van-cell>
          <mu-list-item
            v-if="user_msg.recent_replies"
            title="最近回复"
            toggleNested
            :open="false"
          >
            <mu-list-item
              :to="{ path: '/content', query: { id: item.id } }"
              v-for="item in user_msg.recent_replies"
              :key="item.id"
              slot="nested"
              :title="item.title"
            >
            </mu-list-item>
            <span class="count">{{ user_msg.recent_replies.length }}个</span>
          </mu-list-item>
          <van-cell
            v-if="user_msg.collect_topics"
            title="收藏主题"
            toggleNested
            :open="false"
          >
            <van-cell
              :to="{ path: '/content', query: { id: item.id } }"
              v-for="item in user_msg.collect_topics"
              :key="item.id"
              slot="nested"
              :title="item.title"
            >
              <mu-icon class="icon" slot="left" value="folder_open" />
            </van-cell>
            <span class="count">{{ user_msg.collect_topics.length }}个</span>
          </van-cell>
        </van-list>
      </div>
      <mu-button flat @click="goBack" primary>返回</mu-button>
    </section>
  </div>
</template>
<script>
/*eslint-disable */
import {format} from "timeago.js";
export default {
  data() {
    return {
      user_msg: {}
    };
  },
  created() {
    this.getData();
  },

  methods: {timeago(val) {
      let time = new Date(val);
      return  format(time, "zh_CN"); //将UTC时间转换格式---> 几天前,几小时前...
    },
    getData() {
      let author_name = this.$route.query.user;
      this.$axios.get(author_name).then(response => {
        // console.log(response.data.data)
        this.user_msg = response.data.data;
      });
    },
    goBack() {
      this.$router.go(-1);
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
  /*position: relative;*/
}

.title {
  text-align: center;
  height: 5rem;
}

.user_msg {
  height: 100%;
  margin-top: 5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.user_msg > h2 {
  font-size: 24px;
  font-weight: 700;
}

.user_msg > img {
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  margin: 1rem 0;
}

.name {
  font-size: 22px;
  color: #009688;
}

.msg {
  flex: 1;
  height: 40%;
  overflow-y: auto;
  width: 100%;
  border-top: 1px solid #009688;
  margin: 1rem 0;
}

.count {
  background-color: #009688;
  color: #fff;
  padding: 0.1rem 0.6rem;
  border-radius: 0.2rem;
  margin-top: 2rem;
}

.icon {
  color: #009688;
}

.demo-raised-button {
  width: 80%;
}
</style>
