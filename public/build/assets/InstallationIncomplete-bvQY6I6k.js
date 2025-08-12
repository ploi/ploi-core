import { T as TextDivider } from "./TextDivider-9k7Ruy3O.js";
import { F as FormInput } from "./FormInput-43oIPTin.js";
import { B as Button } from "./Button-BYc82Y1k.js";
import { C as Container } from "./Container-puWPPyw6.js";
import { r as resolveComponent, c as createElementBlock, o as openBlock, a as createVNode, b as createBaseVNode, w as withCtx, t as toDisplayString, g as createTextVNode, F as Fragment } from "./app-B9WIo_5_.js";
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
        _: 1,
        __: [0]
      })
    ])
  ], 64);
}
const InstallationIncomplete = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  InstallationIncomplete as default
};
