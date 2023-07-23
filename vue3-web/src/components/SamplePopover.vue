<template>
  <el-button ref="buttonRef" v-click-outside="onClickOutside"
  >Click me</el-button
  >

  <el-popover
      ref="popoverRef"
      :virtual-ref="buttonRef"
      trigger="click"
      title="With title"
      virtual-triggering
  >
    <span @click="closePop"> Some content </span>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  console.log(unref(popoverRef).popperRef )
  unref(popoverRef).popperRef?.delayHide?.()
}
function closePop(){
  console.log('close ')
  console.log(popoverRef)
 console.log(unref(popoverRef).popperRef)
  unref(popoverRef).hide()
}
</script>
