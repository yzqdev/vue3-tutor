<cn>
#### 其他元素
分割线和不可用菜单项。
</cn>

```vue
<template>
  <Dropdown>
    <Button theme="light">
      分隔线 <Icon :type="ChevronDown" />
    </Button>
    <Menu slot="content">
      <MenuItem key="0">
        <a target="_blank" href="https://www.chuchur.com/">1st menu item</a>
      </MenuItem>
      <MenuItem key="1">
        <a target="_blank" href="https://react.k-ui.cn/">2nd menu item</a>
      </MenuItem>
      <MenuDivider />
      <MenuItem key="3" disabled>
        3rd menu item（disabled）
      </MenuItem>
    </Menu>
  </Dropdown>
</template>
<script>
import { ChevronDown } from 'kui-icons'
export default{
  data() {
    return {
      ChevronDown
    }
  }
}
</script>
```