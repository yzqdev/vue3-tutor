

<template>
  <div class="edit_wrap" v-show="EditorShow">
    <Editor v-model="editorContent" :id="id" :init="initOptions" @focus="focus" />
  </div>
</template>
<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";
import { ref, watch, onMounted } from "vue";



const props = defineProps({
  id: {
    type: String,
    default: "edit_input",
  },
  contentTxt: {
    type: String,
    default: "",
  },
  fetchFinish:{
    type:Boolean,
    default:true
  }

});
const EditorShow = ref(false);
//双向绑定编辑器数据
const editorContent =  ref<string>('' );
watch(()=>props.fetchFinish,(value, oldValue, onCleanup) => {
  if (value) {
    editorContent.value=props.contentTxt
  }
})
// 子传父事件
const emit = defineEmits(["getContent",'focus']);
const revert_data = (data: any) => {
  emit("getContent", data );
};
watch(
    () => editorContent ,
    (initInfo, prevInitInfo) => {
      revert_data(editorContent);
    }
);

//tinymce选项配置
const initOptions = ref({
  //挂载点
  selector: props.id ? "#" + props.id : "#edit_input",
  //自动聚焦
  auto_focus: false,
  //空内容时展示
  placeholder: "",
  //引入站外插件
  external_plugins: {},
  //解决缓存问题
  cache_suffix: "?v=1.0.0",
  //编辑器区域自定义样式
  content_style: "img {max-width:100%;}",
  //插件配置
  plugins: [
    "wordcount",
    "table",
    "searchreplace",
    "preview",
    "pagebreak",
    "insertdatetime",
    "fullscreen",
    "emoticons",
    "codesample",
    "charmap",
    "autosave",
    "autolink",
    "anchor",
    "advlist",
    "autolink",
    "image",
    "lists",
    "preview",
    "code",
  ],
  //工具栏配置
  toolbar1:
      "|forecolor backcolor|bold italic strikethrough underline|alignleft aligncenter alignright|bullist|numlist|fullscreen",
  //工具栏模式
  toolbar_mode: "sliding",
  //设置插件时间格式
  insertdatetime_formats: ["%H点%M分", "%Y年%m月%d日"],
  //保存在localstorage下的文件的保存时间
  autosave_retention: "10080m",
  //菜单栏配置
  menubar: false,
  //设置工具栏在顶部
  fixed_toolbar_container: "#edit_input",
  //宽高设置
  width: "100%",
  height: "100%",
  //设置皮肤
  skin: "oxide",
  //主题设置
  theme: "silver",
  //编辑器大小改变
  resize: false,
  //隐藏状态栏底部图标
  branding: false,
  statusbar: false, // 隐藏底部状态栏
  //隐藏状态栏左侧路径
  elementpath: false,
  //允许代码保留注释
  allow_conditional_comments: true,
  // 禁止复制图片
  paste_data_images: false,
  //字体列表
  font_formats:
      "苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif",
  //移动端适配
  mobile: {
    menubar: false,
  },
  //初始化前执行函数
  setup: function (editor: any) {
    EditorShow.value = false;
  },
  //初始化后执行回调
  init_instance_callback: function (editor: any) {
    EditorShow.value = true;
  },
});
const focus = () => {
  emit("focus");
};
</script>
<style lang="scss" scoped>
.edit_wrap {
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  #edit_input,
  #edit_outer {
    flex-grow: 10;
    align-self: stretch;
  }
}
</style>

