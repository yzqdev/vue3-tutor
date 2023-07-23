 
import Search from "@views/Search/Search.vue";
import Article from "@views/Article.vue";
import System from "@views/System.vue";
import Record from "@views/Record.vue";
import Jingdong from "@views/Jingdong.vue";
import Msg from "@views/Msg.vue";
import Mall from "@views/Mall.vue";
import { createRouter, createWebHashHistory } from "vue-router";
 import Feedback from '@/views/Feedback.vue'
 
const Layout = () => {
  import("@/views/Layout/Layout.vue");
};
const Home = () => import("@/views/Home.vue");
const Headline = () => import("@/views/Headline/Headline.vue");
const Account = () => import("@/views/Account/Account.vue");

/*
    slide: 页面切换动画
    login: 是否需要登陆

 */
export const constantRouterMap = [
  {
    path: "/",
    name: "首页",
    meta: { page: true },
    component: Layout,
    redirect: "/home",
    children: [{ path: "home", component: Home, name: "首页home" }],
  },
  {
    path: "/video",
    meta: { page: true },
    component:  Layout,
    redirect: "/",
    children: [{ path: "/", component: ()=>import("@/views/Video.vue"), name: "视频" }],
  },
  {
    path: "/headline",
    meta: { page: true },
    component: Layout,
    redirect: "/",
    children: [
      { path: "/", component:Headline, name: "微头条" },
    ],
  },
  {
    path: "/account",
    meta: { page: true },
    component: Account,
    name: "个人中心",
  },
  {
    path: "/search",
    name: "搜索",
    meta: { slide: 1 },
    component: Search,
  },
  {
    path: "/article/:id",
    name: "文章",
    meta: { slide: 1 },
    component: Article,
  },
  {
    path: "/system",
    name: "系统设置",
    meta: {
      slide: 1,
      login: true,
    },
    component: System,
  },
  {
    path: "/record",
    name: "我的记录",
    meta: {
      slide: 1,
      login: true,
    },
    component: Record,
  },
  {
    path: "/jd",
    name: "京东商城",
    meta: {
      slide: 1,
      login: true,
    },
    component: Jingdong,
  },
  {
    path: "/msg",
    name: "消息通知",
    meta: {
      slide: 1,
      login: true,
    },
    component: Msg,
  },
  {
    path: "/mall",
    name: "头条商城",
    meta: {
      slide: 1,
      login: true,
    },
    component: Mall,
  },
  {
    path: "/feedback",
    name: "用户反馈",
    meta: {
      slide: 1,
      login: true,
    },
    component: Feedback,
  },
];
export const asyncRouterMap = [];

export const router = createRouter({
  history:createWebHashHistory(),
  routes:constantRouterMap
})