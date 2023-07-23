import Father from "@/components/Father.vue";
import FetchApi from "@/utils/request/FetchApi";

const VueTricks = defineComponent({
  name: "VueTricks",
  setup() {
    return () => {
      return (
        <div>
          <Father></Father>
        </div>
      );
    };
  },
});
export default VueTricks;
