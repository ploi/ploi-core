(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TextDivider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/TextDivider */ "./resources/js/components/TextDivider.vue");
/* harmony import */ var _components_forms_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/forms/FormInput */ "./resources/js/components/forms/FormInput.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Container */ "./resources/js/components/Container.vue");
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: 'Installation incomplete'
  },
  components: {
    TextDivider: _components_TextDivider__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormInput: _components_forms_FormInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_2__["default"],
    Container: _components_Container__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=template&id=3d0db6af&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=template&id=3d0db6af& ***!
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
  return _c(
    "div",
    { staticClass: "flex items-center justify-center w-full min-h-screen" },
    [
      _c("Container", { attrs: { size: "small" } }, [
        _c("div", { staticClass: "space-y-4" }, [
          _c("h1", { staticClass: "font-semibold text-center text-title" }, [
            _vm._v("Installation incomplete")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "It seems your installation is incomplete, we seem to miss some important credentials."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Please go over the installation process again so all credentials can be filled in."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("You can start the Ploi Core installation by running "),
            _c("code", [_vm._v("php artisan core:install")])
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "block text-primary",
              attrs: { target: "_blank", href: "https://docs.ploi-core.io" }
            },
            [_vm._v("View Ploi Core Documentation")]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Core/InstallationIncomplete.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Core/InstallationIncomplete.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InstallationIncomplete_vue_vue_type_template_id_3d0db6af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InstallationIncomplete.vue?vue&type=template&id=3d0db6af& */ "./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=template&id=3d0db6af&");
/* harmony import */ var _InstallationIncomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InstallationIncomplete.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InstallationIncomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InstallationIncomplete_vue_vue_type_template_id_3d0db6af___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InstallationIncomplete_vue_vue_type_template_id_3d0db6af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Core/InstallationIncomplete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstallationIncomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InstallationIncomplete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstallationIncomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=template&id=3d0db6af&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=template&id=3d0db6af& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InstallationIncomplete_vue_vue_type_template_id_3d0db6af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InstallationIncomplete.vue?vue&type=template&id=3d0db6af& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Core/InstallationIncomplete.vue?vue&type=template&id=3d0db6af&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InstallationIncomplete_vue_vue_type_template_id_3d0db6af___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InstallationIncomplete_vue_vue_type_template_id_3d0db6af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);