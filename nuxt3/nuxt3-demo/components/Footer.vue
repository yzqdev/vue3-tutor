<template>
  <div class="footer-content">
    <ul>
      <li>ICP备案 ：渝ICP备18009901号-1</li>
      <li>Copyright <copyright-outlined /> 2014-2022</li>
      <li>版权所有 ：MoneyBoxs</li>
    </ul>
  </div>
</template>

<script setup>
import { CopyrightOutlined } from "@ant-design/icons-vue";
</script>
<style lang="less" scoped>
.footer-content {
  color: #909090;
  margin-top: 10px;
}
ul {
  padding: 0;
  li {
    list-style: none;
  }
}
</style>
