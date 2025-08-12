import { T as TextDivider } from "./TextDivider-9k7Ruy3O.js";
import { F as FormInput } from "./FormInput-43oIPTin.js";
import { B as Button } from "./Button-BYc82Y1k.js";
import { C as Container } from "./Container-puWPPyw6.js";
import { r as resolveComponent, c as createElementBlock, o as openBlock, a as createVNode, b as createBaseVNode, w as withCtx, t as toDisplayString, f as createCommentVNode, g as createTextVNode, F as Fragment } from "./app-B9WIo_5_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  components: {
    TextDivider,
    FormInput,
    Button,
    Container
  },
  props: {
    content: {
      type: String,
      required: false
    }
  }
};
const _hoisted_1 = { class: "flex items-center justify-center w-full min-h-screen py-8 px-8" };
const _hoisted_2 = { class: "flex flex-col items-center space-y-5" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "flex justify-between" };
const _hoisted_5 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TextDivider = resolveComponent("TextDivider");
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_Container = resolveComponent("Container");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_Head, null, {
      default: withCtx(() => [
        createBaseVNode("title", null, toDisplayString(_ctx.__("Privacy Policy")), 1)
      ], void 0, true),
      _: 1
    }),
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_Container, {
        size: "medium",
        class: "py-4 space-y-8"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            _ctx.$page.props.settings.logo ? (openBlock(), createElementBlock("img", {
              key: 0,
              class: "h-14",
              src: _ctx.$page.props.settings.logo
            }, null, 8, _hoisted_3)) : createCommentVNode("", true),
            _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "font-semibold text-center text-heading" }, " Privacy Policy ", -1))
          ]),
          createVNode(_component_TextDivider, { "without-text": true }),
          createBaseVNode("ul", _hoisted_4, [
            createBaseVNode("li", null, [
              createVNode(_component_inertia_link, {
                href: _ctx.route("login"),
                class: "text-medium-emphasis hover:text-high-emphasis border-b border-dotted"
              }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("Back to login", -1)
                ]), void 0, true),
                _: 1,
                __: [1]
              }, 8, ["href"])
            ])
          ]),
          createVNode(_component_TextDivider, { "without-text": true }),
          createBaseVNode("div", {
            class: "prose",
            innerHTML: $props.content
          }, null, 8, _hoisted_5)
        ], void 0, true),
        _: 1
      })
    ])
  ], 64);
}
const Privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Privacy as default
};
