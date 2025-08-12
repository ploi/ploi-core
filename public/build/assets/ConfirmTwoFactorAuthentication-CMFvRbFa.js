import { T as TextDivider } from "./TextDivider-9k7Ruy3O.js";
import { F as FormInput } from "./FormInput-43oIPTin.js";
import { B as Button } from "./Button-BYc82Y1k.js";
import { C as Container } from "./Container-puWPPyw6.js";
import { r as resolveComponent, c as createElementBlock, o as openBlock, a as createVNode, b as createBaseVNode, w as withCtx, t as toDisplayString, d as withModifiers, e as createBlock, f as createCommentVNode, g as createTextVNode, F as Fragment } from "./app-B9WIo_5_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
        code: null
      }
    };
  },
  methods: {
    submit() {
      this.$inertia.post(this.route("auth.confirm-2fa.confirm"), this.form, {
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
const _hoisted_5 = {
  key: 1,
  class: "flex justify-between"
};
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 1 };
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
            onSubmit: _cache[1] || (_cache[1] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
          }, [
            createBaseVNode("div", _hoisted_2, [
              _ctx.$page.props.settings.logo ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "h-14",
                src: _ctx.$page.props.settings.logo
              }, null, 8, _hoisted_3)) : createCommentVNode("", true),
              createBaseVNode("h1", _hoisted_4, " Confirm access to " + toDisplayString(_ctx.$page.props.settings.name), 1)
            ]),
            createVNode(_component_FormInput, {
              label: _ctx.__("Code"),
              autofocus: true,
              errors: _ctx.$page.props.errors.code,
              modelValue: $data.form.code,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.code = $event),
              id: "code",
              required: ""
            }, null, 8, ["label", "errors", "modelValue"]),
            createVNode(_component_Button, {
              variant: "primary",
              disabled: $data.sending,
              block: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.__("Confirm")), 1)
              ], void 0, true),
              _: 1
            }, 8, ["disabled"]),
            _ctx.$page.props.settings.has_terms ? (openBlock(), createBlock(_component_TextDivider, {
              key: 0,
              "without-text": true
            })) : createCommentVNode("", true),
            _ctx.$page.props.settings.has_terms || _ctx.$page.props.settings.has_privacy ? (openBlock(), createElementBlock("div", _hoisted_5, [
              _ctx.$page.props.settings.has_terms ? (openBlock(), createElementBlock("div", _hoisted_6, [
                createVNode(_component_inertia_link, {
                  href: _ctx.route("page.show", "terms-of-service"),
                  class: "text-small text-medium-emphasis hover:text-high-emphasis border-b border-dotted"
                }, {
                  default: withCtx(() => _cache[2] || (_cache[2] = [
                    createTextVNode(" Terms Of Service ", -1)
                  ]), void 0, true),
                  _: 1,
                  __: [2]
                }, 8, ["href"])
              ])) : createCommentVNode("", true),
              _ctx.$page.props.settings.has_privacy ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createVNode(_component_inertia_link, {
                  href: _ctx.route("page.show", "privacy-policy"),
                  class: "text-small text-medium-emphasis hover:text-high-emphasis border-b border-dotted"
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode(" Privacy Policy ", -1)
                  ]), void 0, true),
                  _: 1,
                  __: [3]
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
const ConfirmTwoFactorAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ConfirmTwoFactorAuthentication as default
};
