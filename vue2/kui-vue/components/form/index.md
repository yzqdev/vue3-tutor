## Form API
| 属性               | 说明                                                                                               | 类型                  | 默认值 |
|--------------------|----------------------------------------------------------------------------------------------------|-----------------------|--------|
| model              | 表单数据对象                                                                                       | Object                | -      |
| rules              | 表单验证规则，                                                                                     | Boolean               | false  |
| name               | 表单名称，会作为表单字段 id 前缀使用                                                               | String                | -      |
| <s>label-width</s> | <s>表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值</s> `3.1.5版本后不支持` | Number,String         | -      |
| labelCol           | label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 3, offset: 12}                     | Object                | -      |
| wrapperCol         | 控件 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 15, offset: 12}                     | Object                | -      |
| label-align        | 表单域标签的位置，可选值为 left、right、top                                                        | String                | right  |
| submit             | 提交表单，并验证 ,手动提交表单时触发                                                               | Function({valid,model}) | -      |
| change             | 表单数据变动时触发                                                                                 | Function(model)       | -      |
| test               | 对表单单个字段进行校验的方法                                                                       | Function              | -      |
| reset              | 对整个表单进行重置，将所有字段值重置为空并移除校验结果                                             | Function              | -      |

## FormItem API

| 属性  | 说明                                        | 类型   | 默认值 |
|-------|---------------------------------------------|--------|--------|
| prop  | 对应表单域 model 里的字段，表单验证必须字段 | String | -      |
| label | 标签文本                                    | String | -      |
| rules | 表单验证规则                                | Array  | -      |

## rules API

| 属性      | 说明                                                                                                                   | 类型     | 默认值 |
|-----------|------------------------------------------------------------------------------------------------------------------------|----------|--------|
| required  | 是否必填字段                                                                                                           | Boolean  | false  |
| trigger   | 校验触发方式，提供  `blur`失去焦点，  `change`值被改变两种方式触发                                                     | String   | blur   |
| message   | 校验不通过提示语                                                                                                       | String   | -      |
| validator | 自定义校验方法，可参见示例                                                                                             | Function | -      |
| type      | 数据类型校验，提供三种校验方式 `mobile`手机，  `mail`邮箱，  `number`数字类型判断                                      | String   | -      |
| pattern   | 自定义正则校验，比喻密码强度包含数字，字母，特殊符号可以这么写  `/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,20}/` | String   | -      |
| min       | 字段长度最小值校验                                                                                                     | Number   | -      |
| max       | 字段长度最大值校验                                                                                                     | Number   | -      |