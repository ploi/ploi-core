import TopBar from "./TopBar-KMJf1g5B.js";
import { C as Container } from "./Container-BR3kS7h2.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-CUayiPKI.js";
import { B as Button } from "./Button-D85XmybQ.js";
import { S as SettingsLayout } from "./SettingsLayout-BCjYg4m3.js";
import { S as SettingsSegment } from "./SettingsSegment-BbxvoF4b.js";
import { F as FormInput } from "./FormInput-BG2dzWVN.js";
import { F as FormActions, a as Form } from "./Form-2ls8lox5.js";
import { u as useConfirm } from "./confirm-Ck7NFmHv.js";
import Tabs from "./Tabs-C02Wm0hY.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, g as createTextVNode, t as toDisplayString, f as createCommentVNode, b as createBaseVNode, d as withModifiers, c as createElementBlock, F as Fragment, i as renderList } from "./app-CHTZvQi3.js";
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
const _hoisted_3 = {
  class: "bg-success text-on-primary p-4 rounded",
  role: "alert"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
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
      createVNode(_component_Head, {
        title: $props.site.domain
      }, null, 8, ["title"]),
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
                                      $data.timeout ? (openBlock(), createElementBlock("span", _hoisted_2, _cache[4] || (_cache[4] = [
                                        createBaseVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-circle bg-surface-1 opacity-75" }, null, -1),
                                        createBaseVNode("span", { class: "relative inline-flex rounded-circle h-3 w-3 bg-success" }, null, -1)
                                      ]))) : createCommentVNode("", true)
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
                          createBaseVNode("div", _hoisted_3, [
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
