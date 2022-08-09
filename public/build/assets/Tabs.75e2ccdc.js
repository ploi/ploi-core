import { c as createElementBlock, F as Fragment, k as renderList, d as createCommentVNode, o as openBlock, f as createBlock, w as withCtx, e as createTextVNode, t as toDisplayString, n as normalizeClass, i as resolveDynamicComponent } from "./app.f54fbe13.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
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
    _ctx.item ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($data.items, (item) => {
      return openBlock(), createElementBlock("li", null, [
        (openBlock(), createBlock(resolveDynamicComponent(item.type && item.type === "a" ? "a" : "inertia-link"), {
          target: item.type && item.type === "a" ? "_blank" : "_self",
          class: normalizeClass(["flex items-center h-10 px-4 font-medium text-medium-emphasis", { "rounded shadow text-primary bg-surface-3": item.active }]),
          href: item.to
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(item.title) + " " + toDisplayString(item.route), 1)
          ], void 0, true),
          _: 2
        }, 1032, ["target", "class", "href"]))
      ]);
    }), 256)) : createCommentVNode("", true)
  ]);
}
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Tabs as default
};
