<<<<<<<< HEAD:public/build/assets/Settings.168928d6.js
import TopBar from "./TopBar.544193fc.js";
import { C as Container } from "./Container.44bb93ee.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.da88ac2b.js";
import { B as Button } from "./Button.482f5d57.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.b8642876.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer.c73e321c.js";
import { F as FormInput } from "./FormInput.541a08d4.js";
import { F as FormSelect } from "./FormSelect.02de001d.js";
import { F as FormActions } from "./Form.55885a08.js";
import { u as useConfirm } from "./confirm.91e5714b.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, j as withDirectives, v as vModelCheckbox, f as createTextVNode, d as withModifiers } from "./app.67ed15d7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.8304c776.js";
import "./notification.544829a1.js";
========
import TopBar from "./TopBar-149e0829.js";
import { C as Container } from "./Container-45f4da93.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-8649910c.js";
import { B as Button } from "./Button-938c2a59.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-18f5d16d.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer-87ab727e.js";
import { F as FormInput } from "./FormInput-f09111c3.js";
import { F as FormSelect } from "./FormSelect-f8b36700.js";
import { F as FormActions } from "./Form-125b83ab.js";
import { u as useConfirm } from "./confirm-eb12c83b.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, j as withDirectives, v as vModelCheckbox, f as createTextVNode, d as withModifiers } from "./app-9a1c122c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./TabBar-ad9b2a96.js";
import "./notification-c544471b.js";
>>>>>>>> develop:public/build/assets/Settings-efc6bba8.js
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
    profile: Object
  },
  data() {
    return {
      form: {
        theme: this.profile.theme,
        keyboard_shortcuts: this.profile.keyboard_shortcuts
      },
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Profile"),
          to: this.route("profile.index")
        },
        {
          title: this.__("Settings"),
          to: this.route("profile.settings.index")
        }
      ]
    };
  },
  methods: {
    submit() {
      this.$inertia.patch(this.route("profile.settings.update"), this.form, {
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false
      });
    },
    deleteAccount() {
      useConfirm({
        title: this.__("Are you sure?"),
        message: `Are you sure you want to remove your account? All data will be deleted and services will be detached.`,
        onConfirm: () => {
          this.$inertia.delete(this.route("profile.delete-account"));
        }
      });
    }
  }
};
const _hoisted_1 = { value: "light" };
const _hoisted_2 = { value: "dark" };
const _hoisted_3 = { value: "auto" };
const _hoisted_4 = {
  for: "keyboard_shortcuts",
  class: "ml-2 text-sm"
};
const _hoisted_5 = { class: "text-small mt-1 text-medium-emphasis" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "border-t border-low-emphasis" }, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, " You can remove your account here. This will remove all data of your account. ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
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
          createBaseVNode("title", null, toDisplayString(_ctx.__("Settings")), 1)
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
                    onSubmit: _cache[2] || (_cache[2] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                  }, [
                    createVNode(_component_FormSelect, {
                      label: _ctx.__("Theme"),
                      errors: _ctx.$page.props.errors.theme,
                      modelValue: $data.form.theme,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.theme = $event)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("option", _hoisted_1, toDisplayString(_ctx.__("Light")), 1),
                        createBaseVNode("option", _hoisted_2, toDisplayString(_ctx.__("Dark")), 1),
                        createBaseVNode("option", _hoisted_3, toDisplayString(_ctx.__("Auto")), 1)
                      ], void 0, true),
                      _: 1
                    }, 8, ["label", "errors", "modelValue"]),
                    createBaseVNode("div", null, [
                      withDirectives(createBaseVNode("input", {
                        id: "keyboard_shortcuts",
                        class: "form-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.keyboard_shortcuts = $event)
                      }, null, 512), [
                        [vModelCheckbox, $data.form.keyboard_shortcuts]
                      ]),
                      createBaseVNode("label", _hoisted_4, toDisplayString(_ctx.__("Enable keyboard shortcuts")), 1),
                      createBaseVNode("p", _hoisted_5, toDisplayString(_ctx.__('This will allow you to do keyboard shortcuts for navigation, which is visible when you press "/"')), 1)
                    ]),
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
              }),
              _hoisted_6,
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createBaseVNode("form", {
                    class: "space-y-4",
                    onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.deleteAccount && $options.deleteAccount(...args), ["prevent"]))
                  }, [
                    _hoisted_7,
                    createVNode(_component_FormActions, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { variant: "danger" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Delete account")), 1)
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
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Settings as default
};
