import { T as TopBarTabBarContainer, a as TabBar, B as Breadcrumbs, b as TopBar$1 } from "./TabBar-FXvai7zi.js";
import { r as resolveComponent, e as createBlock, o as openBlock, w as withCtx, a as createVNode } from "./app-CHTZvQi3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Container-BR3kS7h2.js";
const _sfc_main = {
  components: {
    TopBar: TopBar$1,
    Breadcrumbs,
    TabBar,
    TopBarTabBarContainer
  },
  props: {
    breadcrumbs: Array
  },
  data() {
    return {
      tabBars: [
        {
          title: this.__("Dashboard"),
          to: this.route("dashboard"),
          active: this.route().current("dashboard")
        },
        {
          title: this.__("Sites"),
          to: this.route("sites.index"),
          active: this.route().current("sites.*")
        },
        Object.keys(this.$page.props.auth.can).length && (this.$page.props.auth.can.servers.create || this.$page.props.auth.can.servers.update || this.$page.props.auth.can.servers.delete) ? {
          title: this.__("Servers"),
          to: this.route("servers.index")
        } : null
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Breadcrumbs = resolveComponent("Breadcrumbs");
  const _component_TabBar = resolveComponent("TabBar");
  const _component_TopBarTabBarContainer = resolveComponent("TopBarTabBarContainer");
  const _component_TopBar = resolveComponent("TopBar", true);
  return openBlock(), createBlock(_component_TopBar, null, {
    breadcrumbs: withCtx(() => [
      createVNode(_component_Breadcrumbs, { items: $props.breadcrumbs }, null, 8, ["items"])
    ]),
    "tab-bar": withCtx(() => [
      createVNode(_component_TopBarTabBarContainer, null, {
        default: withCtx(() => [
          createVNode(_component_TabBar, { items: $data.tabBars }, null, 8, ["items"])
        ], void 0, true),
        _: 1
      })
    ]),
    _: 1
  });
}
const TopBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  TopBar as default
};
