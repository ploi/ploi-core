import { C as Container } from "./Container-BE5DTf0L.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-BHiDUHDO.js";
import { B as Button } from "./Button-CEth8go1.js";
import { r as resolveComponent, g as createBlock, w as withCtx, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, f as createTextVNode } from "./app-KieaxB-O.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./notification-SuT8ZxXd.js";
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("We were unable to find this page.")), 1)
        ], void 0, true),
        _: 1
      }),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageHeader, null, {
                start: withCtx(() => [
                  createVNode(_component_PageHeaderTitle, null, {
                    default: withCtx(() => _cache[0] || (_cache[0] = [
                      createTextVNode("Page not found")
                    ]), void 0, true),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createBaseVNode("div", { class: "space-y-4" }, [
                    createBaseVNode("p", null, "We were unable to find this page."),
                    createBaseVNode("p", null, [
                      createBaseVNode("a", {
                        class: "text-primary",
                        href: "/"
                      }, "Go home")
                    ])
                  ], -1)
                ]), void 0, true),
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
