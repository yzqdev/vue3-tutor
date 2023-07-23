<template>
  <div class="product-list-two">
    <h2>Dog List Two</h2>
    <ul>
      <li v-for="dog in dogs">
        <span class="name">{{ dog.name }}</span>
        <span class="price">${{ dog.price }}</span>
      </li>
    </ul>
    <el-button @click="minusPrice">减少价格</el-button>
    <el-button @click="plusPrice">增加价格</el-button>
    <el-button @click="minusPriceAsync">异步减少价格</el-button>
  </div>
</template>

<script setup>
import { dogStore } from "@/store/dogs";
let store = dogStore();

const dogs =  ref(store.dogs);
let minusPriceAsync = store.minusPriceAsync;
let plusPrice = store.plusPrice;
let minusPrice = store.minusPrice;
</script>

<style scoped>
.product-list-two {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
.product-list-two ul {
  padding: 0;
  list-style-type: none;
}
.product-list-two li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>
