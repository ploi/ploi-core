import { T as TextDivider } from "./TextDivider-dcf1c22c.js";
import { F as FormInput } from "./FormInput-3abc31fd.js";
import { B as Button } from "./Button-ecfd0bd9.js";
import { C as Container } from "./Container-09059644.js";
import { c as createElementBlock, a as createVNode, w as withCtx, b as createBaseVNode, F as Fragment, r as resolveComponent, o as openBlock, t as toDisplayString, e as createCommentVNode, f as createTextVNode } from "./app-65f297f4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
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
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h1", { class: "font-semibold text-center text-heading" }, " Privacy Policy ", -1);
const _hoisted_5 = { class: "flex justify-between" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Back to login");
const _hoisted_7 = ["innerHTML"];
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
            _hoisted_4
          ]),
          createVNode(_component_TextDivider, { "without-text": true }),
          createBaseVNode("ul", _hoisted_5, [
            createBaseVNode("li", null, [
              createVNode(_component_inertia_link, {
                href: _ctx.route("login"),
                class: "text-medium-emphasis hover:text-high-emphasis border-b border-dotted"
              }, {
                default: withCtx(() => [
                  _hoisted_6
                ], void 0, true),
                _: 1
              }, 8, ["href"])
            ])
          ]),
          createVNode(_component_TextDivider, { "without-text": true }),
          createBaseVNode("div", {
            class: "prose",
            innerHTML: $props.content
          }, null, 8, _hoisted_7)
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
