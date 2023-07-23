import SimpleButton from "@/views/jsx/SimpleButton";
import { ElButton, ElInput } from "element-plus";
import FetchApi from "@/utils/request/FetchApi";

const Vuejsx = defineComponent({
  name: "Vuejsx",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const forms = ref(["hello", "world", "你好"]);

    // let ak = '8gs3aXoFG9GAHW3S4NfGEGvp6GfEA4yK'

    const ak = ref("70b8494576a5868ce4f6cb5f8233f3d8");
    const location = ref("位置");
    const showBtn = ref(false);
    async function getLocation() {
      let res = await FetchApi.get(`/map/v3/?address=北京市海淀区上地十街10号&output=json&ak=${ak.value}&callback=showLocation`);
      console.log(res);
      location.value = JSON.stringify(res, null, "  ");
    }

    getLocation();
    console.log(`%c上面是地址`, `color:red;font-size:16px;background:transparent`);
    return () => {
      return (
        <>
          <ElButton onClick={() => getLocation()}>点击获取位置</ElButton>
          <div>{location}</div>
          <div>
            <ElInput modelValue={props.modelValue} onUpdate:modelValue={(value) => emit("update:modelValue", value)}></ElInput>
          </div>
          {showBtn.value ? (
            ""
          ) : (
            <div>
              {forms.value.map((i) => {
                return <SimpleButton msg={i} />;
              })}
            </div>
          )}
        </>
      );
    };
  },
});
export default Vuejsx;
