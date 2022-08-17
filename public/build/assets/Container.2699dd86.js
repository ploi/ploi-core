import { o as openBlock, c as createElementBlock, h as renderSlot, n as normalizeClass } from "./app.ca29ef16.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const baseClasses = "w-full px-4 sm:px-8 mx-auto";
const sizeClasses = {
  small: "max-w-sm",
  medium: "max-w-xl",
  base: "max-w-5xl",
  large: "max-w-screen-xl",
  fluid: "max-w-none"
};
const _sfc_main = {
  props: {
    size: {
      type: String,
      default: () => "base",
      validator: (size) => Object.keys(sizeClasses).includes(size)
    }
  },
  data() {
    return {
      baseClasses,
      sizeClasses
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([$data.baseClasses, $data.sizeClasses[$props.size]])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const Container = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Container as C
};
