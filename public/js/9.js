<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[9,69],{0:function(t,e,s){"use strict";function a(t,e,s,a,n,i,r,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=o?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return a}))},134:function(t,e,s){"use strict";s.r(e);var a=s(17),n=s(1),i=s(6),r=s(7),o=s(8),l=s(9),c=s(10),u=s(2),d=s(11),p=s(12),h=s(4),m=s(5),f=s(3),_=s(15),v=s(16),b=s(29),g=s(19),x=s(43),w=s(20),C=s(22),y=s(23),k=s(24),$=s(25),O=s(21),T={metaInfo:function(){return{title:"".concat(this.__("Documentation"))}},layout:f.a,components:{TopBar:a.default,Container:n.a,Content:i.a,Page:r.a,PageHeader:o.a,PageHeaderTitle:l.a,PageBody:c.a,Button:u.a,List:d.a,ListItem:p.a,StatusBubble:h.a,NotificationBadge:m.a,SettingsLayout:_.a,SettingsSegment:v.a,Pagination:b.a,Tabs:x.default,Table:w.a,TableHead:C.a,TableHeader:y.a,TableRow:k.a,TableBody:$.a,TableData:O.a},props:{categories:Object},data:function(){return{}},mounted:function(){},methods:{useNotification:g.a}},E=s(0),B=Object(E.a)(T,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Page",[s("TopBar"),t._v(" "),s("Content",[s("Container",[s("PageHeader",{scopedSlots:t._u([{key:"start",fn:function(){return[s("PageHeaderTitle",[t._v(t._s(t.__("Documentation")))])]},proxy:!0}])}),t._v(" "),s("PageBody",[s("SettingsLayout",{scopedSlots:t._u([{key:"nav",fn:function(){return[s("Tabs")]},proxy:!0},{key:"segments",fn:function(){return[s("SettingsSegment",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.__("Overview")))]},proxy:!0},{key:"content",fn:function(){return[s("Table",{attrs:{caption:"Documentation category list overview"}},[s("TableHead",[s("TableRow",[s("TableHeader",[t._v(t._s(t.__("Title")))]),t._v(" "),s("TableHeader")],1)],1),t._v(" "),s("TableBody",t._l(t.categories.data,(function(e){return s("TableRow",{key:e.id},[s("TableData",[t._v("\n                                                "+t._s(e.title)+"\n                                            ")]),t._v(" "),s("TableData",[s("inertia-link",{staticClass:"text-primary font-medium",attrs:{href:t.route("admin.documentation.edit",e.id)}},[t._v("\n                                                    "+t._s(t.__("Edit"))+"\n                                                ")])],1)],1)})),1)],1)]},proxy:!0}])})]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=B.exports},15:function(t,e,s){"use strict";var a={props:{items:{type:Array,required:!1}}},n=s(0),i=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid grid-cols-4 gap-8 md:gap-16"},[e("aside",{staticClass:"col-span-4 md:col-span-1"},[this._t("nav")],2),this._v(" "),e("section",{staticClass:"col-span-4 md:col-span-3"},[e("div",{staticClass:"space-y-16"},[this._t("segments")],2)])])}),[],!1,null,null,null);e.a=i.exports},16:function(t,e,s){"use strict";var a=s(0),n=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"px-8 pb-8 space-y-6 border rounded border-low-emphasis"},[e("header",{staticClass:"-mt-4"},[e("h2",{staticClass:"inline-flex px-4 -mx-4 font-medium bg-surface-1 text-title"},[this._t("title")],2),this._v(" "),e("p",{staticClass:"mt-1 text-small text-medium-emphasis"},[this._t("subtitle")],2)]),this._v(" "),e("div",{staticClass:"space-y-4"},[this._t("form"),this._v(" "),this._t("content")],2)])}),[],!1,null,null,null);e.a=n.exports},17:function(t,e,s){"use strict";s.r(e);var a=s(39),n=s(40),i=s(41),r=s(42),o={components:{TopBar:a.a,Breadcrumbs:n.a,TabBar:i.a,TopBarTabBarContainer:r.a},data:function(){return{tabBars:[{title:"Dashboard",to:this.route("admin.dashboard"),active:this.route().current("admin.dashboard")||this.route().current("admin.settings")||this.route().current("admin.system")},{title:this.__("Users"),to:this.route("admin.users.index"),active:this.route().current("admin.users.*")},{title:this.__("Packages"),to:this.route("admin.packages.index"),active:this.route().current("admin.packages.*")},this.$page.props.settings.support?{title:"".concat(this.__("Support")," (").concat(this.$page.props.openTickets,")"),to:this.route("admin.support.index"),active:this.route().current("admin.support.*")}:null,this.$page.props.settings.documentation?{title:this.__("Documentation"),to:this.route("admin.documentation.index"),active:this.route().current("admin.documentation.*")}:null,{title:"Services",to:this.route("admin.services.index"),active:this.route().current("admin.services.*")}],breadcrumbs:[{title:this.$page.props.settings.name,to:"/"},{title:this.__("Administration"),to:this.route("admin.dashboard")}]}}},l=s(0),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("TopBar",{scopedSlots:t._u([{key:"breadcrumbs",fn:function(){return[s("Breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0},{key:"tab-bar",fn:function(){return[s("TopBarTabBarContainer",[s("TabBar",{attrs:{items:t.tabBars}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=c.exports},20:function(t,e,s){"use strict";var a={props:{caption:{type:String,required:!0}}},n=s(0),i=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("table",{staticClass:"w-full text-left table-auto text-small"},[e("caption",{staticClass:"sr-only"},[this._v(this._s(this.caption))]),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},21:function(t,e,s){"use strict";var a={props:{border:{type:Boolean,default:!0}}},n=s(0),i=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("td",{staticClass:"py-2",class:{"border-t border-low-emphasis":this.border}},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},22:function(t,e,s){"use strict";var a=s(0),n=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("thead",[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},23:function(t,e,s){"use strict";var a=s(0),n=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("th",{staticClass:"pb-2"},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},24:function(t,e,s){"use strict";var a=s(0),n=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("tr",[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},25:function(t,e,s){"use strict";var a=s(0),n=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("tbody",[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},29:function(t,e,s){"use strict";var a={props:{links:Object},computed:{determineLinks:function(){return this.links.meta?this.links.meta:this.links}}},n=s(0),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.determineLinks.per_page<t.determineLinks.total?s("div",{staticClass:"mt-6 -mb-1 flex flex-wrap"},[t._l(t.determineLinks.links,(function(e,a){return[null===e.url?s("div",{key:a,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400",class:{"ml-auto":"Next"===e.label}},[t._v(t._s(e.label))]):s("inertia-link",{key:a,staticClass:"mr-1 mb-1 px-2 py-1 text-sm rounded",class:{"shadow text-high-emphasis bg-surface-1":e.active,"ml-auto":"Next"===e.label},attrs:{href:e.url}},[t._v(t._s(e.label))])]}))],2):t._e()}),[],!1,null,null,null);e.a=i.exports},39:function(t,e,s){"use strict";var a=s(1),n=s(48),i=s(49),r=s(50),o=s(0),l=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-moon",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"}})])}),[],!1,null,null,null).exports,c=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-sun",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"}})])}),[],!1,null,null,null).exports,u=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"bi bi-search",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}})])}),[],!1,null,null,null).exports,d=s(51),p={components:{Container:a.a,Dropdown:n.a,DropdownList:i.a,DropdownListItem:r.a,IconMoon:l,IconSearch:u,IconSun:c,IconButton:d.a},data:function(){return{themeMode:this.$page.props.auth.user.theme}},mounted:function(){this.setDarkMode()},methods:{toggleTheme:function(){var t=this;window.axios.post("/profile/toggle-theme").then((function(e){t.themeMode=e.data,t.setDarkMode()}))},setDarkMode:function(){"auto"===this.themeMode?this.checkDarkMode()?document.documentElement.classList.add("theme--dark"):document.documentElement.classList.remove("theme--dark"):"dark"===this.themeMode?document.documentElement.classList.add("theme--dark"):document.documentElement.classList.remove("theme--dark")},checkDarkMode:function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},triggerSearch:function(){window.eventBus.$emit("openSearch")}}},h=Object(o.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"sticky top-0 border-b border-low-emphasis bg-top-bar z-30"},[s("div",{staticClass:"w-full px-4 sm:px-8 mx-auto max-w-top-bar-container"},[s("div",{staticClass:"flex flex-col"},[s("nav",{staticClass:"flex flex-col items-center justify-between py-4 space-y-4 md:space-y-0 md:flex-row text-top-bar"},[s("div",{staticClass:"flex items-center space-x-5"},[t.$page.props.settings.logo?s("img",{staticClass:"h-top-bar-logo",attrs:{src:t.$page.props.settings.logo}}):t._e(),t._v(" "),t._t("breadcrumbs")],2),t._v(" "),s("ul",{staticClass:"flex items-center space-x-4"},[s("li",{attrs:{"aria-label":t.__("Search"),"data-balloon-blunt":"","data-balloon-pos":"down"}},[s("IconButton",{on:{click:t.triggerSearch}},[s("IconSearch",{staticClass:"text-top-bar"})],1)],1),t._v(" "),s("li",{attrs:{"aria-label":"light"===t.themeMode?t.__("Enable dark mode"):t.__("Enable light mode"),"data-balloon-blunt":"","data-balloon-pos":"down"}},[s("IconButton",{on:{click:t.toggleTheme}},["light"===t.themeMode?s("IconMoon",{staticClass:"text-top-bar"}):t._e(),t._v(" "),"dark"===t.themeMode?s("IconSun",{staticClass:"text-top-bar"}):t._e()],1)],1),t._v(" "),s("li",[s("Dropdown",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.toggle,n=e.isOpen;return[s("button",{staticClass:"flex h-auto m-0 appearance-none items-center",on:{click:a}},[s("span",[t._v(t._s(t.$page.props.auth.user.name))]),t._v(" "),s("img",{staticClass:"ml-2 inline w-8 h-8 rounded-avatar bg-surface-2",attrs:{src:t.$page.props.auth.user.avatar,alt:t.$page.props.auth.user.name}})]),t._v(" "),n?s("DropdownList",[t.$page.props.settings.support?s("DropdownListItem",{attrs:{to:"/support"}},[t._v(t._s(t.__("Support"))+"\n                                ")]):t._e(),t._v(" "),t.$page.props.settings.documentation?s("DropdownListItem",{attrs:{to:"/documentation"}},[t._v(t._s(t.__("Documentation")))]):t._e(),t._v(" "),s("DropdownListItem",{attrs:{to:t.route("profile.index")}},[t._v(t._s(t.__("Profile"))+"\n                                ")]),t._v(" "),t.$page.props.settings.billing?s("DropdownListItem",{attrs:{to:t.route("profile.billing.index")}},[t._v(t._s(t.__("Billing"))+"\n                                ")]):t._e(),t._v(" "),"admin"===t.$page.props.auth.user.role?s("DropdownListItem",{staticClass:"text-danger",attrs:{to:t.route("admin.dashboard")}},[t._v(t._s(t.__("Administration"))+"\n                                ")]):t._e(),t._v(" "),s("DropdownListItem",{attrs:{to:t.route("logout"),method:"post"}},[t._v(t._s(t.__("Sign out"))+"\n                                ")])],1):t._e()]}}])})],1)])]),t._v(" "),t._t("tab-bar")],2)])])}),[],!1,null,null,null);e.a=h.exports},40:function(t,e,s){"use strict";var a={props:{to:{type:String,required:!0}}},n=s(0),i={components:{BreadcrumbsItem:Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("inertia-link",{staticClass:"font-medium text-body text-breadcrumbs",attrs:{href:this.to}},[this._t("default")],2)}),[],!1,null,null,null).exports},props:{items:{type:Array,required:!0}}},r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"flex items-center space-x-2"},t._l(t.items,(function(e,a){return s("li",{key:e.title},[s("BreadcrumbsItem",{attrs:{to:e.to}},[t._v(t._s(e.title))]),t._v(" "),a<t.items.length-1?s("span",{staticClass:"ml-2 text-low-emphasis"},[t._v("/")]):t._e()],1)})),0)}),[],!1,null,null,null);e.a=r.exports},41:function(t,e,s){"use strict";var a={props:{to:{type:String,required:!0},active:{type:Boolean,default:!1}},data:function(){return{baseClasses:"inline-flex items-center justify-center h-10 px-6 font-medium rounded text-small text-tab-bar",activeClasses:"shadow text-tab-bar-active bg-tab-bar-item",transitionClasses:"transition duration-fast hover:text-high-emphasis focus:text-high-emphasis"}}},n=s(0),i={components:{TabBarItem:Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("inertia-link",{class:[this.baseClasses,this.transitionClasses,this.active?this.activeClasses:null],attrs:{href:this.to}},[this._t("default")],2)],1)}),[],!1,null,null,null).exports},props:{items:{type:Array,required:!0}}},r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"inline-flex flex-row p-1 overflow-hidden overflow-x-auto whitespace-no-wrap rounded bg-tab-bar"},t._l(t.items,(function(e){return e?s("TabBarItem",{key:e.title,attrs:{to:e.to,active:e.active}},[t._v("\n        "+t._s(e.title)+"\n    ")]):t._e()})),1)}),[],!1,null,null,null);e.a=r.exports},42:function(t,e,s){"use strict";var a=s(0),n=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("nav",{staticClass:"flex items-center justify-center pb-4"},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},43:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{items:[{title:this.__("Categories"),to:this.route("admin.documentation.index"),active:this.route().current("admin.documentation.index")},{title:this.__("Create category"),to:this.route("admin.documentation.create"),active:this.route().current("admin.documentation.create")},{title:this.__("Articles"),to:this.route("admin.documentation.articles.index"),active:this.route().current("admin.documentation.articles.index")},{title:this.__("Create article"),to:this.route("admin.documentation.articles.create"),active:this.route().current("admin.documentation.articles.create")}]}}},n=s(0),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"-ml-4 space-y-1"},t._l(t.items,(function(e){return s("li",[s("inertia-link",{staticClass:"flex items-center h-10 px-4 font-medium text-medium-emphasis",class:{"rounded shadow text-primary bg-surface-3":e.active},attrs:{href:e.to}},[t._v(t._s(e.title)+" "+t._s(e.route)+"\n        ")])],1)})),0)}),[],!1,null,null,null);e.default=i.exports},48:function(t,e,s){"use strict";var a={data:function(){return{isOpen:!1,position:"top"}},methods:{open:function(){this.isOpen=!0,this.calculatePosition()},close:function(){this.isOpen=!1,this.calculatePosition()},toggle:function(){this.isOpen=!this.isOpen,this.calculatePosition()},outsideClickListener:function(t){this.$refs.dropdown!==t.target.closest(this.$refs.dropdown.tagName)&&this.close()},calculatePosition:function(){this.$refs.dropdown.getBoundingClientRect().top>.75*window.innerHeight?this.position="bottom":this.position="top"}},mounted:function(){window.addEventListener("click",this.outsideClickListener)},beforeDestroy:function(){window.removeEventListener("click",this.outsideClickListener)}},n=s(0),i=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:this.close,expression:"close"}],ref:"dropdown",staticClass:"relative"},[this._t("default",null,null,{isOpen:this.isOpen,open:this.open,close:this.close,toggle:this.toggle,position:this.position})],2)}),[],!1,null,null,null);e.a=i.exports},49:function(t,e,s){"use strict";var a={top:"right-0 top-0 mt-8",bottom:"right-0 bottom-0 mb-8"},n={props:{position:{type:String,default:function(){return"top"},validator:function(t){return Object.keys(a).includes(t)}}},computed:{positionClasses:function(){return a[this.position]}}},i=s(0),r=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["absolute flex flex-col py-1 overflow-hidden rounded shadow-2xl z-20 bg-surface-1",this.positionClasses]},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},50:function(t,e,s){"use strict";var a={props:{to:{type:String,required:!0},method:{required:!1,default:"get"}}},n=s(0),i=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("inertia-link",{staticClass:"flex items-center w-full h-10 px-6 whitespace-no-wrap text-medium-emphasis text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none",attrs:{href:this.to,method:this.method}},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},51:function(t,e,s){"use strict";var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center justify-center w-10 h-10 text-medium-emphasis rounded-circle focus:outline-none focus:text-high-emphasis",on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,null,null);e.a=n.exports}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Redirects.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Sites/Redirects.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony import */ var _components_forms_FormSelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/forms/FormSelect */ "./resources/js/components/forms/FormSelect.vue");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/Form */ "./resources/js/components/Form.vue");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/Pagination */ "./resources/js/components/Pagination.vue");
/* harmony import */ var _components_EmptyImage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/EmptyImage */ "./resources/js/components/EmptyImage.vue");
/* harmony import */ var _components_FormActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/components/FormActions */ "./resources/js/components/FormActions.vue");
/* harmony import */ var _hooks_confirm_delete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/hooks/confirm-delete */ "./resources/js/hooks/confirm-delete.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Tabs */ "./resources/js/Pages/Sites/Tabs.vue");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/components/Table */ "./resources/js/components/Table.vue");
/* harmony import */ var _components_TableHead__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/components/TableHead */ "./resources/js/components/TableHead.vue");
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/components/TableHeader */ "./resources/js/components/TableHeader.vue");
/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/components/TableRow */ "./resources/js/components/TableRow.vue");
/* harmony import */ var _components_TableBody__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/components/TableBody */ "./resources/js/components/TableBody.vue");
/* harmony import */ var _components_TableData__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/components/TableData */ "./resources/js/components/TableData.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: "".concat(this.__('Redirects'), " - ").concat(this.site.domain)
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
    FormActions: _components_FormActions__WEBPACK_IMPORTED_MODULE_20__["default"],
    Pagination: _components_Pagination__WEBPACK_IMPORTED_MODULE_18__["default"],
    Tabs: _Tabs__WEBPACK_IMPORTED_MODULE_22__["default"],
    Table: _components_Table__WEBPACK_IMPORTED_MODULE_23__["default"],
    TableHead: _components_TableHead__WEBPACK_IMPORTED_MODULE_24__["default"],
    TableHeader: _components_TableHeader__WEBPACK_IMPORTED_MODULE_25__["default"],
    TableRow: _components_TableRow__WEBPACK_IMPORTED_MODULE_26__["default"],
    TableBody: _components_TableBody__WEBPACK_IMPORTED_MODULE_27__["default"],
    TableData: _components_TableData__WEBPACK_IMPORTED_MODULE_28__["default"],
    EmptyImage: _components_EmptyImage__WEBPACK_IMPORTED_MODULE_19__["default"]
  },
  data: function data() {
    return {
      sending: false,
      form: {
        redirect_from: null,
        redirect_to: null,
        type: 'redirect'
      },
      breadcrumbs: [{
        title: this.$page.props.settings.name,
        to: '/'
      }, {
        title: this.__('Sites'),
        to: this.route('sites.index')
      }, {
        title: this.site.domain,
        to: this.route('sites.show', this.site.id)
      }, {
        title: this.__('Redirects'),
        to: this.route('sites.redirects.index', this.site.id)
      }]
    };
  },
  mounted: function mounted() {
    if (this.shouldBePolling) {
      this.startPollingInterval();
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
  computed: {
    shouldBePolling: function shouldBePolling() {
      return !!this.redirects.data.filter(function (redirect) {
        return redirect.status === 'busy';
      }).length;
    }
  },
  props: {
    site: Object,
    redirects: Object
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
      this.$inertia.replace(this.route('sites.redirects.index', this.site.id), {
        only: ['redirects'],
        preserveScroll: true
      });
    },
    submit: function submit() {
      var _this = this;

      this.sending = true;
      this.$inertia.post(this.route('sites.redirects.store', this.site.id), this.form).then(function () {
        _this.sending = false;

        if (!Object.keys(_this.$page.props.errors).length) {
          _this.form.redirect_from = null;
          _this.form.redirect_to = null;
          _this.form.type = 'redirect';
        }
      });
    },
    confirmDelete: function confirmDelete(redirect) {
      var _this2 = this;

      Object(_hooks_confirm_delete__WEBPACK_IMPORTED_MODULE_21__["useConfirmDelete"])({
        title: this.__('Are you sure?'),
        message: this.__("Your redirect will be deleted permanently, this action cannot be undone."),
        onConfirm: function onConfirm() {
          return _this2["delete"](redirect);
        }
      });
    },
    "delete": function _delete(redirect) {
      this.$inertia["delete"](this.route('sites.redirects.delete', [this.site.id, redirect.id]), {
        preserveScroll: true
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clearPollingInterval();
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormActions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FormActions.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    justify: {
      type: String,
      "default": 'justify-start'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pagination.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    links: Object
  },
  computed: {
    determineLinks: function determineLinks() {
      if (this.links.meta) {
        return this.links.meta;
      }

      return this.links;
    }
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
    },
    loading: {
      type: Boolean,
      required: false,
      "default": false
    },
    disabled: {
      type: Boolean,
      required: false,
      "default": false
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Redirects.vue?vue&type=template&id=c45819ca&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Sites/Redirects.vue?vue&type=template&id=c45819ca& ***!
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
              _c("PageHeader", {
                scopedSlots: _vm._u([
                  {
                    key: "start",
                    fn: function() {
                      return [
                        _c("PageHeaderTitle", [
                          _vm._v(_vm._s(_vm.__("Redirects")))
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
                                    return [_vm._v(_vm._s(_vm.__("Create")))]
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
                                              "Create new redirects here to easily forward a url to another."
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
                                              label: _vm.__("From"),
                                              errors:
                                                _vm.$page.props.errors
                                                  .redirect_from
                                            },
                                            model: {
                                              value: _vm.form.redirect_from,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "redirect_from",
                                                  $$v
                                                )
                                              },
                                              expression: "form.redirect_from"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("FormInput", {
                                            attrs: {
                                              label: _vm.__("To"),
                                              errors:
                                                _vm.$page.props.errors
                                                  .redirect_to
                                            },
                                            model: {
                                              value: _vm.form.redirect_to,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "redirect_to",
                                                  $$v
                                                )
                                              },
                                              expression: "form.redirect_to"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "FormSelect",
                                            {
                                              attrs: { label: "Type" },
                                              model: {
                                                value: _vm.form.type,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "type",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.type"
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                {
                                                  attrs: { value: "redirect" }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.__("Temporary")
                                                    ) + " (302)"
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "option",
                                                {
                                                  attrs: { value: "permanent" }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.__("Permanent")
                                                    ) + " (301)"
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
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
                            }),
                            _vm._v(" "),
                            !_vm.redirects.meta.total
                              ? _c("EmptyImage")
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.redirects.meta.total
                              ? _c("SettingsSegment", {
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "title",
                                        fn: function() {
                                          return [
                                            _vm._v(_vm._s(_vm.__("Redirects")))
                                          ]
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
                                                        "Redirect list overview"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "TableHead",
                                                      [
                                                        _c(
                                                          "TableRow",
                                                          [
                                                            _c("TableHeader"),
                                                            _vm._v(" "),
                                                            _c("TableHeader", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.__("From")
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("TableHeader", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.__("To")
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("TableHeader", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.__("Type")
                                                                )
                                                              )
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
                                                      _vm._l(
                                                        _vm.redirects.data,
                                                        function(redirect) {
                                                          return _c(
                                                            "TableRow",
                                                            {
                                                              key: redirect.id
                                                            },
                                                            [
                                                              _c(
                                                                "TableData",
                                                                [
                                                                  _c(
                                                                    "StatusBubble",
                                                                    {
                                                                      attrs: {
                                                                        variant:
                                                                          redirect.status ===
                                                                          "busy"
                                                                            ? "gray"
                                                                            : "success"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c("TableData", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    redirect.redirect_from
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("TableData", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    redirect.redirect_to
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("TableData", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    redirect.type
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c(
                                                                "TableData",
                                                                [
                                                                  _c(
                                                                    "Button",
                                                                    {
                                                                      attrs: {
                                                                        disabled:
                                                                          redirect.status ===
                                                                          "busy",
                                                                        variant:
                                                                          "danger",
                                                                        size:
                                                                          "sm"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.confirmDelete(
                                                                            redirect
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                        " +
                                                                          _vm._s(
                                                                            _vm.__(
                                                                              "Delete"
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
                                                          )
                                                        }
                                                      ),
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("pagination", {
                                              attrs: { links: _vm.redirects }
                                            })
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ],
                                    null,
                                    false,
                                    2534311539
                                  )
                                })
                              : _vm._e()
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
    { staticClass: "md:-ml-4 space-y-1" },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EmptyImage.vue?vue&type=template&id=75d31c8e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EmptyImage.vue?vue&type=template&id=75d31c8e& ***!
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
  return _c("img", {
    staticClass: "w-32 md:w-48 m-auto",
    attrs: { src: "/images/empty.png" }
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
    { staticClass: "flex items-center space-x-2", class: [_vm.justify] },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176& ***!
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
  return _vm.determineLinks.per_page < _vm.determineLinks.total
    ? _c(
        "div",
        { staticClass: "mt-6 -mb-1 flex flex-wrap" },
        [
          _vm._l(_vm.determineLinks.links, function(link, key) {
            return [
              link.url === null
                ? _c(
                    "div",
                    {
                      key: key,
                      staticClass:
                        "mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400",
                      class: { "ml-auto": link.label === "Next" }
                    },
                    [_vm._v(_vm._s(link.label))]
                  )
                : _c(
                    "inertia-link",
                    {
                      key: key,
                      staticClass: "mr-1 mb-1 px-2 py-1 text-sm rounded",
                      class: {
                        "shadow text-high-emphasis bg-surface-1": link.active,
                        "ml-auto": link.label === "Next"
                      },
                      attrs: { href: link.url }
                    },
                    [_vm._v(_vm._s(link.label))]
                  )
            ]
          })
        ],
        2
      )
    : _vm._e()
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
          class: [
            _vm.defaultClasses,
            _vm.disabled || _vm.loading ? "opacity-50" : "",
            _vm.loading ? "cursor-wait" : ""
          ],
          attrs: {
            disabled: _vm.loading || _vm.disabled,
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
  return _c("div", { staticClass: "grid grid-cols-4 gap-8 md:gap-16" }, [
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

/***/ "./resources/js/Pages/Sites/Redirects.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Sites/Redirects.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Redirects_vue_vue_type_template_id_c45819ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Redirects.vue?vue&type=template&id=c45819ca& */ "./resources/js/Pages/Sites/Redirects.vue?vue&type=template&id=c45819ca&");
/* harmony import */ var _Redirects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Redirects.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Sites/Redirects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Redirects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Redirects_vue_vue_type_template_id_c45819ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Redirects_vue_vue_type_template_id_c45819ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Sites/Redirects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Sites/Redirects.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Sites/Redirects.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Redirects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Redirects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Sites/Redirects.vue?vue&type=template&id=c45819ca&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Sites/Redirects.vue?vue&type=template&id=c45819ca& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirects_vue_vue_type_template_id_c45819ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Redirects.vue?vue&type=template&id=c45819ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Sites/Redirects.vue?vue&type=template&id=c45819ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirects_vue_vue_type_template_id_c45819ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirects_vue_vue_type_template_id_c45819ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/EmptyImage.vue":
/*!************************************************!*\
  !*** ./resources/js/components/EmptyImage.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmptyImage_vue_vue_type_template_id_75d31c8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyImage.vue?vue&type=template&id=75d31c8e& */ "./resources/js/components/EmptyImage.vue?vue&type=template&id=75d31c8e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _EmptyImage_vue_vue_type_template_id_75d31c8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmptyImage_vue_vue_type_template_id_75d31c8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EmptyImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EmptyImage.vue?vue&type=template&id=75d31c8e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/EmptyImage.vue?vue&type=template&id=75d31c8e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyImage_vue_vue_type_template_id_75d31c8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyImage.vue?vue&type=template&id=75d31c8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EmptyImage.vue?vue&type=template&id=75d31c8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyImage_vue_vue_type_template_id_75d31c8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyImage_vue_vue_type_template_id_75d31c8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _FormActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormActions.vue?vue&type=script&lang=js& */ "./resources/js/components/FormActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./resources/js/components/FormActions.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/FormActions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FormActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FormActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Pagination.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Pagination.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_d7acf176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=d7acf176& */ "./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_d7acf176___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_d7acf176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pagination.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Pagination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_d7acf176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=d7acf176& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_d7acf176___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_d7acf176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
