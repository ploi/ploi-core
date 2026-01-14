import TopBar from "./TopBar-BUWoAsGy.js";
import { C as Container } from "./Container-EuHAUh3h.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-BZWcrUEI.js";
import { B as Button } from "./Button-0Ed1072L.js";
import { I as IconStorage, a as IconGlobe, b as IconBox } from "./IconStorage-BvvMTsrR.js";
import { M as ModalContainer, a as Modal } from "./ModalContainer-DBowiEai.js";
import { F as FormInput } from "./FormInput-Bs_ifW0x.js";
import { F as FormTextarea } from "./FormTextarea-Bj_6rzOF.js";
import { F as FormActions } from "./Form-Qi93-WYo.js";
import { E as EmptyImage } from "./EmptyImage-Bw9ahsy7.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, b as createBaseVNode, t as toDisplayString, f as createCommentVNode, g as createTextVNode, c as createElementBlock, F as Fragment, i as renderList } from "./app-D5-35U5T.js";
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
    EmptyImage
  },
  props: {
    tickets: Object
  },
  data() {
    return {
      loading: false,
      modalIsOpen: false,
      form: {
        title: null,
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
        }
      ]
    };
  },
  methods: {
    submit() {
      this.loading = true;
      this.$inertia.post(this.route("support.store"), this.form, {
        onFinish: () => {
          if (!Object.keys(this.$page.props.errors).length) {
            this.form.title = null;
            this.form.content = null;
            this.loading = false;
            this.modalIsOpen = false;
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_FormTextarea = resolveComponent("FormTextarea");
  const _component_Button = resolveComponent("Button");
  const _component_Modal = resolveComponent("Modal");
  const _component_ModalContainer = resolveComponent("ModalContainer");
  const _component_Portal = resolveComponent("Portal");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_EmptyImage = resolveComponent("EmptyImage");
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_ListItem = resolveComponent("ListItem");
  const _component_List = resolveComponent("List");
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
      createVNode(_component_Portal, { to: "modals" }, {
        default: withCtx(() => [
          createVNode(_component_ModalContainer, null, {
            default: withCtx(() => [
              $data.modalIsOpen ? (openBlock(), createBlock(_component_Modal, {
                key: 0,
                onClose: _cache[2] || (_cache[2] = ($event) => $data.modalIsOpen = false),
                onSubmit: $options.submit
              }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Create support request")), 1)
                ]),
                form: withCtx(() => [
                  createVNode(_component_FormInput, {
                    label: _ctx.__("Title"),
                    errors: _ctx.$page.props.errors.title,
                    modelValue: $data.form.title,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.title = $event)
                  }, null, 8, ["label", "errors", "modelValue"]),
                  createVNode(_component_FormTextarea, {
                    label: _ctx.__("Content"),
                    errors: _ctx.$page.props.errors.content,
                    modelValue: $data.form.content,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.content = $event)
                  }, null, 8, ["label", "errors", "modelValue"])
                ]),
                "form-actions": withCtx(() => [
                  createVNode(_component_Button, {
                    textContent: toDisplayString(_ctx.__("Create"))
                  }, null, 8, ["textContent"])
                ]),
                _: 1
              }, 8, ["onSubmit"])) : createCommentVNode("", true)
            ], void 0, true),
            _: 1
          })
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
                      createTextVNode(toDisplayString(_ctx.__("Support")), 1)
                    ], void 0, true),
                    _: 1
                  })
                ]),
                end: withCtx(() => [
                  createVNode(_component_Button, {
                    onClick: _cache[3] || (_cache[3] = ($event) => $data.modalIsOpen = true)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Create ticket")), 1)
                    ], void 0, true),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  !$props.tickets.total ? (openBlock(), createBlock(_component_EmptyImage, { key: 0 })) : createCommentVNode("", true),
                  createVNode(_component_List, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($props.tickets.data, (ticket) => {
                        return openBlock(), createBlock(_component_ListItem, {
                          key: ticket.id
                        }, {
                          title: withCtx(() => [
                            createVNode(_component_inertia_link, {
                              class: "text-primary font-medium",
                              href: _ctx.route("support.show", ticket.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(ticket.title), 1)
                              ], void 0, true),
                              _: 2
                            }, 1032, ["href"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
      })
    ], void 0, true),
    _: 1
  });
}
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Index as default
};
