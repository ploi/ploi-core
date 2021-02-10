(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Servers/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Servers/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TopBar */ "./resources/js/Pages/Servers/components/TopBar.vue");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Container */ "./resources/js/components/Container.vue");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Content */ "./resources/js/components/Content.vue");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Page */ "./resources/js/components/Page.vue");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PageHeader */ "./resources/js/components/PageHeader.vue");
/* harmony import */ var _components_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/PageHeaderTitle */ "./resources/js/components/PageHeaderTitle.vue");
/* harmony import */ var _components_PageBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/PageBody */ "./resources/js/components/PageBody.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/List */ "./resources/js/components/List.vue");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/ListItem */ "./resources/js/components/ListItem.vue");
/* harmony import */ var _components_StatusBubble__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/StatusBubble */ "./resources/js/components/StatusBubble.vue");
/* harmony import */ var _components_NotificationBadge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/NotificationBadge */ "./resources/js/components/NotificationBadge.vue");
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Layouts/MainLayout */ "./resources/js/Layouts/MainLayout.vue");
/* harmony import */ var _components_icons_IconBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/icons/IconBox */ "./resources/js/components/icons/IconBox.vue");
/* harmony import */ var _components_icons_IconGlobe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/icons/IconGlobe */ "./resources/js/components/icons/IconGlobe.vue");
/* harmony import */ var _components_icons_IconStorage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/icons/IconStorage */ "./resources/js/components/icons/IconStorage.vue");
/* harmony import */ var _components_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/IconButton */ "./resources/js/components/IconButton.vue");
/* harmony import */ var _components_icons_IconMore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/icons/IconMore */ "./resources/js/components/icons/IconMore.vue");
/* harmony import */ var _components_EmptyImage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/EmptyImage */ "./resources/js/components/EmptyImage.vue");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/Modal */ "./resources/js/components/Modal.vue");
/* harmony import */ var _components_ModalContainer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/components/ModalContainer */ "./resources/js/components/ModalContainer.vue");
/* harmony import */ var _components_forms_FormInput__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/components/forms/FormInput */ "./resources/js/components/forms/FormInput.vue");
/* harmony import */ var _components_forms_FormSelect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/components/forms/FormSelect */ "./resources/js/components/forms/FormSelect.vue");
/* harmony import */ var _components_FormActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/components/FormActions */ "./resources/js/components/FormActions.vue");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/components/Dropdown */ "./resources/js/components/Dropdown.vue");
/* harmony import */ var _components_DropdownList__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/components/DropdownList */ "./resources/js/components/DropdownList.vue");
/* harmony import */ var _components_DropdownListItem__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/components/DropdownListItem */ "./resources/js/components/DropdownListItem.vue");
/* harmony import */ var _components_DropdownListItemButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/components/DropdownListItemButton */ "./resources/js/components/DropdownListItemButton.vue");
/* harmony import */ var _hooks_confirm_delete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/hooks/confirm-delete */ "./resources/js/hooks/confirm-delete.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





























