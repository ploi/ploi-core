import TopBar from "./TopBar.42fc17aa.js";
import { C as Container } from "./Container.44bb93ee.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.da88ac2b.js";
import { B as Button } from "./Button.482f5d57.js";
import { S as SettingsLayout } from "./SettingsLayout.6029cb54.js";
import { S as SettingsSegment } from "./SettingsSegment.e4964203.js";
import { F as FormInput } from "./FormInput.541a08d4.js";
import { a as Form, F as FormActions } from "./Form.55885a08.js";
import { P as Pagination } from "./Pagination.a75bec58.js";
import { E as EmptyImage } from "./EmptyImage.e1281e10.js";
import { u as useNotification } from "./notification.544829a1.js";
import { u as useConfirm } from "./confirm.91e5714b.js";
import Tabs from "./Tabs.3e1b5c30.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData.764d232d.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, f as createTextVNode, t as toDisplayString, b as createBaseVNode, j as withDirectives, A as vModelRadio, B as vShow, d as withModifiers, e as createCommentVNode, c as createElementBlock, k as renderList, F as Fragment } from "./app.67ed15d7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.8304c776.js";
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
      form: {
        command: `php /home/${this.$page.props.auth.user.user_name}/${this.site.domain}/script.php`,
        interval: "minutely",
        frequency: "* * * * *"
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
          title: this.__("Cronjobs"),
          to: this.route("sites.cronjobs.index", this.site.id)
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
      return !!this.cronjobs.data.filter((cronjob) => {
        return cronjob.status === "busy";
      }).length;
    },
    convertedFrequency: function() {
      if (this.form.interval === "minutely") {
        return this.form.frequency = "* * * * *";
      } else if (this.form.interval === "hourly") {
        return this.form.frequency = "0 * * * *";
      } else if (this.form.interval === "nightly") {
        return this.form.frequency = "0 2 * * *";
      } else if (this.form.interval === "weekly") {
        return this.form.frequency = "0 0 * * 0";
      } else if (this.form.interval === "monthly") {
        return this.form.frequency = "0 0 1 * *";
      } else {
        return this.form.frequency;
      }
    }
  },
  props: {
    site: Object,
    cronjobs: Object
  },
  methods: {
    useNotification,
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
      this.$inertia.get(this.route("sites.cronjobs.index", this.site.id), {
        only: ["cronjobs"],
        preserveScroll: true
      });
    },
    submit() {
      this.sending = true;
      this.$inertia.post(this.route("sites.cronjobs.store", this.site.id), this.form, {
        onFinish: () => {
          this.sending = false;
          if (!Object.keys(this.$page.props.errors).length) {
            this.form = {
              command: `php /home/${this.$page.props.auth.user.user_name}/${this.site.domain}/script.php`,
              interval: "minutely",
              frequency: "* * * * *"
            };
          }
        }
      });
    },
    confirmDelete(cronjob) {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Your cronjob will be deleted permanently, this action cannot be undone."),
        onConfirm: () => this.delete(cronjob)
      });
    },
    delete(cronjob) {
      this.$inertia.delete(this.route("sites.cronjobs.delete", [this.site.id, cronjob.id]), {
        preserveScroll: true
      });
    }
  },
  beforeUnmount() {
    this.clearPollingInterval();
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Cronjobs");
const _hoisted_2 = { class: "inline-block text-small font-medium" };
const _hoisted_3 = { class: "inline-flex items-center" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Every minute", -1);
const _hoisted_5 = { class: "inline-flex items-center" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Hourly", -1);
const _hoisted_7 = { class: "inline-flex items-center" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Nightly (2AM)", -1);
const _hoisted_9 = { class: "inline-flex items-center" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Weekly", -1);
const _hoisted_11 = { class: "inline-flex items-center" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Monthly", -1);
const _hoisted_13 = { class: "inline-flex items-center" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Custom", -1);
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
  const _component_pagination = resolveComponent("pagination");
  const _component_SettingsLayout = resolveComponent("SettingsLayout");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, {
        title: `${this.__("Cronjobs")} - ${this.site.domain}`
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
                          createTextVNode(toDisplayString(_ctx.__("Add a new cronjob here to run your background tasks with.")), 1)
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("form", {
                            class: "space-y-4",
                            onSubmit: _cache[8] || (_cache[8] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                          }, [
                            createVNode(_component_FormInput, {
                              label: _ctx.__("Command"),
                              errors: _ctx.$page.props.errors.command,
                              modelValue: $data.form.command,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.command = $event)
                            }, null, 8, ["label", "errors", "modelValue"]),
                            createBaseVNode("div", null, [
                              createBaseVNode("label", _hoisted_2, " Frequency (" + toDisplayString($options.convertedFrequency) + ") ", 1),
                              createBaseVNode("div", null, [
                                createBaseVNode("label", _hoisted_3, [
                                  withDirectives(createBaseVNode("input", {
                                    class: "form-radio",
                                    type: "radio",
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.interval = $event),
                                    value: "minutely"
                                  }, null, 512), [
                                    [vModelRadio, $data.form.interval]
                                  ]),
                                  _hoisted_4
                                ])
                              ]),
                              createBaseVNode("div", null, [
                                createBaseVNode("label", _hoisted_5, [
                                  withDirectives(createBaseVNode("input", {
                                    type: "radio",
                                    class: "form-radio",
                                    name: "radio",
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.interval = $event),
                                    value: "hourly"
                                  }, null, 512), [
                                    [vModelRadio, $data.form.interval]
                                  ]),
                                  _hoisted_6
                                ])
                              ]),
                              createBaseVNode("div", null, [
                                createBaseVNode("label", _hoisted_7, [
                                  withDirectives(createBaseVNode("input", {
                                    type: "radio",
                                    class: "form-radio",
                                    name: "radio",
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.interval = $event),
                                    value: "nightly"
                                  }, null, 512), [
                                    [vModelRadio, $data.form.interval]
                                  ]),
                                  _hoisted_8
                                ])
                              ]),
                              createBaseVNode("div", null, [
                                createBaseVNode("label", _hoisted_9, [
                                  withDirectives(createBaseVNode("input", {
                                    type: "radio",
                                    class: "form-radio",
                                    name: "radio",
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.interval = $event),
                                    value: "weekly"
                                  }, null, 512), [
                                    [vModelRadio, $data.form.interval]
                                  ]),
                                  _hoisted_10
                                ])
                              ]),
                              createBaseVNode("div", null, [
                                createBaseVNode("label", _hoisted_11, [
                                  withDirectives(createBaseVNode("input", {
                                    type: "radio",
                                    class: "form-radio",
                                    name: "radio",
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.form.interval = $event),
                                    value: "monthly"
                                  }, null, 512), [
                                    [vModelRadio, $data.form.interval]
                                  ]),
                                  _hoisted_12
                                ])
                              ]),
                              createBaseVNode("div", null, [
                                createBaseVNode("label", _hoisted_13, [
                                  withDirectives(createBaseVNode("input", {
                                    type: "radio",
                                    class: "form-radio",
                                    name: "radio",
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.form.interval = $event),
                                    value: "custom"
                                  }, null, 512), [
                                    [vModelRadio, $data.form.interval]
                                  ]),
                                  _hoisted_14
                                ])
                              ]),
                              withDirectives(createVNode(_component_FormInput, {
                                "helper-text": "min | hour | day/month | month | day/week",
                                modelValue: $data.form.frequency,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.form.frequency = $event),
                                errors: _ctx.$page.props.errors.frequency,
                                label: _ctx.__("Custom frequency")
                              }, null, 8, ["modelValue", "errors", "label"]), [
                                [vShow, $data.form.interval === "custom"]
                              ])
                            ]),
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
                      !$props.cronjobs.meta.total ? (openBlock(), createBlock(_component_EmptyImage, { key: 0 })) : createCommentVNode("", true),
                      $props.cronjobs.meta.total ? (openBlock(), createBlock(_component_SettingsSegment, { key: 1 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Cronjobs")), 1)
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
                                            createTextVNode(toDisplayString(_ctx.__("Command")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }),
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Frequency")), 1)
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
                                    (openBlock(true), createElementBlock(Fragment, null, renderList($props.cronjobs.data, (cronjob) => {
                                      return openBlock(), createBlock(_component_TableRow, {
                                        key: cronjob.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_StatusBubble, {
                                                variant: cronjob.status === "busy" ? "gray" : "success"
                                              }, null, 8, ["variant"])
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(cronjob.command), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(cronjob.frequency), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Button, {
                                                disabled: cronjob.status === "busy",
                                                variant: "danger",
                                                size: "sm",
                                                onClick: ($event) => $options.confirmDelete(cronjob)
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
                          createVNode(_component_pagination, { links: $props.cronjobs }, null, 8, ["links"])
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
const Cronjobs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Cronjobs as default
};
