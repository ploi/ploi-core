import TopBar from "./TopBar-43058ee7.js";
import { C as Container } from "./Container-45f4da93.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-8649910c.js";
import { B as Button } from "./Button-938c2a59.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-18f5d16d.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer-87ab727e.js";
import { F as FormInput } from "./FormInput-f09111c3.js";
import { F as FormActions } from "./Form-125b83ab.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, f as createTextVNode, c as createElementBlock, k as renderList, F as Fragment } from "./app-9a1c122c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./TabBar-ad9b2a96.js";
import "./notification-c544471b.js";
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
    IconBox,
    IconGlobe,
    IconStorage,
    Modal,
    ModalContainer,
    FormInput,
    FormActions
  },
  props: {
    tickets: Object
  },
  data() {
    return {
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Support"),
          to: this.route("support.index")
        },
        {
          title: this.__("Closed support requests"),
          to: this.route("support.index.closed")
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
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_inertia_link = resolveComponent("inertia-link");
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
          createBaseVNode("title", null, toDisplayString(_ctx.__("Closed support requests")), 1)
        ], void 0, true),
        _: 1
      }),
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageHeader, null, {
                start: withCtx(() => [
                  createVNode(_component_PageHeaderTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Closed support requests")), 1)
                    ], void 0, true),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_List, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($props.tickets.data, (ticket) => {
                        return openBlock(), createBlock(_component_ListItem, {
                          key: ticket.id
                        }, {
                          title: withCtx(() => [
                            createVNode(_component_inertia_link, {
                              class: "text-primary font-medium",
                              href: _ctx.route("support.show", ticket.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(ticket.title), 1)
                              ], void 0, true),
                              _: 2
                            }, 1032, ["href"])
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
const Closed = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Closed as default
};
