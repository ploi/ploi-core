import TopBar from "./TopBar.6068f79a.js";
import { C as Container } from "./Container.0fa74fea.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.4aa34ece.js";
import { B as Button } from "./Button.08119d4c.js";
import { S as SettingsLayout } from "./SettingsLayout.295edb55.js";
import { S as SettingsSegment } from "./SettingsSegment.308dc911.js";
import { F as FormInput } from "./FormInput.4490d444.js";
import { a as Form, F as FormActions } from "./Form.ee271b83.js";
import { P as Pagination } from "./Pagination.7da4bad7.js";
import { u as useConfirm } from "./confirm.97707c03.js";
import { u as useNotification } from "./notification.f7347581.js";
import Tabs from "./Tabs.45881a68.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData.63d81c1a.js";
import { E as EmptyImage } from "./EmptyImage.70a87693.js";
import { f as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, b as createBaseVNode, g as withModifiers, d as createCommentVNode, c as createElementBlock, k as renderList, F as Fragment } from "./app.f54fbe13.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.765e576f.js";
const _sfc_main = {
  metaInfo() {
    return {
      title: `${this.__("DNS")} - ${this.site.domain}`
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
      loading: true,
      records: [],
      form: {
        name: null,
        address: null
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
          title: this.__("DNS"),
          to: this.route("sites.dns.index", this.site.id)
        }
      ]
    };
  },
  props: {
    site: Object
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    useNotification,
    submit() {
      this.$inertia.post(this.route("sites.dns.store", this.site.id), this.form, {
        onStart: () => this.sending = true,
        onFinish: () => {
          this.sending = false;
          this.records = [];
          this.getRecords();
          this.form = {
            name: null,
            address: null
          };
        }
      });
    },
    getRecords() {
      this.loading = true;
      window.axios.get(this.route("sites.dns.records", this.site.id)).then((response) => {
        this.loading = false;
        this.records = response.data;
      }).catch((error) => {
        this.loading = false;
      });
    },
    confirmDelete(record) {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Your DNS will be completely removed."),
        onConfirm: () => this.delete(record)
      });
    },
    delete(record) {
      this.$inertia.delete(this.route("sites.dns.delete", [this.site.id, record.id]), {
        preserveScroll: true,
        onStart: () => this.sending = true,
        onFinish: () => {
          this.sending = false;
          this.records = [];
          this.getRecords();
        }
      });
    }
  }
};
const _hoisted_1 = {
  key: 1,
  class: "inline-flex px-4"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("circle", {
    class: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Loading records.. ");
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Delete");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_FormActions = resolveComponent("FormActions");
  const _component_SettingsSegment = resolveComponent("SettingsSegment");
  const _component_EmptyImage = resolveComponent("EmptyImage");
  const _component_TableHeader = resolveComponent("TableHeader");
  const _component_TableRow = resolveComponent("TableRow");
  const _component_TableHead = resolveComponent("TableHead");
  const _component_TableData = resolveComponent("TableData");
  const _component_TableBody = resolveComponent("TableBody");
  const _component_Table = resolveComponent("Table");
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
                      createTextVNode(toDisplayString(_ctx.__("DNS")), 1)
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
                          createTextVNode(toDisplayString(_ctx.__("Create a new DNS record here.")), 1)
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("form", {
                            class: "space-y-4",
                            onSubmit: _cache[2] || (_cache[2] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                          }, [
                            createVNode(_component_FormInput, {
                              disabled: $data.sending,
                              label: _ctx.__("Name"),
                              errors: _ctx.$page.props.errors.name,
                              modelValue: $data.form.name,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.name = $event)
                            }, null, 8, ["disabled", "label", "errors", "modelValue"]),
                            createVNode(_component_FormInput, {
                              disabled: $data.sending,
                              label: _ctx.__("IPv4 address"),
                              errors: _ctx.$page.props.errors.address,
                              modelValue: $data.form.address,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.address = $event)
                            }, null, 8, ["disabled", "label", "errors", "modelValue"]),
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
                      !$data.records.length && !$data.loading ? (openBlock(), createBlock(_component_EmptyImage, { key: 0 })) : createCommentVNode("", true),
                      $data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, _hoisted_4)) : createCommentVNode("", true),
                      $data.records.length ? (openBlock(), createBlock(_component_SettingsSegment, { key: 2 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Records")), 1)
                        ]),
                        content: withCtx(() => [
                          createBaseVNode("div", null, [
                            createVNode(_component_Table, { caption: "DNS records list overview" }, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Name")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }),
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Content")), 1)
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
                                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.records, (record) => {
                                      return openBlock(), createBlock(_component_TableRow, {
                                        key: record.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(record.name), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(record.display_content), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Button, {
                                                onClick: ($event) => $options.confirmDelete(record),
                                                variant: "danger",
                                                size: "sm"
                                              }, {
                                                default: withCtx(() => [
                                                  _hoisted_5
                                                ], void 0, true),
                                                _: 2
                                              }, 1032, ["onClick"])
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
const Dns = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Dns as default
};
