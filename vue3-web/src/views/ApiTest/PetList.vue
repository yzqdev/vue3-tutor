<template>
  <el-card class="m-2">
    <el-dialog v-model="addPetVisible" title="添加宠物"
               width="40%"
               :before-close="handleClose">
      <el-form :model="addPetEntity" ref="petFormRef" label-width="100">
        <el-form-item prop="name" label="名字">
          <el-input v-model="addPetEntity.name"></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="性别">
          <el-input v-model="addPetEntity.sex"></el-input>
        </el-form-item>
        <el-form-item prop="age" label="年龄">
          <el-input v-model="addPetEntity.age"></el-input>
        </el-form-item>
        <el-form-item prop="url" label="url">
          <el-input v-model="addPetEntity.url"></el-input>
        </el-form-item>
        <el-form-item prop="owner" label="主人">
          <el-input v-model="addPetEntity.owner"></el-input>
        </el-form-item>

      </el-form>
      <template #footer>

        <el-button v-if="addPetEntity.id" type="primary" @click="updateOnePet">确定</el-button>
        <el-button v-else type="primary" @click="addPet">确定</el-button>
      </template>
    </el-dialog>
    <el-button class="mb-2" type="primary" @click="addPetVisible=true">添加</el-button>
    <el-button class="mb-2" type="primary" @click="genRandom">添加模拟数据</el-button>
    <el-button class="mb-2" type="danger" @click="deleteAllPet">删除所有</el-button>
    <el-table :data="petList" border flexible fit>

      <el-table-column prop="id" label="id"  width="60"></el-table-column>
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="sex" label="性别"  width="60"></el-table-column>
      <el-table-column prop="age" label="年龄" width="60"></el-table-column>
      <el-table-column prop="url" label="url"></el-table-column>
      <el-table-column prop="owner" label="主人"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间"></el-table-column>
      <el-table-column label="操作">
        <template #default="{row}">
          <el-button type="primary" @click="updateOnePetShow(row)">更新</el-button>
          <el-button type="danger" @click="deleteOnePet(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </el-card>
</template>

<script setup lang="ts">
import {Pet} from "@/type/storeTypes";
import {petApi} from "@/utils/request/petApi";
import {ElMessage, FormInstance} from "element-plus";
import {cloneDeep} from 'lodash'

const addPetVisible =ref<Boolean>(false)
const petFormRef=ref<FormInstance>()
const petList = ref<Pet[]>()
const addPetEntity =  ref<Partial<Pet>>({
  name: '毛毛',
  sex: 'man',
  age: 2,
  url: 'http://www.baidu.com',
  owner: 'yzq'
})

function handleClose() {
  if (!petFormRef.value) {

  }else {
    petFormRef.value.resetFields()
  }

  addPetVisible.value = false
}
async function deleteAllPet(){
  let res=await petApi.deleteAllPetApi()
  getAllPets()
}
async function genRandom() {
  try {
    let res = await petApi.genRandomPetApi()
    getAllPets()
  } catch (e) {

  }
}

async function deleteOnePet(row: Pet) {
  try {
    let res = await petApi.deletePetApi(row.id)
    getAllPets()
  } catch (e) {

  }

}

function updateOnePetShow(row) {

  addPetEntity.value = cloneDeep(row)
  addPetVisible.value = true
}

async function updateOnePet(row: Pet) {
  try {
    let res = await petApi.updatePetApi(addPetEntity.value)
    getAllPets()
    addPetVisible.value = false
  } catch (e) {

  }
}

async function getAllPets() {
  try {
    let res = await petApi.searchAllPetApi()
    petList.value = res
  } catch (e) {
    console.error(e)
  }
}

async function addPet() {
  try {
    let res = await petApi.addPetApi(addPetEntity.value)
    ElMessage.success(JSON.stringify(res))
    getAllPets()
    addPetVisible.value = false
  } catch (e) {
    console.log(e)
  }
}

onBeforeMount(() => {
  getAllPets()
})
</script>

<style lang="scss" scoped>

</style>
