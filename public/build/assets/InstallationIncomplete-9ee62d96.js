import { T as TextDivider } from "./TextDivider-26470b05.js";
import { F as FormInput } from "./FormInput-02f26ac1.js";
import { B as Button } from "./Button-d3d2c2e9.js";
import { C as Container } from "./Container-bb0d16ac.js";
import { c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, F as Fragment, r as resolveComponent, o as openBlock, t as toDisplayString, f as createTextVNode } from "./app-ca19f95c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  components: {
    TextDivider,
    FormInput,
    Button,
    Container
  }
};
const _hoisted_1 = { class: "flex items-center justify-center w-full min-h-screen" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "space-y-4" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "font-semibold text-center text-title" }, "Installation incomplete"),
  /* @__PURE__ */ createBaseVNode("p", null, "It seems your installation is incomplete, we seem to miss some important credentials."),
  /* @__PURE__ */ createBaseVNode("p", null, "Please go over the installation process again so all credentials can be filled in."),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode("You can start the Ploi Core installation by running "),
    /* @__PURE__ */ createBaseVNode("code", null, "php artisan core:install")
  ]),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "block text-primary",
    target: "_blank",
    href: "https://docs.ploi-core.io"
  }, "View Ploi Core Documentation")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Container = resolveComponent("Container");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_Head, null, {
      default: withCtx(() => [
        createBaseVNode("title", null, toDisplayString(_ctx.__("Installation incomplete")), 1)
      ], void 0, true),
      _: 1
    }),
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_Container, { size: "small" }, {
        default: withCtx(() => [
          _hoisted_2
        ], void 0, true),
        _: 1
      })
    ])
  ], 64);
}
const InstallationIncomplete = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  InstallationIncomplete as default
};
