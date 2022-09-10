import { T as TextDivider } from "./TextDivider.ab7f414c.js";
import { F as FormInput } from "./FormInput.7a518a32.js";
import { B as Button } from "./Button.3d31b0b0.js";
import { C as Container } from "./Container.f0b4c619.js";
import { u as useNotification } from "./notification.fa833402.js";
import { c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, F as Fragment, r as resolveComponent, o as openBlock, t as toDisplayString, d as withModifiers, e as createCommentVNode, f as createTextVNode } from "./app.997ea3ab.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
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
        email: null
      }
    };
  },
  methods: {
    useNotification,
    submit() {
      this.sending = true;
      this.$inertia.post(this.route("password.email"), {
        email: this.form.email
      }, {
        onFinish: () => {
          this.sending = false;
          if (!Object.keys(this.$page.props.errors).length) {
            this.form.email = null;
            useNotification({
              variant: "success",
              title: this.__("Reset password"),
              message: this.$page.props.flash.success
            });
          }
        }
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
            onSubmit: _cache[1] || (_cache[1] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
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
const Email = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Email as default
};