/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: function metaInfo() {
    return {
      title: "".concat(this.__('Servers'))
    };
  },
  layout: _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_12__["default"],
  components: {
    TopBar: _components_TopBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Container: _components_Container__WEBPACK_IMPORTED_MODULE_1__["default"],
    Content: _components_Content__WEBPACK_IMPORTED_MODULE_2__["default"],
    Page: _components_Page__WEBPACK_IMPORTED_MODULE_3__["default"],
    PageHeader: _components_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    PageHeaderTitle: _components_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_5__["default"],
    PageBody: _components_PageBody__WEBPACK_IMPORTED_MODULE_6__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
    List: _components_List__WEBPACK_IMPORTED_MODULE_8__["default"],
    IconButton: _components_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"],
    IconMore: _components_icons_IconMore__WEBPACK_IMPORTED_MODULE_17__["default"],
    ListItem: _components_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"],
    StatusBubble: _components_StatusBubble__WEBPACK_IMPORTED_MODULE_10__["default"],
    NotificationBadge: _components_NotificationBadge__WEBPACK_IMPORTED_MODULE_11__["default"],
    IconBox: _components_icons_IconBox__WEBPACK_IMPORTED_MODULE_13__["default"],
    IconGlobe: _components_icons_IconGlobe__WEBPACK_IMPORTED_MODULE_14__["default"],
    IconStorage: _components_icons_IconStorage__WEBPACK_IMPORTED_MODULE_15__["default"],
    EmptyImage: _components_EmptyImage__WEBPACK_IMPORTED_MODULE_18__["default"],
    Modal: _components_Modal__WEBPACK_IMPORTED_MODULE_19__["default"],
    ModalContainer: _components_ModalContainer__WEBPACK_IMPORTED_MODULE_20__["default"],
    FormInput: _components_forms_FormInput__WEBPACK_IMPORTED_MODULE_21__["default"],
    FormActions: _components_FormActions__WEBPACK_IMPORTED_MODULE_23__["default"],
    FormSelect: _components_forms_FormSelect__WEBPACK_IMPORTED_MODULE_22__["default"],
    Dropdown: _components_Dropdown__WEBPACK_IMPORTED_MODULE_24__["default"],
    DropdownList: _components_DropdownList__WEBPACK_IMPORTED_MODULE_25__["default"],
    DropdownListItem: _components_DropdownListItem__WEBPACK_IMPORTED_MODULE_26__["default"],
    DropdownListItemButton: _components_DropdownListItemButton__WEBPACK_IMPORTED_MODULE_27__["default"]
  },
  props: {
    servers: Object,
    dataProviders: [Array, Object]
  },
  computed: {
    shouldBePolling: function shouldBePolling() {
      return !!this.servers.data.filter(function (server) {
        return server.status === 'busy';
      }).length;
    }
  },
  mounted: function mounted() {
    if (this.shouldBePolling) {
      this.startPollingInterval();
    }
  },
  watch: {
    shouldBePolling: function shouldBePolling(value) {
      if (!value) {
        this.clearPollingInterval();
        return;
      }

      if (!this.pollingInterval) {
        this.startPollingInterval();
      }
    },
    'form.provider': function formProvider(value) {
      var _this = this;

      // Reset values if null
      if (!value) {
        this.regions = [];
        this.plans = [];
        return;
      }

      this.loading = true;
      window.axios.get(this.route('servers.plans-and-regions', value)).then(function (response) {
        _this.loading = false;
        _this.regions = response.data.regions;
        _this.plans = response.data.plans;
      })["catch"](function (error) {
        _this.loading = false;
      });
    }
  },
  data: function data() {
    return {
      loading: false,
      form: {
        name: null,
        provider: null,
        region: null,
        plan: null
      },
      providers: this.dataProviders,
      regions: [],
      plans: [],
      pollingInterval: null,
      modalIsOpen: false,
      breadcrumbs: [{
        title: this.$page.props.settings.name,
        to: '/'
      }, {
        title: this.__('Servers'),
        to: this.route('servers.index')
      }]
    };
  },
  methods: {
    startPollingInterval: function startPollingInterval() {
      this.pollingInterval = setInterval(function () {
        this.poll();
      }.bind(this), 120000);
    },
    clearPollingInterval: function clearPollingInterval() {
      clearTimeout(this.pollingInterval);
      this.pollingInterval = null;
    },
    poll: function poll() {
      this.$inertia.replace(this.route('servers.index'), {
        only: ['servers'],
        preserveScroll: true
      });
    },
    submit: function submit() {
      var _this2 = this;

      this.$inertia.post(this.route('servers.store'), this.form, {
        only: ['errors', 'flash', 'servers'],
        onStart: function onStart() {
          return _this2.loading = true;
        },
        onSuccess: function onSuccess() {
          if (!Object.keys(_this2.$page.props.errors).length) {
            _this2.form.domain = null;
            _this2.modalIsOpen = false;
            _this2.form = {
              name: null,
              provider: null,
              region: null,
              plan: null
            };
          }
        },
        onFinish: function onFinish() {
          return _this2.loading = false;
        }
      });
    },
    confirmDelete: function confirmDelete(server) {
      var _this3 = this;

      Object(_hooks_confirm_delete__WEBPACK_IMPORTED_MODULE_28__["useConfirmDelete"])({
        title: this.__('Are you sure?'),
        message: "Your server will be deleted completely, this action is irreversible.",
        onConfirm: function onConfirm() {
          return _this3["delete"](server);
        }
      });
    },
    "delete": function _delete(server) {
      this.$inertia["delete"](this.route('servers.delete', server.id));
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clearPollingInterval();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Servers/components/TopBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Servers/components/TopBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/TopBar */ "./resources/js/components/TopBar.vue");
/* harmony import */ var _components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Breadcrumbs */ "./resources/js/components/Breadcrumbs.vue");
/* harmony import */ var _components_TabBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TabBar */ "./resources/js/components/TabBar.vue");
/* harmony import */ var _components_TopBarTabBarContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/TopBarTabBarContainer */ "./resources/js/components/TopBarTabBarContainer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TopBar: _components_TopBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Breadcrumbs: _components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__["default"],
    TabBar: _components_TabBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    TopBarTabBarContainer: _components_TopBarTabBarContainer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    breadcrumbs: Array
  },
  data: function data() {
    return {
      tabBars: [{
        title: this.__('Dashboard'),
        to: this.route('dashboard'),
        active: this.route().current('dashboard')
      }, {
        title: this.__('Sites'),
        to: this.route('sites.index'),
        active: this.route().current('sites.*')
      }, {
        title: 'Servers',
        to: this.route('servers.index'),
        active: this.route().current('servers.*')
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/FormSelect.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/FormSelect.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FormGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FormGroup */ "./resources/js/components/FormGroup.vue");
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Label */ "./resources/js/components/Label.vue");
/* harmony import */ var _components_ErrorText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ErrorText */ "./resources/js/components/ErrorText.vue");
/* harmony import */ var _components_HelperText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/HelperText */ "./resources/js/components/HelperText.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var defaultClasses = 'w-full border-medium-emphasis text-body h-10 max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary';
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      "default": function _default() {
        return 'text';
      }
    },
    required: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    },
    helperText: {
      type: String
    },
    errors: {
      type: Array
    },
    placeholder: {
      type: String
    },
    value: {
      required: false,
      "default": ''
    },
    loading: {
      type: Boolean,
      required: false,
      "default": false
    },
    disabled: {
      type: Boolean,
      required: false,
      "default": false
    }
  },
  components: {
    FormGroup: _components_FormGroup__WEBPACK_IMPORTED_MODULE_0__["default"],
    Label: _components_Label__WEBPACK_IMPORTED_MODULE_1__["default"],
    ErrorText: _components_ErrorText__WEBPACK_IMPORTED_MODULE_2__["default"],
    HelperText: _components_HelperText__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      defaultClasses: defaultClasses,
      selected: this.value
    };
  },
  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Servers/Index.vue?vue&type=template&id=3a9449cc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Servers/Index.vue?vue&type=template&id=3a9449cc& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _vm.can("servers", "create")
        ? _c(
            "Portal",
            { attrs: { to: "modals" } },
            [
              _c(
                "ModalContainer",
                [
                  _vm.modalIsOpen
                    ? _c("Modal", {
                        on: {
                          close: function($event) {
                            _vm.modalIsOpen = false
                          },
                          submit: _vm.submit
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(_vm._s(_vm.__("Create a server")))
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "form",
                              fn: function() {
                                return [
                                  _c("FormInput", {
                                    attrs: {
                                      loading: _vm.loading,
                                      label: _vm.__("Name"),
                                      placeholder: "webserver-01",
                                      errors: _vm.$page.props.errors.name
                                    },
                                    model: {
                                      value: _vm.form.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "name", $$v)
                                      },
                                      expression: "form.name"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "FormSelect",
                                    {
                                      attrs: {
                                        loading: _vm.loading,
                                        errors: _vm.$page.props.errors.provider,
                                        label: _vm.__("Select provider")
                                      },
                                      model: {
                                        value: _vm.form.provider,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "provider", $$v)
                                        },
                                        expression: "form.provider"
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { domProps: { value: "" + null } },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.__("Select random provider")
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.providers, function(name, id) {
                                        return _c(
                                          "option",
                                          { domProps: { value: id } },
                                          [_vm._v(_vm._s(name))]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "FormSelect",
                                    {
                                      attrs: {
                                        loading: _vm.loading,
                                        errors: _vm.$page.props.errors.region,
                                        label: _vm.__("Select region")
                                      },
                                      model: {
                                        value: _vm.form.region,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "region", $$v)
                                        },
                                        expression: "form.region"
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { domProps: { value: "" + null } },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.__("Select random region")
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.regions, function(name, id) {
                                        return _c(
                                          "option",
                                          { domProps: { value: id } },
                                          [_vm._v(_vm._s(name))]
                                        )
                                      })
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "FormSelect",
                                    {
                                      attrs: {
                                        loading: _vm.loading,
                                        errors: _vm.$page.props.errors.plan,
                                        label: _vm.__("Select plan")
                                      },
                                      model: {
                                        value: _vm.form.plan,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "plan", $$v)
                                        },
                                        expression: "form.plan"
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { domProps: { value: "" + null } },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.__("Select random plan"))
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.plans, function(name, id) {
                                        return _c(
                                          "option",
                                          { domProps: { value: id } },
                                          [_vm._v(_vm._s(name))]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "form-actions",
                              fn: function() {
                                return [
                                  _c("Button", {
                                    domProps: {
                                      textContent: _vm._s(_vm.__("Create"))
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          false,
                          2259390341
                        )
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("TopBar", { attrs: { breadcrumbs: _vm.breadcrumbs } }),
      _vm._v(" "),
      _c(
        "Content",
        [
          _c(
            "Container",
            [
              _c("PageHeader", {
                scopedSlots: _vm._u(
                  [
                    {
                      key: "start",
                      fn: function() {
                        return [
                          _c("PageHeaderTitle", [
                            _vm._v(_vm._s(_vm.__("Servers")))
                          ])
                        ]
                      },
                      proxy: true
                    },
                    _vm.can("servers", "create")
                      ? {
                          key: "end",
                          fn: function() {
                            return [
                              _c(
                                "Button",
                                {
                                  on: {
                                    click: function($event) {
                                      _vm.modalIsOpen = true
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.__("Create server")))]
                              )
                            ]
                          },
                          proxy: true
                        }
                      : null
                  ],
                  null,
                  true
                )
              }),
              _vm._v(" "),
              _c(
                "PageBody",
                [
                  !_vm.servers.meta.total ? _c("EmptyImage") : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "List",
                    _vm._l(_vm.servers.data, function(server) {
                      return _c("ListItem", {
                        key: server.id,
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "prefix",
                              fn: function() {
                                return [
                                  _c("StatusBubble", {
                                    attrs: {
                                      variant:
                                        server.status === "busy"
                                          ? "gray"
                                          : "success"
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _c(
                                    "inertia-link",
                                    {
                                      staticClass: "text-primary font-medium",
                                      attrs: {
                                        href: _vm.route(
                                          "servers.show",
                                          server.id
                                        )
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(server.name) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "subtitle",
                              fn: function() {
                                return [
                                  _vm._v(_vm._s(server.ip) + " "),
                                  server.ip
                                    ? _c("span", [_vm._v("·")])
                                    : _vm._e(),
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(server.sites_count) +
                                      " " +
                                      _vm._s(
                                        _vm.__choice(
                                          "site|sites",
                                          server.sites_count
                                        )
                                      ) +
                                      "\n                        "
                                  )
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "suffix",
                              fn: function() {
                                return [
                                  _c("Dropdown", {
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var isOpen = ref.isOpen
                                            var toggle = ref.toggle
                                            var position = ref.position
                                            return [
                                              _c(
                                                "IconButton",
                                                { on: { click: toggle } },
                                                [
                                                  _c("IconMore", {
                                                    staticClass: "w-5 h-5"
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              isOpen
                                                ? _c(
                                                    "DropdownList",
                                                    {
                                                      attrs: {
                                                        position: position
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "DropdownListItem",
                                                        {
                                                          attrs: {
                                                            to: _vm.route(
                                                              "servers.show",
                                                              server.id
                                                            )
                                                          }
                                                        },
                                                        [_vm._v("View")]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm.can(
                                                        "servers",
                                                        "delete"
                                                      )
                                                        ? _c(
                                                            "DropdownListItemButton",
                                                            {
                                                              staticClass:
                                                                "text-danger",
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.confirmDelete(
                                                                    server
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                        Delete\n                                    "
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          true
                        )
                      })
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Servers/components/TopBar.vue?vue&type=template&id=095beb9f&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Servers/components/TopBar.vue?vue&type=template&id=095beb9f& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("TopBar", {
    scopedSlots: _vm._u([
      {
        key: "breadcrumbs",
        fn: function() {
          return [_c("Breadcrumbs", { attrs: { items: _vm.breadcrumbs } })]
        },
        proxy: true
      },
      {
        key: "tab-bar",
        fn: function() {
          return [
            _c(
              "TopBarTabBarContainer",
              [_c("TabBar", { attrs: { items: _vm.tabBars } })],
              1
            )
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/FormSelect.vue?vue&type=template&id=75d3772b&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/FormSelect.vue?vue&type=template&id=75d3772b& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "FormGroup",
    [
      _c("Label", { attrs: { errors: _vm.errors, forId: _vm.id } }, [
        _vm._v(_vm._s(_vm.label))
      ]),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          class: [
            _vm.defaultClasses,
            _vm.disabled || _vm.loading ? "opacity-50" : "",
            _vm.loading ? "cursor-wait" : ""
          ],
          attrs: {
            disabled: _vm.loading || _vm.disabled,
            id: _vm.id,
            required: _vm.required,
            placeholder: _vm.placeholder
          },
          on: {
            input: function($event) {
              return _vm.updateValue($event.target.value)
            },
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.value = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            }
          }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.errors ? _c("ErrorText", [_vm._v(_vm._s(_vm.errors[0]))]) : _vm._e(),
      _vm._v(" "),
      _vm.helperText && !_vm.errors
        ? _c("HelperText", [_vm._v(_vm._s(_vm.helperText))])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Servers/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Servers/Index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3a9449cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3a9449cc& */ "./resources/js/Pages/Servers/Index.vue?vue&type=template&id=3a9449cc&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Servers/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3a9449cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3a9449cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Servers/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Servers/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Servers/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Servers/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Servers/Index.vue?vue&type=template&id=3a9449cc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Servers/Index.vue?vue&type=template&id=3a9449cc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3a9449cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3a9449cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Servers/Index.vue?vue&type=template&id=3a9449cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3a9449cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3a9449cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Servers/components/TopBar.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Servers/components/TopBar.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar_vue_vue_type_template_id_095beb9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar.vue?vue&type=template&id=095beb9f& */ "./resources/js/Pages/Servers/components/TopBar.vue?vue&type=template&id=095beb9f&");
/* harmony import */ var _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Servers/components/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBar_vue_vue_type_template_id_095beb9f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopBar_vue_vue_type_template_id_095beb9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Servers/components/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Servers/components/TopBar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Servers/components/TopBar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Servers/components/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Servers/components/TopBar.vue?vue&type=template&id=095beb9f&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Servers/components/TopBar.vue?vue&type=template&id=095beb9f& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_095beb9f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=template&id=095beb9f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Servers/components/TopBar.vue?vue&type=template&id=095beb9f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_095beb9f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_095beb9f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/FormSelect.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/forms/FormSelect.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSelect_vue_vue_type_template_id_75d3772b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSelect.vue?vue&type=template&id=75d3772b& */ "./resources/js/components/forms/FormSelect.vue?vue&type=template&id=75d3772b&");
/* harmony import */ var _FormSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSelect.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/FormSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSelect_vue_vue_type_template_id_75d3772b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSelect_vue_vue_type_template_id_75d3772b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/FormSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/FormSelect.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/forms/FormSelect.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/FormSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/FormSelect.vue?vue&type=template&id=75d3772b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/forms/FormSelect.vue?vue&type=template&id=75d3772b& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSelect_vue_vue_type_template_id_75d3772b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSelect.vue?vue&type=template&id=75d3772b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/FormSelect.vue?vue&type=template&id=75d3772b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSelect_vue_vue_type_template_id_75d3772b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSelect_vue_vue_type_template_id_75d3772b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/hooks/confirm-delete.js":
/*!**********************************************!*\
  !*** ./resources/js/hooks/confirm-delete.js ***!
  \**********************************************/
/*! exports provided: useConfirmDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConfirmDelete", function() { return useConfirmDelete; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");

function useConfirmDelete(_ref) {
  var title = _ref.title,
      message = _ref.message,
      _onConfirm = _ref.onConfirm;
  return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('confirmDelete/open', {
    title: title,
    message: message,
    onConfirm: function onConfirm() {
      _onConfirm();

      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('confirmDelete/close');
    }
  });
}

/***/ })

}]);