<<<<<<<< HEAD:public/build/assets/Show.f31307aa.js
import TopBar from "./TopBar.e6994b25.js";
import { C as Container } from "./Container.44bb93ee.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.da88ac2b.js";
import { B as Button } from "./Button.482f5d57.js";
import { E as EmptyImage } from "./EmptyImage.e1281e10.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.b8642876.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer.c73e321c.js";
import { F as FormInput } from "./FormInput.541a08d4.js";
import { F as FormTextarea } from "./FormTextarea.d5ee4b96.js";
import { F as FormActions } from "./Form.55885a08.js";
import { S as SettingsSegment } from "./SettingsSegment.e4964203.js";
import { S as SettingsLayout } from "./SettingsLayout.6029cb54.js";
import Tabs from "./Tabs.08e17dfd.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, f as createTextVNode, t as toDisplayString, b as createBaseVNode, c as createElementBlock, k as renderList, F as Fragment } from "./app.67ed15d7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.8304c776.js";
import "./notification.544829a1.js";
========
import TopBar from "./TopBar-60517658.js";
import { C as Container } from "./Container-45f4da93.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-8649910c.js";
import { B as Button } from "./Button-938c2a59.js";
import { E as EmptyImage } from "./EmptyImage-db7f150d.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-18f5d16d.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer-87ab727e.js";
import { F as FormInput } from "./FormInput-f09111c3.js";
import { F as FormTextarea } from "./FormTextarea-a69c36b6.js";
import { F as FormActions } from "./Form-125b83ab.js";
import { S as SettingsSegment } from "./SettingsSegment-70fda3a9.js";
import { S as SettingsLayout } from "./SettingsLayout-1f4f1c24.js";
import Tabs from "./Tabs-38ad7844.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, f as createTextVNode, t as toDisplayString, b as createBaseVNode, c as createElementBlock, k as renderList, F as Fragment } from "./app-9a1c122c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./TabBar-ad9b2a96.js";
import "./notification-c544471b.js";
>>>>>>>> develop:public/build/assets/Show-07f07f81.js
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
    articles: Array
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
        }
      ]
    };
  }
};
const _hoisted_1 = { class: "list-disc list-inside" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_SettingsLayout = resolveComponent("SettingsLayout");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, {
        title: $props.category.title
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
                      createTextVNode(toDisplayString($props.category.title), 1)
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
                      createBaseVNode("ul", _hoisted_1, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList($props.articles, (article) => {
                          return openBlock(), createElementBlock("li", null, [
                            createVNode(_component_inertia_link, {
                              class: "text-primary",
                              href: _ctx.route("documentation.article.show", [$props.category.id, article.id])
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(article.title), 1)
                              ], void 0, true),
                              _: 2
                            }, 1032, ["href"])
                          ]);
                        }), 256))
                      ])
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
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Show as default
};
