import { o as openBlock, c as createElementBlock, b as createBaseVNode, j as withDirectives, a as createVNode, w as withCtx, h as renderSlot, r as resolveComponent, l as resolveDirective, T as Transition } from "./app.997ea3ab.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { F as FormActions, a as Form } from "./Form.e3b24233.js";
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4);
}
const IconClose = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  components: {
    IconClose,
    FormActions,
    Form
  }
};
const _hoisted_1$1 = { class: "relative w-full h-full max-w-lg p-8 rounded shadow-2xl pointer-events-auto bg-overlay bf-blur-high overflow-y-scroll" };
const _hoisted_2 = { class: "font-medium text-title" };
const _hoisted_3 = { class: "text-medium-emphasis" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconClose = resolveComponent("IconClose");
  const _component_FormActions = resolveComponent("FormActions");
  const _component_Form = resolveComponent("Form");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("aside", _hoisted_1$1, [
    createBaseVNode("button", {
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
      class: "absolute top-0 right-0 flex items-center justify-center w-12 h-12"
    }, [
      createVNode(_component_IconClose, { class: "w-8 h-8 text-low-emphasis" })
    ]),
    createVNode(_component_Form, {
      onSubmit: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("submit"))
    }, {
      default: withCtx(() => [
        createBaseVNode("div", null, [
          createBaseVNode("h2", _hoisted_2, [
            renderSlot(_ctx.$slots, "title")
          ]),
          createBaseVNode("p", _hoisted_3, [
            renderSlot(_ctx.$slots, "subtitle")
          ])
        ]),
        renderSlot(_ctx.$slots, "form"),
        createVNode(_component_FormActions, null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "form-actions")
          ], void 0, true),
          _: 3
        })
      ], void 0, true),
      _: 3
    })
  ])), [
    [_directive_click_outside, () => _ctx.$emit("close")]
  ]);
}
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {};
const _hoisted_1 = { class: "fixed inset-0 z-50 flex flex-col items-end w-full h-screen p-6 pointer-events-none" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(Transition, {
      "enter-active-class": "transition ease-out transform duration-slow",
      "enter-class": "scale-95 translate-x-full",
      "enter-to-class": "scale-100 translate-x-0",
      "leave-active-class": "transition ease-out transform duration-slow",
      "leave-class": "scale-95 translate-x-0",
      "leave-to-class": "scale-95 translate-x-full"
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ], void 0, true),
      _: 3
    })
  ]);
}
const ModalContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  IconClose as I,
  Modal as M,
  ModalContainer as a
};
