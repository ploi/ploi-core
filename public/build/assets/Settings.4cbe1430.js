import TopBar from "./TopBar.6068f79a.js";
import { C as Container } from "./Container.0fa74fea.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.4aa34ece.js";
import { B as Button } from "./Button.08119d4c.js";
import { S as SettingsLayout } from "./SettingsLayout.295edb55.js";
import { S as SettingsSegment } from "./SettingsSegment.308dc911.js";
import { F as FormInput } from "./FormInput.4490d444.js";
import { a as Form, F as FormActions } from "./Form.ee271b83.js";
import { u as useConfirm } from "./confirm.97707c03.js";
import Tabs from "./Tabs.45881a68.js";
import { f as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, b as createBaseVNode, g as withModifiers, c as createElementBlock, k as renderList, d as createCommentVNode, F as Fragment } from "./app.f54fbe13.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.765e576f.js";
import "./notification.f7347581.js";
const _sfc_main = {
  metaInfo() {
    return {
      title: this.site.domain
    };
  },
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
    FormInput,
    SettingsLayout,
    SettingsSegment,
    Form,
    FormActions,
    Tabs
  },
  data() {
    return {
      sending: false,
      timeout: null,
      form: {
        domain: this.site.domain,
        dns_id: null
      },
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Sites"),
          to: this.route("sites.index")
        },
        {
          title: this.site.domain,
          to: this.route("sites.show", this.site.id)
        },
        {
          title: this.__("Settings"),
          to: this.route("sites.show", this.site.id)
        }
      ]
    };
  },
  props: {
    site: Object,
    available_php_versions: Array
  },
  methods: {
    submit() {
      this.sending = true;
      this.$inertia.patch(this.route("sites.settings.update", this.site.id), this.form, {
        onFinish: () => {
          this.sending = false;
        }
      });
    },
    changePhpVersion(version) {
      this.sending = true;
      this.$inertia.patch(this.route("sites.settings.php-version", this.site.id), {
        version
      }, {
        onFinish: () => {
          this.timeout = setTimeout(() => {
            this.clearTimeoutInterval();
            this.sending = false;
            this.$inertia.get(this.route("sites.settings.show", this.site.id));
          }, 3e3);
        }
      });
    },
    confirmDelete() {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Your site will be deleted completely, this action is irreversible."),
        onConfirm: () => this.delete()
      });
    },
    delete() {
      this.$inertia.delete(this.route("sites.delete", this.site.id));
    },
    clearTimeoutInterval() {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  },
  beforeUnmount() {
    this.clearTimeoutInterval();
  }
};
const _hoisted_1 = { class: "space-y-4" };
const _hoisted_2 = {
  key: 0,
  class: "flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-circle bg-surface-1 opacity-75" }, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "relative inline-flex rounded-circle h-3 w-3 bg-success" }, null, -1);
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];
const _hoisted_6 = {
  class: "bg-success text-on-primary p-4 rounded",
  role: "alert"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_FormActions = resolveComponent("FormActions");
  const _component_SettingsSegment = resolveComponent("SettingsSegment");
  const _component_SettingsLayout = resolveComponent("SettingsLayout");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageHeader, null, {
                start: withCtx(() => [
                  createVNode(_component_PageHeaderTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Settings")), 1)
                    ], void 0, true),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_SettingsLayout, null, {
                    nav: withCtx(() => [
                      createVNode(_component_Tabs, { site: $props.site }, null, 8, ["site"])
                    ]),
                    segments: withCtx(() => [
                      createVNode(_component_SettingsSegment, null, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Overview")), 1)
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("form", {
                            class: "space-y-4",
                            onSubmit: _cache[1] || (_cache[1] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                          }, [
                            createVNode(_component_FormInput, {
                              label: _ctx.__("Domain"),
                              errors: _ctx.$page.props.errors.domain,
                              modelValue: $data.form.domain,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.domain = $event)
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
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SettingsSegment, null, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("PHP version")), 1)
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Change your PHP version here. If you do not have the version available get in touch with support to get this added.")), 1)
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("div", _hoisted_1, [
                            createVNode(_component_FormActions, null, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($props.available_php_versions, (available_php_version) => {
                                  return openBlock(), createBlock(_component_Button, {
                                    class: "relative",
                                    disabled: available_php_version == $props.site.php_version || $data.sending,
                                    onClick: ($event) => $options.changePhpVersion(available_php_version),
                                    key: available_php_version
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(available_php_version) + " ", 1),
                                      $data.timeout ? (openBlock(), createElementBlock("span", _hoisted_2, _hoisted_5)) : createCommentVNode("", true)
                                    ], void 0, true),
                                    _: 2
                                  }, 1032, ["disabled", "onClick"]);
                                }), 128))
                              ], void 0, true),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      _ctx.$page.props.auth.integrations.cloudflare ? (openBlock(), createBlock(_component_SettingsSegment, { key: 0 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("DNS settings")), 1)
                        ]),
                        content: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("p", null, toDisplayString(_ctx.__("Cloudflare is attached to this domain")), 1)
                          ])
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("form", {
                            class: "space-y-4",
                            onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                          }, [
                            createVNode(_component_FormInput, {
                              label: "Cloudflare zone ID",
                              errors: _ctx.$page.props.errors.dns_id,
                              modelValue: $data.form.dns_id,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.dns_id = $event)
                            }, null, 8, ["errors", "modelValue"]),
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
                      })) : createCommentVNode("", true),
                      _ctx.can("sites", "delete") ? (openBlock(), createBlock(_component_SettingsSegment, { key: 1 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Danger zone")), 1)
                        ]),
                        content: withCtx(() => [
                          createVNode(_component_Button, {
                            onClick: $options.confirmDelete,
                            variant: "danger"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Delete")), 1)
                            ], void 0, true),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
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
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Settings as default
};
