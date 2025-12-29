import TopBar from "./TopBar-KMJf1g5B.js";
import { C as Container } from "./Container-BR3kS7h2.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-CUayiPKI.js";
import { B as Button } from "./Button-D85XmybQ.js";
import { S as SettingsLayout } from "./SettingsLayout-BCjYg4m3.js";
import { S as SettingsSegment } from "./SettingsSegment-BbxvoF4b.js";
import { F as FormInput } from "./FormInput-BG2dzWVN.js";
import { F as FormActions, a as Form } from "./Form-2ls8lox5.js";
import { P as Pagination } from "./Pagination-BYrwtyBb.js";
import { u as useConfirm } from "./confirm-Ck7NFmHv.js";
import { u as useNotification } from "./notification-C6LhWZWI.js";
import Tabs from "./Tabs-C02Wm0hY.js";
import { T as TableData, a as TableBody, b as TableRow, c as TableHeader, d as TableHead, e as Table } from "./TableData-iq5S12i2.js";
import { E as EmptyImage } from "./EmptyImage-DuyvvNV6.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, g as createTextVNode, t as toDisplayString, f as createCommentVNode, c as createElementBlock, b as createBaseVNode, d as withModifiers, F as Fragment, i as renderList } from "./app-CHTZvQi3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-FXvai7zi.js";
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
      createVNode(_component_Head, {
        title: `${this.__("DNS")} - ${this.site.domain}`
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
                      $data.loading ? (openBlock(), createElementBlock("div", _hoisted_1, _cache[3] || (_cache[3] = [
                        createBaseVNode("svg", {
                          class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24"
                        }, [
                          createBaseVNode("circle", {
                            class: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            "stroke-width": "4"
                          }),
                          createBaseVNode("path", {
                            class: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          })
                        ], -1),
                        createTextVNode(" Loading records.. ", -1)
                      ]))) : createCommentVNode("", true),
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
                                                default: withCtx(() => _cache[4] || (_cache[4] = [
                                                  createTextVNode("Delete", -1)
                                                ]), void 0, true),
                                                _: 2,
                                                __: [4]
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
