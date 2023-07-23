<template>
  <div>
    <el-form :model="numberPageForm">
      <ElFormItem label="分子"><ElInput v-model="numberPageForm.fenzi" placeholder="请输入数字"></ElInput></ElFormItem>
      <ElFormItem label="分母"><ElInput v-model="numberPageForm.fenmu" placeholder="请输入数字"></ElInput></ElFormItem>
      <el-form-item label="计算后的值">
        <el-input :disabled="true" v-model="numberPageForm.textCalc">
          <template #prepend>{{ `${numberPageForm.fenzi}/${numberPageForm.fenmu}` }}</template>
        </el-input>
      </el-form-item>
      <el-button type="primary" @click="toPercent">测试</el-button>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { getPercent } from "@/utils/strUtil";
interface NumberPageForm {
  text: string | number;
  fenzi: string | number;
  fenmu: string | number;
  textCalc: string | number;
}
const numberPageForm =  reactive<NumberPageForm>({
  text: 0,
  fenzi: 10,
  fenmu: 3,
  textCalc: 0,
});
function toPercent() {
  numberPageForm.textCalc = getPercent(numberPageForm.fenzi, numberPageForm.fenmu);
  console.log(numberPageForm.textCalc);
}
</script>
