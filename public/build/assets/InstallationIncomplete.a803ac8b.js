import { T as TextDivider } from "./TextDivider.5d9b42bc.js";
import { F as FormInput } from "./FormInput.8ab0f203.js";
import { B as Button } from "./Button.f40f5f07.js";
import { C as Container } from "./Container.23db6f9d.js";
import { c as createElementBlock, a as createVNode, w as withCtx, r as resolveComponent, o as openBlock, b as createBaseVNode, e as createTextVNode } from "./app.d0c43a70.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = {
  metaInfo: { title: "Installation incomplete" },
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
  const _component_Container = resolveComponent("Container");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Container, { size: "small" }, {
      default: withCtx(() => [
        _hoisted_2
      ], void 0, true),
      _: 1
    })
  ]);
}
const InstallationIncomplete = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  InstallationIncomplete as default
};
