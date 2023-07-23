<cn>
#### 状态点
用于表示状态的小圆点。
</cn>

```vue
<template>
  <div class="demo-dot">
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="warning" text="warning" />
  </div>
</template>
<style scoped>
.demo-dot .k-badge{
  margin-right:20px;
}
</style>
```