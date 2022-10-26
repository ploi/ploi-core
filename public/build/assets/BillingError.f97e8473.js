import TopBar from "./TopBar.544193fc.js";
import { C as Container } from "./Container.44bb93ee.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.da88ac2b.js";
import { B as Button } from "./Button.482f5d57.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.b8642876.js";
import { I as IconArrowDown, a as IconArrowUp } from "./IconArrowDown.ef2fcbd6.js";
import { I as IconClose, M as Modal, a as ModalContainer } from "./ModalContainer.c73e321c.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString } from "./app.67ed15d7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.8304c776.js";
import "./notification.544829a1.js";
import "./Form.55885a08.js";
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
    IconArrowDown,
    IconArrowUp,
    IconClose,
    Modal,
    ModalContainer
  },
  props: {},
  data() {
    return {
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Billing error"),
          to: this.route("profile.billing.index")
        }
      ]
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", {
  class: "bg-warning text-on-warning px-4 py-3 rounded relative space-y-2",
  role: "alert"
}, [
  /* @__PURE__ */ createBaseVNode("strong", { class: "font-bold" }, "Problem with billing provider."),
  /* @__PURE__ */ createBaseVNode("p", { class: "block" }, " There's an issue getting in touch with the payment service provider. Please check your settings and the error log or get in touch with the administrator of this software. "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "block font-bold underline",
    href: "https://docs.ploi-core.io/digging-deeper/using-stripe",
    target: "_blank"
  }, "How to setup Stripe for billing")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("Billing error")), 1)
        ], void 0, true),
        _: 1
      }),
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  _hoisted_1
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
const BillingError = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  BillingError as default
};
