import TopBar from "./TopBar.c1b78758.js";
import { C as Container } from "./Container.f666e399.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout.befd9ba9.js";
import { B as Button } from "./Button.0865095c.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage.f1747e14.js";
import { M as Modal, a as ModalContainer } from "./ModalContainer.aff77231.js";
import { F as FormInput } from "./FormInput.35bd48d7.js";
import { F as FormSelect } from "./FormSelect.5ac64982.js";
import { F as FormActions } from "./Form.c121df94.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData.f2fcc2e7.js";
import { u as useConfirm } from "./confirm.10140c89.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, e as createCommentVNode, f as createTextVNode, d as withModifiers, c as createElementBlock, k as renderList, F as Fragment } from "./app.291acac5.js";
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
