<script>
import Info from "./info.md";
import Base from "./base.md";
import WithNumber from "./withNumber.md";
import Formatter from "./formatter.md";
import Marks from "./marks.md";
import Vertical from "./vertical.md";
import Reverse from "./reverse.md";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-slider">
        <Info class="typo" />
        <Base />
        <WithNumber />
        <Formatter />
        <Marks />
        <Vertical />
        <Reverse />
        <CN class="typo" />
      </div>
    );
  },
};
</script>
