import { App } from "vue";

export function scrollDirective(app: App) {
  app.directive("scroll", {
    created: function (el, binding, vnode, oldVnode) {
      let w = el.offsetHeight,
        isLoading = false,
        cb_name = binding.expression,
        cb = vnode.context[cb_name];
      el.addEventListener("scroll", async () => {
        if (w + el.scrollTop + 10 >= el.firstChild.clientHeight && !isLoading) {
          isLoading = true;
          try {
            cb && (await cb());
          } catch (e) {
            console.error(e);
          }
          isLoading = false;
        }
      });
    },
  });
  app.directive("title", {
    mounted: function (el, binding) {
      document.title = binding.value;
    },
  });
}
