import { T as TextDivider } from "./TextDivider-B-8gwSCW.js";
import { F as FormInput, E as ErrorText } from "./FormInput-Ba17K5sb.js";
import { B as Button } from "./Button-BO2x471h.js";
import { C as Container } from "./Container-j8zTIzpm.js";
import { u as useNotification } from "./notification-DO_TsGM0.js";
import { r as resolveComponent, c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, F as Fragment, o as openBlock, t as toDisplayString, d as withModifiers, e as createCommentVNode, h as withDirectives, v as vModelCheckbox, g as createBlock, f as createTextVNode } from "./app-B3WRWW1p.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  components: {
    TextDivider,
    FormInput,
    Button,
    Container,
    ErrorText
  },
  data() {
    return {
      sending: false,
      form: {
        terms: false,
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  methods: {
    useNotification,
    submit() {
      this.$inertia.post(this.route("register"), this.form, {
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
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  for: "terms_required",
  class: "ml-2 text-sm"
};
const _hoisted_7 = { class: "space-y-3" };
const _hoisted_8 = {
  key: 2,
  class: "flex justify-between"
};
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_ErrorText = resolveComponent("ErrorText");
  const _component_Button = resolveComponent("Button");
  const _component_TextDivider = resolveComponent("TextDivider");
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_Container = resolveComponent("Container");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_Head, null, {
      default: withCtx(() => [
        createBaseVNode("title", null, toDisplayString(_ctx.__("Register")), 1)
      ], void 0, true),
      _: 1
    }),
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_Container, { size: "small" }, {
        default: withCtx(() => [
          createBaseVNode("form", {
            class: "space-y-4",
            onSubmit: _cache[5] || (_cache[5] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
          }, [
            createBaseVNode("div", _hoisted_2, [
              _ctx.$page.props.settings.logo ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "h-14",
                src: _ctx.$page.props.settings.logo
              }, null, 8, _hoisted_3)) : createCommentVNode("", true),
              createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.__("Register")), 1)
            ]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Name"),
              errors: _ctx.$page.props.errors.name,
              modelValue: $data.form.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.name = $event),
              id: "name",
              type: "text",
              required: ""
            }, null, 8, ["label", "errors", "modelValue"]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Email"),
              errors: _ctx.$page.props.errors.email,
              modelValue: $data.form.email,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.email = $event),
              id: "email",
              type: "email",
              required: ""
            }, null, 8, ["label", "errors", "modelValue"]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Password"),
              errors: _ctx.$page.props.errors.password,
              modelValue: $data.form.password,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.password = $event),
              id: "password",
              type: "password",
              required: ""
            }, null, 8, ["label", "errors", "modelValue"]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Confirm password"),
              errors: _ctx.$page.props.errors.password_confirmation,
              modelValue: $data.form.password_confirmation,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.password_confirmation = $event),
              id: "password_confirmation",
              type: "password",
              required: ""
            }, null, 8, ["label", "errors", "modelValue"]),
            _ctx.$page.props.settings.accept_terms_required ? (openBlock(), createElementBlock("div", _hoisted_5, [
              withDirectives(createBaseVNode("input", {
                id: "terms_required",
                class: "form-checkbox",
                type: "checkbox",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.terms = $event)
              }, null, 512), [
                [vModelCheckbox, $data.form.terms]
              ]),
              createBaseVNode("label", _hoisted_6, toDisplayString(_ctx.__("Accept terms of service")), 1),
              _ctx.$page.props.errors.terms ? (openBlock(), createBlock(_component_ErrorText, { key: 0 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$page.props.errors.terms[0]), 1)
                ], void 0, true),
                _: 1
              })) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            createVNode(_component_Button, {
              variant: "primary",
              disabled: $data.sending,
              block: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Register")), 1)
              ], void 0, true),
              _: 1
            }, 8, ["disabled"]),
            createVNode(_component_TextDivider, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Or")), 1)
              ], void 0, true),
              _: 1
            }),
            createBaseVNode("div", _hoisted_7, [
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
            ]),
            _ctx.$page.props.settings.has_terms ? (openBlock(), createBlock(_component_TextDivider, {
              key: 1,
              "without-text": true
            })) : createCommentVNode("", true),
            _ctx.$page.props.settings.has_terms || _ctx.$page.props.settings.has_privacy ? (openBlock(), createElementBlock("div", _hoisted_8, [
              _ctx.$page.props.settings.has_terms ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createVNode(_component_inertia_link, {
                  href: _ctx.route("page.show", "terms-of-service"),
                  class: "text-small text-medium-emphasis hover:text-high-emphasis border-b border-dotted"
                }, {
                  default: withCtx(() => _cache[6] || (_cache[6] = [
                    createTextVNode(" Terms Of Service ")
                  ]), void 0, true),
                  _: 1
                }, 8, ["href"])
              ])) : createCommentVNode("", true),
              _ctx.$page.props.settings.has_privacy ? (openBlock(), createElementBlock("div", _hoisted_10, [
                createVNode(_component_inertia_link, {
                  href: _ctx.route("page.show", "privacy-policy"),
                  class: "text-small text-medium-emphasis hover:text-high-emphasis border-b border-dotted"
                }, {
                  default: withCtx(() => _cache[7] || (_cache[7] = [
                    createTextVNode(" Privacy Policy ")
                  ]), void 0, true),
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
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Register as default
};
