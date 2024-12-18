import TopBar from "./TopBar-B6zZvw4j.js";
import { C as Container } from "./Container-BE5DTf0L.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-BHiDUHDO.js";
import { B as Button } from "./Button-CEth8go1.js";
import { E as EmptyImage } from "./EmptyImage-91KMGUvH.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-DrGAuPhk.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer-BxCu_srk.js";
import { F as FormInput } from "./FormInput-BPfX-t32.js";
import { F as FormTextarea } from "./FormTextarea-CKFaIo92.js";
import { F as FormActions } from "./Form-DnAPkcEC.js";
import { S as SettingsSegment } from "./SettingsSegment-CtEUmC3P.js";
import { S as SettingsLayout } from "./SettingsLayout-Blxr1jtc.js";
import Tabs from "./Tabs-BOMBKi-q.js";
import { r as resolveComponent, g as createBlock, w as withCtx, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, f as createTextVNode } from "./app-KieaxB-O.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-CagaSKuG.js";
import "./notification-SuT8ZxXd.js";
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
