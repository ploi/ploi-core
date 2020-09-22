<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{15:function(t,e,s){"use strict";var i={props:{items:{type:Array,required:!1}}},n=s(0),r=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid grid-cols-4 gap-16"},[e("aside",{staticClass:"col-span-4 md:col-span-1"},[this._t("nav")],2),this._v(" "),e("section",{staticClass:"col-span-4 md:col-span-3"},[e("div",{staticClass:"space-y-16"},[this._t("segments")],2)])])}),[],!1,null,null,null);e.a=r.exports},156:function(t,e,s){"use strict";s.r(e);var i=s(34),n=s(1),r=s(6),a=s(7),o=s(8),u=s(9),c=s(10),l=s(2),h=s(11),d=s(12),p=s(4),_=s(5),f=s(3),m=s(15),v=s(16),b=s(13),g=s(19),y=s(14),x=s(28),C=s(35),S={metaInfo:function(){return{title:this.site.domain}},layout:f.a,components:{TopBar:i.default,Container:n.a,Content:r.a,Page:a.a,PageHeader:o.a,PageHeaderTitle:u.a,PageBody:c.a,Button:l.a,List:h.a,ListItem:d.a,StatusBubble:p.a,NotificationBadge:_.a,FormInput:b.a,SettingsLayout:m.a,SettingsSegment:v.a,Form:g.a,FormActions:y.a,Tabs:C.default},data:function(){return{sending:!1,timeout:null,form:{domain:this.site.domain,dns_id:null},breadcrumbs:[{title:this.$page.settings.name,to:"/"},{title:this.__("Sites"),to:this.route("sites.index")},{title:this.site.domain,to:this.route("sites.show",this.site.id)},{title:this.__("Settings"),to:this.route("sites.show",this.site.id)}]}},props:{site:Object,available_php_versions:Array},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.patch(this.route("sites.settings.update",this.site.id),this.form).then((function(){t.sending=!1}))},changePhpVersion:function(t){var e=this;this.sending=!0,this.$inertia.patch(this.route("sites.settings.php-version",this.site.id),{version:t}).then((function(){e.timeout=setTimeout((function(){e.clearTimeoutInterval(),e.sending=!1,e.$inertia.replace(e.route("sites.settings.show",e.site.id))}),3e3)}))},confirmDelete:function(){var t=this;Object(x.a)({title:this.__("Are you sure?"),message:this.__("Your site will be deleted completely, this action is irreversible."),onConfirm:function(){return t.delete()}})},delete:function(){this.$inertia.delete(this.route("sites.delete",this.site.id))},clearTimeoutInterval:function(){clearTimeout(this.timeout),this.timeout=null}},beforeDestroy:function(){this.clearTimeoutInterval()}},w=s(0),B=Object(w.a)(S,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Page",[s("TopBar",{attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),s("Content",[s("Container",[s("PageHeader",{scopedSlots:t._u([{key:"start",fn:function(){return[s("PageHeaderTitle",[t._v(t._s(t.__("Settings")))])]},proxy:!0}])}),t._v(" "),s("PageBody",[s("SettingsLayout",{scopedSlots:t._u([{key:"nav",fn:function(){return[s("Tabs",{attrs:{site:t.site}})]},proxy:!0},{key:"segments",fn:function(){return[s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Overview")))]},proxy:!0},{key:"form",fn:function(){return[s("form",{staticClass:"space-y-4",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("FormInput",{attrs:{label:t.__("Domain"),errors:t.$page.errors.domain},model:{value:t.form.domain,callback:function(e){t.$set(t.form,"domain",e)},expression:"form.domain"}}),t._v(" "),s("FormActions",[s("Button",[t._v(t._s(t.__("Save changes")))])],1)],1)]},proxy:!0}])}),t._v(" "),s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("PHP version")))]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("\n                                "+t._s(t.__("Change your PHP version here. If you do not have the version available get in touch with support to get this added."))+"\n                            ")]},proxy:!0},{key:"form",fn:function(){return[s("div",{staticClass:"space-y-4"},[s("FormActions",t._l(t.available_php_versions,(function(e){return s("Button",{key:e,staticClass:"relative",attrs:{disabled:e==t.site.php_version||t.sending},on:{click:function(s){return t.changePhpVersion(e)}}},[t._v(t._s(e)+"\n\n                                            "),t.timeout?s("span",{staticClass:"flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1"},[s("span",{staticClass:"animate-ping absolute inline-flex h-full w-full rounded-circle bg-surface-1 opacity-75"}),t._v(" "),s("span",{staticClass:"relative inline-flex rounded-circle h-3 w-3 bg-success"})]):t._e()])})),1)],1)]},proxy:!0}])}),t._v(" "),s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Danger zone")))]},proxy:!0},{key:"content",fn:function(){return[s("Button",{attrs:{variant:"danger"},on:{click:t.confirmDelete}},[t._v(t._s(t.__("Delete")))])]},proxy:!0}])})]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=B.exports},16:function(t,e,s){"use strict";var i=s(0),n=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"px-8 pb-8 space-y-6 border rounded border-low-emphasis"},[e("header",{staticClass:"-mt-4"},[e("h2",{staticClass:"inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-small text-medium-emphasis"},[this._t("subtitle")],2)]),this._v(" "),e("div",{staticClass:"space-y-4"},[this._t("form"),this._v(" "),this._t("content")],2)])}),[],!1,null,null,null);e.a=n.exports},28:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s(54);function n(t){var e=t.title,s=t.message,n=t.onConfirm;return i.a.dispatch("confirmDelete/open",{title:e,message:s,onConfirm:function(){n(),i.a.dispatch("confirmDelete/close")}})}},34:function(t,e,s){"use strict";s.r(e);var i=s(38),n=s(39),r=s(40),a=s(41),o={components:{TopBar:i.a,Breadcrumbs:n.a,TabBar:r.a,TopBarTabBarContainer:a.a},props:{breadcrumbs:Array},data:function(){return{tabBars:[{title:this.__("Dashboard"),to:this.route("dashboard"),active:this.route().current("dashboard")},{title:this.__("Sites"),to:this.route("sites.index"),active:this.route().current("sites.*")},{title:"Servers",to:this.route("servers.index")}]}}},u=s(0),c=Object(u.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("TopBar",{scopedSlots:t._u([{key:"breadcrumbs",fn:function(){return[s("Breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[s("TopBarTabBarContainer",[s("TabBar",{attrs:{items:t.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=c.exports},35:function(t,e,s){"use strict";s.r(e);var i={props:{site:Object},data:function(){return{items:[{title:this.__("General"),to:this.route("sites.show",this.site.id),active:this.route().current("sites.show")},{title:this.__("Apps"),to:this.route("sites.apps.index",this.site.id),active:this.route().current("sites.apps.index")},{title:this.__("Databases"),to:this.route("sites.databases.index",this.site.id),active:this.route().current("sites.databases.index")},{title:this.__("Cronjobs"),to:this.route("sites.cronjobs.index",this.site.id),active:this.route().current("sites.cronjobs.index")},{title:this.__("Redirects"),to:this.route("sites.redirects.index",this.site.id),active:this.route().current("sites.redirects.index")},{title:this.__("Certificates"),to:this.route("sites.certificates.index",this.site.id),active:this.route().current("sites.certificates.index")},this.site.dns_id?{title:this.__("DNS"),to:this.route("sites.dns.index",this.site.id),active:this.route().current("sites.dns.index")}:null,{title:this.__("Settings"),to:this.route("sites.settings.show",this.site.id),active:this.route().current("sites.settings.show")},{title:this.__("View site"),to:"http://".concat(this.site.domain),type:"a"}]}}},n=s(0),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"-ml-4 space-y-1"},t._l(t.items,(function(e){return e?s("li",[s(e.type&&"a"===e.type?"a":"inertia-link",{tag:"component",staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":e.active},attrs:{target:e.type&&"a"===e.type?"_blank":"_self",href:e.to}},[t._v(t._s(e.title)+" "+t._s(e.route))])],1):t._e()})),0)}),[],!1,null,null,null);e.default=r.exports}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Errors/404.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Errors/404.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Container */ "./resources/js/components/Container.vue");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Content */ "./resources/js/components/Content.vue");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Page */ "./resources/js/components/Page.vue");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageHeader */ "./resources/js/components/PageHeader.vue");
/* harmony import */ var _components_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PageHeaderTitle */ "./resources/js/components/PageHeaderTitle.vue");
/* harmony import */ var _components_PageBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/PageBody */ "./resources/js/components/PageBody.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/List */ "./resources/js/components/List.vue");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ListItem */ "./resources/js/components/ListItem.vue");
/* harmony import */ var _components_StatusBubble__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/StatusBubble */ "./resources/js/components/StatusBubble.vue");
/* harmony import */ var _components_NotificationBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/NotificationBadge */ "./resources/js/components/NotificationBadge.vue");
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Layouts/MainLayout */ "./resources/js/Layouts/MainLayout.vue");
//
//
//
//
//
//
//
//
//
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
  layout: _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_11__["default"],
  components: {
    Container: _components_Container__WEBPACK_IMPORTED_MODULE_0__["default"],
    Content: _components_Content__WEBPACK_IMPORTED_MODULE_1__["default"],
    Page: _components_Page__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageHeader: _components_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    PageHeaderTitle: _components_PageHeaderTitle__WEBPACK_IMPORTED_MODULE_4__["default"],
    PageBody: _components_PageBody__WEBPACK_IMPORTED_MODULE_5__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_6__["default"],
    List: _components_List__WEBPACK_IMPORTED_MODULE_7__["default"],
    ListItem: _components_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"],
    StatusBubble: _components_StatusBubble__WEBPACK_IMPORTED_MODULE_9__["default"],
    NotificationBadge: _components_NotificationBadge__WEBPACK_IMPORTED_MODULE_10__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Container.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Container.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
var baseClasses = 'w-full px-4 sm:px-8 mx-auto';
var sizeClasses = {
  small: 'max-w-sm',
  base: 'max-w-5xl',
  large: 'max-w-screen-xl'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    size: {
      type: String,
      "default": function _default() {
        return 'base';
      },
      validator: function validator(size) {
        return Object.keys(sizeClasses).includes(size);
      }
    }
  },
  data: function data() {
    return {
      baseClasses: baseClasses,
      sizeClasses: sizeClasses
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Errors/404.vue?vue&type=template&id=0c7c84fd&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Errors/404.vue?vue&type=template&id=0c7c84fd& ***!
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
                      return [_c("PageHeaderTitle", [_vm._v("Page not found")])]
                    },
                    proxy: true
                  }
                ])
              }),
              _vm._v(" "),
              _c("PageBody", [
                _vm._v(
                  "\n                We were unable to find this page.\n            "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Container.vue?vue&type=template&id=ba1063b4&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Container.vue?vue&type=template&id=ba1063b4& ***!
  \************************************************************************************************************************************************************************************************************/
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
    { class: [_vm.baseClasses, _vm.sizeClasses[_vm.size]] },
    [_vm._t("default")],
    2
  )
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

/***/ "./resources/js/Pages/Errors/404.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Errors/404.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _404_vue_vue_type_template_id_0c7c84fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=0c7c84fd& */ "./resources/js/Pages/Errors/404.vue?vue&type=template&id=0c7c84fd&");
/* harmony import */ var _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Errors/404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _404_vue_vue_type_template_id_0c7c84fd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _404_vue_vue_type_template_id_0c7c84fd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Errors/404.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Errors/404.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Errors/404.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Errors/404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Errors/404.vue?vue&type=template&id=0c7c84fd&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Errors/404.vue?vue&type=template&id=0c7c84fd& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_0c7c84fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=template&id=0c7c84fd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Errors/404.vue?vue&type=template&id=0c7c84fd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_0c7c84fd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_0c7c84fd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Container.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Container.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container_vue_vue_type_template_id_ba1063b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.vue?vue&type=template&id=ba1063b4& */ "./resources/js/components/Container.vue?vue&type=template&id=ba1063b4&");
/* harmony import */ var _Container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.vue?vue&type=script&lang=js& */ "./resources/js/components/Container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Container_vue_vue_type_template_id_ba1063b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Container_vue_vue_type_template_id_ba1063b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Container.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Container.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Container.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Container.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Container.vue?vue&type=template&id=ba1063b4&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Container.vue?vue&type=template&id=ba1063b4& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_template_id_ba1063b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Container.vue?vue&type=template&id=ba1063b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Container.vue?vue&type=template&id=ba1063b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_template_id_ba1063b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Container_vue_vue_type_template_id_ba1063b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
>>>>>>> develop
