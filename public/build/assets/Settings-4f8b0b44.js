import TopBar from "./TopBar-236de38c.js";
import { C as Container } from "./Container-56ab6009.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-7e797b6b.js";
import { B as Button } from "./Button-a0a29be9.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-76d02003.js";
import { I as IconButton, D as Dropdown, c as DropdownList, d as DropdownListItem } from "./TabBar-04598e08.js";
import { I as IconMore, D as DropdownListItemButton } from "./DropdownListItemButton-655cb7b7.js";
import { E as EmptyImage } from "./EmptyImage-1b3d5388.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer-9c93f637.js";
import { F as FormInput } from "./FormInput-2e79d250.js";
import { F as FormActions } from "./Form-f2ad294b.js";
import { S as SettingsLayout } from "./SettingsLayout-5eb5833b.js";
import { S as SettingsSegment } from "./SettingsSegment-965a991a.js";
import { P as Pagination } from "./Pagination-9cad8b07.js";
import Tabs from "./Tabs-882af7c1.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData-94dbb607.js";
import { u as useConfirm } from "./confirm-2149a3a8.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, f as createTextVNode, d as withModifiers, e as createCommentVNode } from "./app-415e6225.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./notification-f8197ca1.js";
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
    IconButton,
    IconMore,
    ListItem,
    StatusBubble,
    NotificationBadge,
    IconBox,
    IconGlobe,
    IconStorage,
    EmptyImage,
    Modal,
    ModalContainer,
    FormInput,
    FormActions,
    Dropdown,
    DropdownList,
    DropdownListItem,
    DropdownListItemButton,
    SettingsSegment,
    SettingsLayout,
    Tabs,
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
    TableData,
    Pagination
  },
  props: {
    server: Object
  },
  data() {
    return {
      form: {
        name: this.server.name
      },
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.server.name,
          to: this.route("servers.show", this.server.id)
        }
      ]
    };
  },
  methods: {
    useConfirm,
    submit() {
      this.$inertia.patch(this.route("servers.settings.update", this.server.id), this.form, {
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false
      });
    },
    confirmDelete() {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Your server will be deleted completely, this action is irreversible."),
        onConfirm: () => this.delete()
      });
    },
    delete() {
      this.$inertia.delete(this.route("servers.delete", this.server.id));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_PageHeaderTitle = resolveComponent("PageHeaderTitle");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_FormActions = resolveComponent("FormActions");
  const _component_SettingsSegment = resolveComponent("SettingsSegment");
  const _component_SettingsLayout = resolveComponent("SettingsLayout");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("Servers")), 1)
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
                      createTextVNode(toDisplayString($props.server.name), 1)
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
                      createVNode(_component_Tabs, { server: $props.server }, null, 8, ["server"])
                    ]),
                    segments: withCtx(() => [
                      _ctx.can("servers", "update") ? (openBlock(), createBlock(_component_SettingsSegment, { key: 0 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Overview")), 1)
                        ]),
                        form: withCtx(() => [
                          createBaseVNode("form", {
                            class: "space-y-4",
                            onSubmit: _cache[1] || (_cache[1] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                          }, [
                            createVNode(_component_FormInput, {
                              label: _ctx.__("Name"),
                              errors: _ctx.$page.props.errors.name,
                              modelValue: $data.form.name,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.name = $event)
                            }, null, 8, ["label", "errors", "modelValue"]),
                            createVNode(_component_FormActions, null, {
                              default: withCtx(() => [
                                createVNode(_component_Button, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                                  ], void 0, true),
                                  _: 1
                                })
                              ], void 0, true),
                              _: 1
                            })
                          ], 32)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      _ctx.can("servers", "delete") ? (openBlock(), createBlock(_component_SettingsSegment, { key: 1 }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Danger zone")), 1)
                        ]),
                        content: withCtx(() => [
                          createVNode(_component_Button, {
                            onClick: $options.confirmDelete,
                            variant: "danger"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Delete")), 1)
                            ], void 0, true),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
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
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Settings as default
};
