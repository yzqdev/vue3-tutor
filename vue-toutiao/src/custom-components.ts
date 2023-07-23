
import IconSvg from "@/components/Icon-svg/index.vue";
import Github from "@/components/Github.vue";
import NoneData from "@/components/NoneData/index.vue";
import NoneData2 from "@/components/NoneData/index2.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import SwitchCheck from "@/components/Switch.vue";

import CircleLoading from "@/components/CircleLoading/index.vue";
import FullCircleLoading from "@/components/CircleLoading/full-loading.vue";
import DefaultLoading from "@/components/DefaultLoading/index.vue";
import Alert from "@/components/Dialog/index";
import { showLoading, hideLoading } from "@/components/DefaultLoading/index.js";
import {
  showCircleLoading,
  hideCircleLoading
} from "@/components/CircleLoading/full-loading";
import { App } from "vue";

const install = (app :App)=> {
  app.component("Icon", IconSvg);
  app.component("Github", Github);
  app.component("NoneData", NoneData);
  app.component("NoneData2", NoneData2);
  app.component("HeaderBar", HeaderBar);
  app.component("SwitchCheck", SwitchCheck);
  app.component("CircleLoading", CircleLoading);
  app.component("FullCircleLoading", FullCircleLoading);
  app.component("DefaultLoading", DefaultLoading);

  app.config.globalProperties.$alert = Alert;
  app.config.globalProperties.$showLoading = showLoading;
  app.config.globalProperties.$hideLoading = hideLoading;
  app.config.globalProperties.$showCircleLoading = showCircleLoading;
  app.config.globalProperties.$hideCircleLoading = hideCircleLoading;
};

export default install;
