<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[21,63],{0:function(e,t,s){"use strict";function r(e,t,s,r,a,n,i,l){var o,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=s,u._compiled=!0),r&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),i?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=o):a&&(o=l?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),o)if(u.functional){u._injectStyles=o;var c=u.render;u.render=function(e,t){return o.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,o):[o]}return{exports:e,options:u}}s.d(t,"a",(function(){return r}))},1:function(e,t,s){"use strict";var r={small:"max-w-sm",base:"max-w-5xl",large:"max-w-screen-xl"},a={props:{size:{type:String,default:function(){return"base"},validator:function(e){return Object.keys(r).includes(e)}}},data:function(){return{baseClasses:"w-full px-4 sm:px-8 mx-auto",sizeClasses:r}}},n=s(0),i=Object(n.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("div",{class:[this.baseClasses,this.sizeClasses[this.size]]},[this._t("default")],2)}),[],!1,null,null,null);t.a=i.exports},13:function(e,t,s){"use strict";var r=s(57),a=s(56),n=s(58),i=s(69),l=s(0),o=Object(l.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"bi bi-clipboard",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}}),this._v(" "),t("path",{attrs:{"fill-rule":"evenodd",d:"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}})])}),[],!1,null,null,null).exports,u={props:{id:{type:String,required:!1},label:{type:String,required:!0},type:{type:String,default:function(){return"text"}},required:{type:Boolean,default:function(){return!1}},errors:{type:Array},helperText:{type:String},placeholder:{type:String},value:{required:!1,default:""},allowCopy:{required:!1,default:!1,type:Boolean}},components:{FormGroup:r.a,Label:a.a,ErrorText:n.a,HelperText:i.a,IconClipboard:o},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body h-10 max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary",copied:!1}},watch:{copied:function(){var e=this;this.copied&&setTimeout((function(){e.copied=!1}),1250)}},methods:{updateValue:function(e){this.$emit("input",e)},copy:function(){this.copied=!0,this.$copyText(this.value)}},computed:{copyText:function(){return this.copied?this.__("Copied to clipboard"):this.__("Copy")}}},c=Object(l.a)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("FormGroup",{staticClass:"relative"},[s("Label",{attrs:{errors:e.errors,forId:e.id}},[e._v(e._s(e.label))]),e._v(" "),e.allowCopy?s("button",{staticClass:"flex items-center right-0 absolute text-xs text-medium-emphasis",attrs:{type:"button"},on:{click:e.copy}},[s("IconClipboard",{staticClass:"mr-2"}),e._v("\n        "+e._s(e.copyText)+"\n    ")],1):e._e(),e._v(" "),s("input",{class:[e.defaultClasses],attrs:{id:e.id,type:e.type,required:e.required,placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.updateValue(t.target.value)}}}),e._v(" "),e.errors?s("ErrorText",[e._v(e._s(e.errors[0]))]):e._e(),e._v(" "),e.helperText&&!e.errors?s("HelperText",[e._v(e._s(e.helperText))]):e._e()],1)}),[],!1,null,null,null);t.a=c.exports},134:function(e,t,s){"use strict";s.r(t);var r=s(45),a=s(13),n=s(2),i=s(1),l=s(17),o={metaInfo:function(){return{title:"".concat(this.__("Reset password"))}},components:{TextDivider:r.a,FormInput:a.a,Button:n.a,Container:i.a},props:{errors:Object},data:function(){return{sending:!1,form:{email:null}}},methods:{useNotification:l.a,submit:function(){var e=this;this.sending=!0,this.$inertia.post(this.route("password.email"),{email:this.form.email}).then((function(){e.sending=!1,Object.keys(e.$page.errors).length||(e.form.email=null,Object(l.a)({variant:"success",title:e.__("Reset password"),message:e.$page.flash.success}))}))}}},u=s(0),c=Object(u.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex items-center justify-center w-full min-h-screen"},[s("Container",{attrs:{size:"small"}},[s("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("h1",{staticClass:"font-semibold text-center text-title"},[e._v(e._s(e.__("Reset password")))]),e._v(" "),s("FormInput",{attrs:{label:e.__("Email"),errors:e.$page.errors.email,id:"email",type:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),s("Button",{attrs:{variant:"primary",disabled:e.sending,block:""}},[e._v(e._s(e.__("Reset")))]),e._v(" "),s("TextDivider",[e._v(e._s(e.__("Or")))]),e._v(" "),s("div",{staticClass:"space-y-3"},[s("Button",{attrs:{as:"inertia-link",href:e.route("login"),variant:"secondary",block:""}},[e._v(e._s(e.__("Login")))])],1)],1)])],1)}),[],!1,null,null,null);t.default=c.exports},17:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s(54);function a(e){var t=e.title,s=e.message,a=e.variant,n=e.timeout;return r.a.dispatch("notification/notify",{title:t,message:s,variant:a,timeout:n})}},2:function(e,t,s){"use strict";var r={primary:"bg-primary text-on-primary shadow",danger:"bg-danger text-on-danger shadow",secondary:"bg-surface-2 text-high-emphasis"},a={sm:"h-8 px-2",md:"h-10 px-5"},n={props:{as:{default:function(){return"button"}},href:{default:function(){return null}},block:{type:Boolean,default:function(){return!1}},variant:{type:String,default:function(){return"primary"},validator:function(e){return Object.keys(r).includes(e)}},size:{type:String,default:"md"},loading:{default:!1},disabled:{default:!1}},data:function(){return{baseClasses:"items-center justify-center font-medium capitalize rounded select-none focus:outline-none",flexClasses:"flex w-full text-body",inlineFlexClasses:"inline-flex text-small",variantClasses:r,sizeClasses:a}}},i=s(0),l=Object(i.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.as,{tag:"Component",class:[e.baseClasses,e.sizeClasses[e.size],e.variantClasses[e.variant],e.block?e.flexClasses:e.inlineFlexClasses,e.disabled||e.loading?"opacity-50":"",e.loading?"cursor-wait":""],attrs:{disabled:e.loading||e.disabled,href:e.href},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),[],!1,null,null,null);t.a=l.exports},45:function(e,t,s){"use strict";var r=s(0),a=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"relative flex items-center justify-center"},[t("div",{staticClass:"absolute inset-x-0 w-full border-t border-low-emphasis"}),this._v(" "),t("div",{staticClass:"relative px-2 py-1 bg-surface-1 text-body text-medium-emphasis"},[this._t("default")],2)])}),[],!1,null,null,null);t.a=a.exports},56:function(e,t,s){"use strict";var r={props:{forId:{type:String,required:!1},errors:{type:Array}}},a=s(0),n=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("label",{class:["text-small"],attrs:{for:this.forId}},[this._t("default")],2)}),[],!1,null,null,null);t.a=n.exports},57:function(e,t,s){"use strict";var r=s(0),a=Object(r.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"flex flex-col space-y-1"},[this._t("default")],2)}),[],!1,null,null,null);t.a=a.exports},58:function(e,t,s){"use strict";var r=s(0),a=Object(r.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("p",{staticClass:"text-danger"},[this._t("default")],2)}),[],!1,null,null,null);t.a=a.exports},69:function(e,t,s){"use strict";var r=s(0),a=Object(r.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("p",{staticClass:"text-medium-emphasis text-small"},[this._t("default")],2)}),[],!1,null,null,null);t.a=a.exports}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Status.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Status.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TopBar */ "./resources/js/Pages/Admin/components/TopBar.vue");
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
/* harmony import */ var _TabsStatus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TabsStatus */ "./resources/js/Pages/Admin/TabsStatus.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: "".concat(this.__('Status'))
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
    Tabs: _TabsStatus__WEBPACK_IMPORTED_MODULE_19__["default"]
  },
  props: {},
  methods: {
    useNotification: _hooks_notification__WEBPACK_IMPORTED_MODULE_18__["useNotification"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/TabsStatus.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/TabsStatus.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [{
        title: this.__('Overview'),
        to: this.route('admin.status.index'),
        active: this.route().current('admin.status.index')
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/components/TopBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/components/TopBar.vue?vue&type=script&lang=js& ***!
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
  data: function data() {
    return {
      tabBars: [{
        title: 'Dashboard',
        to: this.route('admin.dashboard'),
        active: this.route().current('admin.dashboard') || this.route().current('admin.settings') || this.route().current('admin.system')
      }, {
        title: this.__('Users'),
        to: this.route('admin.users.index'),
        active: this.route().current('admin.users.*')
      }, {
        title: this.__('Packages'),
        to: this.route('admin.packages.index'),
        active: this.route().current('admin.packages.*')
      }, this.$page.settings.support ? {
        title: "".concat(this.__('Support'), " (").concat(this.$page.openTickets, ")"),
        to: this.route('admin.support.index'),
        active: this.route().current('admin.support.*')
      } : null, this.$page.settings.documentation ? {
        title: this.__('Documentation'),
        to: this.route('admin.documentation.index'),
        active: this.route().current('admin.documentation.*')
      } : null, {
        title: 'Services',
        to: this.route('admin.services.index'),
        active: this.route().current('admin.services.*')
      } // {
      //     title: 'Status',
      //     to: this.route('admin.status.index'),
      //     active: this.route().current('admin.status.*')
      // }
      ],
      breadcrumbs: [{
        title: this.$page.settings.name,
        to: '/'
      }, {
        title: this.__('Administration'),
        to: this.route('admin.dashboard')
      }]
    };
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Status.vue?vue&type=template&id=799ea00a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Status.vue?vue&type=template&id=799ea00a& ***!
  \**********************************************************************************************************************************************************************************************************/
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
      _c("TopBar"),
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
                        _c("PageHeaderTitle", [
                          _vm._v(_vm._s(_vm.__("Status")))
                        ])
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
                          return [_c("Tabs")]
                        },
                        proxy: true
                      },
                      {
                        key: "segments",
                        fn: function() {
                          return undefined
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/TabsStatus.vue?vue&type=template&id=67725999&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/TabsStatus.vue?vue&type=template&id=67725999& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      return _c(
        "li",
        [
          _c(
            "inertia-link",
            {
              staticClass:
                "flex items-center h-10 px-4 font-medium text-medium-emphasis",
              class: {
                "rounded shadow text-primary bg-surface-3": item.active
              },
              attrs: { href: item.to }
            },
            [_vm._v(_vm._s(item.title) + " " + _vm._s(item.route))]
          )
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/components/TopBar.vue?vue&type=template&id=293d83de&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/components/TopBar.vue?vue&type=template&id=293d83de& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form.vue?vue&type=template&id=8048fca2&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Form.vue?vue&type=template&id=8048fca2& ***!
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
  return _c(
    "form",
    {
      staticClass: "space-y-4",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.$emit("submit")
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormActions.vue?vue&type=template&id=31ed9404&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormActions.vue?vue&type=template&id=31ed9404& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex items-center justify-start space-x-2" },
    [_vm._t("default")],
    2
  )
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

/***/ "./resources/js/Pages/Admin/Status.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Admin/Status.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Status_vue_vue_type_template_id_799ea00a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status.vue?vue&type=template&id=799ea00a& */ "./resources/js/Pages/Admin/Status.vue?vue&type=template&id=799ea00a&");
/* harmony import */ var _Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Status.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Status_vue_vue_type_template_id_799ea00a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Status_vue_vue_type_template_id_799ea00a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Status.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Admin/Status.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Status.vue?vue&type=template&id=799ea00a&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Status.vue?vue&type=template&id=799ea00a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_799ea00a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Status.vue?vue&type=template&id=799ea00a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Status.vue?vue&type=template&id=799ea00a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_799ea00a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Status_vue_vue_type_template_id_799ea00a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/TabsStatus.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Admin/TabsStatus.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabsStatus_vue_vue_type_template_id_67725999___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabsStatus.vue?vue&type=template&id=67725999& */ "./resources/js/Pages/Admin/TabsStatus.vue?vue&type=template&id=67725999&");
/* harmony import */ var _TabsStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabsStatus.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/TabsStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TabsStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabsStatus_vue_vue_type_template_id_67725999___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TabsStatus_vue_vue_type_template_id_67725999___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/TabsStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/TabsStatus.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Admin/TabsStatus.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabsStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/TabsStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/TabsStatus.vue?vue&type=template&id=67725999&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/TabsStatus.vue?vue&type=template&id=67725999& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsStatus_vue_vue_type_template_id_67725999___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TabsStatus.vue?vue&type=template&id=67725999& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/TabsStatus.vue?vue&type=template&id=67725999&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsStatus_vue_vue_type_template_id_67725999___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsStatus_vue_vue_type_template_id_67725999___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/components/TopBar.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Admin/components/TopBar.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar_vue_vue_type_template_id_293d83de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar.vue?vue&type=template&id=293d83de& */ "./resources/js/Pages/Admin/components/TopBar.vue?vue&type=template&id=293d83de&");
/* harmony import */ var _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/components/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBar_vue_vue_type_template_id_293d83de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopBar_vue_vue_type_template_id_293d83de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/components/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/components/TopBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/components/TopBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/components/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/components/TopBar.vue?vue&type=template&id=293d83de&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/components/TopBar.vue?vue&type=template&id=293d83de& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_293d83de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=template&id=293d83de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/components/TopBar.vue?vue&type=template&id=293d83de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_293d83de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_293d83de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Form.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Form.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_8048fca2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=8048fca2& */ "./resources/js/components/Form.vue?vue&type=template&id=8048fca2&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Form_vue_vue_type_template_id_8048fca2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_8048fca2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Form.vue?vue&type=template&id=8048fca2&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Form.vue?vue&type=template&id=8048fca2& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_8048fca2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=8048fca2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Form.vue?vue&type=template&id=8048fca2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_8048fca2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_8048fca2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FormActions.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/FormActions.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormActions_vue_vue_type_template_id_31ed9404___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormActions.vue?vue&type=template&id=31ed9404& */ "./resources/js/components/FormActions.vue?vue&type=template&id=31ed9404&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _FormActions_vue_vue_type_template_id_31ed9404___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormActions_vue_vue_type_template_id_31ed9404___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FormActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FormActions.vue?vue&type=template&id=31ed9404&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/FormActions.vue?vue&type=template&id=31ed9404& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormActions_vue_vue_type_template_id_31ed9404___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FormActions.vue?vue&type=template&id=31ed9404& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormActions.vue?vue&type=template&id=31ed9404&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormActions_vue_vue_type_template_id_31ed9404___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormActions_vue_vue_type_template_id_31ed9404___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
>>>>>>> develop
