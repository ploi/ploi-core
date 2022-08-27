import { o as openBlock, c as createElementBlock, h as renderSlot, b as createBaseVNode, e as createCommentVNode, n as normalizeClass, t as toDisplayString, l as resolveDirective, j as withDirectives, m as vModelText, a as createVNode, w as withCtx, F as Fragment, k as renderList, T as Transition, g as createBlock, f as createTextVNode, p as TransitionGroup, r as resolveComponent } from "./app.dd23b2e7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { u as useNotification } from "./notification.b2d3510c.js";
const _sfc_main$g = {};
const _hoisted_1$g = {
  id: "main",
  class: "flex-1 bg-surface-1"
};
function _sfc_render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("main", _hoisted_1$g, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const Content = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const _sfc_main$f = {};
const _hoisted_1$f = { class: "flex flex-col min-h-screen" };
function _sfc_render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const Page = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
const _sfc_main$e = {};
const _hoisted_1$e = { class: "flex justify-between mt-16 mb-8" };
function _sfc_render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("header", _hoisted_1$e, [
    createBaseVNode("div", null, [
      renderSlot(_ctx.$slots, "start")
    ]),
    createBaseVNode("div", null, [
      renderSlot(_ctx.$slots, "end")
    ])
  ]);
}
const PageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const _sfc_main$d = {};
const _hoisted_1$d = { class: "font-semibold text-heading" };
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("h1", _hoisted_1$d, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const PageHeaderTitle = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const _sfc_main$c = {};
const _hoisted_1$c = { class: "my-8 space-y-8" };
function _sfc_render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("section", _hoisted_1$c, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const PageBody = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const _sfc_main$b = {};
const _hoisted_1$b = { class: "flex flex-col divide-y divide-low-emphasis" };
function _sfc_render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("ul", _hoisted_1$b, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const List = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const _sfc_main$a = {};
const _hoisted_1$a = { class: "-mx-4" };
const _hoisted_2$9 = { class: "block p-4 transition rounded shadow-none duration-fast hover:bg-surface-2" };
const _hoisted_3$9 = { class: "flex flex-row items-center space-x-4" };
const _hoisted_4$9 = { class: "flex-1" };
const _hoisted_5$4 = { class: "font-medium text-body" };
const _hoisted_6$3 = { class: "text-small text-medium-emphasis" };
function _sfc_render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("li", null, [
    createBaseVNode("div", _hoisted_1$a, [
      createBaseVNode("div", _hoisted_2$9, [
        createBaseVNode("div", _hoisted_3$9, [
          renderSlot(_ctx.$slots, "prefix"),
          createBaseVNode("div", _hoisted_4$9, [
            createBaseVNode("h2", _hoisted_5$4, [
              renderSlot(_ctx.$slots, "title")
            ]),
            createBaseVNode("p", _hoisted_6$3, [
              renderSlot(_ctx.$slots, "subtitle")
            ])
          ]),
          renderSlot(_ctx.$slots, "suffix")
        ])
      ])
    ])
  ]);
}
const ListItem = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const variantClasses$1 = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  gray: "bg-surface-2 border border-medium-emphasis"
};
const _sfc_main$9 = {
  props: {
    variant: {
      type: String,
      default: () => "primary",
      validator: (variant) => Object.keys(variantClasses$1).includes(variant)
    }
  },
  data() {
    return {
      variantClasses: variantClasses$1
    };
  },
  computed: {
    label() {
      if (this.variant === "success") {
        return this.__("Active");
      }
      if (this.variant === "gray") {
        return this.__("Busy");
      }
      return this.__("Unknown");
    }
  }
};
const _hoisted_1$9 = ["aria-label"];
const _hoisted_2$8 = {
  key: 0,
  class: "flex items-center justify-center inset-0 h-2 w-2"
};
const _hoisted_3$8 = /* @__PURE__ */ createBaseVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-circle bg-success opacity-75" }, null, -1);
const _hoisted_4$8 = [
  _hoisted_3$8
];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    "aria-label": $options.label,
    "data-balloon-blunt": "",
    "data-balloon-pos": "down",
    class: normalizeClass(["flex items-center justify-center w-2 h-2 rounded-circle relative", $data.variantClasses[$props.variant]])
  }, [
    $props.variant === "gray" ? (openBlock(), createElementBlock("span", _hoisted_2$8, _hoisted_4$8)) : createCommentVNode("", true)
  ], 10, _hoisted_1$9);
}
const StatusBubble = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const _sfc_main$8 = {
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    cappedCount() {
      return this.count < 9 ? this.count : 9;
    }
  }
};
const _hoisted_1$8 = { class: "inline-flex items-center justify-center w-6 h-6 font-medium bg-danger text-on-danger text-small rounded-circle" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, toDisplayString($options.cappedCount), 1);
}
const NotificationBadge = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const variantClasses = {
  danger: "text-danger",
  info: "text-primary"
};
const _sfc_main$7 = {
  data() {
    return {
      variantClasses
    };
  },
  computed: {
    confirm() {
      return this.$store.state.confirm;
    }
  },
  methods: {
    cancelConfirm() {
      return this.$store.dispatch("confirm/close");
    }
  }
};
const _hoisted_1$7 = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-end justify-center p-2 sm:items-center"
};
const _hoisted_2$7 = { class: "w-full max-w-xs overflow-hidden rounded shadow-2xl bg-surface-1" };
const _hoisted_3$7 = { class: "px-4 py-6 space-y-2 text-center" };
const _hoisted_4$7 = { class: "font-medium text-body" };
const _hoisted_5$3 = { class: "text-small text-medium-emphasis" };
const _hoisted_6$2 = { class: "grid grid-cols-2 border-t divide-x border-low-emphasis divide-low-emphasis" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = resolveDirective("click-outside");
  return $options.confirm.isOpen ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
    withDirectives((openBlock(), createElementBlock("div", _hoisted_2$7, [
      createBaseVNode("header", _hoisted_3$7, [
        createBaseVNode("h2", _hoisted_4$7, toDisplayString($options.confirm.title), 1),
        createBaseVNode("p", _hoisted_5$3, toDisplayString($options.confirm.message), 1)
      ]),
      createBaseVNode("footer", _hoisted_6$2, [
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = ($event) => $options.cancelConfirm()),
          class: "inline-flex items-center justify-center h-12 px-4 font-medium transition ease-in-out text-small focus:outline-none text-high-emphasis duration-fast"
        }, toDisplayString(_ctx.__("Cancel")), 1),
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = ($event) => $options.confirm.onConfirm()),
          class: normalizeClass(["inline-flex items-center justify-center h-12 px-4 font-medium transition ease-in-out text-small focus:outline-none duration-fast", $data.variantClasses[$options.confirm.variant ? $options.confirm.variant : "danger"]])
        }, toDisplayString(_ctx.__("Confirm")), 3)
      ])
    ])), [
      [_directive_click_outside, $options.cancelConfirm]
    ])
  ])) : createCommentVNode("", true);
}
const Confirm = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = {};
const _hoisted_1$6 = { class: "flex flex-row items-start w-full max-w-sm px-5 py-3 space-x-4 rounded shadow-2xl pointer-events-auto bg-overlay bf-blur" };
const _hoisted_2$6 = { class: "mr-auto" };
const _hoisted_3$6 = { class: "font-medium text-body" };
const _hoisted_4$6 = { class: "text-small text-medium-emphasis" };
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("li", _hoisted_1$6, [
    renderSlot(_ctx.$slots, "prefix"),
    createBaseVNode("div", _hoisted_2$6, [
      createBaseVNode("p", _hoisted_3$6, [
        renderSlot(_ctx.$slots, "title")
      ]),
      createBaseVNode("p", _hoisted_4$6, [
        renderSlot(_ctx.$slots, "subtitle")
      ])
    ])
  ]);
}
const Notification = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {};
const _hoisted_1$5 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("path", { d: "M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" }, null, -1);
const _hoisted_4$5 = [
  _hoisted_2$5,
  _hoisted_3$5
];
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4$5);
}
const IconDanger = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {};
const _hoisted_1$4 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("path", { d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" }, null, -1);
const _hoisted_4$4 = [
  _hoisted_2$4,
  _hoisted_3$4
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4$4);
}
const IconWarning = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {};
const _hoisted_1$3 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
}, null, -1);
const _hoisted_4$3 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$3);
}
const IconSuccess = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  class: "bi bi-info-circle",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", { d: "M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" }, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "4.5",
  r: "1"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4$2
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5$2);
}
const IconInfo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  data() {
    return {
      searchOpen: false,
      search: "",
      results: [],
      timeout: null
    };
  },
  computed: {
    isSearching() {
      return this.search.trim() !== "";
    }
  },
  watch: {
    search: function(value) {
      this.results = null;
      this.loading = true;
      this.getResults();
      this.arrowNavigation = {
        identifier: null,
        index: -1
      };
    }
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
    window.eventBus.on("openSearch", () => {
      this.openSearch();
    });
  },
  unmounted() {
    if (this.timeout)
      clearTimeout(this.timeout);
  },
  methods: {
    getResults() {
      if (this.timeout)
        clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if (!this.search) {
          this.loading = false;
          return;
        }
        this.results = null;
        window.axios.get(this.route("search", { query: this.search })).then((response) => {
          this.loading = false;
          this.totalResults = response.data.total;
          if (!response.data.total) {
            this.results = null;
          } else {
            this.results = response.data.results;
          }
        });
      }, 300);
    },
    handleKeydown(event) {
      if (this.isNotInputElement(event) && event.keyCode === 191) {
        event.preventDefault();
        event.stopPropagation();
        this.openSearch();
      }
      if (event.keyCode === 27) {
        this.closeSearch();
      }
      if (!this.isNotInputElement(event)) {
        return;
      }
      if (event.ctrlKey || event.metaKey) {
        return;
      }
      if (this.$page.props.auth.user.keyboard_shortcuts) {
        if (event.key === "c") {
          this.$inertia.visit(this.route("sites.index", { create: true }));
        }
        if (event.key === "p") {
          this.$inertia.visit(this.route("profile.index"));
        }
      }
    },
    openSearch() {
      this.searchOpen = true;
      this.$nextTick(() => {
        if (this.$refs.search) {
          this.$refs.search.focus();
        }
      });
    },
    closeSearch(url) {
      this.search = "";
      this.searchOpen = false;
      if (this.$refs.search) {
        this.$refs.search.blur();
      }
      this.$inertia.get(url);
    },
    isNotInputElement(event) {
      const tagName = event.target.tagName;
      return Boolean(
        tagName !== "INPUT" && tagName !== "TEXTAREA" && event.target.id !== "code-editor" && !event.target.classList.contains("form-textarea")
      );
    }
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "w-full h-screen fixed inset-0 bg-backdrop bf-blur z-40 flex items-center flex-col"
};
const _hoisted_2$1 = { class: "w-full max-w-4xl p-8 space-y-4" };
const _hoisted_3$1 = ["placeholder"];
const _hoisted_4$1 = {
  class: "rounded bg-surface-1 shadow-md p-4",
  key: "hints"
};
const _hoisted_5$1 = { class: "flex flex-col space-y-3" };
const _hoisted_6$1 = { class: "text-small font-medium" };
const _hoisted_7$1 = { class: "space-x-2 text-small" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("code", { class: "rounded px-2 py-1 monospace border border-low-emphasis shadow-sm" }, "/", -1);
const _hoisted_9 = { class: "space-x-2 text-small" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("code", { class: "rounded px-2 py-1 monospace border border-low-emphasis shadow-sm" }, "c", -1);
const _hoisted_11 = { class: "space-x-2 text-small" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("code", { class: "rounded px-2 py-1 monospace border border-low-emphasis shadow-sm" }, "p", -1);
const _hoisted_13 = {
  class: "rounded bg-surface-1 shadow-md overflow-hidden",
  key: "results"
};
const _hoisted_14 = { class: "flex flex-col divide-y divide-low-emphasis" };
const _hoisted_15 = { class: "px-4 py-2 bg-surface-2" };
const _hoisted_16 = { class: "text-small font-medium" };
const _hoisted_17 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_click_outside = resolveDirective("click-outside");
  return $data.searchOpen ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    withDirectives((openBlock(), createElementBlock("div", _hoisted_2$1, [
      withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.search = $event),
        ref: "search",
        class: "w-full h-12 px-4 rounded bg-surface-1 shadow-md",
        type: "text",
        placeholder: _ctx.__("Type to search anything...")
      }, null, 8, _hoisted_3$1), [
        [vModelText, $data.search]
      ]),
      createVNode(Transition, {
        "enter-active-class": "transition ease-in-out transform duration-fast",
        "leave-active-class": "transition ease-in-out transform duration-fast",
        "enter-class": "-translate-y-4 opacity-0 scale-95",
        "enter-to-class": "translate-y-0 opacity-100 scale-100",
        "leave-class": "translate-y-0 opacity-100 scale-100",
        "leave-to-class": "translate-y-4 opacity-0 scale-95",
        mode: "out-in"
      }, {
        default: withCtx(() => [
          !$options.isSearching ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
            createBaseVNode("ul", _hoisted_5$1, [
              createBaseVNode("li", null, [
                createBaseVNode("h3", _hoisted_6$1, toDisplayString(_ctx.__("All helpful key shortcuts")), 1)
              ]),
              createBaseVNode("li", _hoisted_7$1, [
                _hoisted_8$1,
                createBaseVNode("span", null, toDisplayString(_ctx.__("Open search")), 1)
              ]),
              createBaseVNode("li", _hoisted_9, [
                _hoisted_10,
                createBaseVNode("span", null, toDisplayString(_ctx.__("Create site")), 1)
              ]),
              createBaseVNode("li", _hoisted_11, [
                _hoisted_12,
                createBaseVNode("span", null, toDisplayString(_ctx.__("Goto profile")), 1)
              ])
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_13, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.results, (category) => {
              return openBlock(), createElementBlock("ul", _hoisted_14, [
                createBaseVNode("li", _hoisted_15, [
                  createBaseVNode("h3", _hoisted_16, toDisplayString(category.label) + " (" + toDisplayString(category.total) + ")", 1)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(category.results, (result) => {
                  return openBlock(), createElementBlock("li", null, [
                    createBaseVNode("button", {
                      onClick: ($event) => $options.closeSearch(result.route),
                      class: "px-4 py-3 block text-small"
                    }, toDisplayString(result.name), 9, _hoisted_17)
                  ]);
                }), 256))
              ]);
            }), 256))
          ]))
        ], void 0, true),
        _: 1
      })
    ])), [
      [_directive_click_outside, $options.closeSearch]
    ])
  ])) : createCommentVNode("", true);
}
const SearchPalette = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    Confirm,
    Notification,
    IconDanger,
    IconWarning,
    IconSuccess,
    IconInfo,
    SearchPalette
  },
  data() {
    return {
      searchOpen: false
    };
  },
  computed: {
    backdropIsOpen() {
      return this.$store.state.backdrop.isOpen;
    },
    notifications() {
      return this.$store.state.notification.notifications;
    }
  },
  watch: {
    "$page.props.flash.success": function() {
      if (this.$page.props.flash.success) {
        useNotification({
          variant: "success",
          title: this.__(`Success`),
          message: this.$page.props.flash.success
        });
        this.$page.props.flash.success = null;
      }
    },
    "$page.props.flash.info": function() {
      if (this.$page.props.flash.info) {
        useNotification({
          variant: "info",
          title: this.__(`Info`),
          message: this.$page.props.flash.info
        });
        this.$page.props.flash.info = null;
      }
    },
    "$page.props.flash.error": function() {
      if (this.$page.props.flash.error) {
        useNotification({
          variant: "danger",
          title: this.__(`Error`),
          message: this.$page.props.flash.error
        });
        this.$page.props.flash.error = null;
      }
    }
  },
  methods: {
    useNotification
  }
};
const _hoisted_1 = { class: "antialiased font-body text-high-emphasis bg-surface" };
const _hoisted_2 = {
  key: 0,
  class: "relative bg-primary text-white"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "pr-16 sm:text-center sm:px-16" }, [
    /* @__PURE__ */ createBaseVNode("p", { class: "font-medium text-on-primary" }, " You are currently in a demo environment. ")
  ])
], -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = { class: "max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8" };
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = { class: "fixed inset-0 z-50 flex items-start justify-end p-5 pointer-events-none" };
const _hoisted_8 = {
  key: 0,
  class: "fixed inset-0 z-40 bg-backdrop bf-blur"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PortalTarget = resolveComponent("PortalTarget");
  const _component_IconDanger = resolveComponent("IconDanger");
  const _component_IconSuccess = resolveComponent("IconSuccess");
  const _component_IconInfo = resolveComponent("IconInfo");
  const _component_IconWarning = resolveComponent("IconWarning");
  const _component_Notification = resolveComponent("Notification");
  const _component_SearchPalette = resolveComponent("SearchPalette");
  const _component_Confirm = resolveComponent("Confirm");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.$page.props.settings.demo ? (openBlock(), createElementBlock("div", _hoisted_2, _hoisted_4)) : createCommentVNode("", true),
    _ctx.$page.props.system_alert ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["relative text-white", {
        "bg-primary": _ctx.$page.props.system_alert.type === "info",
        "bg-warning": _ctx.$page.props.system_alert.type === "warning",
        "bg-danger": _ctx.$page.props.system_alert.type === "danger"
      }])
    }, [
      createBaseVNode("div", _hoisted_5, [
        createBaseVNode("div", {
          class: "pr-16 sm:text-center sm:px-16 font-medium text-on-primary",
          innerHTML: _ctx.$page.props.system_alert.message_html
        }, null, 8, _hoisted_6)
      ])
    ], 2)) : createCommentVNode("", true),
    createVNode(_component_PortalTarget, { name: "modals" }),
    createBaseVNode("div", _hoisted_7, [
      createVNode(TransitionGroup, {
        "enter-active-class": "transition ease-out transform duration-fast",
        "enter-class": "translate-x-6 opacity-0",
        "enter-to-class": "translate-x-0 opacity-100",
        "leave-active-class": "transition ease-in transform duration-fast",
        "leave-class": "opacity-100",
        "leave-to-class": "scale-50 -translate-y-6 opacity-0",
        tag: "div",
        class: "flex flex-col space-y-2"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.notifications, (notification, index) => {
            return openBlock(), createBlock(_component_Notification, { key: index }, {
              prefix: withCtx(() => [
                notification.variant === "danger" || notification.variant === "error" ? (openBlock(), createBlock(_component_IconDanger, {
                  key: 0,
                  class: "flex-shrink-0 w-6 h-6 text-danger"
                })) : createCommentVNode("", true),
                notification.variant === "success" ? (openBlock(), createBlock(_component_IconSuccess, {
                  key: 1,
                  class: "flex-shrink-0 w-6 h-6 text-success"
                })) : createCommentVNode("", true),
                notification.variant === "info" ? (openBlock(), createBlock(_component_IconInfo, {
                  key: 2,
                  class: "flex-shrink-0 w-6 h-6 text-primary"
                })) : createCommentVNode("", true),
                notification.variant === "warning" ? (openBlock(), createBlock(_component_IconWarning, {
                  key: 3,
                  class: "flex-shrink-0 w-6 h-6 text-warning"
                })) : createCommentVNode("", true)
              ]),
              title: withCtx(() => [
                createTextVNode(toDisplayString(notification.title), 1)
              ]),
              subtitle: withCtx(() => [
                createTextVNode(toDisplayString(notification.message), 1)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ], void 0, true),
        _: 1
      })
    ]),
    createVNode(Transition, {
      "enter-active-class": "transition ease-in-out duration-fast",
      "leave-active-class": "transition ease-in-out duration-fast",
      "enter-class": "opacity-0",
      "enter-to-class": "opacity-100",
      "leave-class": "opacity-100",
      "leave-to-class": "opacity-0"
    }, {
      default: withCtx(() => [
        $options.backdropIsOpen ? (openBlock(), createElementBlock("div", _hoisted_8)) : createCommentVNode("", true)
      ], void 0, true),
      _: 1
    }),
    createVNode(_component_SearchPalette),
    createVNode(Transition, {
      "enter-active-class": "transition ease-in-out transform duration-fast",
      "leave-active-class": "transition ease-in-out transform duration-fast",
      "enter-class": "translate-y-8 opacity-0",
      "enter-to-class": "translate-y-0 opacity-100",
      "leave-class": "opacity-100",
      "leave-to-class": "opacity-0"
    }, {
      default: withCtx(() => [
        createVNode(_component_Confirm)
      ], void 0, true),
      _: 1
    }),
    renderSlot(_ctx.$slots, "default")
  ]);
}
const MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Content as C,
  List as L,
  MainLayout as M,
  NotificationBadge as N,
  Page as P,
  StatusBubble as S,
  PageHeader as a,
  PageHeaderTitle as b,
  PageBody as c,
  ListItem as d
};
