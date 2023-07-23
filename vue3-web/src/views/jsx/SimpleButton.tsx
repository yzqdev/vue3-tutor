import { ElMessage } from "element-plus";

const SimpleButton = defineComponent({
  props: {
    msg: {
      type: String,
      default: "按钮",
    },
  },
  setup(props) {
    console.log(props);
  },
  render() {
    function sayHello(msg: string) {
      ElMessage.success(msg);
    }

    return (
      <>
        <button class="m-2 bg-cyan-300 w-[100px] h-[60px]" onClick={() => sayHello(this.msg)}>
          {this.msg}
        </button>
      </>
    );
  },
});

export default SimpleButton;
