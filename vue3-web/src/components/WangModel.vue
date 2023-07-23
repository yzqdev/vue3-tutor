<template>
  <div style="border: 1px solid #ccc;width:100%">
    <Toolbar
        style="border-bottom: 1px solid #ccc;width:100%"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
    />
    <Editor
        style="height: 500px; overflow-y: hidden;;width:100%"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onChange="onChange"
    />
  </div>
</template>
<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const props = defineProps({
  content:{
    type:String,
    default:''
  }
});
const emits = defineEmits(["update:content"]);
const editor = ref(null)
const mode = ref('simple')
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref(props.content)

// 模拟 ajax 异步获取内容
onMounted(() => {
  // 这里延时了200毫秒才成功，直接赋值失败
  setTimeout(() => {
    valueHtml.value = props.content
  }, 200);
})

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
  'undo', 'redo','clearStyle','insertLink','todo',
  'codeSelectLang',
  'uploadVideo',
  'group-more-style' // 排除菜单组，写菜单组 key 的值即可
]
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const onChange = (e)=>{
  emits("update:content",e.getHtml())
}
const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>
