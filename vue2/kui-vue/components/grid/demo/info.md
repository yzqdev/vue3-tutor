# Grid 栅格
采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题
两个概念，行 `row` 和列 `col` ，具体使用方法如下：
- 使用 `row` 在水平方向创建一行
- 将一组 `col` 插入在 `row` 中
- 在每个 `col` 中，键入自己的内容
- 通过设置 `col` 的 `span` 参数，指定跨越的范围，其范围是1到24
- 每个 `row` 中的 `col` 总和应该为24

> 注意：非 template/render 模式下，需使用 k-col。
## 代码演示