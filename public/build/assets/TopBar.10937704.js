import { T as TopBar$1, B as Breadcrumbs, a as TabBar, b as TopBarTabBarContainer } from "./TabBar.abe46315.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode } from "./app.2c3b9863.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./Container.76729bd1.js";
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
          title: this.__("Profile"),
          to: this.route("profile.index"),
          active: this.route().current("profile.index")
        },
        {
          title: this.__("Security"),
          to: this.route("profile.security.index"),
          active: this.route().current("profile.security.index")
        },
        {
          title: this.__("Settings"),
          to: this.route("profile.settings.index"),
          active: this.route().current("profile.settings.index")
        },
        {
          title: this.__("Integrations"),
          to: this.route("profile.integrations.index"),
          active: this.route().current("profile.integrations.index")
        },
        this.$page.props.settings.billing ? {
          title: this.__("Billing"),
          to: this.route("profile.billing.index"),
          active: this.route().current("profile.billing.index")
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
