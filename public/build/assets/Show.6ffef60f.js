import TopBar from "./TopBar.cc8ad583.js";
import { C as Container } from "./Container.23db6f9d.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.46aebdcf.js";
import { B as Button } from "./Button.f40f5f07.js";
import { E as EmptyImage } from "./EmptyImage.626bec44.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.3e58486a.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer.34fa6055.js";
import { F as FormInput } from "./FormInput.8ab0f203.js";
import { F as FormTextarea } from "./FormTextarea.deefc03c.js";
import { F as FormActions } from "./Form.097b2c0b.js";
import { S as SettingsSegment } from "./SettingsSegment.8dedf9a4.js";
import { S as SettingsLayout } from "./SettingsLayout.76203a2a.js";
import Tabs from "./Tabs.f7955794.js";
import { f as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, e as createTextVNode, t as toDisplayString, b as createBaseVNode, c as createElementBlock, k as renderList, F as Fragment } from "./app.d0c43a70.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.2102e192.js";
import "./notification.4c298cac.js";
const _sfc_main = {
  metaInfo() {
    return {
      title: this.category.title
    };
  },
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
