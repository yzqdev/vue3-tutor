<cn>
#### 浅色主题
浅色主题
</cn>

```vue
<template>
  <Button type="primary" theme="light">Primary</Button>
  <Button type="danger" theme="light">Danger</Button>
  <Button type="warning" theme="light">Warning</Button>
  <Button theme="light">Default</Button>
  <Button theme="light">Default</Button>
  <br/>
  <br/>
  <Button type="primary" theme="light" :icon="Camera" />
  <Button type="danger" theme="light" :icon="Camera" />
  <Button type="warning" theme="light" :icon="Camera" />
  <Button theme="light" :icon="Camera" />
  <br/>
  <br/>
  <Button type="primary" theme="light" :icon="Camera" shape="circle" />
  <Button type="danger" theme="light" :icon="Camera" shape="circle" />
  <Button type="warning" theme="light" :icon="Camera" shape="circle" />
  <Button theme="light" :icon="Camera" shape="circle" />
</template>
<script>
import { Camera } from 'kui-icons'
export default{
  data() {
    return {
      Camera
    }
  }
}
</script>
```