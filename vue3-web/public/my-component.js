export default {
    data() {
        return { count: 0 }
    },
    template: `<div>count is {{ count }}</div>
    <button @click="count++">点击增加</button>
    `
}
