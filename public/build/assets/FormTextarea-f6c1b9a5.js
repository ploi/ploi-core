import { a as FormGroup, L as Label, E as ErrorText, H as HelperText } from "./FormInput-3abc31fd.js";
import { o as openBlock, g as createBlock, w as withCtx, a as createVNode, f as createTextVNode, t as toDisplayString, b as createBaseVNode, n as normalizeClass, e as createCommentVNode, r as resolveComponent } from "./app-65f297f4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const defaultClasses = "w-full border-medium-emphasis text-body px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary";
const _sfc_main = {
  props: {
    id: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: () => false
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
    rows: {
      default: 3,
      required: false
    },
    helperText: {
      type: String
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
      defaultClasses
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
const _hoisted_1 = ["id", "required", "value", "rows", "placeholder"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Label = resolveComponent("Label");
  const _component_ErrorText = resolveComponent("ErrorText");
  const _component_HelperText = resolveComponent("HelperText");
  const _component_FormGroup = resolveComponent("FormGroup");
  return openBlock(), createBlock(_component_FormGroup, null, {
    default: withCtx(() => [
      createVNode(_component_Label, {
        errors: $props.errors,
        forId: $props.id
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.label), 1)
        ], void 0, true),
        _: 1
      }, 8, ["errors", "forId"]),
      createBaseVNode("textarea", {
        id: $props.id,
        class: normalizeClass([$data.defaultClasses]),
        required: $props.required,
        value: $props.modelValue,
        rows: $props.rows,
        onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value)),
        placeholder: $props.placeholder
      }, null, 42, _hoisted_1),
      $props.errors ? (openBlock(), createBlock(_component_ErrorText, { key: 0 }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.errors[0]), 1)
        ], void 0, true),
        _: 1
      })) : createCommentVNode("", true),
      $props.helperText && !$props.errors ? (openBlock(), createBlock(_component_HelperText, { key: 1 }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.helperText), 1)
        ], void 0, true),
        _: 1
      })) : createCommentVNode("", true)
    ], void 0, true),
    _: 1
  });
}
const FormTextarea = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  FormTextarea as F
};
