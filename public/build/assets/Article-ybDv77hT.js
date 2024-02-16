import TopBar from "./TopBar-DgiXSls-.js";
import { C as Container } from "./Container-CNq5kmz8.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-g3dgo2nU.js";
import { B as Button } from "./Button-BU87Kkzj.js";
import { E as EmptyImage } from "./EmptyImage-C-1YjsQZ.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-1qcOMFdR.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer-HI6hZWaV.js";
import { F as FormInput } from "./FormInput-DVqI9ei1.js";
import { F as FormTextarea } from "./FormTextarea-BSmbux_l.js";
import { F as FormActions } from "./Form-B2QYoLoL.js";
import { S as SettingsSegment } from "./SettingsSegment-CEzgzIQ7.js";
import { S as SettingsLayout } from "./SettingsLayout-1ztrgVCz.js";
import Tabs from "./Tabs-DAh5F9QQ.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, f as createTextVNode, t as toDisplayString, b as createBaseVNode } from "./app-CxxfQWko.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-BcnMXXeG.js";
import "./notification-CeHPAkcU.js";
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
    category: Object,
    items: Object,
    article: Object
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
        },
        {
          title: this.category.title,
          to: this.route("documentation.show", this.category.id)
        },
        {
          title: this.article.title,
          to: this.route("documentation.article.show", [this.category.id, this.article.id])
        }
      ]
    };
  }
};
const _hoisted_1 = ["innerHTML"];
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
      createVNode(_component_Head, {
        title: $props.article.title
      }, null, 8, ["title"]),
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageHeader, null, {
                start: withCtx(() => [
                  createVNode(_component_PageHeaderTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($props.article.title), 1)
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
                    segments: withCtx(() => [
                      createBaseVNode("div", {
                        class: "prose",
                        innerHTML: $props.article.content
                      }, null, 8, _hoisted_1)
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
const Article = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Article as default
};
