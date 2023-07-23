<template>
  <el-input :model-value="modelValue" :style="{width:width}" @click="openPopup"></el-input>

    <transition>

      <div v-if="popupVisible" class="depart-popup is-light">
        <div v-for="item in lists" @click="setPopData(item)">
          <div :class="item.name==modelValue?'active':''" class="depart-item"> {{ item.name }}</div>
        </div>
      </div>
    </transition>


</template>


<script lang="ts" setup>
import {ElMessage} from "element-plus";

let lists = ref([
  {name: 'StringString '},
  {name: 'baa'},
  {name: 'caa'},
])
let popupVisible = ref(false)
const props = defineProps({
  modelValue: String,
  width: {
    type:String,
    default:'180px'
  }
})
let emits = defineEmits(['update:modelValue'])

function setPopData(item) {
  ElMessage.success("点击pop" + item.name)
  emits('update:modelValue', item.name)
  popupVisible.value = false
}

function openPopup() {

  popupVisible.value = !popupVisible.value
}

</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.depart-popup {
  z-index: 2046;
  position: absolute;
  padding: 1rem;
  //inset: 134.4px auto auto 700.8px;
  margin: 0px;
  box-shadow: var(--el-box-shadow-light);
  transition: all 0.3s;

  .depart-item {
    min-width: 140px;

    cursor: pointer;
  }

  .active {
    color: cyan;
  }
}

.is-light {
  background: var(--el-bg-color-overlay);
  border: 1px solid var(--el-border-color-light);
}
</style>


<style scoped>

</style>
