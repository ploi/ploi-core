<<<<<<<< HEAD:public/build/assets/Security.0d6b2b10.js
import TopBar from "./TopBar.544193fc.js";
import { C as Container } from "./Container.44bb93ee.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.da88ac2b.js";
import { B as Button } from "./Button.482f5d57.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.b8642876.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer.c73e321c.js";
import { F as FormInput } from "./FormInput.541a08d4.js";
import { F as FormSelect } from "./FormSelect.02de001d.js";
import { F as FormActions } from "./Form.55885a08.js";
import { S as SettingsSegment } from "./SettingsSegment.e4964203.js";
import TwoFactorAuthentication from "./TwoFactorAuthentication.bf9d9f46.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, f as createTextVNode, d as withModifiers } from "./app.67ed15d7.js";
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
import { S as SettingsSegment } from "./SettingsSegment-70fda3a9.js";
import TwoFactorAuthentication from "./TwoFactorAuthentication-d10b254e.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, f as createTextVNode, d as withModifiers } from "./app-9a1c122c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./TabBar-ad9b2a96.js";
import "./notification-c544471b.js";
>>>>>>>> develop:public/build/assets/Security-4cd2a6e1.js
const _sfc_main = {
  layout: MainLayout,
  components: {
    TwoFactorAuthentication,
    SettingsSegment,
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
    languages: Array,
    twoFactor: Object
  },
  data() {
    return {
      form: {
        current_password: null,
        password: null,
        password_confirmation: null
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
          title: this.__("Security"),
          to: this.route("profile.security.index")
        }
      ]
    };
  },
  methods: {
    submit() {
      this.$inertia.patch(this.route("profile.security.updatePassword"), this.form, {
        onStart: () => this.sending = true,
        onFinish: () => {
          this.sending = false;
          if (!Object.keys(this.$page.props.errors).length) {
            this.form = {
              current_password: null,
              password: null,
              password_confirmation: null
            };
          }
        }
      });
    }
  }
};
const _hoisted_1 = { class: "w-full flex space-x-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_FormActions = resolveComponent("FormActions");
  const _component_SettingsSegment = resolveComponent("SettingsSegment");
  const _component_TwoFactorAuthentication = resolveComponent("TwoFactorAuthentication");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("Security")), 1)
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
                  createVNode(_component_SettingsSegment, null, {
                    title: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Password")), 1)
                    ]),
                    subtitle: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Change your password")), 1)
                    ]),
                    form: withCtx(() => [
                      createBaseVNode("form", {
                        class: "space-y-4",
                        onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                      }, [
                        createVNode(_component_FormInput, {
                          label: _ctx.__("Current password"),
                          type: "password",
                          errors: _ctx.$page.props.errors.current_password,
                          modelValue: $data.form.current_password,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.current_password = $event)
                        }, null, 8, ["label", "errors", "modelValue"]),
                        createBaseVNode("div", _hoisted_1, [
                          createVNode(_component_FormInput, {
                            label: _ctx.__("New password"),
                            type: "password",
                            errors: _ctx.$page.props.errors.password,
                            modelValue: $data.form.password,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.password = $event),
                            class: "w-1/2"
                          }, null, 8, ["label", "errors", "modelValue"]),
                          createVNode(_component_FormInput, {
                            label: _ctx.__("Confirm new password"),
                            type: "password",
                            errors: _ctx.$page.props.errors.password_confirmation,
                            modelValue: $data.form.password_confirmation,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.password_confirmation = $event),
                            class: "w-1/2"
                          }, null, 8, ["label", "errors", "modelValue"])
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
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SettingsSegment, null, {
                    title: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Two-factor authentication")), 1)
                    ]),
                    subtitle: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Manage two-factor authentication for your account.")), 1)
                    ]),
                    content: withCtx(() => [
                      createVNode(_component_TwoFactorAuthentication, {
                        secret: $props.twoFactor.secret,
                        recoveryCodes: $props.twoFactor.recoveryCodes,
                        enabled: $props.twoFactor.enabled
                      }, null, 8, ["secret", "recoveryCodes", "enabled"])
                    ]),
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
      })
    ], void 0, true),
    _: 1
  });
}
const Security = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Security as default
};
