import TopBar from "./TopBar-CaW932mH.js";
import { C as Container } from "./Container-BR3kS7h2.js";
import { N as NotificationBadge, S as StatusBubble, L as ListItem, a as List, P as PageBody, b as PageHeaderTitle, c as PageHeader, d as Page, C as Content, M as MainLayout } from "./MainLayout-CUayiPKI.js";
import { B as Button } from "./Button-D85XmybQ.js";
import { I as IconStorage, a as IconGlobe, b as IconBox } from "./IconStorage-DK76idww.js";
import { M as ModalContainer, a as Modal } from "./ModalContainer-CUbvmCnV.js";
import { F as FormInput } from "./FormInput-BG2dzWVN.js";
import { F as FormSelect } from "./FormSelect-DkreD1hx.js";
import { F as FormActions } from "./Form-2ls8lox5.js";
import { T as TableData, a as TableBody, b as TableRow, c as TableHeader, d as TableHead, e as Table } from "./TableData-iq5S12i2.js";
import { u as useConfirm } from "./confirm-Ck7NFmHv.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode, b as createBaseVNode, t as toDisplayString, f as createCommentVNode, d as withModifiers, g as createTextVNode, c as createElementBlock, F as Fragment, i as renderList } from "./app-CHTZvQi3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TabBar-FXvai7zi.js";
import "./notification-C6LhWZWI.js";
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
    FormSelect,
    FormActions,
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
    TableData
  },
  props: {
    providers: Array
  },
  data() {
    return {
      form: {
        provider: null,
        meta: {}
      },
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Profile"),
          to: this.route("profile.index")
        },
        {
          title: this.__("Integrations"),
          to: this.route("profile.integrations.index")
        }
      ]
    };
  },
  methods: {
    submit() {
      this.$inertia.post(this.route("profile.integrations.store"), this.form, {
        onStart: () => this.sending = true,
        onFinish: () => {
          this.sending = false;
          if (!Object.keys(this.$page.props.errors).length) {
            this.form = {
              provider: null,
              meta: {}
            };
          }
        }
      });
    },
    confirmDelete(provider) {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Your provider integration will be deleted permanently, this cannot be undone."),
        onConfirm: () => this.delete(provider)
      });
    },
    delete(provider) {
      this.$inertia.delete(this.route("profile.integrations.destroy", provider.id), {
        preserveScroll: true
      });
    }
  }
};
const _hoisted_1 = { value: "cloudflare" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_FormSelect = resolveComponent("FormSelect");
  const _component_FormInput = resolveComponent("FormInput");
  const _component_Button = resolveComponent("Button");
  const _component_FormActions = resolveComponent("FormActions");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_TableHeader = resolveComponent("TableHeader");
  const _component_TableRow = resolveComponent("TableRow");
  const _component_TableHead = resolveComponent("TableHead");
  const _component_TableData = resolveComponent("TableData");
  const _component_TableBody = resolveComponent("TableBody");
  const _component_Table = resolveComponent("Table");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("Integrations")), 1)
        ], void 0, true),
        _: 1
      }),
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createBaseVNode("form", {
                    class: "space-y-4",
                    onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent"]))
                  }, [
                    createVNode(_component_FormSelect, {
                      label: _ctx.__("Select provider"),
                      errors: _ctx.$page.props.errors.provider,
                      modelValue: $data.form.provider,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.provider = $event)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("option", _hoisted_1, toDisplayString(_ctx.__("Cloudflare")), 1)
                      ], void 0, true),
                      _: 1
                    }, 8, ["label", "errors", "modelValue"]),
                    $data.form.provider === "cloudflare" ? (openBlock(), createBlock(_component_FormInput, {
                      key: 0,
                      label: _ctx.__("API key"),
                      errors: _ctx.$page.props.errors["meta.api_key"],
                      modelValue: $data.form.meta.api_key,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.meta.api_key = $event)
                    }, null, 8, ["label", "errors", "modelValue"])) : createCommentVNode("", true),
                    $data.form.provider === "cloudflare" ? (openBlock(), createBlock(_component_FormInput, {
                      key: 1,
                      label: _ctx.__("Cloudflare email"),
                      errors: _ctx.$page.props.errors["meta.cloudflare_email"],
                      modelValue: $data.form.meta.cloudflare_email,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.meta.cloudflare_email = $event)
                    }, null, 8, ["label", "errors", "modelValue"])) : createCommentVNode("", true),
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
                ], void 0, true),
                _: 1
              }),
              $props.providers.length ? (openBlock(), createBlock(_component_PageBody, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_Table, { caption: "Provider list overview" }, {
                    default: withCtx(() => [
                      createVNode(_component_TableHead, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableHeader, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.__("Provider")), 1)
                                ], void 0, true),
                                _: 1
                              }),
                              createVNode(_component_TableHeader, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.__("Date")), 1)
                                ], void 0, true),
                                _: 1
                              })
                            ], void 0, true),
                            _: 1
                          })
                        ], void 0, true),
                        _: 1
                      }),
                      createVNode(_component_TableBody, null, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList($props.providers, (provider) => {
                            return openBlock(), createBlock(_component_TableRow, {
                              key: provider.id
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_TableData, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(provider.type), 1)
                                  ], void 0, true),
                                  _: 2
                                }, 1024),
                                createVNode(_component_TableData, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(provider.created_at), 1)
                                  ], void 0, true),
                                  _: 2
                                }, 1024),
                                createVNode(_component_TableData, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, {
                                      variant: "danger",
                                      size: "sm",
                                      onClick: ($event) => $options.confirmDelete(provider)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.__("Delete")), 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ], void 0, true),
                                  _: 2
                                }, 1024)
                              ], void 0, true),
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
              })) : createCommentVNode("", true)
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
const Integrations = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Integrations as default
};
