import { o as openBlock, c as createElementBlock, h as renderSlot, n as normalizeClass, b as createBaseVNode, g as createBlock, w as withCtx, f as createTextVNode, t as toDisplayString, e as createCommentVNode, a as createVNode, r as resolveComponent } from "./app.dd23b2e7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$6 = {};
const _hoisted_1$6 = { class: "flex flex-col space-y-1" };
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const FormGroup = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {
  props: {
    forId: {
      type: String,
      required: false
    },
    errors: {
      type: Array
    }
  }
};
const _hoisted_1$5 = ["for"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["text-small"]),
    for: $props.forId
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1$5);
}
const Label = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {};
const _hoisted_1$4 = { class: "text-danger" };
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("p", _hoisted_1$4, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const ErrorText = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {};
const _hoisted_1$3 = { class: "text-medium-emphasis text-small" };
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("p", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const HelperText = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  class: "bi bi-clipboard",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$1);
}
const IconClipboard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  class: "bi bi-key",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", { d: "M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4);
}
const IconKey = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
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
    errors: {
      type: Array
    },
    helperText: {
      type: String
    },
    placeholder: {
      type: String
    },
    modelValue: {
      required: false,
      default: ""
    },
    allowCopy: {
      required: false,
      default: false,
      type: Boolean
    },
    allowRandomString: {
      required: false,
      default: false,
      type: Boolean
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
    },
    autofocus: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    FormGroup,
    Label,
    ErrorText,
    HelperText,
    IconClipboard,
    IconKey
  },
  data() {
    return {
      defaultClasses,
      copied: false
    };
  },
  watch: {
    copied() {
      let vm = this;
      if (this.copied) {
        setTimeout(() => {
          vm.copied = false;
        }, 1250);
      }
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("update:modelValue", value);
    },
    copy() {
      this.copied = true;
      this.$copyText(this.value);
    },
    generateString() {
      this.$emit("input", this.randomString());
    }
  },
  computed: {
    copyText() {
      if (this.copied) {
        return this.__("Copied to clipboard");
      }
      return this.__("Copy");
    }
  }
};
const _hoisted_1 = ["id", "type", "required", "value", "disabled", "autofocus", "placeholder"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Label = resolveComponent("Label");
  const _component_IconClipboard = resolveComponent("IconClipboard");
  const _component_IconKey = resolveComponent("IconKey");
  const _component_ErrorText = resolveComponent("ErrorText");
  const _component_HelperText = resolveComponent("HelperText");
  const _component_FormGroup = resolveComponent("FormGroup");
  return openBlock(), createBlock(_component_FormGroup, { class: "relative" }, {
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
      $props.allowCopy ? (openBlock(), createElementBlock("button", {
        key: 1,
        type: "button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.copy && $options.copy(...args)),
        class: "flex items-center right-0 absolute text-xs text-medium-emphasis"
      }, [
        createVNode(_component_IconClipboard, { class: "mr-2" }),
        createTextVNode(" " + toDisplayString($options.copyText), 1)
      ])) : createCommentVNode("", true),
      $props.allowRandomString ? (openBlock(), createElementBlock("button", {
        key: 2,
        type: "button",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.generateString && $options.generateString(...args)),
        class: "flex items-center right-0 absolute text-xs text-medium-emphasis"
      }, [
        createVNode(_component_IconKey, { class: "mr-2" }),
        createTextVNode(" " + toDisplayString(_ctx.__("Generate")), 1)
      ])) : createCommentVNode("", true),
      createBaseVNode("input", {
        id: $props.id,
        class: normalizeClass([
          $data.defaultClasses,
          $props.disabled || $props.loading ? "opacity-50" : "",
          $props.loading ? "cursor-wait" : ""
        ]),
        type: $props.type,
        required: $props.required,
        value: $props.modelValue,
        onInput: _cache[2] || (_cache[2] = ($event) => $options.updateValue($event.target.value)),
        disabled: $props.loading || $props.disabled,
        autofocus: $props.autofocus,
        placeholder: $props.placeholder
      }, null, 42, _hoisted_1),
      $props.errors ? (openBlock(), createBlock(_component_ErrorText, { key: 3 }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.errors[0]), 1)
        ], void 0, true),
        _: 1
      })) : createCommentVNode("", true),
      $props.helperText && !$props.errors ? (openBlock(), createBlock(_component_HelperText, { key: 4 }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.helperText), 1)
        ], void 0, true),
        _: 1
      })) : createCommentVNode("", true)
    ], void 0, true),
    _: 1
  });
}
const FormInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ErrorText as E,
  FormInput as F,
  HelperText as H,
  Label as L,
  FormGroup as a
};
