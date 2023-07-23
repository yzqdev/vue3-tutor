<cn>
#### 组合垂直布局
组合垂直布局
</cn>

```vue
<template>
  <div>
    <p>Selected:{{data}}</p>
    <br />
    <Button @click="data=''" size="small">Clear</Button>
    <Button @click="data='apple'" size="small">Select apple</Button>
    <br />
    <br />
    <RadioGroup v-model="data" direction="vertical">
      <Radio label="Apple" value="apple" />
      <Radio label="Orange" value="orange" />
      <Radio label="Banana" value="banana" />
      <Radio label="Grape" value="grape" disabled/>
      <Radio label="Pear" value="pear" disabled/>
    </RadioGroup>
    <br/>
    <p>{{cities}}</p>
    <br/>
    <RadioGroup :options="options" v-model="cities"  direction="vertical"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      data: 'apple',
      options: [
        { label: 'Beijing', value: 'beijing' },
        { label: 'Shenzhen', value: 'shenzhen' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Guangzhou', value: 'guangzhou' },
        { label: 'Wuhan', value: 'wuhan' },
      ],
      cities:'wuhan'
    };
  }
}
</script>
```