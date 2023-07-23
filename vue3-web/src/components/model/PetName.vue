<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <input class="form-control" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
</template>
<style lang="scss" scoped>
.form-control {
  display: block;
  width: 100%;
  padding: 6px 12px;


  font-weight: 400;
  line-height: 24px;
  color: #212529;
  background-color: white;
  background-clip: padding-box;
  border: 1px solid #dee2e6;
  border-radius: .375rem;
  appearance: none; // Fix appearance for date inputs in Safari
  transition: all 0.3s;
  &:focus{
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
}
</style>
