<cn>
#### 类型
支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
</cn>

```vue
<template>
  <div>
    <Avatar :icon="HeartOutline" />
    <Avatar>
      <Icon :type="HeartOutline" />
    </Avatar>
    <Avatar>U</Avatar>
    <Avatar>USER</Avatar>
    <Avatar src="https://cdn.chuchur.com/img/icons/apple-icon-57x57.png" />
    <Avatar style="color: #f51212; background-color: #ffc57d">
      U
    </Avatar>
    <Avatar style="background-color:#d06868" :icon="HeartOutline" />
    <br/>
    <br/>
    <Avatar src="https://cdn.chuchur.com/img/chick.jpeg" :size="50"/>
    <Avatar src="https://cdn.chuchur.com/img/monkey.jpeg" shape="square"/>
  </div>
</template>
<script>
import { HeartOutline } from "kui-icons"
export default{
  data() {
    return {
      HeartOutline
    }
  }
}
</script>
```