<cn>
#### 自定义颜色盘
可以定义默认的颜色盘
</cn>

```vue
<template>
  <div class="demo-color-picker">
    <ColorPicker showMode v-model="color" :defalut-colors="colors" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: '#f44336',
      colors: ['#9c27b0','red','blue'],
    };
  }
}
</script> 
```