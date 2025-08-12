import { B as Button } from "./Button-BYc82Y1k.js";
import { c as createElementBlock, o as openBlock, n as normalizeClass, r as resolveComponent, b as createBaseVNode, a as createVNode, w as withCtx, g as createTextVNode, t as toDisplayString, d as withModifiers, f as createCommentVNode, F as Fragment, i as renderList } from "./app-B9WIo_5_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { F as FormInput } from "./FormInput-43oIPTin.js";
const defaultClasses = "w-full border-medium-emphasis text-body h-10 max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary";
const _sfc_main$1 = {
  props: {
    id: {
      type: String,
      required: true
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
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      defaultClasses
    };
  }
};
const _hoisted_1$1 = ["id", "type", "required", "placeholder"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    class: normalizeClass([$data.defaultClasses]),
    id: $props.id,
    type: $props.type,
    required: $props.required,
    placeholder: $props.placeholder
  }, null, 10, _hoisted_1$1);
}
const Input = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: { FormInput, Input, Button },
  props: {
    secret: Object,
    recoveryCodes: Array,
    enabled: Boolean
  },
  data() {
    return {
      sending: false,
      form: {
        code: ""
      }
    };
  },
  methods: {
    enable2FA() {
      this.$inertia.put(this.route("profile.security.two-factor-authentication.create"));
    },
    confirm2FA() {
      this.$inertia.patch(this.route("profile.security.two-factor-authentication.confirm"), this.form, {
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false
      });
    },
    regenerateRecoveryCodes() {
      this.$inertia.patch(this.route("profile.security.two-factor-authentication.regenerate-recovery-codes"), {}, {
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false
      });
    },
    disable2FA() {
      this.$inertia.delete(this.route("profile.security.two-factor-authentication.destroy"), {}, {
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false
      });
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 2,
  class: "space-y-4"
};
const _hoisted_5 = {
  key: 0,
  class: "space-y-4"
};
const _hoisted_6 = { class: "" };
const _hoisted_7 = { class: "block mt-2" };
const _hoisted_8 = { class: "bg-gray-50 rounded-md font-mono px-4 py-3" };
const _hoisted_9 = ["textContent"];
const _hoisted_10 = { class: "mt-2 flex gap-x-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  const _component_FormInput = resolveComponent("FormInput");
  return !$props.secret.string ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("form", {
      onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => $options.enable2FA && $options.enable2FA(...args), ["prevent"]))
    }, [
      createVNode(_component_Button, { loading: $data.sending }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.__("Enable two-factor authentication")), 1)
        ], void 0, true),
        _: 1
      }, 8, ["loading"])
    ], 32)
  ])) : !$props.enabled ? (openBlock(), createElementBlock("div", _hoisted_2, [
    createBaseVNode("p", null, toDisplayString(_ctx.__("Please scan the QR-code with your authentication app to confirm. ")), 1),
    createBaseVNode("div", {
      innerHTML: $props.secret.qr_code
    }, null, 8, _hoisted_3),
    createBaseVNode("form", {
      onSubmit: _cache[2] || (_cache[2] = withModifiers((...args) => $options.confirm2FA && $options.confirm2FA(...args), ["prevent"])),
      class: "space-y-4"
    }, [
      createVNode(_component_FormInput, {
        label: _ctx.__("Enter the confirmation code"),
        autofocus: true,
        errors: _ctx.$page.props.errors.code,
        required: "",
        modelValue: $data.form.code,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.code = $event)
      }, null, 8, ["label", "errors", "modelValue"]),
      createVNode(_component_Button, { loading: $data.sending }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.__("Confirm code")), 1)
        ], void 0, true),
        _: 1
      }, 8, ["loading"])
    ], 32)
  ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
    $props.recoveryCodes.length !== 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
      createBaseVNode("div", null, [
        createBaseVNode("strong", _hoisted_6, toDisplayString(_ctx.__("Recovery codes")), 1),
        createBaseVNode("p", null, toDisplayString(_ctx.__("Please store your recovery codes safely. When you lose access to both your Authenticator app and recovery codes, you might become locked out of your account forever.")), 1),
        createBaseVNode("strong", _hoisted_7, toDisplayString(_ctx.__("Your recovery codes will only be displayed once.")), 1)
      ]),
      createBaseVNode("ul", _hoisted_8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.recoveryCodes, (recoveryCode) => {
          return openBlock(), createElementBlock("li", {
            key: recoveryCode.code,
            textContent: toDisplayString(recoveryCode.code)
          }, null, 8, _hoisted_9);
        }), 128))
      ])
    ])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_10, [
      createBaseVNode("form", {
        onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.regenerateRecoveryCodes && $options.regenerateRecoveryCodes(...args), ["prevent"]))
      }, [
        createVNode(_component_Button, { loading: $data.sending }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.__("Regenerate recovery codes")), 1)
          ], void 0, true),
          _: 1
        }, 8, ["loading"])
      ], 32),
      createBaseVNode("form", {
        onSubmit: _cache[4] || (_cache[4] = withModifiers((...args) => $options.disable2FA && $options.disable2FA(...args), ["prevent"]))
      }, [
        createVNode(_component_Button, {
          variant: "danger",
          loading: $data.sending
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.__("Disable two factor authentication")), 1)
          ], void 0, true),
          _: 1
        }, 8, ["loading"])
      ], 32)
    ])
  ]));
}
const TwoFactorAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  TwoFactorAuthentication as default
};
