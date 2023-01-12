<<<<<<<< HEAD:public/build/assets/Reset.d5c232ca.js
import { T as TextDivider } from "./TextDivider.f06d5c66.js";
import { F as FormInput } from "./FormInput.541a08d4.js";
import { B as Button } from "./Button.482f5d57.js";
import { C as Container } from "./Container.44bb93ee.js";
import { u as useNotification } from "./notification.544829a1.js";
import { c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, F as Fragment, r as resolveComponent, o as openBlock, t as toDisplayString, d as withModifiers, e as createCommentVNode, f as createTextVNode } from "./app.67ed15d7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
========
import { T as TextDivider } from "./TextDivider-8ebb8335.js";
import { F as FormInput } from "./FormInput-f09111c3.js";
import { B as Button } from "./Button-938c2a59.js";
import { C as Container } from "./Container-45f4da93.js";
import { u as useNotification } from "./notification-c544471b.js";
import { c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, F as Fragment, r as resolveComponent, o as openBlock, t as toDisplayString, d as withModifiers, e as createCommentVNode, f as createTextVNode } from "./app-9a1c122c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
>>>>>>>> develop:public/build/assets/Reset-ddea9d5f.js
const _sfc_main = {
  components: {
    TextDivider,
    FormInput,
    Button,
    Container
  },
  props: {
    token: String,
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
      this.$inertia.post(this.route("password.update"), {
        email: this.form.email,
        token: this.token,
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
const _hoisted_5 = { class: "space-y-3" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_TextDivider = resolveComponent("TextDivider");
  const _component_Container = resolveComponent("Container");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_Head, null, {
      default: withCtx(() => [
        createBaseVNode("title", null, toDisplayString(_ctx.__("Reset password")), 1)
      ], void 0, true),
      _: 1
    }),
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_Container, { size: "small" }, {
        default: withCtx(() => [
          createBaseVNode("form", {
            class: "space-y-4",
            onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
          }, [
            createBaseVNode("div", _hoisted_2, [
              _ctx.$page.props.settings.logo ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "h-14",
                src: _ctx.$page.props.settings.logo
              }, null, 8, _hoisted_3)) : createCommentVNode("", true),
              createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.__("Reset password")), 1)
            ]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Email"),
              errors: _ctx.$page.props.errors.email,
              modelValue: $data.form.email,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.email = $event),
              id: "email",
              type: "email",
              required: ""
            }, null, 8, ["label", "errors", "modelValue"]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Password"),
              errors: _ctx.$page.props.errors.password,
              modelValue: $data.form.password,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.password = $event),
              id: "password",
              type: "password",
              required: ""
            }, null, 8, ["label", "errors", "modelValue"]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Confirm password"),
              errors: _ctx.$page.props.errors.password_confirmation,
              modelValue: $data.form.password_confirmation,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.password_confirmation = $event),
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
                createTextVNode(toDisplayString(_ctx.__("Reset")), 1)
              ], void 0, true),
              _: 1
            }, 8, ["disabled"]),
            createVNode(_component_TextDivider, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Or")), 1)
              ], void 0, true),
              _: 1
            }),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_Button, {
                as: "inertia-link",
                href: _ctx.route("login"),
                variant: "secondary",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Login")), 1)
                ], void 0, true),
                _: 1
              }, 8, ["href"])
            ])
          ], 32)
        ], void 0, true),
        _: 1
      })
    ])
  ], 64);
}
const Reset = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Reset as default
};
