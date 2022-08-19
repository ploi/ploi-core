import { o as openBlock, g as createBlock, w as withCtx, h as renderSlot, n as normalizeClass, i as resolveDynamicComponent } from "./app.291acac5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const baseClasses = "items-center justify-center font-medium capitalize rounded select-none focus:outline-none";
const flexClasses = "flex w-full text-body";
const inlineFlexClasses = "inline-flex text-small";
const variantClasses = {
  primary: "bg-primary text-on-primary shadow",
  danger: "bg-danger text-on-danger shadow",
  secondary: "bg-surface-2 text-high-emphasis"
};
const sizeClasses = {
  sm: "h-8 px-2",
  md: "h-10 px-5"
};
const _sfc_main = {
  props: {
    as: {
      default: () => "button"
    },
    href: {
      default: () => null
    },
    block: {
      type: Boolean,
      default: () => false
    },
    variant: {
      type: String,
      default: () => "primary",
      validator: (variant) => Object.keys(variantClasses).includes(variant)
    },
    size: {
      type: String,
      default: "md"
    },
    loading: {
      default: null
    },
    disabled: {
      default: null
    }
  },
  data() {
    return {
      baseClasses,
      flexClasses,
      inlineFlexClasses,
      variantClasses,
      sizeClasses
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.as), {
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click")),
    class: normalizeClass([
      $data.baseClasses,
      $data.sizeClasses[$props.size],
      $data.variantClasses[$props.variant],
      $props.block ? $data.flexClasses : $data.inlineFlexClasses,
      $props.disabled || $props.loading ? "opacity-50" : "",
      $props.loading ? "cursor-wait" : ""
    ]),
    disabled: $props.loading || $props.disabled,
    href: $props.href
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ], void 0, true),
    _: 3
  }, 8, ["class", "disabled", "href"]);
}
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Button as B
};
