<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{131:function(e,t,r){"use strict";r.r(t);var a=r(18),s=r(1),n=r(6),o=r(7),i=r(8),u=r(9),l=r(10),c=r(2),d=r(11),m=r(12),p=r(4),f=r(5),_=r(3),v=r(15),h=r(16),g=r(13),b=r(36),x=r(31),y=r(19),k=r(14),C=r(51),T={metaInfo:function(){return{title:"".concat(this.__("Create user"))}},layout:_.a,components:{TopBar:a.default,Container:s.a,Content:n.a,Page:o.a,PageHeader:i.a,PageHeaderTitle:u.a,PageBody:l.a,Button:c.a,List:d.a,ListItem:m.a,StatusBubble:p.a,NotificationBadge:f.a,FormInput:g.a,FormSelect:x.a,SettingsLayout:v.a,SettingsSegment:h.a,Form:y.a,FormActions:k.a,Tabs:C.default,FormTextarea:b.a},props:{packages:Object,languages:Array,defaultPackage:{}},data:function(){var e;return{sending:!1,form:{name:null,email:null,password:null,role:"user",package:null!==(e=this.defaultPackage)&&void 0!==e?e:null,notes:null,language:"en",blocked:null}}},methods:{submit:function(){var e=this;this.sending=!0,this.$inertia.post(this.route("admin.users.store"),this.form).then((function(){return e.sending=!1}))}}},S=r(0),$=Object(S.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Page",[r("TopBar"),e._v(" "),r("Content",[r("Container",[r("PageHeader",{scopedSlots:e._u([{key:"start",fn:function(){return[r("PageHeaderTitle",[e._v(e._s(e.__("Create user")))])]},proxy:!0}])}),e._v(" "),r("PageBody",[r("SettingsLayout",{scopedSlots:e._u([{key:"nav",fn:function(){return[r("Tabs")]},proxy:!0},{key:"segments",fn:function(){return[r("SettingsSegment",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.__("Create")))]},proxy:!0},{key:"form",fn:function(){return[r("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("FormInput",{attrs:{label:e.__("Name"),errors:e.$page.errors.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("FormInput",{attrs:{label:"Email address",errors:e.$page.errors.email,type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("FormTextarea",{attrs:{label:"Notes",errors:e.$page.errors.notes},model:{value:e.form.notes,callback:function(t){e.$set(e.form,"notes",t)},expression:"form.notes"}}),e._v(" "),r("FormSelect",{attrs:{label:e.__("Role")},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},[r("option",{attrs:{value:"user"}},[e._v(e._s(e.__("User")))]),e._v(" "),r("option",{attrs:{value:"admin"}},[e._v(e._s(e.__("Administrator")))])]),e._v(" "),r("FormSelect",{attrs:{label:e.__("Package")},model:{value:e.form.package,callback:function(t){e.$set(e.form,"package",t)},expression:"form.package"}},e._l(e.packages,(function(t,a){return r("option",{domProps:{value:a,textContent:e._s(t)}})})),0),e._v(" "),r("FormSelect",{attrs:{label:e.__("Language")},model:{value:e.form.language,callback:function(t){e.$set(e.form,"language",t)},expression:"form.language"}},e._l(e.languages,(function(t){return r("option",{domProps:{value:t,textContent:e._s(t)}})})),0),e._v(" "),r("FormTextarea",{attrs:{label:e.__("Blocked"),errors:e.$page.errors.blocked,rows:"2"},model:{value:e.form.blocked,callback:function(t){e.$set(e.form,"blocked",t)},expression:"form.blocked"}}),e._v(" "),r("FormActions",[r("Button",[e._v(e._s(e.__("Save changes")))])],1)],1)]},proxy:!0}])})]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=$.exports},15:function(e,t,r){"use strict";var a={props:{items:{type:Array,required:!1}}},s=r(0),n=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"grid grid-cols-4 gap-16"},[t("aside",{staticClass:"col-span-4 md:col-span-1"},[this._t("nav")],2),this._v(" "),t("section",{staticClass:"col-span-4 md:col-span-3"},[t("div",{staticClass:"space-y-16"},[this._t("segments")],2)])])}),[],!1,null,null,null);t.a=n.exports},16:function(e,t,r){"use strict";var a=r(0),s=Object(a.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"px-8 pb-8 space-y-6 border rounded border-low-emphasis"},[t("header",{staticClass:"-mt-4"},[t("h2",{staticClass:"inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"},[this._t("title")],2),this._v(" "),t("p",{staticClass:"mt-1 text-small text-medium-emphasis"},[this._t("subtitle")],2)]),this._v(" "),t("div",{staticClass:"space-y-4"},[this._t("form"),this._v(" "),this._t("content")],2)])}),[],!1,null,null,null);t.a=s.exports},18:function(e,t,r){"use strict";r.r(t);var a=r(38),s=r(39),n=r(40),o=r(41),i={components:{TopBar:a.a,Breadcrumbs:s.a,TabBar:n.a,TopBarTabBarContainer:o.a},data:function(){return{tabBars:[{title:"Dashboard",to:this.route("admin.dashboard"),active:this.route().current("admin.dashboard")||this.route().current("admin.settings")||this.route().current("admin.system")},{title:this.__("Users"),to:this.route("admin.users.index"),active:this.route().current("admin.users.*")},{title:this.__("Packages"),to:this.route("admin.packages.index"),active:this.route().current("admin.packages.*")},this.$page.settings.support?{title:"".concat(this.__("Support")," (").concat(this.$page.openTickets,")"),to:this.route("admin.support.index"),active:this.route().current("admin.support.*")}:null,this.$page.settings.documentation?{title:this.__("Documentation"),to:this.route("admin.documentation.index"),active:this.route().current("admin.documentation.*")}:null,{title:"Services",to:this.route("admin.services.index"),active:this.route().current("admin.services.*")}],breadcrumbs:[{title:this.$page.settings.name,to:"/"},{title:this.__("Administration"),to:this.route("admin.dashboard")}]}}},u=r(0),l=Object(u.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TopBar",{scopedSlots:e._u([{key:"breadcrumbs",fn:function(){return[r("Breadcrumbs",{attrs:{items:e.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[r("TopBarTabBarContainer",[r("TabBar",{attrs:{items:e.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=l.exports},31:function(e,t,r){"use strict";var a=r(57),s=r(56),n=r(58),o=r(69),i={props:{id:{type:String,required:!1},label:{type:String,required:!0},type:{type:String,default:function(){return"text"}},required:{type:Boolean,default:function(){return!1}},helperText:{type:String},errors:{type:Array},placeholder:{type:String},value:{required:!1,default:""}},components:{FormGroup:a.a,Label:s.a,ErrorText:n.a,HelperText:o.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body h-10 max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary",selected:this.value}},methods:{updateValue:function(e){this.$emit("input",e)}}},u=r(0),l=Object(u.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("FormGroup",[r("Label",{attrs:{errors:e.errors,forId:e.id}},[e._v(e._s(e.label))]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],class:e.defaultClasses,attrs:{id:e.id,required:e.required,placeholder:e.placeholder},on:{input:function(t){return e.updateValue(t.target.value)},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.value=t.target.multiple?r:r[0]}}},[e._t("default")],2),e._v(" "),e.errors?r("ErrorText",[e._v(e._s(e.errors[0]))]):e._e(),e._v(" "),e.helperText&&!e.errors?r("HelperText",[e._v(e._s(e.helperText))]):e._e()],1)}),[],!1,null,null,null);t.a=l.exports},36:function(e,t,r){"use strict";var a=r(57),s=r(56),n=r(58),o={props:{id:{type:String,required:!1},label:{type:String,required:!0},required:{type:Boolean,default:function(){return!1}},errors:{type:Array},placeholder:{type:String},value:{required:!1,default:""},rows:{default:3,required:!1}},components:{FormGroup:a.a,Label:s.a,ErrorText:n.a},data:function(){return{defaultClasses:"w-full border-medium-emphasis text-body max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary"}},methods:{updateValue:function(e){this.$emit("input",e)}}},i=r(0),u=Object(i.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("FormGroup",[r("Label",{attrs:{errors:e.errors,forId:e.id}},[e._v(e._s(e.label))]),e._v(" "),r("textarea",{class:[e.defaultClasses],attrs:{id:e.id,required:e.required,rows:e.rows,placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.updateValue(t.target.value)}}}),e._v(" "),e.errors?r("ErrorText",[e._v(e._s(e.errors[0]))]):e._e()],1)}),[],!1,null,null,null);t.a=u.exports},51:function(e,t,r){"use strict";r.r(t);var a={data:function(){return{items:[{title:this.__("Overview"),to:this.route("admin.users.index"),active:this.route().current("admin.users.index")},{title:this.__("Create"),to:this.route("admin.users.create"),active:this.route().current("admin.users.create")}]}}},s=r(0),n=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"-ml-4 space-y-1"},e._l(e.items,(function(t){return r("li",[r("inertia-link",{staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":t.active},attrs:{href:t.to}},[e._v(e._s(t.title)+" "+e._s(t.route))])],1)})),0)}),[],!1,null,null,null);t.default=n.exports}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Sites/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony import */ var _components_EmptyImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/EmptyImage */ "./resources/js/components/EmptyImage.vue");
/* harmony import */ var _components_icons_IconBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/icons/IconBox */ "./resources/js/components/icons/IconBox.vue");
/* harmony import */ var _components_icons_IconGlobe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/icons/IconGlobe */ "./resources/js/components/icons/IconGlobe.vue");
/* harmony import */ var _components_icons_IconStorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/icons/IconStorage */ "./resources/js/components/icons/IconStorage.vue");
/* harmony import */ var _components_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/IconButton */ "./resources/js/components/IconButton.vue");
/* harmony import */ var _components_icons_IconMore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/icons/IconMore */ "./resources/js/components/icons/IconMore.vue");
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





























/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: function metaInfo() {
    return {
      title: "".concat(this.__('Sites'))
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
    IconButton: _components_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"],
    IconMore: _components_icons_IconMore__WEBPACK_IMPORTED_MODULE_18__["default"],
    ListItem: _components_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"],
    StatusBubble: _components_StatusBubble__WEBPACK_IMPORTED_MODULE_10__["default"],
    NotificationBadge: _components_NotificationBadge__WEBPACK_IMPORTED_MODULE_11__["default"],
    EmptyImage: _components_EmptyImage__WEBPACK_IMPORTED_MODULE_13__["default"],
    IconBox: _components_icons_IconBox__WEBPACK_IMPORTED_MODULE_14__["default"],
    IconGlobe: _components_icons_IconGlobe__WEBPACK_IMPORTED_MODULE_15__["default"],
    IconStorage: _components_icons_IconStorage__WEBPACK_IMPORTED_MODULE_16__["default"],
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
    sites: Object,
    availableServers: [Array, Object]
  },
  computed: {
    shouldBePolling: function shouldBePolling() {
      return !!this.sites.data.filter(function (site) {
        return site.status === 'busy';
      }).length;
    }
  },
  mounted: function mounted() {
    if (this.shouldBePolling) {
      this.startPollingInterval();
    } // If it includes a create true parameter, then we open the creation modal


    if (window.location.search.includes('create=true')) {
      this.modalIsOpen = true;
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
    }
  },
  data: function data() {
    return {
      form: {
        domain: null,
        server_id: null
      },
      pollingInterval: null,
      modalIsOpen: false,
      breadcrumbs: [{
        title: this.$page.settings.name,
        to: '/'
      }, {
        title: this.__('Sites'),
        to: this.route('sites.index')
      }]
    };
  },
  methods: {
    startPollingInterval: function startPollingInterval() {
      this.pollingInterval = setInterval(function () {
        this.poll();
      }.bind(this), 3000);
    },
    clearPollingInterval: function clearPollingInterval() {
      clearTimeout(this.pollingInterval);
      this.pollingInterval = null;
    },
    poll: function poll() {
      this.$inertia.replace(this.route('sites.index'), {
        only: ['sites'],
        preserveScroll: true
      });
    },
    closeModal: function closeModal() {
      this.modalIsOpen = false;
      this.form.domain = null;
      this.$page.errors = [];
    },
    submit: function submit() {
      var _this = this;

      this.$inertia.post(this.route('sites.store'), this.form, {
        only: ['errors', 'flash', 'sites']
      }).then(function (response) {
        if (!Object.keys(_this.$page.errors).length) {
          _this.form.domain = null;
          _this.modalIsOpen = false;
        }
      });
    },
    confirmDelete: function confirmDelete(site) {
      var _this2 = this;

      Object(_hooks_confirm_delete__WEBPACK_IMPORTED_MODULE_28__["useConfirmDelete"])({
        title: this.__('Are you sure?'),
        message: this.__('Your site will be deleted completely, this action is irreversible.'),
        onConfirm: function onConfirm() {
          return _this2["delete"](site);
        }
      });
    },
    "delete": function _delete(site) {
      this.$inertia["delete"](this.route('sites.delete', site.id));
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clearPollingInterval();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Index.vue?vue&type=template&id=6c0b1856&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Sites/Index.vue?vue&type=template&id=6c0b1856& ***!
  \*********************************************************************************************************************************************************************************************************/
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
                    on: { close: _vm.closeModal, submit: _vm.submit },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "title",
                          fn: function() {
                            return [_vm._v(_vm._s(_vm.__("Create a site")))]
                          },
                          proxy: true
                        },
                        {
                          key: "form",
                          fn: function() {
                            return [
                              _c("FormInput", {
                                attrs: {
                                  label: _vm.__("Domain"),
                                  errors: _vm.$page.errors.domain
                                },
                                model: {
                                  value: _vm.form.domain,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "domain", $$v)
                                  },
                                  expression: "form.domain"
                                }
                              }),
                              _vm._v(" "),
                              Object.keys(_vm.availableServers).length
                                ? _c(
                                    "FormSelect",
                                    {
                                      attrs: { label: _vm.__("Select server") },
                                      model: {
                                        value: _vm.form.server_id,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "server_id", $$v)
                                        },
                                        expression: "form.server_id"
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { domProps: { value: "" + null } },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.__("Select random server")
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.availableServers, function(
                                        name,
                                        id
                                      ) {
                                        return _c("option", {
                                          domProps: {
                                            value: id,
                                            textContent: _vm._s(name)
                                          }
                                        })
                                      })
                                    ],
                                    2
                                  )
                                : _vm._e()
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
                      2867371548
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
                        _c("PageHeaderTitle", [_vm._v(_vm._s(_vm.__("Sites")))])
                      ]
                    },
                    proxy: true
                  },
                  {
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
                          [_vm._v(_vm._s(_vm.__("Create site")))]
                        )
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
                  !_vm.sites.meta.total ? _c("EmptyImage") : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "List",
                    _vm._l(_vm.sites.data, function(site) {
                      return _c("ListItem", {
                        key: site.id,
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "prefix",
                              fn: function() {
                                return [
                                  _c("StatusBubble", {
                                    attrs: {
                                      variant:
                                        site.status === "busy"
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
                                        href: _vm.route("sites.show", site.id)
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(site.domain) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                ]
                              },
                              proxy: true
                            },
                            site.project === "wordpress"
                              ? {
                                  key: "subtitle",
                                  fn: function() {
                                    return [_vm._v("WordPress installed")]
                                  },
                                  proxy: true
                                }
                              : null,
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
                                                              "sites.show",
                                                              site.id
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.__("View")
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "DropdownListItemButton",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.confirmDelete(
                                                                site
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.__("Delete")
                                                            )
                                                          )
                                                        ]
                                                      )
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

/***/ "./resources/js/Pages/Sites/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Sites/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_6c0b1856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6c0b1856& */ "./resources/js/Pages/Sites/Index.vue?vue&type=template&id=6c0b1856&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Sites/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6c0b1856___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_6c0b1856___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Sites/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Sites/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Sites/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Sites/Index.vue?vue&type=template&id=6c0b1856&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Sites/Index.vue?vue&type=template&id=6c0b1856& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6c0b1856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=6c0b1856& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Index.vue?vue&type=template&id=6c0b1856&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6c0b1856___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6c0b1856___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
>>>>>>> develop
