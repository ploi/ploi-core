import { c as createElementBlock, F as Fragment, k as renderList, o as openBlock, g as createBlock, w as withCtx, f as createTextVNode, t as toDisplayString, n as normalizeClass, i as resolveDynamicComponent, e as createCommentVNode } from "./app-422355c4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    server: Object
  },
  data() {
    return {
      items: [
        {
          title: this.__("General"),
          to: this.route("servers.show", this.server.id),
          active: this.route().current("servers.show")
        },
        this.can("servers", "update") ? {
          title: this.__("Settings"),
          to: this.route("servers.settings.show", this.server.id),
          active: this.route().current("servers.settings.show")
        } : null
      ]
    };
  }
};
const _hoisted_1 = { class: "-ml-4 space-y-1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.items, (item) => {
      return openBlock(), createElementBlock("li", null, [
        item ? (openBlock(), createBlock(resolveDynamicComponent(item.type && item.type === "a" ? "a" : "inertia-link"), {
          key: 0,
          target: item.type && item.type === "a" ? "_blank" : "_self",
          class: normalizeClass(["flex items-center h-10 px-4 font-medium text-medium-emphasis", { "rounded shadow text-primary bg-surface-3": item.active }]),
          href: item.to
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(item.title) + " " + toDisplayString(item.route), 1)
          ], void 0, true),
          _: 2
        }, 1032, ["target", "class", "href"])) : createCommentVNode("", true)
      ]);
    }), 256))
  ]);
}
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Tabs as default
};
