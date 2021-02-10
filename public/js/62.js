(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Billing.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Billing.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TopBar */ "./resources/js/Pages/Profile/components/TopBar.vue");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container */ "./resources/js/components/Container.vue");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Content */ "./resources/js/components/Content.vue");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Page */ "./resources/js/components/Page.vue");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/PageHeader */ "./resources/js/components/PageHeader.vue");
/* harmony import */ var _components_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/PageHeaderTitle */ "./resources/js/components/PageHeaderTitle.vue");
/* harmony import */ var _components_PageBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/PageBody */ "./resources/js/components/PageBody.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/List */ "./resources/js/components/List.vue");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ListItem */ "./resources/js/components/ListItem.vue");
/* harmony import */ var _components_StatusBubble__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/StatusBubble */ "./resources/js/components/StatusBubble.vue");
/* harmony import */ var _components_NotificationBadge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/NotificationBadge */ "./resources/js/components/NotificationBadge.vue");
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/Layouts/MainLayout */ "./resources/js/Layouts/MainLayout.vue");
/* harmony import */ var _components_icons_IconBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/icons/IconBox */ "./resources/js/components/icons/IconBox.vue");
/* harmony import */ var _components_icons_IconGlobe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/icons/IconGlobe */ "./resources/js/components/icons/IconGlobe.vue");
/* harmony import */ var _components_icons_IconStorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/icons/IconStorage */ "./resources/js/components/icons/IconStorage.vue");
/* harmony import */ var _components_icons_IconArrowUp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/icons/IconArrowUp */ "./resources/js/components/icons/IconArrowUp.vue");
/* harmony import */ var _components_icons_IconArrowDown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/icons/IconArrowDown */ "./resources/js/components/icons/IconArrowDown.vue");
/* harmony import */ var _components_icons_IconClose__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/icons/IconClose */ "./resources/js/components/icons/IconClose.vue");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/components/Modal */ "./resources/js/components/Modal.vue");
/* harmony import */ var _components_ModalContainer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/components/ModalContainer */ "./resources/js/components/ModalContainer.vue");
/* harmony import */ var _components_forms_FormInput__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/components/forms/FormInput */ "./resources/js/components/forms/FormInput.vue");
/* harmony import */ var _components_forms_FormTextarea__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/components/forms/FormTextarea */ "./resources/js/components/forms/FormTextarea.vue");
/* harmony import */ var _components_FormActions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/components/FormActions */ "./resources/js/components/FormActions.vue");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/components/Table */ "./resources/js/components/Table.vue");
/* harmony import */ var _components_TableHead__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/components/TableHead */ "./resources/js/components/TableHead.vue");
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/components/TableHeader */ "./resources/js/components/TableHeader.vue");
/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/components/TableRow */ "./resources/js/components/TableRow.vue");
/* harmony import */ var _components_TableBody__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/components/TableBody */ "./resources/js/components/TableBody.vue");
/* harmony import */ var _components_TableData__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/components/TableData */ "./resources/js/components/TableData.vue");
/* harmony import */ var _hooks_notification__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/hooks/notification */ "./resources/js/hooks/notification.js");
/* harmony import */ var _hooks_confirm_delete__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/hooks/confirm-delete */ "./resources/js/hooks/confirm-delete.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      title: "".concat(this.__('Billing'))
    };
  },
  layout: _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
  components: {
    TopBar: _components_TopBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Container: _components_Container__WEBPACK_IMPORTED_MODULE_2__["default"],
    Content: _components_Content__WEBPACK_IMPORTED_MODULE_3__["default"],
    Page: _components_Page__WEBPACK_IMPORTED_MODULE_4__["default"],
    PageHeader: _components_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    PageHeaderTitle: _components_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_6__["default"],
    PageBody: _components_PageBody__WEBPACK_IMPORTED_MODULE_7__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_8__["default"],
    List: _components_List__WEBPACK_IMPORTED_MODULE_9__["default"],
    ListItem: _components_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"],
    StatusBubble: _components_StatusBubble__WEBPACK_IMPORTED_MODULE_11__["default"],
    NotificationBadge: _components_NotificationBadge__WEBPACK_IMPORTED_MODULE_12__["default"],
    IconBox: _components_icons_IconBox__WEBPACK_IMPORTED_MODULE_14__["default"],
    IconGlobe: _components_icons_IconGlobe__WEBPACK_IMPORTED_MODULE_15__["default"],
    IconStorage: _components_icons_IconStorage__WEBPACK_IMPORTED_MODULE_16__["default"],
    IconArrowDown: _components_icons_IconArrowDown__WEBPACK_IMPORTED_MODULE_18__["default"],
    IconArrowUp: _components_icons_IconArrowUp__WEBPACK_IMPORTED_MODULE_17__["default"],
    IconClose: _components_icons_IconClose__WEBPACK_IMPORTED_MODULE_19__["default"],
    Modal: _components_Modal__WEBPACK_IMPORTED_MODULE_20__["default"],
    ModalContainer: _components_ModalContainer__WEBPACK_IMPORTED_MODULE_21__["default"],
    FormInput: _components_forms_FormInput__WEBPACK_IMPORTED_MODULE_22__["default"],
    FormTextarea: _components_forms_FormTextarea__WEBPACK_IMPORTED_MODULE_23__["default"],
    FormActions: _components_FormActions__WEBPACK_IMPORTED_MODULE_24__["default"],
    Table: _components_Table__WEBPACK_IMPORTED_MODULE_25__["default"],
    TableHead: _components_TableHead__WEBPACK_IMPORTED_MODULE_26__["default"],
    TableHeader: _components_TableHeader__WEBPACK_IMPORTED_MODULE_27__["default"],
    TableRow: _components_TableRow__WEBPACK_IMPORTED_MODULE_28__["default"],
    TableBody: _components_TableBody__WEBPACK_IMPORTED_MODULE_29__["default"],
    TableData: _components_TableData__WEBPACK_IMPORTED_MODULE_30__["default"]
  },
  props: {
    packages: Array,
    subscription: [Object, null],
    public_key: String,
    data_client_secret: String,
    card: Object,
    filters: Object
  },
  data: function data() {
    return {
      sending: false,
      clientSecret: this.data_client_secret,
      stripe: null,
      cardElement: null,
      cardHolderName: this.$page.props.auth.user.name,
      currentCardLastFour: this.card.last_four,
      currentCardBrand: this.card.brand,
      coupon: '',
      invoices: [],
      breadcrumbs: [{
        title: this.$page.props.settings.name,
        to: '/'
      }, {
        title: this.__('Billing'),
        to: this.route('profile.billing.index')
      }]
    };
  },
  mounted: function mounted() {
    var stripe = Stripe(this.public_key);
    this.stripe = stripe;
    var elements = stripe.elements();
    var cardElement = elements.create('card');
    cardElement.mount('#card-element');
    this.cardElement = cardElement;
    this.getInvoices();
  },
  watch: {
    sending: function sending(value) {
      if (value) {
        this.cardElement.update({
          disabled: true
        });
      } else {
        this.cardElement.update({
          disabled: false
        });
      }
    }
  },
  methods: {
    useNotification: _hooks_notification__WEBPACK_IMPORTED_MODULE_31__["useNotification"],
    useConfirmDelete: _hooks_confirm_delete__WEBPACK_IMPORTED_MODULE_32__["useConfirmDelete"],
    updateBilling: function updateBilling() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$_this$stripe$c, setupIntent, error, paymentMethod;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.sending = true;
                _context.next = 3;
                return _this.stripe.confirmCardSetup(_this.clientSecret, {
                  payment_method: {
                    card: _this.cardElement,
                    billing_details: {
                      name: _this.cardHolderName
                    }
                  }
                });

              case 3:
                _yield$_this$stripe$c = _context.sent;
                setupIntent = _yield$_this$stripe$c.setupIntent;
                error = _yield$_this$stripe$c.error;

                if (error) {
                  _this.sending = false;

                  _this.useNotification({
                    variant: 'danger',
                    title: _this.__("Error"),
                    message: error.message
                  });
                } else {
                  paymentMethod = setupIntent.payment_method;

                  _this.$inertia.post(_this.route('profile.billing.update.card'), {
                    payment_method: paymentMethod,
                    billing_details: _this.billingDetails
                  }, {
                    onStart: function onStart() {
                      return _this.sending = true;
                    },
                    onFinish: function onFinish() {
                      return _this.sending = false;
                    }
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updatePlan: function updatePlan(id) {
      var _this2 = this;

      this.$inertia.post(this.route('profile.billing.update.plan'), {
        plan: id,
        coupon: this.coupon
      }, {
        onStart: function onStart() {
          return _this2.sending = true;
        },
        onFinish: function onFinish() {
          return _this2.sending = false;
        }
      });
    },
    confirmCancel: function confirmCancel() {
      var _this3 = this;

      Object(_hooks_confirm_delete__WEBPACK_IMPORTED_MODULE_32__["useConfirmDelete"])({
        title: this.__('Are you sure?'),
        message: this.__('Your subscription will be put to an end. An expire date will be send to you when your plan expires.'),
        onConfirm: function onConfirm() {
          return _this3.cancel();
        }
      });
    },
    cancel: function cancel() {
      var _this4 = this;

      this.$inertia["delete"](this.route('profile.billing.cancel.plan'), {
        onStart: function onStart() {
          return _this4.sending = true;
        },
        onFinish: function onFinish() {
          return _this4.sending = false;
        }
      });
    },
    getInvoices: function getInvoices() {
      var _this5 = this;

      window.axios.get(this.route('profile.billing.invoices')).then(function (response) {
        return _this5.invoices = response.data;
      });
    },
    requestFilterUrl: function requestFilterUrl(properties) {
      this.$inertia.visit(route('profile.billing.index', properties), {
        only: ['filters', 'packages']
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/FormTextarea.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/FormTextarea.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FormGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FormGroup */ "./resources/js/components/FormGroup.vue");
/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Label */ "./resources/js/components/Label.vue");
/* harmony import */ var _components_ErrorText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ErrorText */ "./resources/js/components/ErrorText.vue");
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



var defaultClasses = 'w-full border-medium-emphasis text-body max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary';
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
    required: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
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
    rows: {
      "default": 3,
      required: false
    }
  },
  components: {
    FormGroup: _components_FormGroup__WEBPACK_IMPORTED_MODULE_0__["default"],
    Label: _components_Label__WEBPACK_IMPORTED_MODULE_1__["default"],
    ErrorText: _components_ErrorText__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      defaultClasses: defaultClasses
    };
  },
  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Billing.vue?vue&type=template&id=cd2a4248&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Billing.vue?vue&type=template&id=cd2a4248& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      _c("TopBar", { attrs: { breadcrumbs: _vm.breadcrumbs } }),
      _vm._v(" "),
      _c(
        "Content",
        [
          _c(
            "Container",
            [
              _c("PageBody", [
                _c(
                  "div",
                  { staticClass: "grid grid-cols-1 md:grid-cols-5 gap-8" },
                  [
                    _c("div", { staticClass: "md:col-span-2 space-y-4" }, [
                      _c(
                        "h2",
                        { staticClass: "text-lg text-medium-emphasis" },
                        [_vm._v(_vm._s(_vm.__("Card information")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          staticClass: "space-y-4",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateBilling($event)
                            }
                          }
                        },
                        [
                          _vm.currentCardLastFour
                            ? _c("p", [
                                _vm._v(
                                  "\n                                ···· ···· ····  " +
                                    _vm._s(_vm.currentCardLastFour) +
                                    " (" +
                                    _vm._s(_vm.currentCardBrand) +
                                    ")\n                            "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("form-input", {
                            attrs: {
                              errors: _vm.$page.props.errors.card_holder_name,
                              disabled: _vm.sending,
                              id: "card-holder-name",
                              label: _vm.__("Card holder name")
                            },
                            model: {
                              value: _vm.cardHolderName,
                              callback: function($$v) {
                                _vm.cardHolderName = $$v
                              },
                              expression: "cardHolderName"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-full pb-4" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-label",
                                attrs: { for: "card-element" }
                              },
                              [_vm._v(_vm._s(_vm.__("Card details")))]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "form-input",
                              attrs: { id: "card-element" }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "Button",
                            {
                              staticClass: "btn-green",
                              attrs: {
                                "data-secret": _vm.clientSecret,
                                id: "card-button",
                                loading: _vm.sending,
                                type: "submit"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.__("Save")) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.subscription
                            ? _c(
                                "Button",
                                {
                                  attrs: {
                                    loading: _vm.sending,
                                    variant: "danger",
                                    type: "button"
                                  },
                                  on: { click: _vm.confirmCancel }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.__("Cancel")) +
                                      "\n                            "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    !_vm.packages.length
                      ? _c("div", { staticClass: "md:col-span-3 space-y-8" }, [
                          _vm._v(
                            "\n                        There are currently no packages to choose from.\n                    "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.packages.length
                      ? _c(
                          "div",
                          { staticClass: "md:col-span-3 space-y-8" },
                          [
                            _c(
                              "h2",
                              { staticClass: "text-lg text-medium-emphasis" },
                              [_vm._v(_vm._s(_vm.__("Available packages")))]
                            ),
                            _vm._v(" "),
                            _c("form-input", {
                              staticClass: "pb-4",
                              attrs: {
                                errors: _vm.$page.props.errors.coupon,
                                disabled: _vm.sending,
                                placeholder: _vm.__(
                                  "Enter a coupon code if you have one, before subscribing"
                                ),
                                label: _vm.__("Coupon")
                              },
                              model: {
                                value: _vm.coupon,
                                callback: function($$v) {
                                  _vm.coupon = $$v
                                },
                                expression: "coupon"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "Table",
                              { attrs: { caption: "Package list overview" } },
                              [
                                _c(
                                  "TableHead",
                                  [
                                    _c(
                                      "TableRow",
                                      [
                                        _c("TableHeader", [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "text-primary flex items-center space-x-2",
                                              attrs: {
                                                href: "javascript:void(0);",
                                                "data-balloon-blunt": "",
                                                "aria-label": _vm.__(
                                                  "Sort by name"
                                                ),
                                                "data-balloon-pos": "up"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.requestFilterUrl({
                                                    sortBy: {
                                                      name:
                                                        _vm.filters.sort
                                                          .name === "asc"
                                                          ? "desc"
                                                          : "asc"
                                                    }
                                                  })
                                                }
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(_vm._s(_vm.__("Name")))
                                              ]),
                                              _vm._v(" "),
                                              _vm.filters.sort.name === "asc"
                                                ? _c("IconArrowUp")
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.filters.sort.name === "desc"
                                                ? _c("IconArrowDown")
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("TableHeader", [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "text-primary flex items-center space-x-2",
                                              attrs: {
                                                href: "javascript:void(0);",
                                                "data-balloon-blunt": "",
                                                "aria-label": _vm.__(
                                                  "Sort by maximum sites"
                                                ),
                                                "data-balloon-pos": "up"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.requestFilterUrl({
                                                    sortBy: {
                                                      sites:
                                                        _vm.filters.sort
                                                          .sites === "asc"
                                                          ? "desc"
                                                          : "asc"
                                                    }
                                                  })
                                                }
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(_vm.__("Max sites"))
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _vm.filters.sort.sites === "asc"
                                                ? _c("IconArrowUp")
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.filters.sort.sites === "desc"
                                                ? _c("IconArrowDown")
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("TableHeader", [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "text-primary flex items-center space-x-2",
                                              attrs: {
                                                href: "javascript:void(0);",
                                                "data-balloon-blunt": "",
                                                "aria-label": _vm.__(
                                                  "Sort by maximum servers"
                                                ),
                                                "data-balloon-pos": "up"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.requestFilterUrl({
                                                    sortBy: {
                                                      servers:
                                                        _vm.filters.sort
                                                          .servers === "asc"
                                                          ? "desc"
                                                          : "asc"
                                                    }
                                                  })
                                                }
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(_vm.__("Max servers"))
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _vm.filters.sort.servers === "asc"
                                                ? _c("IconArrowUp")
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.filters.sort.servers ===
                                              "desc"
                                                ? _c("IconArrowDown")
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("TableHeader", [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "text-primary flex items-center space-x-2",
                                              attrs: {
                                                href: "javascript:void(0);",
                                                "data-balloon-blunt": "",
                                                "aria-label": _vm.__(
                                                  "Sort by price"
                                                ),
                                                "data-balloon-pos": "up"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.requestFilterUrl({
                                                    sortBy: {
                                                      price:
                                                        _vm.filters.sort
                                                          .price === "asc"
                                                          ? "desc"
                                                          : "asc"
                                                    }
                                                  })
                                                }
                                              }
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.__("Monthly price")
                                                  )
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _vm.filters.sort.price === "asc"
                                                ? _c("IconArrowUp")
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.filters.sort.price === "desc"
                                                ? _c("IconArrowDown")
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "TableHeader",
                                          [
                                            _c(
                                              "inertia-link",
                                              {
                                                attrs: {
                                                  href: _vm.route(
                                                    "profile.billing.index"
                                                  ),
                                                  "data-balloon-blunt": "",
                                                  "aria-label": _vm.__(
                                                    "Clear sorting"
                                                  ),
                                                  "data-balloon-pos": "up"
                                                }
                                              },
                                              [_c("IconClose")],
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "TableBody",
                                  _vm._l(_vm.packages, function(webPackage) {
                                    return _c(
                                      "TableRow",
                                      { key: webPackage.id },
                                      [
                                        _c("TableData", [
                                          _vm._v(_vm._s(webPackage.name))
                                        ]),
                                        _vm._v(" "),
                                        _c("TableData", [
                                          _vm._v(
                                            _vm._s(
                                              webPackage.maximum_sites === 0
                                                ? "Unlimited"
                                                : webPackage.maximum_sites
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("TableData", [
                                          _vm._v(
                                            _vm._s(
                                              webPackage.maximum_servers === 0
                                                ? "Unlimited"
                                                : webPackage.maximum_servers
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("TableData", [
                                          _vm._v(
                                            _vm._s(webPackage.price_monthly)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "TableData",
                                          { staticClass: "text-right" },
                                          [
                                            _c(
                                              "Button",
                                              {
                                                attrs: {
                                                  size: "sm",
                                                  disabled:
                                                    _vm.sending ||
                                                    (_vm.subscription &&
                                                      webPackage.plan_id ===
                                                        _vm.subscription
                                                          .stripe_plan)
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.updatePlan(
                                                      webPackage.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.__("Subscribe")
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "md:col-span-5 space-y-8 border-t border-low-emphasis"
                      },
                      [
                        _vm.invoices.length
                          ? _c(
                              "h2",
                              {
                                staticClass: "mt-5 text-lg text-medium-emphasis"
                              },
                              [_vm._v(_vm._s(_vm.__("Invoices")))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.invoices.length
                          ? _c(
                              "Table",
                              { attrs: { caption: "Invoice list overview" } },
                              [
                                _c(
                                  "TableHead",
                                  [
                                    _c(
                                      "TableRow",
                                      [
                                        _c("TableHeader", [
                                          _vm._v(_vm._s(_vm.__("Number")))
                                        ]),
                                        _vm._v(" "),
                                        _c("TableHeader", [
                                          _vm._v(_vm._s(_vm.__("Status")))
                                        ]),
                                        _vm._v(" "),
                                        _c("TableHeader", [
                                          _vm._v(_vm._s(_vm.__("Total")))
                                        ]),
                                        _vm._v(" "),
                                        _c("TableHeader", [
                                          _vm._v(_vm._s(_vm.__("Date")))
                                        ]),
                                        _vm._v(" "),
                                        _c("TableHeader")
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "TableBody",
                                  _vm._l(_vm.invoices, function(invoice) {
                                    return _c(
                                      "TableRow",
                                      { key: invoice.id },
                                      [
                                        _c("TableData", [
                                          _vm._v(_vm._s(invoice.number))
                                        ]),
                                        _vm._v(" "),
                                        _c("TableData", [
                                          _vm._v(_vm._s(invoice.status))
                                        ]),
                                        _vm._v(" "),
                                        _c("TableData", [
                                          _vm._v(_vm._s(invoice.total))
                                        ]),
                                        _vm._v(" "),
                                        _c("TableData", [
                                          _vm._v(_vm._s(invoice.created))
                                        ]),
                                        _vm._v(" "),
                                        _c("TableData", [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "text-primary",
                                              attrs: {
                                                href: _vm.route(
                                                  "profile.billing.invoices.pdf",
                                                  invoice.id
                                                )
                                              }
                                            },
                                            [_vm._v("Download")]
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ]
                )
              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/FormTextarea.vue?vue&type=template&id=c608beae&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/FormTextarea.vue?vue&type=template&id=c608beae& ***!
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
  return _c(
    "FormGroup",
    [
      _c("Label", { attrs: { errors: _vm.errors, forId: _vm.id } }, [
        _vm._v(_vm._s(_vm.label))
      ]),
      _vm._v(" "),
      _c("textarea", {
        class: [_vm.defaultClasses],
        attrs: {
          id: _vm.id,
          required: _vm.required,
          rows: _vm.rows,
          placeholder: _vm.placeholder
        },
        domProps: { value: _vm.value },
        on: {
          input: function($event) {
            return _vm.updateValue($event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _vm.errors ? _c("ErrorText", [_vm._v(_vm._s(_vm.errors[0]))]) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Profile/Billing.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Profile/Billing.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Billing_vue_vue_type_template_id_cd2a4248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Billing.vue?vue&type=template&id=cd2a4248& */ "./resources/js/Pages/Profile/Billing.vue?vue&type=template&id=cd2a4248&");
/* harmony import */ var _Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Billing.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Billing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Billing_vue_vue_type_template_id_cd2a4248___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Billing_vue_vue_type_template_id_cd2a4248___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Billing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Billing.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Billing.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Billing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Billing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Billing.vue?vue&type=template&id=cd2a4248&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Billing.vue?vue&type=template&id=cd2a4248& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_cd2a4248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Billing.vue?vue&type=template&id=cd2a4248& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Billing.vue?vue&type=template&id=cd2a4248&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_cd2a4248___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_cd2a4248___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/FormTextarea.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/forms/FormTextarea.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormTextarea_vue_vue_type_template_id_c608beae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTextarea.vue?vue&type=template&id=c608beae& */ "./resources/js/components/forms/FormTextarea.vue?vue&type=template&id=c608beae&");
/* harmony import */ var _FormTextarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTextarea.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/FormTextarea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormTextarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormTextarea_vue_vue_type_template_id_c608beae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormTextarea_vue_vue_type_template_id_c608beae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/FormTextarea.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/FormTextarea.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/forms/FormTextarea.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTextarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTextarea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/FormTextarea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTextarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/FormTextarea.vue?vue&type=template&id=c608beae&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/forms/FormTextarea.vue?vue&type=template&id=c608beae& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTextarea_vue_vue_type_template_id_c608beae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormTextarea.vue?vue&type=template&id=c608beae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/FormTextarea.vue?vue&type=template&id=c608beae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTextarea_vue_vue_type_template_id_c608beae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormTextarea_vue_vue_type_template_id_c608beae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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