import TopBar from "./TopBar.10937704.js";
import { C as Container } from "./Container.76729bd1.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.ab2dba71.js";
import { B as Button } from "./Button.4cabfde3.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.7ab2388b.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer.534f00e2.js";
import { F as FormInput } from "./FormInput.93482162.js";
import { F as FormSelect } from "./FormSelect.14fdaad7.js";
import { F as FormActions } from "./Form.998044c1.js";
import { u as useConfirm } from "./confirm.a808c844.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, j as withDirectives, v as vModelCheckbox, f as createTextVNode, d as withModifiers } from "./app.2c3b9863.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.abe46315.js";
import "./notification.9b4732d8.js";
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
