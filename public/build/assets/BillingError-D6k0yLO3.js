import TopBar from "./TopBar-DRxYbtNm.js";
import { C as Container } from "./Container-puWPPyw6.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-BaHappCa.js";
import { B as Button } from "./Button-BYc82Y1k.js";
import { I as IconStorage, a as IconGlobe, b as IconBox } from "./IconStorage-B8gRbWgP.js";
import { I as IconArrowUp, a as IconArrowDown } from "./IconArrowDown-BfVPofF4.js";
import { M as ModalContainer, a as Modal, I as IconClose } from "./ModalContainer-BJYjkZHR.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, b as createBaseVNode, t as toDisplayString } from "./app-B9WIo_5_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-BJF8ypca.js";
import "./notification-CGGsF_L-.js";
import "./Form-Bg3Lzm8Q.js";
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
                default: withCtx(() => _cache[0] || (_cache[0] = [
                  createBaseVNode("div", {
                    class: "bg-warning text-on-warning px-4 py-3 rounded relative space-y-2",
                    role: "alert"
                  }, [
                    createBaseVNode("strong", { class: "font-bold" }, "Problem with billing provider."),
                    createBaseVNode("p", { class: "block" }, " There's an issue getting in touch with the payment service provider. Please check your settings and the error log or get in touch with the administrator of this software. "),
                    createBaseVNode("a", {
                      class: "block font-bold underline",
                      href: "https://docs.ploi-core.io/263-digging-deeper/743-using-stripe",
                      target: "_blank"
                    }, "How to setup Stripe for billing")
                  ], -1)
                ]), void 0, true),
                _: 1,
                __: [0]
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
