<<<<<<<< HEAD:public/build/assets/Login.76b08252.js
import { T as TextDivider } from "./TextDivider.f06d5c66.js";
import { F as FormInput } from "./FormInput.541a08d4.js";
import { B as Button } from "./Button.482f5d57.js";
import { C as Container } from "./Container.44bb93ee.js";
import { c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, F as Fragment, r as resolveComponent, o as openBlock, t as toDisplayString, d as withModifiers, e as createCommentVNode, f as createTextVNode, g as createBlock } from "./app.67ed15d7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
========
import { T as TextDivider } from "./TextDivider-8ebb8335.js";
import { F as FormInput } from "./FormInput-f09111c3.js";
import { B as Button } from "./Button-938c2a59.js";
import { C as Container } from "./Container-45f4da93.js";
import { c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, F as Fragment, r as resolveComponent, o as openBlock, t as toDisplayString, d as withModifiers, e as createCommentVNode, f as createTextVNode, g as createBlock } from "./app-9a1c122c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
>>>>>>>> develop:public/build/assets/Login-0b8af846.js
const _sfc_main = {
  components: {
    TextDivider,
    FormInput,
    Button,
    Container
  },
  props: {
    errors: Object
  },
  data() {
    return {
      sending: false,
      form: {
        email: null,
        password: null,
        remember: null
      }
    };
  },
  mounted() {
    if (window.location.search.includes("demo=")) {
      this.form.email = "demo@ploi-core.io";
      this.form.password = "secret";
    }
  },
  methods: {
    submit() {
      this.$inertia.post(this.route("login"), {
        email: this.form.email,
        password: this.form.password,
        remember: this.form.remember
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
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Register ");
const _hoisted_7 = {
  key: 2,
  class: "flex justify-between"
};
const _hoisted_8 = { key: 0 };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Terms Of Service ");
const _hoisted_10 = { key: 1 };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Privacy Policy ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_TextDivider = resolveComponent("TextDivider");
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_Container = resolveComponent("Container");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_Head, null, {
      default: withCtx(() => [
        createBaseVNode("title", null, toDisplayString(_ctx.__("Login")), 1)
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
              createBaseVNode("h1", _hoisted_4, " Login to " + toDisplayString(_ctx.$page.props.settings.name), 1)
            ]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Email"),
              autofocus: true,
              errors: _ctx.$page.props.errors.email,
              modelValue: $data.form.email,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.email = $event),
              id: "email",
              type: "email",
              required: ""
            }, null, 8, ["label", "errors", "modelValue"]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Password"),
              modelValue: $data.form.password,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.password = $event),
              id: "password",
              type: "password",
              required: ""
            }, null, 8, ["label", "modelValue"]),
            createVNode(_component_Button, {
              variant: "primary",
              disabled: $data.sending,
              block: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Login")), 1)
              ], void 0, true),
              _: 1
            }, 8, ["disabled"]),
            createVNode(_component_Button, {
              as: "inertia-link",
              disabled: $data.sending,
              href: _ctx.route("password.request"),
              variant: "secondary",
              block: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Reset password")), 1)
              ], void 0, true),
              _: 1
            }, 8, ["disabled", "href"]),
            _ctx.$page.props.settings.allow_registration ? (openBlock(), createBlock(_component_TextDivider, { key: 0 }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Or")), 1)
              ], void 0, true),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_5, [
              _ctx.$page.props.settings.allow_registration ? (openBlock(), createBlock(_component_Button, {
                key: 0,
                as: "inertia-link",
                href: _ctx.route("register"),
                variant: "secondary",
                disabled: $data.sending,
                block: ""
              }, {
                default: withCtx(() => [
                  _hoisted_6
                ], void 0, true),
                _: 1
              }, 8, ["href", "disabled"])) : createCommentVNode("", true)
            ]),
            _ctx.$page.props.settings.has_terms ? (openBlock(), createBlock(_component_TextDivider, {
              key: 1,
              "without-text": true
            })) : createCommentVNode("", true),
            _ctx.$page.props.settings.has_terms || _ctx.$page.props.settings.has_privacy ? (openBlock(), createElementBlock("div", _hoisted_7, [
              _ctx.$page.props.settings.has_terms ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createVNode(_component_inertia_link, {
                  href: _ctx.route("page.show", "terms-of-service"),
                  class: "text-small text-medium-emphasis hover:text-high-emphasis border-b border-dotted"
                }, {
                  default: withCtx(() => [
                    _hoisted_9
                  ], void 0, true),
                  _: 1
                }, 8, ["href"])
              ])) : createCommentVNode("", true),
              _ctx.$page.props.settings.has_privacy ? (openBlock(), createElementBlock("div", _hoisted_10, [
                createVNode(_component_inertia_link, {
                  href: _ctx.route("page.show", "privacy-policy"),
                  class: "text-small text-medium-emphasis hover:text-high-emphasis border-b border-dotted"
                }, {
                  default: withCtx(() => [
                    _hoisted_11
                  ], void 0, true),
                  _: 1
                }, 8, ["href"])
              ])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ], 32)
        ], void 0, true),
        _: 1
      })
    ])
  ], 64);
}
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Login as default
};
