import { c as createElementBlock, o as openBlock, b as createBaseVNode, j as renderSlot } from "./app-B9WIo_5_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "px-8 pb-8 space-y-6 border rounded border-low-emphasis" };
const _hoisted_2 = { class: "-mt-4" };
const _hoisted_3 = { class: "inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title" };
const _hoisted_4 = { class: "mt-1 text-small text-medium-emphasis" };
const _hoisted_5 = { class: "space-y-4" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("section", _hoisted_1, [
    createBaseVNode("header", _hoisted_2, [
      createBaseVNode("h2", _hoisted_3, [
        renderSlot(_ctx.$slots, "title")
      ]),
      createBaseVNode("p", _hoisted_4, [
        renderSlot(_ctx.$slots, "subtitle")
      ])
    ]),
    createBaseVNode("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "form"),
      renderSlot(_ctx.$slots, "content")
    ])
  ]);
}
const SettingsSegment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  SettingsSegment as S
};
