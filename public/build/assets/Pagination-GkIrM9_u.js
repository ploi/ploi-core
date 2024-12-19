import { r as resolveComponent, o as openBlock, c as createElementBlock, F as Fragment, i as renderList, n as normalizeClass, g as createBlock, e as createCommentVNode } from "./app-KieaxB-O.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  props: {
    links: Object,
    preserveScroll: {
      default: true
    }
  },
  computed: {
    determineLinks() {
      if (this.links.meta) {
        return this.links.meta;
      }
      return this.links;
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "mt-6 -mb-1 flex flex-wrap"
};
const _hoisted_2 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  return $options.determineLinks.per_page < $options.determineLinks.total ? (openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.determineLinks.links, (link, key) => {
      return openBlock(), createElementBlock(Fragment, null, [
        link.url === null ? (openBlock(), createElementBlock("div", {
          key: `label-key`,
          class: normalizeClass(["mr-1 mb-1 px-3 py-1 text-sm rounded text-grey bg-white dark:bg-gray-700 dark:text-gray-300 opacity-50 cursor-not-allowed dark:border-gray-700", { "ml-auto": link.label === "Next" }]),
          innerHTML: link.label
        }, null, 10, _hoisted_2)) : (openBlock(), createBlock(_component_inertia_link, {
          key: `link-key`,
          class: normalizeClass(["mr-1 mb-1 px-2 py-1 text-sm rounded", { "shadow text-high-emphasis bg-surface-1": link.active, "ml-auto": link.label === "Next" }]),
          "preserve-scroll": $props.preserveScroll,
          href: link.url,
          innerHTML: link.label
        }, null, 8, ["preserve-scroll", "class", "href", "innerHTML"]))
      ], 64);
    }), 256))
  ])) : createCommentVNode("", true);
}
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Pagination as P
};
