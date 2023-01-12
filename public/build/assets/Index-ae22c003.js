import TopBar from "./TopBar-97b50929.js";
import { C as Container } from "./Container-45f4da93.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-8649910c.js";
import { B as Button } from "./Button-938c2a59.js";
import { E as EmptyImage } from "./EmptyImage-db7f150d.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-18f5d16d.js";
import { I as IconButton, D as Dropdown, c as DropdownList, d as DropdownListItem } from "./TabBar-ad9b2a96.js";
import { I as IconMore, D as DropdownListItemButton } from "./DropdownListItemButton-7877064b.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, g as createBlock, w as withCtx, r as resolveComponent, a as createVNode, t as toDisplayString, f as createTextVNode, k as renderList, F as Fragment, e as createCommentVNode, z as createSlots } from "./app-9a1c122c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer-87ab727e.js";
import { F as FormInput } from "./FormInput-f09111c3.js";
import { F as FormSelect } from "./FormSelect-f8b36700.js";
import { F as FormActions } from "./Form-125b83ab.js";
import { u as useConfirm } from "./confirm-eb12c83b.js";
import { P as Pagination } from "./Pagination-3f4890e0.js";
import "./notification-c544471b.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512",
  width: "1.5em",
  height: "1.5em",
  fill: "currentColor"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const IconPhp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
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
    IconPhp,
    ListItem,
    StatusBubble,
    NotificationBadge,
    EmptyImage,
    IconBox,
    IconGlobe,
    IconStorage,
    Modal,
    ModalContainer,
    FormInput,
    FormActions,
    FormSelect,
    Dropdown,
    DropdownList,
    DropdownListItem,
    DropdownListItemButton,
    Pagination
  },
  props: {
    sites: Object,
    availableServers: [Array, Object]
  },
  computed: {
    shouldBePolling() {
      return !!this.sites.data.filter((site) => {
        return site.status === "busy";
      }).length;
    }
  },
  mounted() {
    if (this.shouldBePolling) {
      this.startPollingInterval();
    }
    if (window.location.search.includes("create=")) {
      this.modalIsOpen = true;
    }
    if (window.location.search.includes("server=")) {
      let urlParams = new URLSearchParams(window.location.search);
      this.form.server_id = urlParams.get("server");
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
  data() {
    return {
      form: {
        domain: null,
        server_id: null
      },
      pollingInterval: null,
      modalIsOpen: false,
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Sites"),
          to: this.route("sites.index")
        }
      ]
    };
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
      this.$inertia.replace(this.route("sites.index"), {
        only: ["sites"],
        preserveScroll: true
      });
    },
    closeModal() {
      this.modalIsOpen = false;
      this.form.domain = null;
      this.$page.props.errors = [];
    },
    submit() {
      this.$inertia.post(this.route("sites.store"), this.form, {
        only: ["errors", "flash", "sites"],
        onFinish: () => {
          if (!Object.keys(this.$page.props.errors).length) {
            this.form.domain = null;
            this.form.server_id = null;
            this.modalIsOpen = false;
          }
        }
      });
    },
    confirmDelete(site) {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Your site will be deleted completely, this action is irreversible."),
        onConfirm: () => this.delete(site)
      });
    },
    delete(site) {
      this.$inertia.delete(this.route("sites.delete", site.id));
    }
  },
  beforeUnmount() {
    this.clearPollingInterval();
  }
};
const _hoisted_1 = { value: `${null}` };
const _hoisted_2 = ["value", "textContent"];
const _hoisted_3 = { class: "flex items-center space-x-2" };
const _hoisted_4 = { class: "flex items-center space-x-2" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { key: 2 };
const _hoisted_8 = { key: 3 };
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
  const _component_icon_php = resolveComponent("icon-php");
  const _component_IconMore = resolveComponent("IconMore");
  const _component_IconButton = resolveComponent("IconButton");
  const _component_DropdownListItem = resolveComponent("DropdownListItem");
  const _component_DropdownListItemButton = resolveComponent("DropdownListItemButton");
  const _component_DropdownList = resolveComponent("DropdownList");
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_ListItem = resolveComponent("ListItem");
  const _component_List = resolveComponent("List");
  const _component_pagination = resolveComponent("pagination");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("Sites")), 1)
        ], void 0, true),
        _: 1
      }),
      _ctx.can("sites", "create") ? (openBlock(), createBlock(_component_Portal, {
        key: 0,
        to: "modals"
      }, {
        default: withCtx(() => [
          createVNode(_component_ModalContainer, null, {
            default: withCtx(() => [
              $data.modalIsOpen ? (openBlock(), createBlock(_component_Modal, {
                key: 0,
                onClose: $options.closeModal,
                onSubmit: $options.submit
              }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Create a site")), 1)
                ]),
                form: withCtx(() => [
                  createVNode(_component_FormInput, {
                    label: _ctx.__("Domain"),
                    errors: _ctx.$page.props.errors.domain,
                    modelValue: $data.form.domain,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.domain = $event)
                  }, null, 8, ["label", "errors", "modelValue"]),
                  Object.keys($props.availableServers).length ? (openBlock(), createBlock(_component_FormSelect, {
                    key: 0,
                    label: _ctx.__("Select server"),
                    modelValue: $data.form.server_id,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.server_id = $event)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("option", _hoisted_1, toDisplayString(_ctx.__("Select random server")), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList($props.availableServers, (name, id) => {
                        return openBlock(), createElementBlock("option", {
                          value: id,
                          textContent: toDisplayString(name)
                        }, null, 8, _hoisted_2);
                      }), 256))
                    ], void 0, true),
                    _: 1
                  }, 8, ["label", "modelValue"])) : createCommentVNode("", true)
                ]),
                "form-actions": withCtx(() => [
                  createVNode(_component_Button, {
                    textContent: toDisplayString(_ctx.__("Create"))
                  }, null, 8, ["textContent"])
                ]),
                _: 1
              }, 8, ["onClose", "onSubmit"])) : createCommentVNode("", true)
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
                      createTextVNode(toDisplayString(_ctx.__("Sites")), 1)
                    ], void 0, true),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                _ctx.can("sites", "create") ? {
                  name: "end",
                  fn: withCtx(() => [
                    createVNode(_component_Button, {
                      onClick: _cache[2] || (_cache[2] = ($event) => $data.modalIsOpen = true)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Create site")), 1)
                      ], void 0, true),
                      _: 1
                    })
                  ])
                } : void 0
              ]), 1024),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  !$props.sites.meta.total ? (openBlock(), createBlock(_component_EmptyImage, { key: 0 })) : createCommentVNode("", true),
                  createVNode(_component_List, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($props.sites.data, (site) => {
                        return openBlock(), createBlock(_component_ListItem, {
                          key: site.id
                        }, {
                          prefix: withCtx(() => [
                            createVNode(_component_StatusBubble, {
                              variant: site.status === "busy" ? "gray" : "success"
                            }, null, 8, ["variant"])
                          ]),
                          title: withCtx(() => [
                            createVNode(_component_inertia_link, {
                              class: "text-primary font-medium",
                              href: _ctx.route("sites.show", site.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(site.domain), 1)
                              ], void 0, true),
                              _: 2
                            }, 1032, ["href"])
                          ]),
                          subtitle: withCtx(() => [
                            createBaseVNode("div", _hoisted_3, [
                              createBaseVNode("div", _hoisted_4, [
                                createBaseVNode("span", null, [
                                  createVNode(_component_icon_php)
                                ]),
                                createBaseVNode("span", null, toDisplayString(site.php_version), 1)
                              ]),
                              site.project === "wordpress" ? (openBlock(), createElementBlock("div", _hoisted_5, "·")) : createCommentVNode("", true),
                              site.project === "wordpress" ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(_ctx.__("WordPress installed")), 1)) : createCommentVNode("", true),
                              site.server ? (openBlock(), createElementBlock("div", _hoisted_7, "·")) : createCommentVNode("", true),
                              site.server ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(_ctx.__("On server")) + " " + toDisplayString(site.server.name), 1)) : createCommentVNode("", true)
                            ])
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
                                      to: _ctx.route("sites.show", site.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.__("View")), 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1032, ["to"]),
                                    _ctx.can("sites", "delete") ? (openBlock(), createBlock(_component_DropdownListItemButton, {
                                      key: 0,
                                      class: "!text-danger",
                                      onClick: ($event) => $options.confirmDelete(site)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.__("Delete")), 1)
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
                  }),
                  createVNode(_component_pagination, { links: $props.sites }, null, 8, ["links"])
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
