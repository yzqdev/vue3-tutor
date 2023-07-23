<cn>
#### 切换菜单类型
展示动态切换模式。
</cn>

```vue
<template>
  <div>
    <Switch @change="changeMode"/> Change Mode
    <Switch true-text="dark" false-text="light" @change="changeTheme"/> Change Theme
    <br/>
    <br/>
    <Menu v-model="current" :open-keys="openKeys" :theme="theme" :mode="mode"  style="width:256px">
      <MenuItem key="1-1" :icon="Mail">Option 1</MenuItem>
      <MenuItem key="1-2" :icon="Grid"><span>Option 2</span></MenuItem>
      <SubMenu key="sub2" :icon="Heart" title="Navigation Two">
        <MenuItem key="2-1">Option 5</MenuItem>
        <MenuItem key="2-2">Option 6</MenuItem>
        <SubMenu key="sub2-1" title="SubMenu">
          <MenuItem key="2-3">Option 7</MenuItem>
          <MenuItem key="2-4">Option 8</MenuItem>
        </SubMenu>
      </SubMenu>
       <SubMenu key="sub3" :icon="Settings" title="Navigation Three">
        <MenuItem key="3-1">Option 9</MenuItem>
        <MenuItem key="3-2">Option 10</MenuItem>
        <MenuItem key="3-3">Option 11</MenuItem>
        <MenuItem key="3-4">Option 12</MenuItem>
      </SubMenu>
    </Menu>
  </div>
</template>
<script>
import { Mail, Heart, Settings, Grid } from "kui-icons";
export default {
  data() {
    return {
      Mail, Heart, Settings, Grid,
      current: ['1-1'],
      openKeys:['sub2'],
      theme:'light',
      mode:'inline'
    }
  },
  methods:{
    changeMode(checked){
      this.mode = checked ? 'vertical' : 'inline'
    },
    changeTheme(checked){
      this.theme = checked ? 'dark' : 'light';
    }
  }
}
</script>
```
