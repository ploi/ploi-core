<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{15:function(t,e,s){"use strict";var i={props:{items:{type:Array,required:!1}}},a=s(0),n=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid grid-cols-4 gap-16"},[e("aside",{staticClass:"col-span-1"},[this._t("nav")],2),this._v(" "),e("section",{staticClass:"col-span-3"},[e("div",{staticClass:"space-y-16"},[this._t("segments")],2)])])}),[],!1,null,null,null);e.a=n.exports},150:function(t,e,s){"use strict";s.r(e);var i=s(34),a=s(1),n=s(6),r=s(7),o=s(8),l=s(9),c=s(10),u=s(2),d=s(11),h=s(12),f=s(4),m=s(5),_=s(3),p=s(15),b=s(16),v=s(13),g=s(19),y=s(30),x=s(37),C=s(14),w=s(28),k=s(35),T=s(20),B=s(22),S=s(23),j=s(24),D=s(25),$=s(21),O={metaInfo:function(){return{title:"".concat(this.__("Certificates")," - ").concat(this.site.domain)}},layout:_.a,components:{TopBar:i.default,Container:a.a,Content:n.a,Page:r.a,PageHeader:o.a,PageHeaderTitle:l.a,PageBody:c.a,Button:u.a,List:d.a,ListItem:h.a,StatusBubble:f.a,NotificationBadge:m.a,FormInput:v.a,SettingsLayout:p.a,SettingsSegment:b.a,Form:g.a,FormActions:C.a,Pagination:y.a,Tabs:k.default,Table:T.a,TableHead:B.a,TableHeader:S.a,TableRow:j.a,TableBody:D.a,TableData:$.a,EmptyImage:x.a},data:function(){return{sending:!1,form:{domain:null},breadcrumbs:[{title:this.$page.settings.name,to:"/"},{title:this.__("Sites"),to:this.route("sites.index")},{title:this.site.domain,to:this.route("sites.show",this.site.id)},{title:this.__("Certificates"),to:this.route("sites.cronjobs.index",this.site.id)}]}},mounted:function(){this.shouldBePolling&&this.startPollingInterval(),this.setDomainData()},watch:{shouldBePolling:function(t){t?this.pollingInterval||this.startPollingInterval():this.clearPollingInterval()}},computed:{shouldBePolling:function(){return!!this.certificates.data.filter((function(t){return"busy"===t.status})).length}},props:{site:Object,certificates:Object},methods:{startPollingInterval:function(){this.pollingInterval=setInterval(function(){this.poll()}.bind(this),3e3)},clearPollingInterval:function(){clearTimeout(this.pollingInterval),this.pollingInterval=null},poll:function(){this.$inertia.replace(this.route("sites.certificates.index",this.site.id),{only:["certificates"],preserveScroll:!0})},submit:function(){var t=this;this.sending=!0,this.$inertia.post(this.route("sites.certificates.store",this.site.id),this.form).then((function(){t.sending=!1,Object.keys(t.$page.errors).length||t.setDomainData()}))},confirmDelete:function(t){var e=this;Object(w.a)({title:this.__("Are you sure?"),message:"Your certificate will be deleted permanently, this action cannot be undone.",onConfirm:function(){return e.delete(t)}})},delete:function(t){this.$inertia.delete(this.route("sites.certificates.delete",[this.site.id,t.id]),{preserveScroll:!0})},setDomainData:function(){this.site.domain.startsWith("www.")?this.form.domain=this.site.domain+","+this.site.domain.replace("www.",""):this.form.domain=this.site.domain+",www."+this.site.domain}},beforeDestroy:function(){this.clearPollingInterval()}},P=s(0),I=Object(P.a)(O,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Page",[s("TopBar",{attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),s("Content",[s("Container",[s("PageHeader",{scopedSlots:t._u([{key:"start",fn:function(){return[s("PageHeaderTitle",[t._v(t._s(t.__("Certificates")))])]},proxy:!0}])}),t._v(" "),s("PageBody",[s("SettingsLayout",{scopedSlots:t._u([{key:"nav",fn:function(){return[s("Tabs",{attrs:{site:t.site}})]},proxy:!0},{key:"segments",fn:function(){return[s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Create")))]},proxy:!0},{key:"subtitle",fn:function(){return[t._v("\n                                "+t._s(t.__("Request a new Let's Encrypt certificate here. Make sure that the DNS has fully propagated."))+"\n                            ")]},proxy:!0},{key:"form",fn:function(){return[s("form",{staticClass:"space-y-4",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("FormInput",{attrs:{label:t.__("Domain"),errors:t.$page.errors.domain},model:{value:t.form.domain,callback:function(e){t.$set(t.form,"domain",e)},expression:"form.domain"}}),t._v(" "),s("FormActions",[s("Button",[t._v(t._s(t.__("Save changes")))])],1)],1)]},proxy:!0}])}),t._v(" "),t.certificates.meta.total?t._e():s("EmptyImage"),t._v(" "),t.certificates.meta.total?s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Certificates")))]},proxy:!0},{key:"content",fn:function(){return[s("div",[s("Table",{attrs:{caption:"Cronjob list overview"}},[s("TableHead",[s("TableRow",[s("TableHeader"),t._v(" "),s("TableHeader",[t._v(t._s(t.__("Certificate")))]),t._v(" "),s("TableHeader")],1)],1),t._v(" "),s("TableBody",t._l(t.certificates.data,(function(e){return s("TableRow",{key:e.id},[s("TableData",[s("StatusBubble",{attrs:{variant:"busy"===e.status?"gray":"success"}})],1),t._v(" "),s("TableData",[t._v(t._s(e.domain))]),t._v(" "),s("TableData",[s("Button",{attrs:{disabled:"busy"===e.status,variant:"danger",size:"sm"},on:{click:function(s){return t.confirmDelete(e)}}},[t._v("Delete\n                                                    ")])],1)],1)})),1)],1)],1),t._v(" "),s("pagination",{attrs:{links:t.certificates}})]},proxy:!0}],null,!1,1969684026)}):t._e()]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=I.exports},16:function(t,e,s){"use strict";var i=s(0),a=Object(i.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"px-8 pb-8 space-y-6 border rounded border-low-emphasis"},[e("header",{staticClass:"-mt-4"},[e("h2",{staticClass:"inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-small text-medium-emphasis"},[this._t("subtitle")],2)]),this._v(" "),e("div",{staticClass:"space-y-4"},[this._t("form"),this._v(" "),this._t("content")],2)])}),[],!1,null,null,null);e.a=a.exports},20:function(t,e,s){"use strict";var i={props:{caption:{type:String,required:!0}}},a=s(0),n=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("table",{staticClass:"w-full text-left table-auto text-small"},[e("caption",{staticClass:"sr-only"},[this._v(this._s(this.caption))]),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},21:function(t,e,s){"use strict";var i={props:{border:{type:Boolean,default:!0}}},a=s(0),n=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("td",{staticClass:"py-2",class:{"border-t border-low-emphasis":this.border}},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},22:function(t,e,s){"use strict";var i=s(0),a=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("thead",[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},23:function(t,e,s){"use strict";var i=s(0),a=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("th",{staticClass:"pb-2"},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},24:function(t,e,s){"use strict";var i=s(0),a=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("tr",[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},25:function(t,e,s){"use strict";var i=s(0),a=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("tbody",[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},28:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var i=s(54);function a(t){var e=t.title,s=t.message,a=t.onConfirm;return i.a.dispatch("confirmDelete/open",{title:e,message:s,onConfirm:function(){a(),i.a.dispatch("confirmDelete/close")}})}},30:function(t,e,s){"use strict";var i={props:{links:Object},computed:{determineLinks:function(){return this.links.meta?this.links.meta:this.links}}},a=s(0),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.determineLinks.per_page<t.determineLinks.total?s("div",{staticClass:"mt-6 -mb-1 flex flex-wrap"},[t._l(t.determineLinks.links,(function(e,i){return[null===e.url?s("div",{key:i,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400",class:{"ml-auto":"Next"===e.label}},[t._v(t._s(e.label))]):s("inertia-link",{key:i,staticClass:"mr-1 mb-1 px-2 py-1 text-sm rounded",class:{"shadow text-high-emphasis bg-surface-1":e.active,"ml-auto":"Next"===e.label},attrs:{href:e.url}},[t._v(t._s(e.label))])]}))],2):t._e()}),[],!1,null,null,null);e.a=n.exports},34:function(t,e,s){"use strict";s.r(e);var i=s(38),a=s(39),n=s(40),r=s(41),o={components:{TopBar:i.a,Breadcrumbs:a.a,TabBar:n.a,TopBarTabBarContainer:r.a},props:{breadcrumbs:Array},data:function(){return{tabBars:[{title:this.__("Dashboard"),to:this.route("dashboard"),active:this.route().current("dashboard")},{title:this.__("Sites"),to:this.route("sites.index"),active:this.route().current("sites.*")},{title:"Servers",to:this.route("servers.index")}]}}},l=s(0),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("TopBar",{scopedSlots:t._u([{key:"breadcrumbs",fn:function(){return[s("Breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[s("TopBarTabBarContainer",[s("TabBar",{attrs:{items:t.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=c.exports},35:function(t,e,s){"use strict";s.r(e);var i={props:{site:Object},data:function(){return{items:[{title:this.__("General"),to:this.route("sites.show",this.site.id),active:this.route().current("sites.show")},{title:this.__("Apps"),to:this.route("sites.apps.index",this.site.id),active:this.route().current("sites.apps.index")},{title:this.__("Databases"),to:this.route("sites.databases.index",this.site.id),active:this.route().current("sites.databases.index")},{title:this.__("Cronjobs"),to:this.route("sites.cronjobs.index",this.site.id),active:this.route().current("sites.cronjobs.index")},{title:this.__("Redirects"),to:this.route("sites.redirects.index",this.site.id),active:this.route().current("sites.redirects.index")},{title:this.__("Certificates"),to:this.route("sites.certificates.index",this.site.id),active:this.route().current("sites.certificates.index")},this.site.dns_id?{title:this.__("DNS"),to:this.route("sites.dns.index",this.site.id),active:this.route().current("sites.dns.index")}:null,{title:this.__("Settings"),to:this.route("sites.settings.show",this.site.id),active:this.route().current("sites.settings.show")},{title:this.__("View site"),to:"http://".concat(this.site.domain),type:"a"}]}}},a=s(0),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"-ml-4 space-y-1"},t._l(t.items,(function(e){return e?s("li",[s(e.type&&"a"===e.type?"a":"inertia-link",{tag:"component",staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":e.active},attrs:{target:e.type&&"a"===e.type?"_blank":"_self",href:e.to}},[t._v(t._s(e.title)+" "+t._s(e.route))])],1):t._e()})),0)}),[],!1,null,null,null);e.default=n.exports},37:function(t,e,s){"use strict";var i=s(0),a=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"w-32 md:w-48 m-auto",attrs:{src:"/images/empty.png"}})}),[],!1,null,null,null);e.a=a.exports}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony import */ var _components_forms_FormSelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/forms/FormSelect */ "./resources/js/components/forms/FormSelect.vue");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/Form */ "./resources/js/components/Form.vue");
/* harmony import */ var _components_FormActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/FormActions */ "./resources/js/components/FormActions.vue");
/* harmony import */ var _hooks_notification__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/hooks/notification */ "./resources/js/hooks/notification.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Tabs */ "./resources/js/Pages/Admin/Tabs.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: "".concat(this.__('Settings'))
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
    FormSelect: _components_forms_FormSelect__WEBPACK_IMPORTED_MODULE_16__["default"],
    SettingsLayout: _components_layouts_SettingsLayout__WEBPACK_IMPORTED_MODULE_13__["default"],
    SettingsSegment: _components_SettingsSegment__WEBPACK_IMPORTED_MODULE_14__["default"],
    Form: _components_Form__WEBPACK_IMPORTED_MODULE_17__["default"],
    FormActions: _components_FormActions__WEBPACK_IMPORTED_MODULE_18__["default"],
    Tabs: _Tabs__WEBPACK_IMPORTED_MODULE_20__["default"]
  },
  data: function data() {
    return {
      sending: false,
      form: {
        name: this.company_settings.name,
        email: this.company_settings.email,
        support_emails: this.company_settings.support_emails,
        support: this.company_settings.support,
        enable_api: this.company_settings.enable_api,
        api_token: this.company_settings.api_token,
        documentation: this.company_settings.documentation,
        allow_registration: this.company_settings.allow_registration,
        default_package: this.company_settings.default_package
      }
    };
  },
  props: {
    company_settings: Object,
    packages: {}
  },
  methods: {
    useNotification: _hooks_notification__WEBPACK_IMPORTED_MODULE_19__["useNotification"],
    submit: function submit() {
      var _this = this;

      this.sending = true;
      this.$inertia.patch(this.route('admin.settings.update'), this.form, {
        preserveScroll: true
      }).then(function () {
        _this.sending = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Tabs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Tabs.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [{
        title: this.__('Overview'),
        to: this.route('admin.dashboard'),
        active: this.route().current('admin.dashboard')
      }, {
        title: this.__('Settings'),
        to: this.route('admin.settings'),
        active: this.route().current('admin.settings')
      }, {
        title: this.__('System'),
        to: this.route('admin.system'),
        active: this.route().current('admin.system')
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928& ***!
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
                          _vm._v(_vm._s(_vm.__("Settings")))
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
                                  key: "subtitle",
                                  fn: function() {
                                    return [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            _vm.__(
                                              "Change all the system settings here. All changes are in effect immediately."
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
                                          _c("FormInput", {
                                            attrs: {
                                              label: _vm.__("Company name"),
                                              errors: _vm.$page.errors.name
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
                                          _c("FormInput", {
                                            attrs: {
                                              label: _vm.__("E-mail address"),
                                              errors: _vm.$page.errors.email
                                            },
                                            model: {
                                              value: _vm.form.email,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "email", $$v)
                                              },
                                              expression: "form.email"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("FormInput", {
                                            attrs: {
                                              "helper-text": _vm.__(
                                                "Separate by comma to allow more email addresses"
                                              ),
                                              label: _vm.__(
                                                "Support email addresses"
                                              ),
                                              errors:
                                                _vm.$page.errors.support_emails
                                            },
                                            model: {
                                              value: _vm.form.support_emails,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "support_emails",
                                                  $$v
                                                )
                                              },
                                              expression: "form.support_emails"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "FormSelect",
                                            {
                                              attrs: {
                                                "helper-text": _vm.__(
                                                  "Select the default package a user should get when you create or they register"
                                                ),
                                                label: _vm.__(
                                                  "Select default package"
                                                )
                                              },
                                              model: {
                                                value: _vm.form.default_package,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "default_package",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.default_package"
                                              }
                                            },
                                            _vm._l(_vm.packages, function(
                                              name,
                                              id
                                            ) {
                                              return _c("option", {
                                                domProps: {
                                                  value: id,
                                                  textContent: _vm._s(name)
                                                }
                                              })
                                            }),
                                            0
                                          ),
                                          _vm._v(" "),
                                          _c("div", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.form.support,
                                                  expression: "form.support"
                                                }
                                              ],
                                              staticClass: "form-checkbox",
                                              attrs: {
                                                id: "support",
                                                type: "checkbox"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.form.support
                                                )
                                                  ? _vm._i(
                                                      _vm.form.support,
                                                      null
                                                    ) > -1
                                                  : _vm.form.support
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a = _vm.form.support,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = null,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.form,
                                                          "support",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.form,
                                                          "support",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "support",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "ml-2 text-sm",
                                                attrs: { for: "support" }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.__(
                                                      "Enable support platform"
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-small mt-1 text-medium-emphasis"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.__(
                                                        "This will allow your customers to make support requests to you."
                                                      )
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("div", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.form.documentation,
                                                  expression:
                                                    "form.documentation"
                                                }
                                              ],
                                              staticClass: "form-checkbox",
                                              attrs: {
                                                id: "documentation",
                                                type: "checkbox"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.form.documentation
                                                )
                                                  ? _vm._i(
                                                      _vm.form.documentation,
                                                      null
                                                    ) > -1
                                                  : _vm.form.documentation
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.form.documentation,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = null,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.form,
                                                          "documentation",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.form,
                                                          "documentation",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "documentation",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "ml-2 text-sm",
                                                attrs: { for: "documentation" }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.__(
                                                      "Enable documentation platform"
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-small mt-1 text-medium-emphasis"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.__(
                                                        "This will allow you to create articles for your users to look at."
                                                      )
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("div", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.form.allow_registration,
                                                  expression:
                                                    "form.allow_registration"
                                                }
                                              ],
                                              staticClass: "form-checkbox",
                                              attrs: {
                                                id: "allow_registration",
                                                type: "checkbox"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.form.allow_registration
                                                )
                                                  ? _vm._i(
                                                      _vm.form
                                                        .allow_registration,
                                                      null
                                                    ) > -1
                                                  : _vm.form.allow_registration
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.form
                                                        .allow_registration,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = null,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.form,
                                                          "allow_registration",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.form,
                                                          "allow_registration",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "allow_registration",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "ml-2 text-sm",
                                                attrs: {
                                                  for: "allow_registration"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.__(
                                                      "Allow customer registration"
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-small mt-1 text-medium-emphasis"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.__(
                                                        "This will allow public users to register on your platform."
                                                      )
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("div", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.form.enable_api,
                                                  expression: "form.enable_api"
                                                }
                                              ],
                                              staticClass: "form-checkbox",
                                              attrs: {
                                                id: "enable_api",
                                                type: "checkbox"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.form.enable_api
                                                )
                                                  ? _vm._i(
                                                      _vm.form.enable_api,
                                                      null
                                                    ) > -1
                                                  : _vm.form.enable_api
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a = _vm.form.enable_api,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = null,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.form,
                                                          "enable_api",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.form,
                                                          "enable_api",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "enable_api",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "ml-2 text-sm",
                                                attrs: { for: "enable_api" }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.__("Enable API"))
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-small mt-1 text-medium-emphasis"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.__(
                                                        "This will allow you to interact with your system via the API."
                                                      )
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _vm.form.enable_api
                                            ? _c("FormInput", {
                                                attrs: {
                                                  "allow-random-string": "",
                                                  label: _vm.__("API token"),
                                                  errors:
                                                    _vm.$page.errors.api_token
                                                },
                                                model: {
                                                  value: _vm.form.api_token,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "api_token",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form.api_token"
                                                }
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "FormActions",
                                            [
                                              _c("Button", [
                                                _vm._v(
                                                  _vm._s(_vm.__("Save changes"))
                                                )
                                              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Tabs.vue?vue&type=template&id=4b8155c7&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Tabs.vue?vue&type=template&id=4b8155c7& ***!
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
          class: _vm.defaultClasses,
          attrs: {
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

/***/ "./resources/js/Pages/Admin/Settings.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Admin/Settings.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=c8837928& */ "./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=c8837928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/Tabs.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Admin/Tabs.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_vue_vue_type_template_id_4b8155c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=4b8155c7& */ "./resources/js/Pages/Admin/Tabs.vue?vue&type=template&id=4b8155c7&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tabs_vue_vue_type_template_id_4b8155c7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tabs_vue_vue_type_template_id_4b8155c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Tabs.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Admin/Tabs.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Tabs.vue?vue&type=template&id=4b8155c7&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Tabs.vue?vue&type=template&id=4b8155c7& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_4b8155c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=template&id=4b8155c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Tabs.vue?vue&type=template&id=4b8155c7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_4b8155c7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_4b8155c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
