<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180">
      <template #default="{ row }">
        <el-input v-model="row.name"></el-input>
      </template>
    </el-table-column>
    <el-table-column prop="address" label="Address" />
    <el-table-column prop="people.pet" label="pet" >
      <template #default="scope">
        <el-input v-model="scope.row.people.pet"></el-input>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    people: {
      pet: "stark",
      age: 11,
    },
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    people: {
      pet: "man",
      age: 11,
    },
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    people: {
      pet: "man",
      age: 11,
    },
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    people: {
      pet: "man",
      age: 11,
    },
  },
]);
</script>
