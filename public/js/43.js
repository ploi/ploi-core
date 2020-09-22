<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{119:function(e,t,r){"use strict";r.r(t);var a=r(18),s=r(1),i=r(6),n=r(7),o=r(8),u=r(9),c=r(10),l=r(2),m=r(11),d=r(12),p=r(4),_=r(5),f=r(3),h=r(15),v=r(16),g=r(13),b=r(31),x=r(19),y=r(14),k=r(28),C=r(50),T={metaInfo:function(){return{title:"".concat(this.__("Edit package"))}},layout:f.a,components:{TopBar:a.default,Container:s.a,Content:i.a,Page:n.a,PageHeader:o.a,PageHeaderTitle:u.a,PageBody:c.a,Button:l.a,List:m.a,ListItem:d.a,StatusBubble:p.a,NotificationBadge:_.a,FormInput:g.a,FormSelect:b.a,SettingsLayout:h.a,SettingsSegment:v.a,Form:x.a,FormActions:y.a,Tabs:C.default},data:function(){return{sending:!1,form:{name:this.package.name,maximum_sites:this.package.maximum_sites,server_creation:this.package.server_creation}}},props:{package:Object},methods:{submit:function(){var e=this;this.sending=!0,this.$inertia.patch(this.route("admin.packages.update",this.package.id),this.form).then((function(){return e.sending=!1}))},confirmDelete:function(){var e=this;Object(k.a)({title:this.__("Are you sure?"),message:this.__("Are you sure you want to delete this package? Everything associated with this package will be detached."),onConfirm:function(){return e.delete()}})},delete:function(){var e=this;this.sending=!0,this.$inertia.delete(this.route("admin.packages.destroy",this.package.id)).then((function(){return e.sending=!1}))}}},B=r(0),S=Object(B.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Page",[r("TopBar"),e._v(" "),r("Content",[r("Container",[r("PageHeader",{scopedSlots:e._u([{key:"start",fn:function(){return[r("PageHeaderTitle",[e._v(e._s(e.__("Edit package")))])]},proxy:!0}])}),e._v(" "),r("PageBody",[r("SettingsLayout",{scopedSlots:e._u([{key:"nav",fn:function(){return[r("Tabs")]},proxy:!0},{key:"segments",fn:function(){return[r("SettingsSegment",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.__("Edit")))]},proxy:!0},{key:"form",fn:function(){return[r("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("FormInput",{attrs:{label:e.__("Name"),errors:e.$page.errors.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("FormInput",{attrs:{label:e.__("Maximum sites"),type:"number",min:"0",errors:e.$page.errors.maximum_sites},model:{value:e.form.maximum_sites,callback:function(t){e.$set(e.form,"maximum_sites",t)},expression:"form.maximum_sites"}}),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.server_creation,expression:"form.server_creation"}],staticClass:"form-checkbox",attrs:{id:"server_creation",type:"checkbox"},domProps:{checked:Array.isArray(e.form.server_creation)?e._i(e.form.server_creation,null)>-1:e.form.server_creation},on:{change:function(t){var r=e.form.server_creation,a=t.target,s=!!a.checked;if(Array.isArray(r)){var i=e._i(r,null);a.checked?i<0&&e.$set(e.form,"server_creation",r.concat([null])):i>-1&&e.$set(e.form,"server_creation",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"server_creation",s)}}}),e._v(" "),r("label",{staticClass:"ml-2 text-sm",attrs:{for:"server_creation"}},[e._v(e._s(e.__("Allow server creation")))]),e._v(" "),r("p",{staticClass:"text-small mt-1 text-medium-emphasis"},[e._v("\n                                            "+e._s(e.__("This will allow users to create servers"))+"\n                                        ")])]),e._v(" "),r("FormActions",[r("Button",[e._v(e._s(e.__("Save changes")))]),e._v(" "),r("Button",{attrs:{variant:"danger",type:"button"},on:{click:e.confirmDelete}},[e._v(e._s(e.__("Delete")))])],1)],1)]},proxy:!0}])})]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=S.exports},15:function(e,t,r){"use strict";var a={props:{items:{type:Array,required:!1}}},s=r(0),i=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"grid grid-cols-4 gap-16"},[t("aside",{staticClass:"col-span-4 md:col-span-1"},[this._t("nav")],2),this._v(" "),t("section",{staticClass:"col-span-4 md:col-span-3"},[t("div",{staticClass:"space-y-16"},[this._t("segments")],2)])])}),[],!1,null,null,null);t.a=i.exports},16:function(e,t,r){"use strict";var a=r(0),s=Object(a.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"px-8 pb-8 space-y-6 border rounded border-low-emphasis"},[t("header",{staticClass:"-mt-4"},[t("h2",{staticClass:"inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"},[this._t("title")],2),this._v(" "),t("p",{staticClass:"mt-1 text-small text-medium-emphasis"},[this._t("subtitle")],2)]),this._v(" "),t("div",{staticClass:"space-y-4"},[this._t("form"),this._v(" "),this._t("content")],2)])}),[],!1,null,null,null);t.a=s.exports},18:function(e,t,r){"use strict";r.r(t);var a=r(38),s=r(39),i=r(40),n=r(41),o={components:{TopBar:a.a,Breadcrumbs:s.a,TabBar:i.a,TopBarTabBarContainer:n.a},data:function(){return{tabBars:[{title:"Dashboard",to:this.route("admin.dashboard"),active:this.route().current("admin.dashboard")||this.route().current("admin.settings")||this.route().current("admin.system")},{title:this.__("Users"),to:this.route("admin.users.index"),active:this.route().current("admin.users.*")},{title:this.__("Packages"),to:this.route("admin.packages.index"),active:this.route().current("admin.packages.*")},this.$page.settings.support?{title:"".concat(this.__("Support")," (").concat(this.$page.openTickets,")"),to:this.route("admin.support.index"),active:this.route().current("admin.support.*")}:null,this.$page.settings.documentation?{title:this.__("Documentation"),to:this.route("admin.documentation.index"),active:this.route().current("admin.documentation.*")}:null,{title:"Services",to:this.route("admin.services.index"),active:this.route().current("admin.services.*")}],breadcrumbs:[{title:this.$page.settings.name,to:"/"},{title:this.__("Administration"),to:this.route("admin.dashboard")}]}}},u=r(0),c=Object(u.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TopBar",{scopedSlots:e._u([{key:"breadcrumbs",fn:function(){return[r("Breadcrumbs",{attrs:{items:e.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[r("TopBarTabBarContainer",[r("TabBar",{attrs:{items:e.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=c.exports},28:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(54);function s(e){var t=e.title,r=e.message,s=e.onConfirm;return a.a.dispatch("confirmDelete/open",{title:t,message:r,onConfirm:function(){s(),a.a.dispatch("confirmDelete/close")}})}},31:function(e,t,r){"use strict";var a=r(57),s=r(56),i=r(58),n=r(69),o={props:{id:{type:String,required:!1},label:{type:String,required:!0},type:{type:String,default:function(){return"text"}},required:{type:Boolean,default:function(){return!1}},helperText:{type:String},errors:{type:Array},placeholder:{type:String},value:{required:!1,default:""}},components:{FormGroup:a.a,Label:s.a,ErrorText:i.a,HelperText:n.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body h-10 max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary",selected:this.value}},methods:{updateValue:function(e){this.$emit("input",e)}}},u=r(0),c=Object(u.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("FormGroup",[r("Label",{attrs:{errors:e.errors,forId:e.id}},[e._v(e._s(e.label))]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],class:e.defaultClasses,attrs:{id:e.id,required:e.required,placeholder:e.placeholder},on:{input:function(t){return e.updateValue(t.target.value)},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.value=t.target.multiple?r:r[0]}}},[e._t("default")],2),e._v(" "),e.errors?r("ErrorText",[e._v(e._s(e.errors[0]))]):e._e(),e._v(" "),e.helperText&&!e.errors?r("HelperText",[e._v(e._s(e.helperText))]):e._e()],1)}),[],!1,null,null,null);t.a=c.exports},50:function(e,t,r){"use strict";r.r(t);var a={data:function(){return{items:[{title:this.__("Overview"),to:this.route("admin.packages.index"),active:this.route().current("admin.packages.index")},{title:this.__("Create"),to:this.route("admin.packages.create"),active:this.route().current("admin.packages.create")}]}}},s=r(0),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"-ml-4 space-y-1"},e._l(e.items,(function(t){return r("li",[r("inertia-link",{staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":t.active},attrs:{href:t.to}},[e._v(e._s(t.title)+" "+e._s(t.route))])],1)})),0)}),[],!1,null,null,null);t.default=i.exports}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

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
      } : null, {
        title: this.__('Settings'),
        to: this.route('sites.settings.show', this.site.id),
        active: this.route().current('sites.settings.show')
      }, {
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



/***/ })

}]);
>>>>>>> develop
