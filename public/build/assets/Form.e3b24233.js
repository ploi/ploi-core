import { o as openBlock, c as createElementBlock, h as renderSlot, n as normalizeClass, d as withModifiers } from "./app.997ea3ab.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = {
  props: {
    justify: {
      type: String,
      default: "justify-start"
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["flex items-center space-x-2", [$props.justify]])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const FormActions = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("form", {
    class: "space-y-4",
    onSubmit: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("submit"), ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 32);
}
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  FormActions as F,
  Form as a
};
