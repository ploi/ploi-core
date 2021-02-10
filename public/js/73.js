(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TextDivider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/TextDivider */ "./resources/js/components/TextDivider.vue");
/* harmony import */ var _components_forms_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/forms/FormInput */ "./resources/js/components/forms/FormInput.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Container */ "./resources/js/components/Container.vue");
/* harmony import */ var _hooks_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/notification */ "./resources/js/hooks/notification.js");
//
//
//
//
//
//
//
//
//
//
//
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
      title: "".concat(this.__('Create password'))
    };
  },
  components: {
    TextDivider: _components_TextDivider__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormInput: _components_forms_FormInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_2__["default"],
    Container: _components_Container__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    email: String
  },
  data: function data() {
    return {
      sending: false,
      form: {
        email: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  methods: {
    useNotification: _hooks_notification__WEBPACK_IMPORTED_MODULE_4__["useNotification"],
    submit: function submit() {
      var _this = this;

      this.$inertia.post(this.route('password-creation.start', {
        email: this.email
      }), {
        password: this.form.password,
        password_confirmation: this.form.password_confirmation
      }, {
        onStart: function onStart() {
          return _this.sending = true;
        },
        onFinish: function onFinish() {
          return _this.sending = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=template&id=173769e8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=template&id=173769e8& ***!
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
    "div",
    { staticClass: "flex items-center justify-center w-full min-h-screen" },
    [
      _c("Container", { attrs: { size: "small" } }, [
        _c(
          "form",
          {
            staticClass: "space-y-4",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "flex flex-col items-center space-y-5" }, [
              _vm.$page.props.settings.logo
                ? _c("img", {
                    staticClass: "h-14",
                    attrs: { src: _vm.$page.props.settings.logo }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "h1",
                { staticClass: "font-semibold text-center text-title" },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.__("Create password")) +
                      "\n                "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("FormInput", {
              attrs: {
                label: _vm.__("Password"),
                errors: _vm.$page.props.errors.password,
                id: "password",
                type: "password",
                required: ""
              },
              model: {
                value: _vm.form.password,
                callback: function($$v) {
                  _vm.$set(_vm.form, "password", $$v)
                },
                expression: "form.password"
              }
            }),
            _vm._v(" "),
            _c("FormInput", {
              attrs: {
                label: _vm.__("Confirm password"),
                errors: _vm.$page.props.errors.password_confirmation,
                id: "password_confirmation",
                type: "password",
                required: ""
              },
              model: {
                value: _vm.form.password_confirmation,
                callback: function($$v) {
                  _vm.$set(_vm.form, "password_confirmation", $$v)
                },
                expression: "form.password_confirmation"
              }
            }),
            _vm._v(" "),
            _c(
              "Button",
              {
                attrs: { variant: "primary", disabled: _vm.sending, block: "" }
              },
              [_vm._v(_vm._s(_vm.__("Start")))]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Auth/PasswordCreation.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Auth/PasswordCreation.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordCreation_vue_vue_type_template_id_173769e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordCreation.vue?vue&type=template&id=173769e8& */ "./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=template&id=173769e8&");
/* harmony import */ var _PasswordCreation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordCreation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordCreation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordCreation_vue_vue_type_template_id_173769e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordCreation_vue_vue_type_template_id_173769e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/PasswordCreation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordCreation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordCreation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordCreation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=template&id=173769e8&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=template&id=173769e8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordCreation_vue_vue_type_template_id_173769e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordCreation.vue?vue&type=template&id=173769e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/PasswordCreation.vue?vue&type=template&id=173769e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordCreation_vue_vue_type_template_id_173769e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordCreation_vue_vue_type_template_id_173769e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/hooks/notification.js":
/*!********************************************!*\
  !*** ./resources/js/hooks/notification.js ***!
  \********************************************/
/*! exports provided: useNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNotification", function() { return useNotification; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");

function useNotification(_ref) {
  var title = _ref.title,
      message = _ref.message,
      variant = _ref.variant,
      timeout = _ref.timeout;
  return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('notification/notify', {
    title: title,
    message: message,
    variant: variant,
    timeout: timeout
  });
}

/***/ })

}]);