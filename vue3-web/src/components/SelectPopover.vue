<template>
  <el-popover
      :visible="visible"
      :width="200"
      placement="bottom"
      title="Title"

  >
    <div v-for="item in lists" @click="setPopData(item)">
      <div :class="item.name==modelValue?'active':''" class="depart-item"> {{ item.name }}</div>
    </div>
    <template #reference>
      <el-input :model-value="modelValue" :placeholder="placeholder" :style="{width: width}" class="m-2"
                @click="visible=!visible">Hover to activate
      </el-input>
    </template>
  </el-popover>
</template>


<script lang="ts" setup>
import {ElMessage} from "element-plus";

let emit=defineEmits(['update:modelValue'])
let visible = ref(false)
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '180px'
  }, placeholder: {
    type: String,
    default: "请选择部门"
  }
})
let lists = ref([
  {name: 'StringString '},
  {name: 'baa'},
  {name: 'caa'},
])
function setPopData(item) {
  ElMessage.success("点击pop" + item.name)

  emit('update:modelValue', item.name)
  visible.value=!visible.value
}
</script>

<style lang="scss" scoped>

.depart-item {
  min-width: 140px;

  cursor: pointer;
}

.active {
  color: cyan;
}
</style>


<style scoped>

</style>
