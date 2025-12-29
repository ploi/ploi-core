import TopBar from "./TopBar-CaW932mH.js";
import { C as Container } from "./Container-BR3kS7h2.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-CUayiPKI.js";
import { B as Button } from "./Button-D85XmybQ.js";
import { I as IconStorage, a as IconGlobe, b as IconBox } from "./IconStorage-DK76idww.js";
import { M as ModalContainer, a as Modal } from "./ModalContainer-CUbvmCnV.js";
import { F as FormInput } from "./FormInput-BG2dzWVN.js";
import { F as FormSelect } from "./FormSelect-DkreD1hx.js";
import { F as FormActions } from "./Form-2ls8lox5.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, b as createBaseVNode, t as toDisplayString, d as withModifiers, c as createElementBlock, F as Fragment, i as renderList, g as createTextVNode } from "./app-CHTZvQi3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-FXvai7zi.js";
import "./notification-C6LhWZWI.js";
const _sfc_main = {
  layout: MainLayout,
  components: {
    TopBar,
    Container,
    Content,
    Page,
    PageHeader,
    PageHeaderTitle,
    PageBody,
    Button,
    List,
    ListItem,
    StatusBubble,
    NotificationBadge,
    IconBox,
    IconGlobe,
    IconStorage,
    Modal,
    ModalContainer,
    FormInput,
    FormSelect,
    FormActions
  },
  props: {
    profile: Object,
    countries: Object
  },
  data() {
    return {
      form: {
        name: this.profile.name,
        email: this.profile.email,
        language: this.profile.language,
        address: this.profile.address,
        country: this.profile.country,
        zip: this.profile.zip,
        city: this.profile.city
      },
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Profile"),
          to: this.route("profile.index")
        }
      ]
    };
  },
  methods: {
    submit() {
      this.$inertia.patch(this.route("profile.update"), this.form, {
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false
      });
    }
  }
};
const _hoisted_1 = ["value", "textContent"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_FormSelect = resolveComponent("FormSelect");
  const _component_Button = resolveComponent("Button");
  const _component_FormActions = resolveComponent("FormActions");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("Profile")), 1)
        ], void 0, true),
        _: 1
      }),
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createBaseVNode("form", {
                    class: "space-y-4",
                    onSubmit: _cache[7] || (_cache[7] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                  }, [
                    createVNode(_component_FormInput, {
                      label: _ctx.__("Name"),
                      errors: _ctx.$page.props.errors.name,
                      modelValue: $data.form.name,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.name = $event)
                    }, null, 8, ["label", "errors", "modelValue"]),
                    createVNode(_component_FormInput, {
                      label: _ctx.__("Email"),
                      type: "email",
                      errors: _ctx.$page.props.errors.email,
                      modelValue: $data.form.email,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.email = $event)
                    }, null, 8, ["label", "errors", "modelValue"]),
                    createVNode(_component_FormSelect, {
                      label: _ctx.__("Language"),
                      errors: _ctx.$page.props.errors.language,
                      modelValue: $data.form.language,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.language = $event)
                    }, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createBaseVNode("option", { value: "en" }, "English", -1),
                        createBaseVNode("option", { value: "nl" }, "Dutch", -1),
                        createBaseVNode("option", { value: "fr" }, "French", -1),
                        createBaseVNode("option", { value: "da" }, "Danish", -1),
                        createBaseVNode("option", { value: "nb-no" }, "Norwegian", -1),
                        createBaseVNode("option", { value: "pt" }, "Portuguese", -1),
                        createBaseVNode("option", { value: "zh" }, "Chinese", -1)
                      ]), void 0, true),
                      _: 1,
                      __: [8]
                    }, 8, ["label", "errors", "modelValue"]),
                    createVNode(_component_FormInput, {
                      label: _ctx.__("Address"),
                      type: "text",
                      errors: _ctx.$page.props.errors.address,
                      modelValue: $data.form.address,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.address = $event)
                    }, null, 8, ["label", "errors", "modelValue"]),
                    createVNode(_component_FormSelect, {
                      label: _ctx.__("Country"),
                      errors: _ctx.$page.props.errors.country,
                      modelValue: $data.form.country,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.country = $event)
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList($props.countries, (country, code) => {
                          return openBlock(), createElementBlock("option", {
                            value: code,
                            textContent: toDisplayString(country)
                          }, null, 8, _hoisted_1);
                        }), 256))
                      ], void 0, true),
                      _: 1
                    }, 8, ["label", "errors", "modelValue"]),
                    createVNode(_component_FormInput, {
                      label: _ctx.__("ZIP"),
                      type: "text",
                      errors: _ctx.$page.props.errors.zip,
                      modelValue: $data.form.zip,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.form.zip = $event)
                    }, null, 8, ["label", "errors", "modelValue"]),
                    createVNode(_component_FormInput, {
                      label: _ctx.__("City"),
                      type: "text",
                      errors: _ctx.$page.props.errors.city,
                      modelValue: $data.form.city,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.form.city = $event)
                    }, null, 8, ["label", "errors", "modelValue"]),
                    createVNode(_component_FormActions, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                          ], void 0, true),
                          _: 1
                        })
                      ], void 0, true),
                      _: 1
                    })
                  ], 32)
                ], void 0, true),
                _: 1
              })
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      })
    ], void 0, true),
    _: 1
  });
}
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Index as default
};
