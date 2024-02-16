import { o as openBlock, c as createElementBlock, b as createBaseVNode, j as renderSlot } from "./app-CxxfQWko.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {};
const _hoisted_1 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const IconMore = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  props: {
    as: {
      default: "inertia-link"
    },
    to: {
      type: String,
      required: false
    },
    method: {
      required: false,
      default: "get"
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click")),
    class: "flex items-center w-full h-10 px-6 whitespace-nowrap text-medium-emphasis text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none"
  }, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const DropdownListItemButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  DropdownListItemButton as D,
  IconMore as I
};
