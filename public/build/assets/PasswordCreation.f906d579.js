import { T as TextDivider } from "./TextDivider.5d9b42bc.js";
import { F as FormInput } from "./FormInput.8ab0f203.js";
import { B as Button } from "./Button.f40f5f07.js";
import { C as Container } from "./Container.23db6f9d.js";
import { u as useNotification } from "./notification.4c298cac.js";
import { c as createElementBlock, a as createVNode, w as withCtx, r as resolveComponent, o as openBlock, b as createBaseVNode, d as createCommentVNode, t as toDisplayString, e as createTextVNode, g as withModifiers } from "./app.d0c43a70.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = {
  metaInfo() {
    return {
      title: `${this.__("Create password")}`
    };
  },
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
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_Container = resolveComponent("Container");
  return openBlock(), createElementBlock("div", _hoisted_1, [
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
  ]);
}
const PasswordCreation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  PasswordCreation as default
};
