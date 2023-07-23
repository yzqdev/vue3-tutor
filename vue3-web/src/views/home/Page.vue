<template>
  <h3>{{ reactiveBaseType }}</h3>
  <h3>{{ reactiveReferenceType }}</h3>
  <div @click="setData">setData</div>
  <div @click="setReactive">setReactive</div>
  <div>{{x}},{{y}}</div>
</template>

<script setup>
import { reactive } from 'vue'
import {useMouse} from '@/hooks/useMouse'
const  {x,y} =useMouse()
const reactiveBaseType = reactive({
  coutn:1
})
//reactive 无法定义基本类型的proxy,且设置值无法响应数据
let setData = () => {
  reactiveBaseType = 'fai'
}
console.log('reactiveBaseType', reactiveBaseType)
//打印结果
/*
null
* */
//如果reactive使用的是引用类型
let reactiveReferenceType = reactive({ count: 1 })
let setReactive = () => {
  console.log(reactiveReferenceType)
  //这样设置会去proxy
  reactiveReferenceType = { count: 1 }
  console.log(reactiveReferenceType)
  //打印结果
  /*
   *{count: 1} //proxy 没了，所以reactive申明的无法直接替换整个对象，如果有这个需求请使用ref
   * */
}
console.log('reactiveReferenceType', reactiveReferenceType)
//打印结果
/*
//proxy响应式
Proxy {count: 1}
[[Handler]]: Object
[[Target]]: Object
count: 1
__proto__: Object
[[IsRevoked]]: false
* */
</script>

<style lang="scss" scoped>

</style>
