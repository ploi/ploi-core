import TopBar from "./TopBar.1c819123.js";
import { C as Container } from "./Container.2699dd86.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.bcf609b4.js";
import { B as Button } from "./Button.9a6e2425.js";
import { E as EmptyImage } from "./EmptyImage.af85f47c.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.ed3331ce.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer.5fe6f37f.js";
import { F as FormInput } from "./FormInput.09aea14c.js";
import { F as FormTextarea } from "./FormTextarea.39500a94.js";
import { F as FormActions } from "./Form.22e0ab9d.js";
import { S as SettingsSegment } from "./SettingsSegment.b2b61ced.js";
import { S as SettingsLayout } from "./SettingsLayout.faec164a.js";
import Tabs from "./Tabs.eda131df.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, f as createTextVNode, t as toDisplayString, b as createBaseVNode } from "./app.ca29ef16.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.a1a8c952.js";
import "./notification.26ccb12a.js";
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
