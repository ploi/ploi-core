import TopBar from "./TopBar.f1e6a623.js";
import { C as Container } from "./Container.2699dd86.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.bcf609b4.js";
import { B as Button } from "./Button.9a6e2425.js";
import { S as SettingsLayout } from "./SettingsLayout.faec164a.js";
import { S as SettingsSegment } from "./SettingsSegment.b2b61ced.js";
import { F as FormInput } from "./FormInput.09aea14c.js";
import { F as FormSelect } from "./FormSelect.9c95c804.js";
import { F as FormTextarea } from "./FormTextarea.39500a94.js";
import { a as Form, F as FormActions } from "./Form.22e0ab9d.js";
import { P as Pagination } from "./Pagination.d1e62a3b.js";
import { E as EmptyImage } from "./EmptyImage.af85f47c.js";
import { u as useConfirm } from "./confirm.de73510a.js";
import Tabs from "./Tabs.db3e124c.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData.f1ed5ed8.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, f as createTextVNode, t as toDisplayString, c as createElementBlock, e as createCommentVNode, b as createBaseVNode, d as withModifiers, k as renderList, F as Fragment } from "./app.ca29ef16.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.a1a8c952.js";
import "./notification.26ccb12a.js";
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
    FormSelect,
    FormTextarea,
    SettingsLayout,
    SettingsSegment,
    Form,
    FormActions,
    Pagination,
    Tabs,
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
    TableData,
    EmptyImage
  },
  data() {
    return {
      sending: false,
      form: {
        domain: null,
        type: "letsencrypt",
        certificate: null,
        private: null
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
          title: this.__("Certificates"),
          to: this.route("sites.certificates.index", this.site.id)
        }
      ]
    };
  },
  mounted() {
    if (this.shouldBePolling) {
      this.startPollingInterval();
    }
    this.setDomainData();
  },
  watch: {
    shouldBePolling: function(value) {
      if (!value) {
        this.clearPollingInterval();
        return;
      }
      if (!this.pollingInterval) {
        this.startPollingInterval();
      }
    }
  },
  computed: {
    shouldBePolling() {
      return !!this.certificates.data.filter((certificate) => {
        return certificate.status === "busy";
      }).length;
    }
  },
  props: {
    site: Object,
    certificates: Object
  },
  methods: {
    startPollingInterval() {
      this.pollingInterval = setInterval(function() {
        this.poll();
      }.bind(this), 3e3);
    },
    clearPollingInterval() {
      clearTimeout(this.pollingInterval);
      this.pollingInterval = null;
    },
    poll() {
      this.$inertia.get(this.route("sites.certificates.index", this.site.id), {
        only: ["certificates"],
        preserveScroll: true
      });
    },
    submit() {
      this.sending = true;
      this.$inertia.post(this.route("sites.certificates.store", this.site.id), this.form, {
        onFinish: () => {
          this.sending = false;
          if (!Object.keys(this.$page.props.errors).length) {
            this.setDomainData();
          }
        }
      });
    },
    confirmDelete(certificate) {
      useConfirm({
        title: this.__("Are you sure?"),
        message: `Your certificate will be deleted permanently, this action cannot be undone.`,
        onConfirm: () => this.delete(certificate)
      });
    },
    delete(certificate) {
      this.$inertia.delete(this.route("sites.certificates.delete", [this.site.id, certificate.id]), {
        preserveScroll: true
      });
    },
    setDomainData(withAliases) {
      this.form.certificate = null;
      this.form.private = null;
      if (this.site.domain.startsWith("www.")) {
        this.form.domain = this.site.domain + "," + this.site.domain.replace("www.", "");
      } else {
        this.form.domain = this.site.domain + ",www." + this.site.domain;
      }
      if (withAliases) {
        this.form.domain = this.form.domain + "," + this.site.aliases.join(",");
      }
    }
  },
  beforeUnmount() {
    this.clearPollingInterval();
  }
};
const _hoisted_1 = ["textContent"];
const _hoisted_2 = ["textContent"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("option", { value: "letsencrypt" }, "Let's Encrypt certificate", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("option", { value: "custom" }, "Custom SSL certificate", -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Delete ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_FormSelect = resolveComponent("FormSelect");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_FormTextarea = resolveComponent("FormTextarea");
  const _component_Button = resolveComponent("Button");
  const _component_FormActions = resolveComponent("FormActions");
  const _component_SettingsSegment = resolveComponent("SettingsSegment");
  const _component_EmptyImage = resolveComponent("EmptyImage");
  const _component_TableHeader = resolveComponent("TableHeader");
  const _component_TableRow = resolveComponent("TableRow");
  const _component_TableHead = resolveComponent("TableHead");
  const _component_StatusBubble = resolveComponent("StatusBubble");
  const _component_TableData = resolveComponent("TableData");
  const _component_TableBody = resolveComponent("TableBody");
  const _component_Table = resolveComponent("Table");
  const _component_pagination = resolveComponent("pagination");
  const _component_SettingsLayout = resolveComponent("SettingsLayout");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, {
        title: `${this.__("Certificates")} - ${this.site.domain}`
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
                      createTextVNode(toDisplayString(_ctx.__("Certificates")), 1)
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
                          createTextVNode(toDisplayString(_ctx.__("Create")), 1)
                        ]),
                        subtitle: withCtx(() => [
                          $data.form.type === "letsencrypt" ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            textContent: toDisplayString(_ctx.__("Request a new Let's Encrypt certificate here. Make sure that the DNS has fully propagated."))
                          }, null, 8, _hoisted_1)) : createCommentVNode("", true),
                          $data.form.type === "custom" ? (openBlock(), createElementBlock("span", {
                            key: 1,
                            textContent: toDisplayString(_ctx.__("Install your own SSL certificate here. Make sure to enter the private key and certificate."))
                          }, null, 8, _hoisted_2)) : createCommentVNode("", true)
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("form", {
                            class: "space-y-4",
                            onSubmit: _cache[5] || (_cache[5] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                          }, [
                            createVNode(_component_FormSelect, {
                              label: _ctx.__("Select certificate type"),
                              modelValue: $data.form.type,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.type = $event)
                            }, {
                              default: withCtx(() => [
                                _hoisted_3,
                                _hoisted_4
                              ], void 0, true),
                              _: 1
                            }, 8, ["label", "modelValue"]),
                            createBaseVNode("div", null, [
                              $data.form.type === "letsencrypt" ? (openBlock(), createBlock(_component_FormInput, {
                                key: 0,
                                label: _ctx.__("Domain"),
                                errors: _ctx.$page.props.errors.domain,
                                modelValue: $data.form.domain,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.domain = $event)
                              }, null, 8, ["label", "errors", "modelValue"])) : createCommentVNode("", true),
                              createBaseVNode("button", {
                                type: "button",
                                onClick: _cache[2] || (_cache[2] = ($event) => $options.setDomainData(true)),
                                class: "text-primary text-small border-b border-dotted"
                              }, "Click here to add aliases")
                            ]),
                            $data.form.type === "custom" ? (openBlock(), createBlock(_component_FormTextarea, {
                              key: 0,
                              label: _ctx.__("Private key"),
                              errors: _ctx.$page.props.errors.private,
                              rows: "2",
                              modelValue: $data.form.private,
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.private = $event)
                            }, null, 8, ["label", "errors", "modelValue"])) : createCommentVNode("", true),
                            $data.form.type === "custom" ? (openBlock(), createBlock(_component_FormTextarea, {
                              key: 1,
                              label: _ctx.__("Certificate"),
                              errors: _ctx.$page.props.errors.certificate,
                              rows: "2",
                              modelValue: $data.form.certificate,
                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.certificate = $event)
                            }, null, 8, ["label", "errors", "modelValue"])) : createCommentVNode("", true),
                            createVNode(_component_FormActions, null, {
                              default: withCtx(() => [
                                createVNode(_component_Button, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.__("Save changes")), 1)
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
                      !$props.certificates.meta.total ? (openBlock(), createBlock(_component_EmptyImage, { key: 0 })) : createCommentVNode("", true),
                      $props.certificates.meta.total ? (openBlock(), createBlock(_component_SettingsSegment, { key: 1 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Certificates")), 1)
                        ]),
                        content: withCtx(() => [
                          createBaseVNode("div", null, [
                            createVNode(_component_Table, { caption: "Cronjob list overview" }, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader),
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Certificate")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }),
                                        createVNode(_component_TableHeader)
                                      ], void 0, true),
                                      _: 1
                                    })
                                  ], void 0, true),
                                  _: 1
                                }),
                                createVNode(_component_TableBody, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList($props.certificates.data, (certificate) => {
                                      return openBlock(), createBlock(_component_TableRow, {
                                        key: certificate.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_StatusBubble, {
                                                variant: certificate.status === "busy" ? "gray" : "success"
                                              }, null, 8, ["variant"])
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(certificate.domain), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Button, {
                                                disabled: certificate.status === "busy",
                                                variant: "danger",
                                                size: "sm",
                                                onClick: ($event) => $options.confirmDelete(certificate)
                                              }, {
                                                default: withCtx(() => [
                                                  _hoisted_5
                                                ], void 0, true),
                                                _: 2
                                              }, 1032, ["disabled", "onClick"])
                                            ], void 0, true),
                                            _: 2
                                          }, 1024)
                                        ], void 0, true),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ], void 0, true),
                                  _: 1
                                })
                              ], void 0, true),
                              _: 1
                            })
                          ]),
                          createVNode(_component_pagination, { links: $props.certificates }, null, 8, ["links"])
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
const Certificates = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Certificates as default
};
