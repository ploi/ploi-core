import TopBar from "./TopBar.8a905e9d.js";
import { C as Container } from "./Container.0fa74fea.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.4aa34ece.js";
import { B as Button } from "./Button.08119d4c.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.20dd774f.js";
import { u as useNotification } from "./notification.f7347581.js";
import { f as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, b as createBaseVNode, n as normalizeClass, c as createElementBlock, d as createCommentVNode, k as renderList, F as Fragment } from "./app.f54fbe13.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.765e576f.js";
const _sfc_main = {
  metaInfo() {
    return {
      title: `${this.__("Dashboard")}`
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
    IconBox,
    IconGlobe,
    IconStorage
  },
  props: {
    sites: Number,
    servers: Number,
    package: Object,
    logs: Array
  },
  methods: {
    useNotification
  },
  data() {
    return {
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: "Dashboard",
          to: "/"
        }
      ]
    };
  },
  computed: {
    hasAccessToServers() {
      return Object.keys(this.$page.props.auth.can).length && (this.$page.props.auth.can.servers.create || this.$page.props.auth.can.servers.update || this.$page.props.auth.can.servers.delete);
    }
  },
  mounted() {
    if (this.$page.props.flash.info) {
      useNotification({
        variant: "info",
        title: `Information`,
        message: this.$page.props.flash.info
      });
    }
  }
};
const _hoisted_1 = { class: "p-6 rounded shadow bg-surface-3 transform transition duration-fast ease-in-out hover:scale-95" };
const _hoisted_2 = { class: "font-semibold text-body" };
const _hoisted_3 = { class: "text-medium-emphasis text-small" };
const _hoisted_4 = {
  key: 0,
  class: "p-6 rounded shadow bg-surface-3 transform transition duration-fast ease-in-out hover:scale-95"
};
const _hoisted_5 = { class: "font-semibold text-body" };
const _hoisted_6 = { class: "text-medium-emphasis text-small" };
const _hoisted_7 = { class: "p-6 rounded shadow bg-surface-3 transform transition duration-fast ease-in-out hover:scale-95" };
const _hoisted_8 = { class: "w-full" };
const _hoisted_9 = { class: "flex justify-between" };
const _hoisted_10 = { class: "font-semibold text-body" };
const _hoisted_11 = {
  key: 0,
  class: "inline-flex items-center justify-center h-6 px-2 text-xs font-semibold tracking-tight text-blue-700 rounded-full bg-blue-500/10"
};
const _hoisted_12 = { class: "text-medium-emphasis text-small" };
const _hoisted_13 = { class: "text-medium-emphasis" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_IconGlobe = resolveComponent("IconGlobe");
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_IconStorage = resolveComponent("IconStorage");
  const _component_IconBox = resolveComponent("IconBox");
  const _component_ListItem = resolveComponent("ListItem");
  const _component_List = resolveComponent("List");
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
                      createTextVNode(toDisplayString(_ctx.__("Dashboard")), 1)
                    ], void 0, true),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createBaseVNode("ul", {
                      class: normalizeClass(["grid grid-cols-1 gap-4", { "md:grid-cols-3": $options.hasAccessToServers, "md:grid-cols-2": !$options.hasAccessToServers }])
                    }, [
                      createBaseVNode("li", _hoisted_1, [
                        createVNode(_component_inertia_link, {
                          href: _ctx.route("sites.index"),
                          class: "flex space-x-4"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, [
                              createVNode(_component_IconGlobe, { class: "w-6 h-6" })
                            ]),
                            createBaseVNode("div", null, [
                              createBaseVNode("h3", _hoisted_2, toDisplayString($props.sites), 1),
                              createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.__("Sites")), 1)
                            ])
                          ], void 0, true),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      $options.hasAccessToServers ? (openBlock(), createElementBlock("li", _hoisted_4, [
                        createVNode(_component_inertia_link, {
                          href: _ctx.route("servers.index"),
                          class: "flex space-x-4"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, [
                              createVNode(_component_IconStorage, { class: "w-6 h-6" })
                            ]),
                            createBaseVNode("div", null, [
                              createBaseVNode("h3", _hoisted_5, toDisplayString($props.servers), 1),
                              createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.__("Servers")), 1)
                            ])
                          ], void 0, true),
                          _: 1
                        }, 8, ["href"])
                      ])) : createCommentVNode("", true),
                      createBaseVNode("li", _hoisted_7, [
                        createVNode(_component_inertia_link, {
                          href: _ctx.$page.props.settings.billing ? _ctx.route("profile.billing.index") : _ctx.route("profile.index"),
                          class: "flex space-x-4"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, [
                              createVNode(_component_IconBox, { class: "w-6 h-6" })
                            ]),
                            createBaseVNode("div", _hoisted_8, [
                              createBaseVNode("div", _hoisted_9, [
                                createBaseVNode("h3", _hoisted_10, toDisplayString(_ctx.$page.props.auth.package.name), 1),
                                _ctx.$page.props.auth.package.trial ? (openBlock(), createElementBlock("span", _hoisted_11, " Trial ")) : createCommentVNode("", true)
                              ]),
                              createBaseVNode("p", _hoisted_12, toDisplayString(_ctx.__("Package")), 1)
                            ])
                          ], void 0, true),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ], 2)
                  ]),
                  createVNode(_component_List, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($props.logs, (log) => {
                        return openBlock(), createBlock(_component_ListItem, {
                          key: log.id
                        }, {
                          title: withCtx(() => [
                            createTextVNode(toDisplayString(log.title), 1)
                          ]),
                          subtitle: withCtx(() => [
                            createTextVNode(toDisplayString(log.description), 1)
                          ]),
                          suffix: withCtx(() => [
                            createBaseVNode("span", _hoisted_13, toDisplayString(log.created_at_human), 1)
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
