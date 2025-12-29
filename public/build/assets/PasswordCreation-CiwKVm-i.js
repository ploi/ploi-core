import { T as TextDivider } from "./TextDivider-CRLCuQQS.js";
import { F as FormInput } from "./FormInput-BG2dzWVN.js";
import { B as Button } from "./Button-D85XmybQ.js";
import { C as Container } from "./Container-BR3kS7h2.js";
import { u as useNotification } from "./notification-C6LhWZWI.js";
import { r as resolveComponent, c as createElementBlock, o as openBlock, a as createVNode, b as createBaseVNode, w as withCtx, t as toDisplayString, d as withModifiers, f as createCommentVNode, g as createTextVNode, F as Fragment } from "./app-CHTZvQi3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  components: {
    TextDivider,
    FormInput,
    Button,
    Container
  },
  props: {
    email: String
  },
  data() {
    return {
      sending: false,
      form: {
        email: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  methods: {
    useNotification,
    submit() {
      this.$inertia.post(this.route("password-creation.start", {
        email: this.email
      }), {
        password: this.form.password,
        password_confirmation: this.form.password_confirmation
      }, {
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false
      });
    }
  }
};
const _hoisted_1 = { class: "flex items-center justify-center w-full min-h-screen" };
const _hoisted_2 = { class: "flex flex-col items-center space-y-5" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "font-semibold text-center text-title" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_Container = resolveComponent("Container");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_Head, null, {
      default: withCtx(() => [
        createBaseVNode("title", null, toDisplayString(_ctx.__("Create password")), 1)
      ], void 0, true),
      _: 1
    }),
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_Container, { size: "small" }, {
        default: withCtx(() => [
          createBaseVNode("form", {
            class: "space-y-4",
            onSubmit: _cache[2] || (_cache[2] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
          }, [
            createBaseVNode("div", _hoisted_2, [
              _ctx.$page.props.settings.logo ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "h-14",
                src: _ctx.$page.props.settings.logo
              }, null, 8, _hoisted_3)) : createCommentVNode("", true),
              createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.__("Create password")), 1)
            ]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Password"),
              errors: _ctx.$page.props.errors.password,
              modelValue: $data.form.password,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.password = $event),
              id: "password",
              type: "password",
              required: ""
            }, null, 8, ["label", "errors", "modelValue"]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Confirm password"),
              errors: _ctx.$page.props.errors.password_confirmation,
              modelValue: $data.form.password_confirmation,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.password_confirmation = $event),
              id: "password_confirmation",
              type: "password",
              required: ""
            }, null, 8, ["label", "errors", "modelValue"]),
            createVNode(_component_Button, {
              variant: "primary",
              disabled: $data.sending,
              block: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Start")), 1)
              ], void 0, true),
              _: 1
            }, 8, ["disabled"])
          ], 32)
        ], void 0, true),
        _: 1
      })
    ])
  ], 64);
}
const PasswordCreation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  PasswordCreation as default
};
