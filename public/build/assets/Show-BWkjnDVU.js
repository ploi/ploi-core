import TopBar from "./TopBar-CKtlmCVk.js";
import { C as Container } from "./Container-CeeapdtK.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-TT76zrIE.js";
import { B as Button } from "./Button-Byl7dXB_.js";
import { E as EmptyImage } from "./EmptyImage-DEAUMSaS.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-DMa32-1q.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer-DIElglPo.js";
import { F as FormInput } from "./FormInput-CxgB4EEe.js";
import { F as FormTextarea } from "./FormTextarea-BWhPHFBk.js";
import { F as FormActions } from "./Form-D2UY4eFi.js";
import { S as SettingsSegment } from "./SettingsSegment-D5dRs3Im.js";
import { S as SettingsLayout } from "./SettingsLayout-BrYHBMia.js";
import Tabs from "./Tabs-D0ar4IiB.js";
import { r as resolveComponent, g as createBlock, w as withCtx, o as openBlock, a as createVNode, f as createTextVNode, t as toDisplayString, b as createBaseVNode, c as createElementBlock, i as renderList, F as Fragment } from "./app-glaRp76R.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-CeMPXMVO.js";
import "./notification-CsllzMYO.js";
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
