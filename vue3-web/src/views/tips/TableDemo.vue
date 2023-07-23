<template>
  <el-card shadow="never" class="m-4">
    <el-button type="primary" @click="addOneRow">添加一行</el-button>
    <el-table :data="tableData">
      <el-table-column label="名字" prop="name" width="80"></el-table-column>
      <el-table-column label="资源" prop="source">
        <template #default="{row,$index}">
          <div v-for="(item,index) in row.source" class="mb-2">
            <el-select v-model="item.name" @change="changeSupports($event,$index,index)" clearable>
              <el-option :label="option.label" :value="option.value" v-for="option in sourceOptions"></el-option>
            </el-select>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="支持人员" prop="support">
        <template #default="{row,$index}">
          <div v-for="item in row.support" class="mb-2 w-full" >
            <el-select multiple v-model="item.name" class="w-full" clearable>
              <el-option :label="option.label" :value="option.value" v-for="option in supportOptions"></el-option>
            </el-select>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{row,$index}">
          <el-button type="primary" @click="addSource(row,$index)">添加一个</el-button>
          <el-button>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>

   <div class="mt-2">
     <el-input type="textarea" :rows="20" v-model="formatJson"></el-input>
   </div>

    </div>
  </el-card>
</template>

<script setup lang="ts">
import {json} from "stream/consumers";
const formatJson=computed(() => {
  return JSON.stringify(tableData,null,2)
})
const supportOptions =  ref<any>([])
const sourceOptions =  ref([
  {label: 'aaaa', value: 'aaa'},
  {label: 'bbb', value: 'bbb'},
  {label: 'ccc', value: 'ccc'},
])
const tableData =  ref([
  {
    name: 'first',
    source: [
      {name: 'bbbbb'}
    ],
    support: [
      {name: 'support'}
    ]
  }
])

function changeSupports(val:string,rowIndex:number,index:number ) {
  // tableData[rowIndex].source[index].name=[]
  tableData.value[rowIndex].support[index].name=[]

  switch (val) {
    case 'aaa':
      supportOptions.value = [
        {label: 'a1', value: 'a1'},
        {label: 'b2', value: 'b1'},
        {label: 'c2', value: 'c1'},
      ]
      break
    case "bbb":
      supportOptions.value = [
        {label: 'a2', value: 'a2'},
        {label: 'b2', value: 'b2'},
        {label: 'c2', value: 'c2'},
      ]
      break
    case 'ccc':
      supportOptions.value = [
        {label: 'a3', value: 'a3'},
        {label: 'b3', value: 'b3'},
        {label: 'c3', value: 'c3'},
      ]
      break
  }

}

function addSource(row: any, index: number) {
  const data = tableData.value[index]
  data.source.push({name: 'bbaacc'})
  data.support.push({name: 'bbaacc'})
}
function addOneRow(){
  tableData.value.push(  {
    name: 'first',
    source: [
      {name: 'bbbbb'}
    ],
    support: [
      {name: 'support'}
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
