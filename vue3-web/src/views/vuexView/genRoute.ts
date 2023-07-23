import { RouteRecordRaw } from "vue-router";
import kebabcase from "lodash.kebabcase";
const viewModules = import.meta.glob("./views/*.vue");

const nameFromPath = (path: string) => path.replace(/^.*\/(\w+)\.vue$/, "$1");

export const pages: RouteRecordRaw[] = Object.keys(viewModules).map((path) => {
  const name = nameFromPath(path);
  return {
    name,
    path: name === "404" ? "/:patchMatch(.*)*" : "/pinia/" + kebabcase(name),
    component: viewModules[path],
    meta: {
      title: name,
      hide: name === "404",
    },
  };
});
