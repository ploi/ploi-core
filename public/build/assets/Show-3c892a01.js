import TopBar from "./TopBar-97b50929.js";
import { C as Container } from "./Container-45f4da93.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-8649910c.js";
import { B as Button } from "./Button-938c2a59.js";
import { S as SettingsLayout } from "./SettingsLayout-1f4f1c24.js";
import { S as SettingsSegment } from "./SettingsSegment-70fda3a9.js";
import { F as FormInput } from "./FormInput-f09111c3.js";
import { a as Form, F as FormActions } from "./Form-125b83ab.js";
import { u as useNotification } from "./notification-c544471b.js";
import Tabs from "./Tabs-66e3833f.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData-47a3f1fd.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer-87ab727e.js";
import { o as openBlock, c as createElementBlock, g as createBlock, w as withCtx, r as resolveComponent, a as createVNode, f as createTextVNode, t as toDisplayString, e as createCommentVNode, b as createBaseVNode, k as renderList, F as Fragment } from "./app-9a1c122c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./TabBar-ad9b2a96.js";
const _sfc_main$1 = {
  data() {
    return {
      copied: false
    };
  },
  props: {
    label: String,
    value: String
  },
  methods: {
    copy() {
      this.copied = true;
      this.$copyText(this.value);
    }
  },
  watch: {
    copied() {
      let vm = this;
      if (this.copied) {
        setTimeout(() => {
          vm.copied = false;
        }, 1250);
      }
    }
  },
  computed: {
    copyText() {
      if (this.copied) {
        return this.__("Copied to clipboard");
      }
      return `${this.label}`;
    }
  }
};
const _hoisted_1$1 = ["innerHTML"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: "cursor-pointer",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.copy && $options.copy(...args)),
    innerHTML: $options.copyText
  }, null, 8, _hoisted_1$1);
}
const Copy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
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
    TableData,
    Modal,
    ModalContainer,
    Copy
  },
  data() {
    return {
      sending: false,
      modalIsOpen: false,
      ftp_password: null,
      form: {
        password: null
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
        }
      ]
    };
  },
  props: {
    site: Object,
    ip_address: String,
    system_user: Object
  },
  computed: {
    mainDnsRecord() {
      if (this.site.domain.includes("www")) {
        return this.site.domain.replace("www.", "");
      }
      return this.site.domain;
    }
  },
  methods: {
    useNotification,
    confirmRequestFtpPassword() {
      if (!this.$page.props.auth.user.requires_password_for_ftp) {
        this.requestFtpPassword();
      } else {
        this.modalIsOpen = true;
      }
    },
    closeModal() {
      this.form.password = null;
      this.modalIsOpen = false;
      this.$page.props.errors = [];
    },
    requestFtpPassword() {
      this.$page.props.errors = [];
      window.axios.post(this.route("sites.request-ftp-password", this.site.id), this.form).then((response) => {
        if (!response.data.ftp_password) {
          this.useNotification({
            variant: "danger",
            title: this.__("FTP password"),
            message: this.__("Unable to retrieve FTP password")
          });
          return;
        }
        this.form.password = null;
        this.modalIsOpen = false;
        this.ftp_password = response.data.ftp_password;
      }).catch((errors) => {
        this.$page.props.errors = errors.response.data.errors;
      });
    }
  }
};
const _hoisted_1 = ["href"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-primary hover:scale-125",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
  })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "space-y-4" };
