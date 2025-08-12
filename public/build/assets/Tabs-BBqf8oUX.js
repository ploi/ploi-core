import { c as createElementBlock, o as openBlock, F as Fragment, i as renderList, e as createBlock, f as createCommentVNode, w as withCtx, g as createTextVNode, t as toDisplayString, n as normalizeClass, l as resolveDynamicComponent } from "./app-B9WIo_5_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  props: {
    site: Object
  },
  data() {
    return {
      items: [
        {
          title: this.__("General"),
          to: this.route("sites.show", this.site.id),
          active: this.route().current("sites.show")
        },
        {
          title: this.__("Apps"),
          to: this.route("sites.apps.index", this.site.id),
          active: this.route().current("sites.apps.index")
        },
        {
          title: this.__("Databases"),
          to: this.route("sites.databases.index", this.site.id),
          active: this.route().current("sites.databases.index")
        },
        {
          title: this.__("Cronjobs"),
          to: this.route("sites.cronjobs.index", this.site.id),
          active: this.route().current("sites.cronjobs.index")
        },
        {
          title: this.__("Redirects"),
          to: this.route("sites.redirects.index", this.site.id),
          active: this.route().current("sites.redirects.index")
        },
        {
          title: this.__("Certificates"),
          to: this.route("sites.certificates.index", this.site.id),
          active: this.route().current("sites.certificates.index")
        },
        {
          title: this.__("Aliases"),
          to: this.route("sites.aliases.index", this.site.id),
          active: this.route().current("sites.aliases.index")
        },
        this.site.dns_id ? {
          title: this.__("DNS"),
          to: this.route("sites.dns.index", this.site.id),
          active: this.route().current("sites.dns.index")
        } : null,
        this.can("sites", "update") ? {
          title: this.__("Settings"),
          to: this.route("sites.settings.show", this.site.id),
          active: this.route().current("sites.settings.show")
        } : null,
        {
          title: this.__("View site"),
          to: `http://${this.site.domain}`,
          type: "a"
        }
      ]
    };
  }
};
const _hoisted_1 = { class: "md:-ml-4 space-y-1" };
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
