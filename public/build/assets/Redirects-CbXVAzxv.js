import TopBar from "./TopBar-BPOfBYb-.js";
import { C as Container } from "./Container-EuHAUh3h.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-BZWcrUEI.js";
import { B as Button } from "./Button-0Ed1072L.js";
import { S as SettingsLayout } from "./SettingsLayout-CPMnYBNV.js";
import { S as SettingsSegment } from "./SettingsSegment-DOUGBpjr.js";
import { F as FormInput } from "./FormInput-Bs_ifW0x.js";
import { F as FormSelect } from "./FormSelect-Dj1RweYJ.js";
import { F as FormActions, a as Form } from "./Form-Qi93-WYo.js";
import { P as Pagination } from "./Pagination-Buyxx4pV.js";
import { E as EmptyImage } from "./EmptyImage-Bw9ahsy7.js";
import { u as useConfirm } from "./confirm-DZk0atxQ.js";
import Tabs from "./Tabs-DHTFy1N1.js";
import { T as TableData, a as TableBody, b as TableRow, c as TableHeader, d as TableHead, e as Table } from "./TableData-BpYwfCyG.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, g as createTextVNode, t as toDisplayString, f as createCommentVNode, b as createBaseVNode, d as withModifiers, c as createElementBlock, F as Fragment, i as renderList } from "./app-D5-35U5T.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-DB2oos2Z.js";
import "./notification-BN58Miv9.js";
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
        redirect_from: null,
        redirect_to: null,
        type: "redirect"
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
          title: this.__("Redirects"),
          to: this.route("sites.redirects.index", this.site.id)
        }
      ]
    };
  },
  mounted() {
    if (this.shouldBePolling) {
      this.startPollingInterval();
    }
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
      return !!this.redirects.data.filter((redirect) => {
        return redirect.status === "busy";
      }).length;
    }
  },
  props: {
    site: Object,
    redirects: Object
  },
  methods: {
    startPollingInterval() {
      this.pollingInterval = setInterval((function() {
        this.poll();
      }).bind(this), 3e3);
    },
    clearPollingInterval() {
      clearTimeout(this.pollingInterval);
      this.pollingInterval = null;
    },
    poll() {
      this.$inertia.get(this.route("sites.redirects.index", this.site.id), {
        only: ["redirects"],
        preserveScroll: true
      });
    },
    submit() {
      this.sending = true;
      this.$inertia.post(this.route("sites.redirects.store", this.site.id), this.form, {
        onFinish: () => {
          this.sending = false;
          if (!Object.keys(this.$page.props.errors).length) {
            this.form.redirect_from = null;
            this.form.redirect_to = null;
            this.form.type = "redirect";
          }
        }
      });
    },
    confirmDelete(redirect) {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__(`Your redirect will be deleted permanently, this action cannot be undone.`),
        onConfirm: () => this.delete(redirect)
      });
    },
    delete(redirect) {
      this.$inertia.delete(this.route("sites.redirects.delete", [this.site.id, redirect.id]), {
        preserveScroll: true
      });
    }
  },
  beforeUnmount() {
    this.clearPollingInterval();
  }
};
const _hoisted_1 = { value: "redirect" };
const _hoisted_2 = { value: "permanent" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_FormSelect = resolveComponent("FormSelect");
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
        title: `${this.__("Redirects")} - ${this.site.domain}`
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
                      createTextVNode(toDisplayString(_ctx.__("Redirects")), 1)
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
                          createTextVNode(toDisplayString(_ctx.__("Create new redirects here to easily forward a url to another.")), 1)
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("form", {
                            class: "space-y-4",
                            onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                          }, [
                            createVNode(_component_FormInput, {
                              label: _ctx.__("From"),
                              errors: _ctx.$page.props.errors.redirect_from,
                              modelValue: $data.form.redirect_from,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.redirect_from = $event)
                            }, null, 8, ["label", "errors", "modelValue"]),
                            createVNode(_component_FormInput, {
                              label: _ctx.__("To"),
                              errors: _ctx.$page.props.errors.redirect_to,
                              modelValue: $data.form.redirect_to,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.redirect_to = $event)
                            }, null, 8, ["label", "errors", "modelValue"]),
                            createVNode(_component_FormSelect, {
                              label: "Type",
                              modelValue: $data.form.type,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.type = $event)
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("option", _hoisted_1, toDisplayString(_ctx.__("Temporary")) + " (302)", 1),
                                createBaseVNode("option", _hoisted_2, toDisplayString(_ctx.__("Permanent")) + " (301)", 1)
                              ], void 0, true),
                              _: 1
                            }, 8, ["modelValue"]),
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
                      !$props.redirects.meta.total ? (openBlock(), createBlock(_component_EmptyImage, { key: 0 })) : createCommentVNode("", true),
                      $props.redirects.meta.total ? (openBlock(), createBlock(_component_SettingsSegment, { key: 1 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Redirects")), 1)
                        ]),
                        content: withCtx(() => [
                          createBaseVNode("div", null, [
                            createVNode(_component_Table, { caption: "Redirect list overview" }, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader),
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("From")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }),
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("To")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }),
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Type")), 1)
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
                                    (openBlock(true), createElementBlock(Fragment, null, renderList($props.redirects.data, (redirect) => {
                                      return openBlock(), createBlock(_component_TableRow, {
                                        key: redirect.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_StatusBubble, {
                                                variant: redirect.status === "busy" ? "gray" : "success"
                                              }, null, 8, ["variant"])
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(redirect.redirect_from), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(redirect.redirect_to), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(redirect.type), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Button, {
                                                disabled: redirect.status === "busy",
                                                variant: "danger",
                                                size: "sm",
                                                onClick: ($event) => $options.confirmDelete(redirect)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.__("Delete")), 1)
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
                          createVNode(_component_pagination, { links: $props.redirects }, null, 8, ["links"])
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
const Redirects = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Redirects as default
};
