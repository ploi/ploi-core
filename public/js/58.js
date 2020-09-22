<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{0:function(t,e,n){"use strict";function s(t,e,n,s,i,r,o,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),s&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(t,e){return c.call(e),d(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return s}))},78:function(t,e,n){"use strict";n.r(e);var s={data:function(){return{items:[{title:this.__("Overview"),to:this.route("admin.status.index"),active:this.route().current("admin.status.index")}]}}},i=n(0),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"-ml-4 space-y-1"},t._l(t.items,(function(e){return n("li",[n("inertia-link",{staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":e.active},attrs:{href:e.to}},[t._v(t._s(e.title)+" "+t._s(e.route))])],1)})),0)}),[],!1,null,null,null);e.default=r.exports}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

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

      this.sending = true;
      this.$inertia.post(this.route('password-creation.start', {
        email: this.email
      }), {
        password: this.form.password,
        password_confirmation: this.form.password_confirmation
      }).then(function () {
        _this.sending = false;
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
            _c("h1", { staticClass: "font-semibold text-center text-title" }, [
              _vm._v(_vm._s(_vm.__("Create password")))
            ]),
            _vm._v(" "),
            _c("FormInput", {
              attrs: {
                label: _vm.__("Password"),
                errors: _vm.$page.errors.password,
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
                errors: _vm.$page.errors.password_confirmation,
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
>>>>>>> develop
