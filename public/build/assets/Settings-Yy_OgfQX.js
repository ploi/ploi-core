import TopBar from "./TopBar-DRxYbtNm.js";
import { C as Container } from "./Container-puWPPyw6.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-BaHappCa.js";
import { B as Button } from "./Button-BYc82Y1k.js";
import { I as IconStorage, a as IconGlobe, b as IconBox } from "./IconStorage-B8gRbWgP.js";
import { M as ModalContainer, a as Modal } from "./ModalContainer-BJYjkZHR.js";
import { F as FormInput } from "./FormInput-43oIPTin.js";
import { F as FormSelect } from "./FormSelect-B_MULTc4.js";
import { F as FormActions } from "./Form-Bg3Lzm8Q.js";
import { u as useConfirm } from "./confirm-Dthsy5hS.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, b as createBaseVNode, t as toDisplayString, d as withModifiers, h as withDirectives, v as vModelCheckbox, g as createTextVNode } from "./app-B9WIo_5_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-BJF8ypca.js";
import "./notification-CGGsF_L-.js";
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
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "border-t border-low-emphasis" }, null, -1)),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createBaseVNode("form", {
                    class: "space-y-4",
                    onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.deleteAccount && $options.deleteAccount(...args), ["prevent"]))
                  }, [
                    _cache[4] || (_cache[4] = createBaseVNode("p", null, " You can remove your account here. This will remove all data of your account. ", -1)),
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
            _: 1,
            __: [5]
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
