import { a as FormGroup, L as Label, E as ErrorText, H as HelperText } from "./FormInput-DVqI9ei1.js";
import { o as openBlock, g as createBlock, w as withCtx, f as createTextVNode, t as toDisplayString, e as createCommentVNode, h as withDirectives, z as vModelSelect, b as createBaseVNode, j as renderSlot, n as normalizeClass, r as resolveComponent } from "./app-CxxfQWko.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const defaultClasses = "w-full border-medium-emphasis text-body h-10 px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary";
const _sfc_main = {
  props: {
    id: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: () => "text"
    },
    required: {
      type: Boolean,
      default: () => false
    },
    helperText: {
      type: String
    },
    errors: {
      type: Array
    },
    placeholder: {
      type: String
    },
    modelValue: {
      required: false,
      default: ""
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    FormGroup,
    Label,
    ErrorText,
    HelperText
  },
  data() {
    return {
      defaultClasses,
      selected: this.value
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
const _hoisted_1 = ["disabled", "id", "required", "placeholder"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Label = resolveComponent("Label");
  const _component_ErrorText = resolveComponent("ErrorText");
  const _component_HelperText = resolveComponent("HelperText");
  const _component_FormGroup = resolveComponent("FormGroup");
  return openBlock(), createBlock(_component_FormGroup, null, {
    default: withCtx(() => [
      $props.label ? (openBlock(), createBlock(_component_Label, {
        key: 0,
        errors: $props.errors,
        forId: $props.id
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.label), 1)
        ], void 0, true),
        _: 1
      }, 8, ["errors", "forId"])) : createCommentVNode("", true),
      withDirectives(createBaseVNode("select", {
        disabled: $props.loading || $props.disabled,
        class: normalizeClass([
          $data.defaultClasses,
          $props.disabled || $props.loading ? "opacity-50" : "",
          $props.loading ? "cursor-wait" : ""
        ]),
        id: $props.id,
        required: $props.required,
        placeholder: $props.placeholder,
        onInput: _cache[0] || (_cache[0] = ($event) => $options.updateValue($event.target.value)),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $props.modelValue = $event)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 42, _hoisted_1), [
        [vModelSelect, $props.modelValue]
      ]),
      $props.errors ? (openBlock(), createBlock(_component_ErrorText, { key: 1 }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.errors[0]), 1)
        ], void 0, true),
        _: 1
      })) : createCommentVNode("", true),
      $props.helperText && !$props.errors ? (openBlock(), createBlock(_component_HelperText, { key: 2 }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.helperText), 1)
        ], void 0, true),
        _: 1
      })) : createCommentVNode("", true)
    ], void 0, true),
    _: 3
  });
}
const FormSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  FormSelect as F
};
