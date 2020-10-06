(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Sites/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TopBar */ "./resources/js/Pages/Sites/components/TopBar.vue");
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
/* harmony import */ var _components_layouts_SettingsLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/layouts/SettingsLayout */ "./resources/js/components/layouts/SettingsLayout.vue");
/* harmony import */ var _components_SettingsSegment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/SettingsSegment */ "./resources/js/components/SettingsSegment.vue");
/* harmony import */ var _components_forms_FormInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/forms/FormInput */ "./resources/js/components/forms/FormInput.vue");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/Form */ "./resources/js/components/Form.vue");
/* harmony import */ var _components_FormActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/FormActions */ "./resources/js/components/FormActions.vue");
/* harmony import */ var _hooks_notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/hooks/notification */ "./resources/js/hooks/notification.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Tabs */ "./resources/js/Pages/Sites/Tabs.vue");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/components/Table */ "./resources/js/components/Table.vue");
/* harmony import */ var _components_TableHead__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/components/TableHead */ "./resources/js/components/TableHead.vue");
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/components/TableHeader */ "./resources/js/components/TableHeader.vue");
/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/components/TableRow */ "./resources/js/components/TableRow.vue");
/* harmony import */ var _components_TableBody__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/components/TableBody */ "./resources/js/components/TableBody.vue");
/* harmony import */ var _components_TableData__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/components/TableData */ "./resources/js/components/TableData.vue");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/components/Modal */ "./resources/js/components/Modal.vue");
/* harmony import */ var _components_ModalContainer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/components/ModalContainer */ "./resources/js/components/ModalContainer.vue");
/* harmony import */ var _components_Copy__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/components/Copy */ "./resources/js/components/Copy.vue");
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
      title: this.site.domain
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
    ListItem: _components_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"],
    StatusBubble: _components_StatusBubble__WEBPACK_IMPORTED_MODULE_10__["default"],
    NotificationBadge: _components_NotificationBadge__WEBPACK_IMPORTED_MODULE_11__["default"],
    FormInput: _components_forms_FormInput__WEBPACK_IMPORTED_MODULE_15__["default"],
    SettingsLayout: _components_layouts_SettingsLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
    SettingsSegment: _components_SettingsSegment__WEBPACK_IMPORTED_MODULE_14__["default"],
    Form: _components_Form__WEBPACK_IMPORTED_MODULE_16__["default"],
    FormActions: _components_FormActions__WEBPACK_IMPORTED_MODULE_17__["default"],
    Tabs: _Tabs__WEBPACK_IMPORTED_MODULE_19__["default"],
    Table: _components_Table__WEBPACK_IMPORTED_MODULE_20__["default"],
    TableHead: _components_TableHead__WEBPACK_IMPORTED_MODULE_21__["default"],
    TableHeader: _components_TableHeader__WEBPACK_IMPORTED_MODULE_22__["default"],
    TableRow: _components_TableRow__WEBPACK_IMPORTED_MODULE_23__["default"],
    TableBody: _components_TableBody__WEBPACK_IMPORTED_MODULE_24__["default"],
    TableData: _components_TableData__WEBPACK_IMPORTED_MODULE_25__["default"],
    Modal: _components_Modal__WEBPACK_IMPORTED_MODULE_26__["default"],
    ModalContainer: _components_ModalContainer__WEBPACK_IMPORTED_MODULE_27__["default"],
    Copy: _components_Copy__WEBPACK_IMPORTED_MODULE_28__["default"]
  },
  data: function data() {
    return {
      sending: false,
      modalIsOpen: false,
      ftp_password: null,
      form: {
        password: null
      },
      breadcrumbs: [{
        title: this.$page.settings.name,
        to: '/'
      }, {
        title: this.__('Sites'),
        to: this.route('sites.index')
      }, {
        title: this.site.domain,
        to: this.route('sites.show', this.site.id)
      }]
    };
  },
  props: {
    site: Object,
    ip_address: String
  },
  methods: {
    useNotification: _hooks_notification__WEBPACK_IMPORTED_MODULE_18__["useNotification"],
    confirmRequestFtpPassword: function confirmRequestFtpPassword() {
      this.modalIsOpen = true;
      return;
    },
    closeModal: function closeModal() {
      this.form.password = null;
      this.modalIsOpen = false;
      this.$page.errors = [];
    },
    requestFtpPassword: function requestFtpPassword() {
      var _this = this;

      this.$page.errors = [];
      window.axios.post(this.route('profile.request-ftp-password').url(), this.form).then(function (response) {
        if (!response.data.ftp_password) {
          _this.useNotification({
            variant: 'danger',
            title: _this.__('FTP password'),
            message: _this.__('Unable to retrieve FTP password')
          });

          return;
        }

        _this.form.password = null;
        _this.modalIsOpen = false;
        _this.ftp_password = response.data.ftp_password;
      })["catch"](function (errors) {
        _this.$page.errors = errors.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Tabs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Sites/Tabs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    site: Object
  },
  data: function data() {
    return {
      items: [{
        title: this.__('General'),
        to: this.route('sites.show', this.site.id),
        active: this.route().current('sites.show')
      }, {
        title: this.__('Apps'),
        to: this.route('sites.apps.index', this.site.id),
        active: this.route().current('sites.apps.index')
      }, {
        title: this.__('Databases'),
        to: this.route('sites.databases.index', this.site.id),
        active: this.route().current('sites.databases.index')
      }, {
        title: this.__('Cronjobs'),
        to: this.route('sites.cronjobs.index', this.site.id),
        active: this.route().current('sites.cronjobs.index')
      }, {
        title: this.__('Redirects'),
        to: this.route('sites.redirects.index', this.site.id),
        active: this.route().current('sites.redirects.index')
      }, {
        title: this.__('Certificates'),
        to: this.route('sites.certificates.index', this.site.id),
        active: this.route().current('sites.certificates.index')
      }, this.site.dns_id ? {
        title: this.__('DNS'),
        to: this.route('sites.dns.index', this.site.id),
        active: this.route().current('sites.dns.index')
      } : null, this.can('sites', 'update') ? {
        title: this.__('Settings'),
        to: this.route('sites.settings.show', this.site.id),
        active: this.route().current('sites.settings.show')
      } : null, {
        title: this.__('View site'),
        to: "http://".concat(this.site.domain),
        type: 'a'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/components/TopBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Sites/components/TopBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
        to: this.route('servers.index')
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Copy.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Copy.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      copied: false
    };
  },
  props: {
    label: String,
    value: String
  },
  methods: {
    copy: function copy() {
      this.copied = true;
      this.$copyText(this.value);
    }
  },
  watch: {
    copied: function copied() {
      var vm = this;

      if (this.copied) {
        setTimeout(function () {
          vm.copied = false;
        }, 1250);
      }
    }
  },
  computed: {
    copyText: function copyText() {
      if (this.copied) {
        return this.__('Copied to clipboard');
      }

      return "".concat(this.label);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/SettingsLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/SettingsLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    items: {
      type: Array,
      required: false
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Show.vue?vue&type=template&id=c39b38ae&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Sites/Show.vue?vue&type=template&id=c39b38ae& ***!
  \********************************************************************************************************************************************************************************************************/
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
      _c(
        "Portal",
        { attrs: { to: "modals" } },
        [
          _c(
            "ModalContainer",
            [
              _vm.modalIsOpen
                ? _c("Modal", {
                    on: {
                      close: function() {
                        return _vm.closeModal()
                      },
                      submit: _vm.requestFtpPassword
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "title",
                          fn: function() {
                            return [
                              _vm._v(_vm._s(_vm.__("Request FTP password")))
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
                                  type: "password",
                                  label: _vm.__(
                                    "Enter your account password to reveal FTP password"
                                  ),
                                  errors: _vm.$page.errors.password
                                },
                                model: {
                                  value: _vm.form.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "password", $$v)
                                  },
                                  expression: "form.password"
                                }
                              })
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
                                  textContent: _vm._s(_vm.__("Request"))
                                }
                              })
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      false,
                      32140597
                    )
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
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
                scopedSlots: _vm._u([
                  {
                    key: "start",
                    fn: function() {
                      return [
                        _c("PageHeaderTitle", [_vm._v(_vm._s(_vm.site.domain))])
                      ]
                    },
                    proxy: true
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "PageBody",
                [
                  _c("SettingsLayout", {
                    scopedSlots: _vm._u([
                      {
                        key: "nav",
                        fn: function() {
                          return [_c("Tabs", { attrs: { site: _vm.site } })]
                        },
                        proxy: true
                      },
                      {
                        key: "segments",
                        fn: function() {
                          return [
                            _c("SettingsSegment", {
                              scopedSlots: _vm._u([
                                {
                                  key: "title",
                                  fn: function() {
                                    return [_vm._v(_vm._s(_vm.__("Overview")))]
                                  },
                                  proxy: true
                                },
                                {
                                  key: "content",
                                  fn: function() {
                                    return [
                                      _c(
                                        "div",
                                        [
                                          _c(
                                            "Table",
                                            {
                                              attrs: {
                                                caption:
                                                  "Database list overview"
                                              }
                                            },
                                            [
                                              _c(
                                                "TableBody",
                                                [
                                                  _c(
                                                    "TableRow",
                                                    [
                                                      _c("TableHeader", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.__(
                                                              "Website path"
                                                            )
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "TableData",
                                                        {
                                                          attrs: {
                                                            border: false
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    /home/" +
                                                              _vm._s(
                                                                _vm.$page.auth
                                                                  .user
                                                                  .user_name
                                                              ) +
                                                              "/" +
                                                              _vm._s(
                                                                _vm.site.domain
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "TableRow",
                                                    [
                                                      _c("TableHeader", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.__("FTP host")
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "TableData",
                                                        {
                                                          attrs: {
                                                            border: false
                                                          }
                                                        },
                                                        [
                                                          _c("copy", {
                                                            attrs: {
                                                              label:
                                                                "" +
                                                                _vm.ip_address,
                                                              value:
                                                                _vm.ip_address
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "TableRow",
                                                    [
                                                      _c("TableHeader", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.__("FTP user")
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "TableData",
                                                        {
                                                          attrs: {
                                                            border: false
                                                          }
                                                        },
                                                        [
                                                          _c("copy", {
                                                            attrs: {
                                                              label:
                                                                "" +
                                                                _vm.$page.auth
                                                                  .user
                                                                  .user_name,
                                                              value:
                                                                _vm.$page.auth
                                                                  .user
                                                                  .user_name
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "TableRow",
                                                    [
                                                      _c("TableHeader", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.__(
                                                              "FTP password"
                                                            )
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "TableData",
                                                        {
                                                          attrs: {
                                                            border: false
                                                          }
                                                        },
                                                        [
                                                          _vm.ftp_password
                                                            ? _c(
                                                                "div",
                                                                {
                                                                  domProps: {
                                                                    textContent: _vm._s(
                                                                      _vm.ftp_password
                                                                    )
                                                                  }
                                                                },
                                                                [
                                                                  _c("copy", {
                                                                    attrs: {
                                                                      label:
                                                                        "" +
                                                                        _vm.ftp_password,
                                                                      value:
                                                                        _vm.ftp_password
                                                                    }
                                                                  })
                                                                ],
                                                                1
                                                              )
                                                            : _c(
                                                                "Button",
                                                                {
                                                                  attrs: {
                                                                    variant:
                                                                      "secondary",
                                                                    size: "sm"
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      _vm.confirmRequestFtpPassword
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                        " +
                                                                      _vm._s(
                                                                        _vm.__(
                                                                          "Request FTP password"
                                                                        )
                                                                      ) +
                                                                      "\n                                                    "
                                                                  )
                                                                ]
                                                              )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "TableRow",
                                                    [
                                                      _c("TableHeader", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.__(
                                                              "Creation date"
                                                            )
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "TableData",
                                                        {
                                                          attrs: {
                                                            border: false
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.site
                                                                .created_at
                                                            )
                                                          )
                                                        ]
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
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            }),
                            _vm._v(" "),
                            _c("SettingsSegment", {
                              scopedSlots: _vm._u([
                                {
                                  key: "title",
                                  fn: function() {
                                    return [
                                      _vm._v(_vm._s(_vm.__("DNS settings")))
                                    ]
                                  },
                                  proxy: true
                                },
                                {
                                  key: "subtitle",
                                  fn: function() {
                                    return [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            _vm.__(
                                              "Setup these DNS records to attach your webhosting to your domain."
                                            )
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  },
                                  proxy: true
                                },
                                {
                                  key: "form",
                                  fn: function() {
                                    return [
                                      _c("form", { staticClass: "space-y-4" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "grid grid-cols-2 gap-4"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-span-2 md:col-span-1"
                                              },
                                              [
                                                _c("FormInput", {
                                                  attrs: {
                                                    label: "A",
                                                    errors:
                                                      _vm.$page.errors.domain,
                                                    value: _vm.site.domain
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-span-2 md:col-span-1"
                                              },
                                              [
                                                _c("FormInput", {
                                                  attrs: {
                                                    label: "IP",
                                                    "allow-copy": "",
                                                    errors:
                                                      _vm.$page.errors.domain,
                                                    value: _vm.ip_address
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "grid grid-cols-2 gap-4"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-span-2 md:col-span-1"
                                              },
                                              [
                                                _c("FormInput", {
                                                  attrs: {
                                                    label: "A",
                                                    errors:
                                                      _vm.$page.errors.domain,
                                                    value: "www"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-span-2 md:col-span-1"
                                              },
                                              [
                                                _c("FormInput", {
                                                  attrs: {
                                                    label: "IP",
                                                    "allow-copy": "",
                                                    errors:
                                                      _vm.$page.errors.domain,
                                                    value: _vm.ip_address
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            })
                          ]
                        },
                        proxy: true
                      }
                    ])
                  })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Tabs.vue?vue&type=template&id=7d6093aa&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Sites/Tabs.vue?vue&type=template&id=7d6093aa& ***!
  \********************************************************************************************************************************************************************************************************/
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
    "ul",
    { staticClass: "-ml-4 space-y-1" },
    _vm._l(_vm.items, function(item) {
      return item
        ? _c(
            "li",
            [
              _c(
                item.type && item.type === "a" ? "a" : "inertia-link",
                {
                  tag: "component",
                  staticClass:
                    "flex items-center h-10 px-4 font-medium text-medium-emphasis",
                  class: {
                    "rounded shadow text-primary bg-surface-3": item.active
                  },
                  attrs: {
                    target: item.type && item.type === "a" ? "_blank" : "_self",
                    href: item.to
                  }
                },
                [_vm._v(_vm._s(item.title) + " " + _vm._s(item.route))]
              )
            ],
            1
          )
        : _vm._e()
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/components/TopBar.vue?vue&type=template&id=5a732edb&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Sites/components/TopBar.vue?vue&type=template&id=5a732edb& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Copy.vue?vue&type=template&id=f5113840&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Copy.vue?vue&type=template&id=f5113840& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("span", {
    staticClass: "cursor-pointer",
    domProps: { innerHTML: _vm._s(_vm.copyText) },
    on: { click: _vm.copy }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SettingsSegment.vue?vue&type=template&id=3bea3c16&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SettingsSegment.vue?vue&type=template&id=3bea3c16& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "px-8 pb-8 space-y-6 border rounded border-low-emphasis" },
    [
      _c("header", { staticClass: "-mt-4" }, [
        _c(
          "h2",
          {
            staticClass:
              "inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"
          },
          [_vm._t("title")],
          2
        ),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "mt-1 text-small text-medium-emphasis" },
          [_vm._t("subtitle")],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "space-y-4" },
        [_vm._t("form"), _vm._v(" "), _vm._t("content")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/SettingsLayout.vue?vue&type=template&id=85feafc4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/SettingsLayout.vue?vue&type=template&id=85feafc4& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "grid grid-cols-4 gap-16" }, [
    _c(
      "aside",
      { staticClass: "col-span-4 md:col-span-1" },
      [_vm._t("nav")],
      2
    ),
    _vm._v(" "),
    _c("section", { staticClass: "col-span-4 md:col-span-3" }, [
      _c("div", { staticClass: "space-y-16" }, [_vm._t("segments")], 2)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/Sites/Show.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Sites/Show.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_c39b38ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=c39b38ae& */ "./resources/js/Pages/Sites/Show.vue?vue&type=template&id=c39b38ae&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Sites/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_c39b38ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_c39b38ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Sites/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Sites/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Sites/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Sites/Show.vue?vue&type=template&id=c39b38ae&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Sites/Show.vue?vue&type=template&id=c39b38ae& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_c39b38ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=c39b38ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Show.vue?vue&type=template&id=c39b38ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_c39b38ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_c39b38ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Sites/Tabs.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Sites/Tabs.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_vue_vue_type_template_id_7d6093aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=7d6093aa& */ "./resources/js/Pages/Sites/Tabs.vue?vue&type=template&id=7d6093aa&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Sites/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tabs_vue_vue_type_template_id_7d6093aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tabs_vue_vue_type_template_id_7d6093aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Sites/Tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Sites/Tabs.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Sites/Tabs.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Sites/Tabs.vue?vue&type=template&id=7d6093aa&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Sites/Tabs.vue?vue&type=template&id=7d6093aa& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_7d6093aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=template&id=7d6093aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Tabs.vue?vue&type=template&id=7d6093aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_7d6093aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_7d6093aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Sites/components/TopBar.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Sites/components/TopBar.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar_vue_vue_type_template_id_5a732edb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar.vue?vue&type=template&id=5a732edb& */ "./resources/js/Pages/Sites/components/TopBar.vue?vue&type=template&id=5a732edb&");
/* harmony import */ var _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Sites/components/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBar_vue_vue_type_template_id_5a732edb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopBar_vue_vue_type_template_id_5a732edb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Sites/components/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Sites/components/TopBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Sites/components/TopBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/components/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Sites/components/TopBar.vue?vue&type=template&id=5a732edb&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Sites/components/TopBar.vue?vue&type=template&id=5a732edb& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_5a732edb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=template&id=5a732edb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/components/TopBar.vue?vue&type=template&id=5a732edb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_5a732edb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_5a732edb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Copy.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Copy.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Copy_vue_vue_type_template_id_f5113840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Copy.vue?vue&type=template&id=f5113840& */ "./resources/js/components/Copy.vue?vue&type=template&id=f5113840&");
/* harmony import */ var _Copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copy.vue?vue&type=script&lang=js& */ "./resources/js/components/Copy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Copy_vue_vue_type_template_id_f5113840___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Copy_vue_vue_type_template_id_f5113840___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Copy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Copy.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Copy.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Copy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Copy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Copy.vue?vue&type=template&id=f5113840&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Copy.vue?vue&type=template&id=f5113840& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Copy_vue_vue_type_template_id_f5113840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Copy.vue?vue&type=template&id=f5113840& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Copy.vue?vue&type=template&id=f5113840&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Copy_vue_vue_type_template_id_f5113840___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Copy_vue_vue_type_template_id_f5113840___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SettingsSegment.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/SettingsSegment.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SettingsSegment_vue_vue_type_template_id_3bea3c16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsSegment.vue?vue&type=template&id=3bea3c16& */ "./resources/js/components/SettingsSegment.vue?vue&type=template&id=3bea3c16&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _SettingsSegment_vue_vue_type_template_id_3bea3c16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SettingsSegment_vue_vue_type_template_id_3bea3c16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SettingsSegment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SettingsSegment.vue?vue&type=template&id=3bea3c16&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/SettingsSegment.vue?vue&type=template&id=3bea3c16& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSegment_vue_vue_type_template_id_3bea3c16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsSegment.vue?vue&type=template&id=3bea3c16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SettingsSegment.vue?vue&type=template&id=3bea3c16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSegment_vue_vue_type_template_id_3bea3c16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSegment_vue_vue_type_template_id_3bea3c16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/SettingsLayout.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/layouts/SettingsLayout.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SettingsLayout_vue_vue_type_template_id_85feafc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsLayout.vue?vue&type=template&id=85feafc4& */ "./resources/js/components/layouts/SettingsLayout.vue?vue&type=template&id=85feafc4&");
/* harmony import */ var _SettingsLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/SettingsLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SettingsLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsLayout_vue_vue_type_template_id_85feafc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SettingsLayout_vue_vue_type_template_id_85feafc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/SettingsLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/SettingsLayout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/layouts/SettingsLayout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/SettingsLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/SettingsLayout.vue?vue&type=template&id=85feafc4&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/layouts/SettingsLayout.vue?vue&type=template&id=85feafc4& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsLayout_vue_vue_type_template_id_85feafc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsLayout.vue?vue&type=template&id=85feafc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/SettingsLayout.vue?vue&type=template&id=85feafc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsLayout_vue_vue_type_template_id_85feafc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsLayout_vue_vue_type_template_id_85feafc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);