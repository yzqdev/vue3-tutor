<template>
  <div class="hello">
    <h2>{{ text }}</h2>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-form ref="formRef" :model="form" label-width="80px">
             <el-form-item>
               <el-input v-model="form.pet"></el-input>
             </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>

    </el-row>
    <el-form   :model="formPost" label-width="80px">
      <el-form-item>
        <el-input v-model="formPost.pet"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="formPostFun">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form><el-form   :model="formdataPost" label-width="80px">
      <el-form-item>
        <el-input v-model="formdataPost.pet"></el-input>
      </el-form-item>
    <el-form-item>
      <el-upload
          class="avatar-uploader"
action="/api/pet/formdata"
          v-model="fileList"
          :show-file-list="true"
          :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >

        <el-icon   class="avatar-uploader-icon"> <Plus /></el-icon>
      </el-upload>
    </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="formdataPostFun">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">

import fetchApi from "@/plugins/request/FetchApi";
import instance from "@/plugins/request/http";
import {petFormApi, petFormdataApi} from "@/api/pet";
import {ElMessage, UploadProps, UploadUserFile} from "element-plus";
let firstName = $ref("foo");
let text = $ref("这是测试");
let lastName = $ref("bar");
let form = $ref({
   pet:'cccc'
});
let fileList=$ref<UploadUserFile[]>( )
let formdataPost=$ref({pet:'aaaa'})
let formPost=$ref( {pet:'bbbb'})
async function onSubmit() {
let res=await instance.post('/pet/json',form)
  console.log(`%c获取结构`,`color:red;font-size:16px;background:transparent`)
  console.log(res.data)
}
const beforeAvatarUpload  = async (fileObject ) => {
  // console.log(fileList)
  // let formdata=new FormData()
  // formdata.append("file", fileObject )
  // console.log(formdata)
  // let res=await  petFormdataApi(formdata)
  // console.log(res)
  return true
}
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  console.log(`%c上传成功`,`color:red;font-size:16px;background:transparent`)

   console.log(response)
}
async function formPostFun(){
  let res=await petFormApi(formPost)
  console.log(res)
}
async function formdataPostFun(){
  let formdata=new FormData()
  formdata.append("data",formdataPost.pet)
  let res=await  petFormdataApi(formdata)
  console.log(res)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  margin: 0 200px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
