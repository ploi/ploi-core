import { o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, h as renderSlot, n as normalizeClass } from "./app-ca19f95c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$5 = {
  props: {
    caption: {
      type: String,
      required: true
    }
  }
};
const _hoisted_1$1 = { class: "w-full text-left table-auto text-small" };
const _hoisted_2 = { class: "sr-only" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", _hoisted_1$1, [
    createBaseVNode("caption", _hoisted_2, toDisplayString($props.caption), 1),
    renderSlot(_ctx.$slots, "default")
  ]);
}
const Table = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {};
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("thead", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const TableHead = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {};
const _hoisted_1 = { class: "pb-2" };
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("th", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const TableHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {};
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("tr", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const TableRow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("tbody", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const TableBody = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("td", {
    class: normalizeClass(["py-2", { "border-t border-low-emphasis": $props.border }])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const TableData = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Table as T,
  TableHead as a,
  TableHeader as b,
  TableRow as c,
  TableBody as d,
  TableData as e
};
