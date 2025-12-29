import TopBar from "./TopBar-KMJf1g5B.js";
import { C as Container } from "./Container-BR3kS7h2.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-CUayiPKI.js";
import { B as Button } from "./Button-D85XmybQ.js";
import { S as SettingsLayout } from "./SettingsLayout-BCjYg4m3.js";
import { S as SettingsSegment } from "./SettingsSegment-BbxvoF4b.js";
import { F as FormInput } from "./FormInput-BG2dzWVN.js";
import { F as FormSelect } from "./FormSelect-DkreD1hx.js";
import { F as FormTextarea } from "./FormTextarea-Ju-z_cTm.js";
import { F as FormActions, a as Form } from "./Form-2ls8lox5.js";
import { P as Pagination } from "./Pagination-BYrwtyBb.js";
import { E as EmptyImage } from "./EmptyImage-DuyvvNV6.js";
import { u as useConfirm } from "./confirm-Ck7NFmHv.js";
import Tabs from "./Tabs-C02Wm0hY.js";
import { T as TableData, a as TableBody, b as TableRow, c as TableHeader, d as TableHead, e as Table } from "./TableData-iq5S12i2.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, g as createTextVNode, t as toDisplayString, f as createCommentVNode, b as createBaseVNode, d as withModifiers, h as withDirectives, v as vModelCheckbox, c as createElementBlock, F as Fragment, i as renderList } from "./app-CHTZvQi3.js";
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
        request_new_certificate: false
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
          title: this.__("Aliases"),
          to: this.route("sites.aliases.index", this.site.id)
        }
      ]
    };
  },
  mounted() {
  },
  watch: {},
  computed: {},
  props: {
    site: Object,
    aliases: [Object, Array]
  },
  methods: {
    submit() {
      this.sending = true;
      this.$inertia.post(this.route("sites.aliases.store", this.site.id), this.form, {
        onFinish: () => {
          this.sending = false;
          this.form.domain = null;
        }
      });
    },
    confirmDelete(alias) {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Your alias will be deleted permanently, this action cannot be undone."),
        onConfirm: () => this.delete(alias)
      });
    },
    delete(alias) {
      this.$inertia.delete(this.route("sites.aliases.delete", [this.site.id, alias]), {
        preserveScroll: true
      });
    }
  }
};
const _hoisted_1 = {
  for: "request_new_certificate",
  class: "ml-2 text-sm"
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
  const _component_StatusBubble = resolveComponent("StatusBubble");
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
        title: `${this.__("Aliases")} - ${this.site.domain}`
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
                      createTextVNode(toDisplayString(_ctx.__("Aliases")), 1)
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
                        form: withCtx(() => [
                          createBaseVNode("form", {
                            class: "space-y-4",
                            onSubmit: _cache[2] || (_cache[2] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                          }, [
                            createVNode(_component_FormInput, {
                              label: _ctx.__("Domain"),
                              errors: _ctx.$page.props.errors.domain,
                              modelValue: $data.form.domain,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.domain = $event)
                            }, null, 8, ["label", "errors", "modelValue"]),
                            createBaseVNode("div", null, [
                              withDirectives(createBaseVNode("input", {
                                id: "request_new_certificate",
                                class: "form-checkbox",
                                type: "checkbox",
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.request_new_certificate = $event)
                              }, null, 512), [
                                [vModelCheckbox, $data.form.request_new_certificate]
                              ]),
                              createBaseVNode("label", _hoisted_1, toDisplayString(_ctx.__("Request new certificate")), 1)
                            ]),
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
                      !$props.aliases.length ? (openBlock(), createBlock(_component_EmptyImage, { key: 0 })) : createCommentVNode("", true),
                      $props.aliases.length ? (openBlock(), createBlock(_component_SettingsSegment, { key: 1 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Aliases")), 1)
                        ]),
                        content: withCtx(() => [
                          createBaseVNode("div", null, [
                            createVNode(_component_Table, { caption: "Aliases list overview" }, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader),
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Alias")), 1)
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
                                    (openBlock(true), createElementBlock(Fragment, null, renderList($props.aliases, (alias, index) => {
                                      return openBlock(), createBlock(_component_TableRow, { key: index }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_StatusBubble, { variant: "success" })
                                            ], void 0, true),
                                            _: 1
                                          }),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(alias), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Button, {
                                                variant: "danger",
                                                size: "sm",
                                                onClick: ($event) => $options.confirmDelete(alias)
                                              }, {
                                                default: withCtx(() => _cache[3] || (_cache[3] = [
                                                  createTextVNode("Delete ", -1)
                                                ]), void 0, true),
                                                _: 2,
                                                __: [3]
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
const Aliases = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Aliases as default
};
