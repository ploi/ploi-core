import TopBar from "./TopBar-4a5407c7.js";
import { C as Container } from "./Container-589427ca.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-deaff4ac.js";
import { B as Button } from "./Button-c0cf0b15.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-9d535a5e.js";
import { I as IconArrowDown, a as IconArrowUp } from "./IconArrowDown-b95111b0.js";
import { I as IconClose, M as Modal, a as ModalContainer } from "./ModalContainer-2d5aacc4.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString } from "./app-422355c4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./TabBar-2ce33888.js";
import "./notification-75074ba2.js";
import "./Form-7199af23.js";
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
