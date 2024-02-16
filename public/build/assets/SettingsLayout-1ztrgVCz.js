import { o as openBlock, c as createElementBlock, j as renderSlot, e as createCommentVNode, b as createBaseVNode, n as normalizeClass } from "./app-CxxfQWko.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  props: {
    items: {
      type: Array,
      required: false
    },
    space: {
      type: String,
      default: "space-y-16"
    },
    mainColSpan: {
      type: String,
      default: "col-span-4 md:col-span-3"
    }
  }
};
const _hoisted_1 = { class: "grid grid-cols-4 gap-8 md:gap-16" };
const _hoisted_2 = {
  key: 0,
  class: "col-span-4 md:col-span-1"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !!_ctx.$slots.nav ? (openBlock(), createElementBlock("aside", _hoisted_2, [
      renderSlot(_ctx.$slots, "nav")
    ])) : createCommentVNode("", true),
    createBaseVNode("section", {
      class: normalizeClass($props.mainColSpan)
    }, [
      createBaseVNode("div", {
        class: normalizeClass($props.space)
      }, [
        renderSlot(_ctx.$slots, "segments")
      ], 2)
    ], 2)
  ]);
}
const SettingsLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  SettingsLayout as S
};
