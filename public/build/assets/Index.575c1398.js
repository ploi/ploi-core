import TopBar from "./TopBar.a74fd733.js";
import { C as Container } from "./Container.2699dd86.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.bcf609b4.js";
import { B as Button } from "./Button.9a6e2425.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.ed3331ce.js";
import { I as IconButton, D as Dropdown, c as DropdownList, d as DropdownListItem } from "./TabBar.a1a8c952.js";
import { I as IconMore, D as DropdownListItemButton } from "./DropdownListItemButton.aa853968.js";
import { E as EmptyImage } from "./EmptyImage.af85f47c.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer.5fe6f37f.js";
import { F as FormInput } from "./FormInput.09aea14c.js";
import { F as FormSelect } from "./FormSelect.9c95c804.js";
import { F as FormActions } from "./Form.22e0ab9d.js";
import { u as useConfirm } from "./confirm.de73510a.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, f as createTextVNode, c as createElementBlock, k as renderList, F as Fragment, e as createCommentVNode, z as createSlots } from "./app.ca29ef16.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
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
    IconButton,
    IconMore,
    ListItem,
    StatusBubble,
    NotificationBadge,
    IconBox,
    IconGlobe,
    IconStorage,
    EmptyImage,
    Modal,
    ModalContainer,
    FormInput,
    FormActions,
    FormSelect,
    Dropdown,
    DropdownList,
    DropdownListItem,
    DropdownListItemButton
  },
  props: {
    servers: Object,
    dataProviders: [Array, Object]
  },
  computed: {
    shouldBePolling() {
      return !!this.servers.data.filter((server) => {
        return server.status === "busy";
      }).length;
    }
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
    },
    "form.provider": function(value) {
      if (!value) {
        this.regions = [];
        this.plans = [];
        return;
      }
      this.loading = true;
      window.axios.get(this.route("servers.plans-and-regions", value)).then((response) => {
        this.loading = false;
        this.regions = response.data.regions;
        this.plans = response.data.plans;
      }).catch((error) => {
        this.loading = false;
      });
    }
  },
  data() {
    return {
      loading: false,
      form: {
        name: null,
        provider_id: null,
        provider_region_id: null,
        provider_plan_id: null,
        database_type: "mysql"
      },
      providers: this.dataProviders,
      regions: [],
      plans: [],
      pollingInterval: null,
      modalIsOpen: false,
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Servers"),
          to: this.route("servers.index")
        }
      ]
    };
  },
  methods: {
    startPollingInterval() {
      this.pollingInterval = setInterval(function() {
        this.poll();
      }.bind(this), 12e4);
    },
    clearPollingInterval() {
      clearTimeout(this.pollingInterval);
      this.pollingInterval = null;
    },
    poll() {
      this.$inertia.get(this.route("servers.index"), {}, {
        only: ["servers"],
        preserveScroll: true
      });
    },
    submit() {
      this.$inertia.post(this.route("servers.store"), this.form, {
        only: ["errors", "flash", "servers"],
        onStart: () => this.loading = true,
        onSuccess: () => {
          if (!Object.keys(this.$page.props.errors).length) {
            this.form.domain = null;
            this.modalIsOpen = false;
            this.form = {
              name: null,
              provider_id: null,
              provider_region_id: null,
              provider_plan_id: null
            };
          }
        },
        onFinish: () => this.loading = false
      });
    },
    confirmDelete(server) {
      useConfirm({
        title: this.__("Are you sure?"),
        message: `Your server will be deleted completely, this action is irreversible.`,
        onConfirm: () => this.delete(server)
      });
    },
    delete(server) {
      this.$inertia.delete(this.route("servers.delete", server.id));
    }
  },
  beforeUnmount() {
    this.clearPollingInterval();
  }
};
const _hoisted_1 = { value: `${null}` };
const _hoisted_2 = ["value"];
const _hoisted_3 = { value: `${null}` };
const _hoisted_4 = ["value"];
const _hoisted_5 = { value: `${null}` };
const _hoisted_6 = ["value"];
const _hoisted_7 = { value: "mysql" };
const _hoisted_8 = { value: "mariadb" };
const _hoisted_9 = { value: "postgresql" };
const _hoisted_10 = { value: "postgresql13" };
const _hoisted_11 = { key: 0 };
const _hoisted_12 = /* @__PURE__ */ createTextVNode("View");
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" Delete ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_FormSelect = resolveComponent("FormSelect");
  const _component_Button = resolveComponent("Button");
  const _component_Modal = resolveComponent("Modal");
  const _component_ModalContainer = resolveComponent("ModalContainer");
  const _component_Portal = resolveComponent("Portal");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_EmptyImage = resolveComponent("EmptyImage");
  const _component_StatusBubble = resolveComponent("StatusBubble");
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_IconMore = resolveComponent("IconMore");
  const _component_IconButton = resolveComponent("IconButton");
  const _component_DropdownListItem = resolveComponent("DropdownListItem");
  const _component_DropdownListItemButton = resolveComponent("DropdownListItemButton");
  const _component_DropdownList = resolveComponent("DropdownList");
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_ListItem = resolveComponent("ListItem");
  const _component_List = resolveComponent("List");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("Servers")), 1)
        ], void 0, true),
        _: 1
      }),
      _ctx.can("servers", "create") ? (openBlock(), createBlock(_component_Portal, {
        key: 0,
        to: "modals"
      }, {
        default: withCtx(() => [
          createVNode(_component_ModalContainer, null, {
            default: withCtx(() => [
              $data.modalIsOpen ? (openBlock(), createBlock(_component_Modal, {
                key: 0,
                onClose: _cache[5] || (_cache[5] = ($event) => $data.modalIsOpen = false),
                onSubmit: $options.submit
              }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Create a server")), 1)
                ]),
                form: withCtx(() => [
                  createVNode(_component_FormInput, {
                    loading: $data.loading,
                    label: _ctx.__("Name"),
                    placeholder: "webserver-01",
                    errors: _ctx.$page.props.errors.name,
                    modelValue: $data.form.name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.name = $event)
                  }, null, 8, ["loading", "label", "errors", "modelValue"]),
                  createVNode(_component_FormSelect, {
                    loading: $data.loading,
                    errors: _ctx.$page.props.errors.provider_id,
                    label: _ctx.__("Select provider"),
                    modelValue: $data.form.provider_id,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.provider_id = $event)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("option", _hoisted_1, toDisplayString(_ctx.__("Select random provider")), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.providers, (name, id) => {
                        return openBlock(), createElementBlock("option", { value: id }, toDisplayString(name), 9, _hoisted_2);
                      }), 256))
                    ], void 0, true),
                    _: 1
                  }, 8, ["loading", "errors", "label", "modelValue"]),
                  createVNode(_component_FormSelect, {
                    loading: $data.loading,
                    errors: _ctx.$page.props.errors.provider_region_id,
                    label: _ctx.__("Select region"),
                    modelValue: $data.form.provider_region_id,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.provider_region_id = $event)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("option", _hoisted_3, toDisplayString(_ctx.__("Select random region")), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.regions, (name, id) => {
                        return openBlock(), createElementBlock("option", { value: id }, toDisplayString(name), 9, _hoisted_4);
                      }), 256))
                    ], void 0, true),
                    _: 1
                  }, 8, ["loading", "errors", "label", "modelValue"]),
                  createVNode(_component_FormSelect, {
                    loading: $data.loading,
                    errors: _ctx.$page.props.errors.provider_plan_id,
                    label: _ctx.__("Select plan"),
                    modelValue: $data.form.provider_plan_id,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.provider_plan_id = $event)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("option", _hoisted_5, toDisplayString(_ctx.__("Select random plan")), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.plans, (name, id) => {
                        return openBlock(), createElementBlock("option", { value: id }, toDisplayString(name), 9, _hoisted_6);
                      }), 256))
                    ], void 0, true),
                    _: 1
                  }, 8, ["loading", "errors", "label", "modelValue"]),
                  createVNode(_component_FormSelect, {
                    loading: $data.loading,
                    errors: _ctx.$page.props.errors.database_type,
                    label: _ctx.__("Select database type"),
                    modelValue: $data.form.database_type,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.database_type = $event)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("option", _hoisted_7, toDisplayString(_ctx.__("MySQL 5.7")), 1),
                      createBaseVNode("option", _hoisted_8, toDisplayString(_ctx.__("MariaDB")), 1),
                      createBaseVNode("option", _hoisted_9, toDisplayString(_ctx.__("PostgreSQL")), 1),
                      createBaseVNode("option", _hoisted_10, toDisplayString(_ctx.__("PostgreSQL 13")), 1)
                    ], void 0, true),
                    _: 1
                  }, 8, ["loading", "errors", "label", "modelValue"])
                ]),
                "form-actions": withCtx(() => [
                  createVNode(_component_Button, {
                    textContent: toDisplayString(_ctx.__("Create"))
                  }, null, 8, ["textContent"])
                ]),
                _: 1
              }, 8, ["onSubmit"])) : createCommentVNode("", true)
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      })) : createCommentVNode("", true),
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageHeader, null, createSlots({
                start: withCtx(() => [
                  createVNode(_component_PageHeaderTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Servers")), 1)
                    ], void 0, true),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                _ctx.can("servers", "create") ? {
                  name: "end",
                  fn: withCtx(() => [
                    createVNode(_component_Button, {
                      onClick: _cache[6] || (_cache[6] = ($event) => $data.modalIsOpen = true)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Create server")), 1)
                      ], void 0, true),
                      _: 1
                    })
                  ])
                } : void 0
              ]), 1024),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  !$props.servers.meta.total ? (openBlock(), createBlock(_component_EmptyImage, { key: 0 })) : createCommentVNode("", true),
                  createVNode(_component_List, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($props.servers.data, (server) => {
                        return openBlock(), createBlock(_component_ListItem, {
                          key: server.id
                        }, {
                          prefix: withCtx(() => [
                            createVNode(_component_StatusBubble, {
                              variant: server.status === "busy" ? "gray" : "success"
                            }, null, 8, ["variant"])
                          ]),
                          title: withCtx(() => [
                            createVNode(_component_inertia_link, {
                              class: "text-primary font-medium",
                              href: _ctx.route("servers.show", server.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(server.name), 1)
                              ], void 0, true),
                              _: 2
                            }, 1032, ["href"])
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode(toDisplayString(server.ip) + " ", 1),
                            server.ip ? (openBlock(), createElementBlock("span", _hoisted_11, "\xB7")) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(server.sites_count) + " " + toDisplayString(_ctx.__choice("site|sites", server.sites_count)), 1)
                          ]),
                          suffix: withCtx(() => [
                            createVNode(_component_Dropdown, null, {
                              default: withCtx(({ isOpen, toggle, position }) => [
                                createVNode(_component_IconButton, { onClick: toggle }, {
                                  default: withCtx(() => [
                                    createVNode(_component_IconMore, { class: "w-5 h-5" })
                                  ], void 0, true),
                                  _: 2
                                }, 1032, ["onClick"]),
                                isOpen ? (openBlock(), createBlock(_component_DropdownList, {
                                  key: 0,
                                  position
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_DropdownListItem, {
                                      to: _ctx.route("servers.show", server.id)
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_12
                                      ], void 0, true),
                                      _: 2
                                    }, 1032, ["to"]),
                                    _ctx.can("servers", "delete") ? (openBlock(), createBlock(_component_DropdownListItemButton, {
                                      key: 0,
                                      class: "!text-danger",
                                      onClick: ($event) => $options.confirmDelete(server)
                                    }, {
                                      default: withCtx(() => [
                                        _hoisted_13
                                      ], void 0, true),
                                      _: 2
                                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                                  ], void 0, true),
                                  _: 2
                                }, 1032, ["position"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
    ], void 0, true),
    _: 1
  });
}
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Index as default
};
