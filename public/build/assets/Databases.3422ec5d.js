import TopBar from "./TopBar.27e62198.js";
import { C as Container } from "./Container.23db6f9d.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.46aebdcf.js";
import { B as Button } from "./Button.f40f5f07.js";
import { S as SettingsLayout } from "./SettingsLayout.76203a2a.js";
import { S as SettingsSegment } from "./SettingsSegment.8dedf9a4.js";
import { F as FormInput } from "./FormInput.8ab0f203.js";
import { a as Form, F as FormActions } from "./Form.097b2c0b.js";
import { P as Pagination } from "./Pagination.99c0720a.js";
import { E as EmptyImage } from "./EmptyImage.626bec44.js";
import { u as useConfirm } from "./confirm.c1a36d4c.js";
import Tabs from "./Tabs.992be93e.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData.b232d5e4.js";
import { f as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, b as createBaseVNode, g as withModifiers, d as createCommentVNode, c as createElementBlock, k as renderList, F as Fragment } from "./app.d0c43a70.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.2102e192.js";
import "./notification.4c298cac.js";
const _sfc_main = {
  metaInfo() {
    return {
      title: `Databases - ${this.site.domain}`
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
      form: {
        name: null,
        user_name: null,
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
        },
        {
          title: this.__("Databases"),
          to: this.route("sites.databases.index", this.site.id)
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
      return !!this.databases.data.filter((database) => {
        return database.status === "busy";
      }).length;
    }
  },
  props: {
    site: Object,
    databases: Object
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
      this.$inertia.get(this.route("sites.databases.index", this.site.id), {
        only: ["databases"],
        preserveScroll: true
      });
    },
    submit() {
      this.sending = true;
      this.$inertia.post(this.route("sites.databases.store", this.site.id), this.form, {
        onFinish: () => {
          this.sending = false;
          if (!Object.keys(this.$page.props.errors).length) {
            this.form.name = null;
            this.form.user_name = null;
            this.form.password = null;
          }
        }
      });
    },
    confirmDelete(database) {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Your database will be deleted permanently, this action cannot be undone."),
        onConfirm: () => this.delete(database)
      });
    },
    delete(database) {
      this.$inertia.delete(this.route("sites.databases.delete", [this.site.id, database.id]), {
        preserveScroll: true
      });
    }
  },
  beforeDestroy() {
    this.clearPollingInterval();
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Databases");
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
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageHeader, null, {
                start: withCtx(() => [
                  createVNode(_component_PageHeaderTitle, null, {
                    default: withCtx(() => [
                      _hoisted_1
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
                          createTextVNode(toDisplayString(_ctx.__("Create a new database here to store your application data in.")), 1)
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("form", {
                            class: "space-y-4",
                            onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                          }, [
                            createVNode(_component_FormInput, {
                              label: _ctx.__("Name"),
                              errors: _ctx.$page.props.errors.name,
                              modelValue: $data.form.name,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.name = $event)
                            }, null, 8, ["label", "errors", "modelValue"]),
                            createVNode(_component_FormInput, {
                              label: _ctx.__("User"),
                              errors: _ctx.$page.props.errors.user_name,
                              modelValue: $data.form.user_name,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.user_name = $event)
                            }, null, 8, ["label", "errors", "modelValue"]),
                            createVNode(_component_FormInput, {
                              label: _ctx.__("Password"),
                              errors: _ctx.$page.props.errors.password,
                              modelValue: $data.form.password,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.password = $event)
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
                      !$props.databases.meta.total ? (openBlock(), createBlock(_component_EmptyImage, { key: 0 })) : createCommentVNode("", true),
                      $props.databases.meta.total ? (openBlock(), createBlock(_component_SettingsSegment, { key: 1 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Databases")), 1)
                        ]),
                        content: withCtx(() => [
                          createBaseVNode("div", null, [
                            createVNode(_component_Table, { caption: "Database list overview" }, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader),
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Name")), 1)
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
                                    (openBlock(true), createElementBlock(Fragment, null, renderList($props.databases.data, (database) => {
                                      return openBlock(), createBlock(_component_TableRow, {
                                        key: database.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_StatusBubble, {
                                                variant: database.status === "busy" ? "gray" : "success"
                                              }, null, 8, ["variant"])
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(database.name), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Button, {
                                                disabled: database.status === "busy",
                                                variant: "danger",
                                                size: "sm",
                                                onClick: ($event) => $options.confirmDelete(database)
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
                          createVNode(_component_pagination, { links: $props.databases }, null, 8, ["links"])
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
const Databases = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Databases as default
};
