import { c as createElementBlock, o as openBlock, b as createBaseVNode, f as createCommentVNode, j as renderSlot } from "./app-CHTZvQi3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  props: {
    withoutText: {
      type: Boolean,
      default: false
    }
  }
};
const _hoisted_1 = { class: "relative flex items-center justify-center" };
const _hoisted_2 = {
  key: 0,
  class: "relative px-2 py-1 bg-surface-1 text-body text-medium-emphasis"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-x-0 w-full border-t border-low-emphasis" }, null, -1)),
    !$props.withoutText ? (openBlock(), createElementBlock("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true)
  ]);
}
const TextDivider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  TextDivider as T
};
