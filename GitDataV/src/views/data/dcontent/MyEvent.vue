<template>
  <div class="myevent-box">
    <table class="table">
      <thead>
        <tr>
          <th class="col-md-2">{{ $t("data.myevent.table.time") }}</th>
          <th class="col-md-2">{{ $t("data.myevent.table.type") }}</th>
          <th class="col-md-4">{{ $t("data.myevent.table.repos") }}</th>
          <th class="col-md-4">{{ $t("data.myevent.table.remarks") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="`MyEvent`+index">
          <td class="col-md-2">
            {{ item.created_at.substring(0, 10) }}
          </td>
          <td class="col-md-2">{{ item.type }}</td>
          <td class="col-md-4">{{ item.repo.name }}</td>
          <td class="col-md-4">{{ item.payload.commits }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
let props=defineProps({
  data: Array
})
let getData=$ref({})
watch(props.data,(value, oldValue, onCleanup) => {
  if (value) {
     getData = value;
  }
})
</script>

<style lang="scss">
.myevent-box {
  width: 100%;
  height: 100%;
  padding: 15px;
  overflow: hidden;
  margin-top: -10px;
  .table {
    table-layout: fixed;
    tr {
      border: none;
      th {
        font-size: 1.5rem;
        text-align: center;
        background: #053a98;
        color: #fffdef;
        border: 1px solid#0086B3;
      }
      td {
        font-size: 1.4rem;
        text-align: center;
        border: 1px solid#0086B3;
        color: #19d4ae;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &:nth-child(odd) {
        td {
          color: #5ab1ef;
        }
      }
    }
  }
}
</style>