const _hoisted_6 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_7 = { class: "col-span-2 md:col-span-1" };
const _hoisted_8 = { class: "col-span-2 md:col-span-1" };
const _hoisted_9 = {
  key: 0,
  class: "grid grid-cols-2 gap-4"
};
const _hoisted_10 = { class: "col-span-2 md:col-span-1" };
const _hoisted_11 = { class: "col-span-2 md:col-span-1" };
const _hoisted_12 = { class: "space-y-4" };
const _hoisted_13 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_14 = { class: "col-span-2 md:col-span-1" };
const _hoisted_15 = { class: "col-span-2 md:col-span-1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_Modal = resolveComponent("Modal");
  const _component_ModalContainer = resolveComponent("ModalContainer");
  const _component_Portal = resolveComponent("Portal");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_TableHeader = resolveComponent("TableHeader");
  const _component_TableData = resolveComponent("TableData");
  const _component_TableRow = resolveComponent("TableRow");
  const _component_copy = resolveComponent("copy");
  const _component_TableBody = resolveComponent("TableBody");
  const _component_Table = resolveComponent("Table");
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
      createVNode(_component_Portal, { to: "modals" }, {
        default: withCtx(() => [
          createVNode(_component_ModalContainer, null, {
            default: withCtx(() => [
              $data.modalIsOpen ? (openBlock(), createBlock(_component_Modal, {
                key: 0,
                onClose: _cache[1] || (_cache[1] = () => $options.closeModal()),
                onSubmit: $options.requestFtpPassword
              }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Request FTP password")), 1)
                ]),
                form: withCtx(() => [
                  createVNode(_component_FormInput, {
                    type: "password",
                    label: _ctx.__("Enter your account password to reveal FTP password"),
                    modelValue: $data.form.password,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.password = $event),
                    errors: _ctx.$page.props.errors.password
                  }, null, 8, ["label", "modelValue", "errors"])
                ]),
                "form-actions": withCtx(() => [
                  createVNode(_component_Button, {
                    textContent: toDisplayString(_ctx.__("Request"))
                  }, null, 8, ["textContent"])
                ]),
                _: 1
              }, 8, ["onSubmit"])) : createCommentVNode("", true)
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      }),
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageHeader, null, {
                start: withCtx(() => [
                  createVNode(_component_PageHeaderTitle, { class: "flex space-x-2 items-center" }, {
                    default: withCtx(() => [
                      createBaseVNode("span", null, toDisplayString($props.site.domain), 1),
                      createBaseVNode("a", {
                        href: `http://${$props.site.domain}`,
                        class: "text-primary",
                        target: "_blank"
                      }, _hoisted_3, 8, _hoisted_1)
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
                        content: withCtx(() => [
                          createBaseVNode("div", null, [
                            createVNode(_component_Table, { caption: "Database list overview" }, {
                              default: withCtx(() => [
                                createVNode(_component_TableBody, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Website path")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }),
                                        createVNode(_component_TableData, { border: false }, {
                                          default: withCtx(() => [
                                            createTextVNode(" /home/" + toDisplayString($props.system_user.user_name) + "/" + toDisplayString($props.site.domain), 1)
                                          ], void 0, true),
                                          _: 1
                                        })
                                      ], void 0, true),
                                      _: 1
                                    }),
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("FTP host")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }),
                                        createVNode(_component_TableData, { border: false }, {
                                          default: withCtx(() => [
                                            createVNode(_component_copy, {
                                              label: `${$props.ip_address}`,
                                              value: $props.ip_address
                                            }, null, 8, ["label", "value"])
                                          ], void 0, true),
                                          _: 1
                                        })
                                      ], void 0, true),
                                      _: 1
                                    }),
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("FTP user")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }),
                                        createVNode(_component_TableData, { border: false }, {
                                          default: withCtx(() => [
                                            createVNode(_component_copy, {
                                              label: `${$props.system_user.user_name}`,
                                              value: $props.system_user.user_name
                                            }, null, 8, ["label", "value"])
                                          ], void 0, true),
                                          _: 1
                                        })
                                      ], void 0, true),
                                      _: 1
                                    }),
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("FTP password")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }),
                                        createVNode(_component_TableData, { border: false }, {
                                          default: withCtx(() => [
                                            $data.ftp_password ? (openBlock(), createElementBlock("div", _hoisted_4, [
                                              createVNode(_component_copy, {
                                                label: `${$data.ftp_password}`,
                                                value: $data.ftp_password
                                              }, null, 8, ["label", "value"])
                                            ])) : (openBlock(), createBlock(_component_Button, {
                                              key: 1,
                                              variant: "secondary",
                                              onClick: $options.confirmRequestFtpPassword,
                                              size: "sm"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.__("Request FTP password")), 1)
                                              ], void 0, true),
                                              _: 1
                                            }, 8, ["onClick"]))
                                          ], void 0, true),
                                          _: 1
                                        })
                                      ], void 0, true),
                                      _: 1
                                    }),
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Creation date")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }),
                                        createVNode(_component_TableData, { border: false }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString($props.site.created_at), 1)
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
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SettingsSegment, null, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("DNS settings")), 1)
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Setup these DNS records to attach your webhosting to your domain.")), 1)
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("form", _hoisted_5, [
                            createBaseVNode("div", _hoisted_6, [
                              createBaseVNode("div", _hoisted_7, [
                                createVNode(_component_FormInput, {
                                  label: "A",
                                  errors: _ctx.$page.props.errors.domain,
                                  "model-value": $options.mainDnsRecord
                                }, null, 8, ["errors", "model-value"])
                              ]),
                              createBaseVNode("div", _hoisted_8, [
                                createVNode(_component_FormInput, {
                                  label: "IP",
                                  "allow-copy": "",
                                  errors: _ctx.$page.props.errors.domain,
                                  "model-value": $props.ip_address
                                }, null, 8, ["errors", "model-value"])
                              ])
                            ]),
                            $options.mainDnsRecord.split(".").length - 1 < 2 ? (openBlock(), createElementBlock("div", _hoisted_9, [
                              createBaseVNode("div", _hoisted_10, [
                                createVNode(_component_FormInput, {
                                  label: "A",
                                  errors: _ctx.$page.props.errors.domain,
                                  "model-value": `www`
                                }, null, 8, ["errors"])
                              ]),
                              createBaseVNode("div", _hoisted_11, [
                                createVNode(_component_FormInput, {
                                  label: "IP",
                                  "allow-copy": "",
                                  errors: _ctx.$page.props.errors.domain,
                                  "model-value": $props.ip_address
                                }, null, 8, ["errors", "model-value"])
                              ])
                            ])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      }),
                      $props.site.aliases.length ? (openBlock(), createBlock(_component_SettingsSegment, { key: 0 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("DNS settings for aliases")), 1)
                        ]),
                        subtitle: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Setup these DNS records to attach your webhosting to your domain.")), 1)
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("form", _hoisted_12, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($props.site.aliases, (alias) => {
                              return openBlock(), createElementBlock("div", _hoisted_13, [
                                createBaseVNode("div", _hoisted_14, [
                                  createVNode(_component_FormInput, {
                                    label: "A",
                                    errors: _ctx.$page.props.errors.domain,
                                    value: alias
                                  }, null, 8, ["errors", "value"])
                                ]),
                                createBaseVNode("div", _hoisted_15, [
                                  createVNode(_component_FormInput, {
                                    label: "IP",
                                    "allow-copy": "",
                                    errors: _ctx.$page.props.errors.domain,
                                    value: $props.ip_address
                                  }, null, 8, ["errors", "value"])
                                ])
                              ]);
                            }), 256))
                          ])
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
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Show as default
};
