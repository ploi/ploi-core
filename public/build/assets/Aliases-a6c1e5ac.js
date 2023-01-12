<<<<<<<< HEAD:public/build/assets/Aliases.5dffda98.js
import TopBar from "./TopBar.42fc17aa.js";
import { C as Container } from "./Container.44bb93ee.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.da88ac2b.js";
import { B as Button } from "./Button.482f5d57.js";
import { S as SettingsLayout } from "./SettingsLayout.6029cb54.js";
import { S as SettingsSegment } from "./SettingsSegment.e4964203.js";
import { F as FormInput } from "./FormInput.541a08d4.js";
import { F as FormSelect } from "./FormSelect.02de001d.js";
import { F as FormTextarea } from "./FormTextarea.d5ee4b96.js";
import { a as Form, F as FormActions } from "./Form.55885a08.js";
import { P as Pagination } from "./Pagination.a75bec58.js";
import { E as EmptyImage } from "./EmptyImage.e1281e10.js";
import { u as useConfirm } from "./confirm.91e5714b.js";
import Tabs from "./Tabs.3e1b5c30.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData.764d232d.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, f as createTextVNode, t as toDisplayString, b as createBaseVNode, j as withDirectives, v as vModelCheckbox, d as withModifiers, e as createCommentVNode, c as createElementBlock, k as renderList, F as Fragment } from "./app.67ed15d7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.8304c776.js";
import "./notification.544829a1.js";
========
import TopBar from "./TopBar-97b50929.js";
import { C as Container } from "./Container-45f4da93.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-8649910c.js";
import { B as Button } from "./Button-938c2a59.js";
import { S as SettingsLayout } from "./SettingsLayout-1f4f1c24.js";
import { S as SettingsSegment } from "./SettingsSegment-70fda3a9.js";
import { F as FormInput } from "./FormInput-f09111c3.js";
import { F as FormSelect } from "./FormSelect-f8b36700.js";
import { F as FormTextarea } from "./FormTextarea-a69c36b6.js";
import { a as Form, F as FormActions } from "./Form-125b83ab.js";
import { P as Pagination } from "./Pagination-3f4890e0.js";
import { E as EmptyImage } from "./EmptyImage-db7f150d.js";
import { u as useConfirm } from "./confirm-eb12c83b.js";
import Tabs from "./Tabs-66e3833f.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData-47a3f1fd.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, f as createTextVNode, t as toDisplayString, b as createBaseVNode, j as withDirectives, v as vModelCheckbox, d as withModifiers, e as createCommentVNode, c as createElementBlock, k as renderList, F as Fragment } from "./app-9a1c122c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./TabBar-ad9b2a96.js";
import "./notification-c544471b.js";
>>>>>>>> develop:public/build/assets/Aliases-a6c1e5ac.js
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
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Delete ");
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
                                                default: withCtx(() => [
                                                  _hoisted_2
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
const Aliases = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Aliases as default
};
