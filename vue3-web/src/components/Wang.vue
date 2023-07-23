<template>
  <el-button type="primary" @click="getToolbar">获取toolbar</el-button>
  <div style="border: 1px solid #ccc" class="mt-2">

    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
    />
    <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onChange="handleChange"
        @onCreated="handleCreated"
    />
  </div>

</template>
<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import {onBeforeUnmount, ref, shallowRef, onMounted, defineEmits, defineProps} from 'vue'
import {Editor, Toolbar,} from '@wangeditor/editor-for-vue'
import {DomEditor, createEditor} from '@wangeditor/editor'

const mode =  ref('simple')

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const emits = defineEmits(['getContent'])
// 内容 HTML

const props = defineProps({
  text: String,
  finish: Boolean
})

const valueHtml = ref()
watch(props, (value, oldValue, onCleanup) => {
  if (props.finish) {
    console.log('watch 开始')
    console.log(props)
    valueHtml.value = props.text
    console.log(valueHtml)
  }
})
// 模拟 ajax 异步获取内容
onMounted(() => {
  // setTimeout(() => {
  //   valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  // }, 1500)
  // const editor = createEditor({})
  // console.log(editor.getAllMenuKeys())

})

function getToolbar() {
  const editor = editorRef.value
  const toolbar = DomEditor.getToolbar(editor)

  const curToolbarConfig = toolbar.getConfig()
  console.log(`%c获取toolbar`, `color:red;font-size:16px;background:transparent`)
  console.log(curToolbarConfig.toolbarKeys)
}

const toolbarConfig = {}
toolbarConfig.excludeKeys = [
  'headerSelect',
  'uploadImage',
  'insertVideo',
  'codeSelectLang',
  'group-image',
  'codeBlock',
  'code',
  'insertTable',
  'undo', 'redo', 'clearStyle', 'insertLink', 'todo',
  'codeSelectLang',
  'uploadVideo',
  'group-more-style' // 排除菜单组，写菜单组 key 的值即可
]
const editorConfig = {placeholder: '请输入内容...'}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value

  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

function handleChange(val) {
  // emits('update:text',val)
  emits("getContent", valueHtml)
}


</script>
