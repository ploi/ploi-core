import { C as Container } from "./Container-EuHAUh3h.js";
import { c as createElementBlock, o as openBlock, j as renderSlot, u as normalizeProps, x as guardReactiveProps, n as normalizeClass, y as link_default, r as resolveComponent, a as createVNode, w as withCtx, b as createBaseVNode, f as createCommentVNode, e as createBlock, t as toDisplayString, g as createTextVNode, F as Fragment, i as renderList } from "./app-D5-35U5T.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$c = {
  data: () => ({
    isOpen: false,
    position: "top"
  }),
  methods: {
    open() {
      this.isOpen = true;
      this.calculatePosition();
    },
    close() {
      this.isOpen = false;
      this.calculatePosition();
    },
    toggle() {
      this.isOpen = !this.isOpen;
      this.calculatePosition();
    },
    outsideClickListener(event) {
      if (this.$refs.dropdown !== event.target.closest(this.$refs.dropdown.tagName)) {
        this.close();
      }
    },
    calculatePosition() {
      const dropdownPositionTop = this.$refs.dropdown.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (dropdownPositionTop > viewportHeight * 0.75) {
        this.position = "bottom";
        return;
      }
      this.position = "top";
    }
  },
  mounted() {
    window.addEventListener("click", this.outsideClickListener);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.outsideClickListener);
  }
};
const _hoisted_1$8 = {
  ref: "dropdown",
  class: "relative"
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({ isOpen: _ctx.isOpen, open: $options.open, close: $options.close, toggle: $options.toggle, position: _ctx.position })))
  ], 512);
}
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const positionClasses = {
  top: "right-0 top-0 mt-8",
  bottom: "right-0 bottom-0 mb-8"
};
const _sfc_main$b = {
  props: {
    position: {
      type: String,
      default: () => "top",
      validator: (position) => Object.keys(positionClasses).includes(position)
    }
  },
  computed: {
    positionClasses() {
      return positionClasses[this.position];
    }
  }
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      "absolute flex flex-col py-1 overflow-hidden rounded shadow-2xl z-20 bg-surface-1",
      $options.positionClasses
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const DropdownList = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const _sfc_main$a = {
  components: {
    Link: link_default
  },
  props: {
    to: {
      type: String,
      required: true
    },
    componentIs: {
      type: String,
      default: "a"
    },
    method: {
      required: false,
      default: "get"
    },
    componentIsInertiaLink: {
      type: Boolean,
      default: true
    }
  }
};
const _hoisted_1$7 = { class: "text-medium-emphasis" };
const _hoisted_2$2 = { key: 0 };
const _hoisted_3$1 = { key: 1 };
const _hoisted_4$1 = ["href"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    $props.componentIsInertiaLink ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
      createVNode(_component_Link, {
        as: $props.componentIs,
        href: $props.to,
        method: $props.method,
        class: "flex items-center w-full h-10 px-6 whitespace-nowrap text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ], void 0, true),
        _: 3
      }, 8, ["as", "href", "method"])
    ])) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
      createBaseVNode("a", {
        href: $props.to,
        class: "flex items-center w-full h-10 px-6 whitespace-nowrap text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_4$1)
    ]))
  ]);
}
const DropdownListItem = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const _sfc_main$9 = {};
const _hoisted_1$6 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  class: "bi bi-moon",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
    }, null, -1)
  ]));
}
const IconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const _sfc_main$8 = {};
const _hoisted_1$5 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  class: "bi bi-sun",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z" }, null, -1),
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"
    }, null, -1)
  ]));
}
const IconSun = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = {};
const _hoisted_1$4 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  class: "bi bi-search",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
    }, null, -1),
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
    }, null, -1)
  ]));
}
const IconSearch = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = {};
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click")),
    class: "inline-flex items-center justify-center w-10 h-10 text-medium-emphasis rounded-circle focus:outline-none focus:text-high-emphasis"
  }, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const IconButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {
  components: {
    Container,
    Dropdown,
    DropdownList,
    DropdownListItem,
    IconMoon,
    IconSearch,
    IconSun,
    IconButton
  },
  data() {
    return {
      themeMode: this.$page.props.auth.user.theme
    };
  },
  mounted() {
    this.setDarkMode();
  },
  methods: {
    toggleTheme() {
      window.axios.post(`/profile/toggle-theme`).then((response) => {
        this.themeMode = response.data;
        this.setDarkMode();
      });
    },
    setDarkMode() {
      if (this.themeMode === "auto") {
        if (this.checkDarkMode()) {
          document.documentElement.classList.add("theme--dark");
        } else {
          document.documentElement.classList.remove("theme--dark");
        }
      } else if (this.themeMode === "dark") {
        document.documentElement.classList.add("theme--dark");
      } else {
        document.documentElement.classList.remove("theme--dark");
      }
    },
    checkDarkMode() {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    triggerSearch() {
      window.eventBus.emit("openSearch");
    }
  }
};
const _hoisted_1$3 = { class: "sticky top-0 border-b border-low-emphasis bg-top-bar z-30" };
const _hoisted_2$1 = { class: "w-full px-4 sm:px-8 mx-auto max-w-top-bar-container" };
const _hoisted_3 = { class: "flex flex-col" };
const _hoisted_4 = { class: "flex flex-col items-center justify-between py-4 space-y-4 md:space-y-0 md:flex-row text-top-bar" };
const _hoisted_5 = { class: "flex items-center space-x-5" };
const _hoisted_6 = ["src"];
const _hoisted_7 = { class: "flex items-center space-x-4" };
const _hoisted_8 = ["aria-label"];
const _hoisted_9 = ["aria-label"];
const _hoisted_10 = ["onClick"];
const _hoisted_11 = ["src", "alt"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconSearch = resolveComponent("IconSearch");
  const _component_IconButton = resolveComponent("IconButton");
  const _component_IconMoon = resolveComponent("IconMoon");
  const _component_IconSun = resolveComponent("IconSun");
  const _component_DropdownListItem = resolveComponent("DropdownListItem");
  const _component_DropdownList = resolveComponent("DropdownList");
  const _component_Dropdown = resolveComponent("Dropdown");
  return openBlock(), createElementBlock("header", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("nav", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            _ctx.$page.props.settings.logo ? (openBlock(), createElementBlock("img", {
              key: 0,
              class: "h-top-bar-logo",
              src: _ctx.$page.props.settings.logo
            }, null, 8, _hoisted_6)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "breadcrumbs")
          ]),
          createBaseVNode("ul", _hoisted_7, [
            createBaseVNode("li", {
              "aria-label": _ctx.__("Search"),
              "data-balloon-blunt": "",
              "data-balloon-pos": "down"
            }, [
              createVNode(_component_IconButton, { onClick: $options.triggerSearch }, {
                default: withCtx(() => [
                  createVNode(_component_IconSearch, { class: "text-top-bar" })
                ], void 0, true),
                _: 1
              }, 8, ["onClick"])
            ], 8, _hoisted_8),
            createBaseVNode("li", {
              "aria-label": $data.themeMode === "light" ? _ctx.__("Enable dark mode") : _ctx.__("Enable light mode"),
              "data-balloon-blunt": "",
              "data-balloon-pos": "down"
            }, [
              createVNode(_component_IconButton, { onClick: $options.toggleTheme }, {
                default: withCtx(() => [
                  $data.themeMode === "light" ? (openBlock(), createBlock(_component_IconMoon, {
                    key: 0,
                    class: "text-top-bar"
                  })) : createCommentVNode("", true),
                  $data.themeMode === "dark" ? (openBlock(), createBlock(_component_IconSun, {
                    key: 1,
                    class: "text-top-bar"
                  })) : createCommentVNode("", true)
                ], void 0, true),
                _: 1
              }, 8, ["onClick"])
            ], 8, _hoisted_9),
            createBaseVNode("li", null, [
              createVNode(_component_Dropdown, null, {
                default: withCtx(({ toggle, isOpen }) => [
                  createBaseVNode("button", {
                    class: "flex h-auto m-0 appearance-none items-center",
                    onClick: toggle
                  }, [
                    createBaseVNode("span", null, toDisplayString(_ctx.$page.props.auth.user.name), 1),
                    createBaseVNode("img", {
                      class: "ml-2 inline w-8 h-8 rounded-avatar bg-surface-2",
                      src: _ctx.$page.props.auth.user.avatar,
                      alt: _ctx.$page.props.auth.user.name
                    }, null, 8, _hoisted_11)
                  ], 8, _hoisted_10),
                  isOpen ? (openBlock(), createBlock(_component_DropdownList, { key: 0 }, {
                    default: withCtx(() => [
                      _ctx.$page.props.settings.support ? (openBlock(), createBlock(_component_DropdownListItem, {
                        key: 0,
                        to: "/support"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Support")), 1)
                        ], void 0, true),
                        _: 1
                      })) : createCommentVNode("", true),
                      _ctx.$page.props.settings.documentation ? (openBlock(), createBlock(_component_DropdownListItem, {
                        key: 1,
                        to: "/documentation"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Documentation")), 1)
                        ], void 0, true),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_DropdownListItem, {
                        to: _ctx.route("profile.index")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Profile")), 1)
                        ], void 0, true),
                        _: 1
                      }, 8, ["to"]),
                      _ctx.$page.props.settings.billing ? (openBlock(), createBlock(_component_DropdownListItem, {
                        key: 2,
                        to: _ctx.route("profile.billing.index")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Billing")), 1)
                        ], void 0, true),
                        _: 1
                      }, 8, ["to"])) : createCommentVNode("", true),
                      _ctx.$page.props.auth.user.role === "admin" ? (openBlock(), createBlock(_component_DropdownListItem, {
                        key: 3,
                        class: "!text-danger",
                        "component-is-inertia-link": false,
                        "component-is": "a",
                        to: "/admin"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Administration")), 1)
                        ], void 0, true),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_DropdownListItem, {
                        to: _ctx.route("logout"),
                        "component-is": "button",
                        method: "post"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Sign out")), 1)
                        ], void 0, true),
                        _: 1
                      }, 8, ["to"])
                    ], void 0, true),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        renderSlot(_ctx.$slots, "tab-bar")
      ])
    ])
  ]);
}
const TopBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {
  props: {
    to: {
      type: String,
      required: true
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  return openBlock(), createBlock(_component_inertia_link, {
    href: $props.to,
    class: "font-medium text-body text-breadcrumbs"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ], void 0, true),
    _: 3
  }, 8, ["href"]);
}
const BreadcrumbsItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  components: {
    BreadcrumbsItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
const _hoisted_1$2 = { class: "flex items-center space-x-2" };
const _hoisted_2 = {
  key: 0,
  class: "ml-2 text-low-emphasis"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BreadcrumbsItem = resolveComponent("BreadcrumbsItem");
  return openBlock(), createElementBlock("ul", _hoisted_1$2, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
      return openBlock(), createElementBlock("li", {
        key: item.title
      }, [
        createVNode(_component_BreadcrumbsItem, {
          to: item.to
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(item.title), 1)
          ], void 0, true),
          _: 2
        }, 1032, ["to"]),
        index < $props.items.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_2, "/")) : createCommentVNode("", true)
      ]);
    }), 128))
  ]);
}
const Breadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {};
const _hoisted_1$1 = { class: "flex items-center justify-center pb-4" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("nav", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const TopBarTabBarContainer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const transitionClasses = "transition duration-fast hover:text-high-emphasis focus:text-high-emphasis";
const baseClasses = "inline-flex items-center justify-center h-10 px-6 font-medium rounded text-small text-tab-bar";
const activeClasses = "shadow text-tab-bar-active bg-tab-bar-item";
const _sfc_main$1 = {
  props: {
    to: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    baseClasses,
    activeClasses,
    transitionClasses
  })
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = resolveComponent("inertia-link");
  return openBlock(), createElementBlock("li", null, [
    createVNode(_component_inertia_link, {
      class: normalizeClass([_ctx.baseClasses, _ctx.transitionClasses, $props.active ? _ctx.activeClasses : null]),
      href: $props.to
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ], void 0, true),
      _: 3
    }, 8, ["class", "href"])
  ]);
}
const TabBarItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    TabBarItem
  },
  props: {
    items: {
      required: true
    }
  }
};
const _hoisted_1 = { class: "inline-flex flex-row p-1 overflow-hidden overflow-x-auto whitespace-nowrap rounded bg-tab-bar" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TabBarItem = resolveComponent("TabBarItem");
  return openBlock(), createElementBlock("ul", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
      return openBlock(), createElementBlock(Fragment, null, [
        item ? (openBlock(), createBlock(_component_TabBarItem, {
          key: item.title,
          to: item.to,
          active: item.active
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(item.title), 1)
          ], void 0, true),
          _: 2
        }, 1032, ["to", "active"])) : createCommentVNode("", true)
      ], 64);
    }), 256))
  ]);
}
const TabBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Breadcrumbs as B,
  DropdownListItem as D,
  IconButton as I,
  TopBarTabBarContainer as T,
  TabBar as a,
  TopBar as b,
  DropdownList as c,
  Dropdown as d
};
