import TopBar from "./TopBar-C2tIOMFl.js";
import { C as Container } from "./Container-EuHAUh3h.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-BZWcrUEI.js";
import { B as Button } from "./Button-0Ed1072L.js";
import { E as EmptyImage } from "./EmptyImage-Bw9ahsy7.js";
import { I as IconStorage, a as IconGlobe, b as IconBox } from "./IconStorage-BvvMTsrR.js";
import { M as ModalContainer, a as Modal } from "./ModalContainer-DBowiEai.js";
import { F as FormInput } from "./FormInput-Bs_ifW0x.js";
import { F as FormTextarea } from "./FormTextarea-Bj_6rzOF.js";
import { F as FormActions } from "./Form-Qi93-WYo.js";
import { S as SettingsSegment } from "./SettingsSegment-DOUGBpjr.js";
import { S as SettingsLayout } from "./SettingsLayout-CPMnYBNV.js";
import Tabs from "./Tabs-Dp_xQgvi.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, g as createTextVNode, t as toDisplayString, b as createBaseVNode, c as createElementBlock, F as Fragment, i as renderList } from "./app-D5-35U5T.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-DB2oos2Z.js";
import "./notification-BN58Miv9.js";
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
