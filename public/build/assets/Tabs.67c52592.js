import { c as createElementBlock, F as Fragment, k as renderList, o as openBlock, a as createVNode, w as withCtx, e as createTextVNode, t as toDisplayString, n as normalizeClass, r as resolveComponent } from "./app.f54fbe13.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = {
  props: {
    items: Array
  }
};
const _hoisted_1 = { class: "-ml-4 space-y-1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  return openBlock(), createElementBlock("ul", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
      return openBlock(), createElementBlock("li", null, [
        createVNode(_component_inertia_link, {
          class: normalizeClass(["flex items-center h-10 px-4 font-medium text-medium-emphasis", { "rounded shadow text-primary bg-surface-3": item.active }]),
          href: item.to
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(item.title), 1)
          ], void 0, true),
          _: 2
        }, 1032, ["class", "href"])
      ]);
    }), 256))
  ]);
}
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Tabs as default
};
