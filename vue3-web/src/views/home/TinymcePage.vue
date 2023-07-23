<template>
  <div>
   <el-card class="m-2">
     <tinymce-comp @get-content="getContent" :id="id" :content-txt="text" ></tinymce-comp>
   </el-card>


  </div>
</template>

<script setup lang="ts">
import TinymceComp from "@/components/TinymceComp.vue";

const  id= ref('aaabbbcc')
function getContent(val){
  console.log(val)
}
const text =  ref(`sfsdfsdfdsfs`);
</script>
