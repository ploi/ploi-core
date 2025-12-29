import TopBar from "./TopBar-KMJf1g5B.js";
import { C as Container } from "./Container-BR3kS7h2.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-CUayiPKI.js";
import { B as Button } from "./Button-D85XmybQ.js";
import { S as SettingsLayout } from "./SettingsLayout-BCjYg4m3.js";
import { S as SettingsSegment } from "./SettingsSegment-BbxvoF4b.js";
import { F as FormInput } from "./FormInput-BG2dzWVN.js";
import { F as FormActions, a as Form } from "./Form-2ls8lox5.js";
import Tabs from "./Tabs-C02Wm0hY.js";
import { T as TableData, a as TableBody, b as TableRow, c as TableHeader, d as TableHead, e as Table } from "./TableData-iq5S12i2.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, g as createTextVNode, t as toDisplayString, f as createCommentVNode, b as createBaseVNode, h as withDirectives, v as vModelCheckbox } from "./app-CHTZvQi3.js";
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
    Tabs,
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
    TableData
  },
  data() {
    return {
      sending: false,
      type: null,
      options: {
        create_database: false
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
          title: this.__("Apps"),
          to: this.route("sites.apps.index", this.site.id)
        }
      ]
    };
  },
  props: {
    site: Object
  },
  methods: {
    prepareInstall(type) {
      this.type = type;
    },
    install() {
      this.$inertia.post(this.route("sites.apps.store", this.site.id), {
        type: this.type,
        options: this.options
      }, {
        onFinish: () => {
          this.type = null;
        }
      });
    },
    uninstall() {
      this.$inertia.delete(this.route("sites.apps.delete", this.site.id));
    }
  }
};
const _hoisted_1 = { class: "grid grid-cols-1 md:grid-cols-3 gap-4" };
const _hoisted_2 = {
  for: "create_database",
  class: "ml-2 text-sm"
};
const _hoisted_3 = { class: "text-small mt-1 text-medium-emphasis" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_Button = resolveComponent("Button");
  const _component_SettingsSegment = resolveComponent("SettingsSegment");
  const _component_SettingsLayout = resolveComponent("SettingsLayout");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, {
        title: `${this.__("Applicaties")} - ${this.site.domain}`
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
                      createTextVNode(toDisplayString(_ctx.__("Apps")), 1)
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
                      $props.site.project ? (openBlock(), createBlock(_component_SettingsSegment, { key: 0 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Overview")), 1)
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("You currently have :application installed.", { application: $props.site.project })), 1)
                        ]),
                        content: withCtx(() => [
                          createVNode(_component_Button, {
                            variant: "danger",
                            onClick: $options.uninstall
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Uninstall")), 1)
                            ], void 0, true),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      !$props.site.project ? (openBlock(), createBlock(_component_SettingsSegment, { key: 1 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Overview")), 1)
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("You have the ability here to directly install one of these applications on the fly.")), 1)
                        ]),
                        content: withCtx(() => [
                          createBaseVNode("div", _hoisted_1, [
                            createVNode(_component_Button, {
                              variant: $data.type === "wordpress" ? "primary" : "secondary",
                              onClick: _cache[0] || (_cache[0] = ($event) => $options.prepareInstall("wordpress"))
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.__("Install WordPress")), 1)
                              ], void 0, true),
                              _: 1
                            }, 8, ["variant"]),
                            createVNode(_component_Button, {
                              variant: $data.type === "nextcloud" ? "primary" : "secondary",
                              onClick: _cache[1] || (_cache[1] = ($event) => $options.prepareInstall("nextcloud"))
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.__("Install Nextcloud")), 1)
                              ], void 0, true),
                              _: 1
                            }, 8, ["variant"])
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      $data.type === "wordpress" ? (openBlock(), createBlock(_component_SettingsSegment, { key: 2 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("WordPress")), 1)
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("WordPress is open source software you can use to create a beautiful website, blog, or app.")), 1)
                        ]),
                        content: withCtx(() => [
                          createBaseVNode("div", null, [
                            withDirectives(createBaseVNode("input", {
                              id: "create_database",
                              class: "form-checkbox",
                              type: "checkbox",
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.options.create_database = $event)
                            }, null, 512), [
                              [vModelCheckbox, $data.options.create_database]
                            ]),
                            createBaseVNode("label", _hoisted_2, toDisplayString(_ctx.__("Create database & attach to WordPress")), 1),
                            createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.__("This will also create a database and attach it directly for you so you have a easy start.")), 1)
                          ]),
                          createVNode(_component_Button, { onClick: $options.install }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Start installation")), 1)
                            ], void 0, true),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_Button, {
                            variant: "secondary",
                            onClick: _cache[3] || (_cache[3] = ($event) => $data.type = null)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                            ], void 0, true),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      $data.type === "nextcloud" ? (openBlock(), createBlock(_component_SettingsSegment, { key: 3 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Nextcloud")), 1)
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Nextcloud is a suite of client-server software for creating and using file hosting services, it is comparable to Dropbox.")), 1)
                        ]),
                        content: withCtx(() => [
                          createVNode(_component_Button, { onClick: $options.install }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Start installation")), 1)
                            ], void 0, true),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_Button, {
                            variant: "secondary",
                            onClick: _cache[4] || (_cache[4] = ($event) => $data.type = null)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                            ], void 0, true),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      $data.type === "october-cms" ? (openBlock(), createBlock(_component_SettingsSegment, { key: 4 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("October CMS")), 1)
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("October is a free, open-source and self-hosted content management system (CMS) based on the PHP programming language and Laravel web application framework.")), 1)
                        ]),
                        content: withCtx(() => [
                          createVNode(_component_Button, { onClick: $options.install }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Start installation")), 1)
                            ], void 0, true),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_Button, {
                            variant: "secondary",
                            onClick: _cache[5] || (_cache[5] = ($event) => $data.type = null)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                            ], void 0, true),
                            _: 1
                          })
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
const Apps = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Apps as default
};
