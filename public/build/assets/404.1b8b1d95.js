import { C as Container } from "./Container.0fa74fea.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.4aa34ece.js";
import { B as Button } from "./Button.08119d4c.js";
import { f as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, e as createTextVNode, b as createBaseVNode } from "./app.f54fbe13.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./notification.f7347581.js";
const _sfc_main = {
  layout: MainLayout,
  components: {
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
    NotificationBadge
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Page not found");
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "space-y-4" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "We were unable to find this page."),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "text-primary",
      href: "/"
    }, "Go home")
  ])
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
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
                  _hoisted_2
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
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  _404 as default
};
