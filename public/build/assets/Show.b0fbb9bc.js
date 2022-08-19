import TopBar from "./TopBar.06c6471c.js";
import { C as Container } from "./Container.f666e399.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.befd9ba9.js";
import { B as Button } from "./Button.0865095c.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.f1747e14.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer.aff77231.js";
import { F as FormInput } from "./FormInput.35bd48d7.js";
import { F as FormTextarea } from "./FormTextarea.79256863.js";
import { F as FormActions } from "./Form.c121df94.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, f as createTextVNode, c as createElementBlock, k as renderList, F as Fragment, d as withModifiers, e as createCommentVNode } from "./app.291acac5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./TabBar.33558033.js";
import "./notification.2735bc8d.js";
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
    FormActions
  },
  props: {
    ticket: Object,
    replies: Object
  },
  data() {
    return {
      form: {
        content: null
      },
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Support"),
          to: this.route("support.index")
        },
        {
          title: this.ticket.title,
          to: this.route("support.show", this.ticket.id)
        }
      ]
    };
  },
  methods: {
    reply() {
      this.loading = true;
      this.$inertia.post(this.route("support.reply", this.ticket.id), this.form, {
        onFinish: () => {
          this.loading = false;
          if (!Object.keys(this.$page.props.errors).length) {
            this.form.content = null;
          }
        }
      });
    },
    close() {
      this.loading = true;
      this.$inertia.post(this.route("support.close", this.ticket.id), {
        onFinish: () => {
          this.loading = false;
        }
      });
    }
  }
};
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "space-y-6" };
const _hoisted_3 = { class: "p-6 rounded shadow bg-surface-3" };
const _hoisted_4 = { class: "flex space-x-4" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "font-semibold text-small text-body" };
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = { class: "p-6 rounded shadow bg-surface-3" };
const _hoisted_9 = { class: "flex space-x-4" };
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "font-semibold text-small text-body" };
const _hoisted_12 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_FormTextarea = resolveComponent("FormTextarea");
  const _component_Button = resolveComponent("Button");
  const _component_FormActions = resolveComponent("FormActions");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("Support")), 1)
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
                      createTextVNode(toDisplayString($props.ticket.title), 1)
                    ], void 0, true),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("ul", _hoisted_2, [
                      createBaseVNode("li", _hoisted_3, [
                        createBaseVNode("div", _hoisted_4, [
                          createBaseVNode("div", null, [
                            createBaseVNode("img", {
                              src: $props.ticket.user.avatar,
                              class: "w-8 h-8 rounded-avatar bg-surface-2"
                            }, null, 8, _hoisted_5)
                          ]),
                          createBaseVNode("div", null, [
                            createBaseVNode("h3", _hoisted_6, toDisplayString($props.ticket.user.name), 1),
                            createBaseVNode("p", {
                              class: "text-medium-emphasis",
                              innerHTML: $props.ticket.content_html
                            }, null, 8, _hoisted_7)
                          ])
                        ])
                      ]),
                      (openBlock(true), createElementBlock(Fragment, null, renderList($props.replies.data, (reply) => {
                        return openBlock(), createElementBlock("li", _hoisted_8, [
                          createBaseVNode("div", _hoisted_9, [
                            createBaseVNode("div", null, [
                              createBaseVNode("img", {
                                src: reply.user.avatar,
                                class: "w-8 h-8 rounded-avatar bg-surface-2"
                              }, null, 8, _hoisted_10)
                            ]),
                            createBaseVNode("div", null, [
                              createBaseVNode("h3", _hoisted_11, toDisplayString(reply.user.name), 1),
                              createBaseVNode("p", {
                                class: "text-medium-emphasis",
                                innerHTML: reply.content_html
                              }, null, 8, _hoisted_12)
                            ])
                          ])
                        ]);
                      }), 256))
                    ]),
                    $props.ticket.status !== "closed" ? (openBlock(), createElementBlock("form", {
                      key: 0,
                      class: "space-y-4",
                      onSubmit: _cache[1] || (_cache[1] = withModifiers((...args) => $options.reply && $options.reply(...args), ["prevent"]))
                    }, [
                      createVNode(_component_FormTextarea, {
                        label: _ctx.__("Reply"),
                        errors: _ctx.$page.props.errors.reply,
                        modelValue: $data.form.content,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.content = $event)
                      }, null, 8, ["label", "errors", "modelValue"]),
                      createVNode(_component_FormActions, null, {
                        default: withCtx(() => [
                          createVNode(_component_Button, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                            ], void 0, true),
                            _: 1
                          }),
                          createVNode(_component_Button, {
                            type: "button",
                            onClick: $options.close,
                            variant: "secondary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Close")), 1)
                            ], void 0, true),
                            _: 1
                          }, 8, ["onClick"])
                        ], void 0, true),
                        _: 1
                      })
                    ], 32)) : createCommentVNode("", true)
                  ])
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
