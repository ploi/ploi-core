import { T as TextDivider } from "./TextDivider-CYgbLSwg.js";
import { F as FormInput } from "./FormInput-CxgB4EEe.js";
import { B as Button } from "./Button-Byl7dXB_.js";
import { C as Container } from "./Container-CeeapdtK.js";
import { r as resolveComponent, c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, F as Fragment, o as openBlock, t as toDisplayString, f as createTextVNode } from "./app-glaRp76R.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  components: {
    TextDivider,
    FormInput,
    Button,
    Container
  }
};
const _hoisted_1 = { class: "flex items-center justify-center w-full min-h-screen" };
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
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "space-y-4" }, [
            createBaseVNode("h1", { class: "font-semibold text-center text-title" }, "Installation incomplete"),
            createBaseVNode("p", null, "It seems your installation is incomplete, we seem to miss some important credentials."),
            createBaseVNode("p", null, "Please go over the installation process again so all credentials can be filled in."),
            createBaseVNode("p", null, [
              createTextVNode("You can start the Ploi Core installation by running "),
              createBaseVNode("code", null, "php artisan core:install")
            ]),
            createBaseVNode("a", {
              class: "block text-primary",
              target: "_blank",
              href: "https://docs.ploi-core.io"
            }, "View Ploi Core Documentation")
          ], -1)
        ]), void 0, true),
        _: 1
      })
    ])
  ], 64);
}
const InstallationIncomplete = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  InstallationIncomplete as default
};
