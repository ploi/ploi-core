import TopBar from "./TopBar-D_esN5Tq.js";
import { C as Container } from "./Container-puWPPyw6.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-BaHappCa.js";
import { B as Button } from "./Button-BYc82Y1k.js";
import { E as EmptyImage } from "./EmptyImage-DSOs8pi0.js";
import { I as IconStorage, a as IconGlobe, b as IconBox } from "./IconStorage-B8gRbWgP.js";
import { M as ModalContainer, a as Modal } from "./ModalContainer-BJYjkZHR.js";
import { F as FormInput } from "./FormInput-43oIPTin.js";
import { F as FormTextarea } from "./FormTextarea-C9J5JfuY.js";
import { F as FormActions } from "./Form-Bg3Lzm8Q.js";
import { S as SettingsSegment } from "./SettingsSegment-DAvKglpz.js";
import { S as SettingsLayout } from "./SettingsLayout-DxGPRVqx.js";
import Tabs from "./Tabs-DAgXcUvw.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, b as createBaseVNode, t as toDisplayString, g as createTextVNode } from "./app-B9WIo_5_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-BJF8ypca.js";
import "./notification-CGGsF_L-.js";
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
    FormTextarea,
    FormActions,
    EmptyImage,
    Tabs,
    SettingsLayout,
    SettingsSegment
  },
  props: {
    items: Object
  },
  data() {
    return {
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Documentation"),
          to: this.route("documentation.index")
        }
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_SettingsLayout = resolveComponent("SettingsLayout");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("Documentation")), 1)
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
                      createTextVNode(toDisplayString(_ctx.__("Documentation")), 1)
                    ], void 0, true),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_SettingsLayout, null, {
                    nav: withCtx(() => [
                      createVNode(_component_Tabs, {
                        items: $props.items.data
                      }, null, 8, ["items"])
                    ]),
                    segments: withCtx(() => _cache[0] || (_cache[0] = [])),
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
