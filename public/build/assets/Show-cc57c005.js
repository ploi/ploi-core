import TopBar from "./TopBar-0b9171fa.js";
import { C as Container } from "./Container-0fec1f44.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-0bcdf66a.js";
import { B as Button } from "./Button-eaed3445.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-23b21645.js";
import { I as IconButton, D as Dropdown, c as DropdownList, d as DropdownListItem } from "./TabBar-62d8875b.js";
import { I as IconMore, D as DropdownListItemButton } from "./DropdownListItemButton-79cc201d.js";
import { E as EmptyImage } from "./EmptyImage-ed34c6a6.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer-72517758.js";
import { F as FormInput } from "./FormInput-4ba1a7d4.js";
import { F as FormActions } from "./Form-3ac4ed0d.js";
import { S as SettingsLayout } from "./SettingsLayout-f371b623.js";
import { S as SettingsSegment } from "./SettingsSegment-3286f0c4.js";
import { P as Pagination } from "./Pagination-377a0d12.js";
import Tabs from "./Tabs-8ea48c29.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData-a45eb8a2.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, z as createSlots, f as createTextVNode, c as createElementBlock, k as renderList, F as Fragment } from "./app-ebc4651b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./notification-1116eb57.js";
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
    Dropdown,
    DropdownList,
    DropdownListItem,
    DropdownListItemButton,
    SettingsSegment,
    SettingsLayout,
    Tabs,
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
    TableData,
    Pagination
  },
  props: {
    server: Object,
    sites: Object
  },
  data() {
    return {
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.server.name,
          to: this.route("servers.show", this.server.id)
        }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_Button = resolveComponent("Button");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_TableHeader = resolveComponent("TableHeader");
  const _component_TableRow = resolveComponent("TableRow");
  const _component_TableHead = resolveComponent("TableHead");
  const _component_TableData = resolveComponent("TableData");
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_TableBody = resolveComponent("TableBody");
  const _component_Table = resolveComponent("Table");
  const _component_pagination = resolveComponent("pagination");
  const _component_SettingsSegment = resolveComponent("SettingsSegment");
  const _component_SettingsLayout = resolveComponent("SettingsLayout");
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
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageHeader, null, createSlots({
                start: withCtx(() => [
                  createVNode(_component_PageHeaderTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($props.server.name), 1)
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
                      as: "inertia-link",
                      href: _ctx.route("sites.index", { create: true, server: $props.server.id })
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Create site")), 1)
                      ], void 0, true),
                      _: 1
                    }, 8, ["href"])
                  ])
                } : void 0
              ]), 1024),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_SettingsLayout, null, {
                    nav: withCtx(() => [
                      createVNode(_component_Tabs, { server: $props.server }, null, 8, ["server"])
                    ]),
                    segments: withCtx(() => [
                      createVNode(_component_SettingsSegment, null, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Sites")), 1)
                        ]),
                        content: withCtx(() => [
                          createBaseVNode("div", null, [
                            createVNode(_component_Table, { caption: "Site list overview" }, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableRow, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_TableHeader, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Domain")), 1)
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
                                    (openBlock(true), createElementBlock(Fragment, null, renderList($props.sites.data, (site) => {
                                      return openBlock(), createBlock(_component_TableRow, {
                                        key: site.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(site.domain), 1)
                                            ], void 0, true),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableData, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_inertia_link, {
                                                href: _ctx.route("sites.show", site.id),
                                                class: "text-primary font-medium"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.__("Manage")), 1)
                                                ], void 0, true),
                                                _: 2
                                              }, 1032, ["href"])
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
                          createVNode(_component_pagination, { links: $props.sites }, null, 8, ["links"])
                        ]),
                        _: 1
                      })
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
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Show as default
};
