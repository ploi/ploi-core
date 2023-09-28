import TopBar from "./TopBar-d27c2df5.js";
import { C as Container } from "./Container-0fec1f44.js";
import { M as MainLayout, C as Content, P as Page, a as PageHeader, b as PageHeaderTitle, c as PageBody, L as List, d as ListItem, S as StatusBubble, N as NotificationBadge } from "./MainLayout-0bcdf66a.js";
import { B as Button } from "./Button-eaed3445.js";
import { I as IconBox, a as IconGlobe, b as IconStorage } from "./IconStorage-23b21645.js";
import { I as IconArrowDown, a as IconArrowUp } from "./IconArrowDown-ca752aed.js";
import { I as IconClose, M as Modal, a as ModalContainer } from "./ModalContainer-72517758.js";
import { F as FormInput } from "./FormInput-4ba1a7d4.js";
import { F as FormSelect } from "./FormSelect-c42537b8.js";
import { F as FormTextarea } from "./FormTextarea-262a1b86.js";
import { F as FormActions } from "./Form-3ac4ed0d.js";
import { T as Table, a as TableHead, b as TableHeader, c as TableRow, d as TableBody, e as TableData } from "./TableData-a45eb8a2.js";
import { u as useNotification } from "./notification-1116eb57.js";
import { u as useConfirm } from "./confirm-9576f8a6.js";
import { g as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createVNode, b as createBaseVNode, t as toDisplayString, c as createElementBlock, e as createCommentVNode, d as withModifiers, f as createTextVNode, k as renderList, F as Fragment } from "./app-ebc4651b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./TabBar-62d8875b.js";
const _sfc_main = {
  layout: MainLayout,
  components: {
    TopBar,
    Container,
    Content,
    Page,
    PageHeader,
    PageHeaderTitle,
    PageBody,
    Button,
    List,
    ListItem,
    StatusBubble,
    NotificationBadge,
    IconBox,
    IconGlobe,
    IconStorage,
    IconArrowDown,
    IconArrowUp,
    IconClose,
    Modal,
    ModalContainer,
    FormInput,
    FormSelect,
    FormTextarea,
    FormActions,
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
    TableData
  },
  props: {
    packages: Array,
    countries: Object,
    subscription: [Object, null],
    public_key: String,
    data_client_secret: String,
    card: Object,
    filters: Object,
    ends: String
  },
  data() {
    return {
      sending: false,
      clientSecret: this.data_client_secret,
      stripe: null,
      cardElement: null,
      cardHolderName: this.$page.props.auth.user.name,
      currentCardLastFour: this.card.last_four,
      currentCardBrand: this.card.brand,
      coupon: "",
      address: this.$page.props.auth.user.address,
      country: this.$page.props.auth.user.country,
      zip: this.$page.props.auth.user.zip,
      city: this.$page.props.auth.user.city,
      invoices: [],
      breadcrumbs: [
        {
          title: this.$page.props.settings.name,
          to: "/"
        },
        {
          title: this.__("Billing"),
          to: this.route("profile.billing.index")
        }
      ]
    };
  },
  mounted() {
    const stripe = Stripe(this.public_key);
    this.stripe = stripe;
    const elements = stripe.elements();
    const cardElement = elements.create("card");
    cardElement.mount("#card-element");
    this.cardElement = cardElement;
    this.getInvoices();
  },
  watch: {
    sending: function(value) {
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
    useNotification,
    useConfirm,
    async updateBilling() {
      this.sending = true;
      const { setupIntent, error } = await this.stripe.confirmCardSetup(
        this.clientSecret,
        {
          payment_method: {
            card: this.cardElement,
            billing_details: {
              name: this.cardHolderName,
              address: {
                line1: this.address,
                postal_code: this.zip,
                city: this.city,
                country: this.country
              }
            }
          }
        }
      );
      if (error) {
        this.sending = false;
        this.useNotification({
          variant: "danger",
          title: this.__(`Error`),
          message: error.message
        });
      } else {
        const paymentMethod = setupIntent.payment_method;
        this.$inertia.post(this.route("profile.billing.update.card"), {
          payment_method: paymentMethod,
          billing_details: {
            name: this.cardHolderName,
            address: {
              line1: this.address,
              postal_code: this.zip,
              city: this.city,
              country: this.country
            }
          }
        }, {
          onStart: () => this.sending = true,
          onFinish: () => this.sending = false
        });
      }
    },
    updatePlan(id) {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Are you ready to subscribe to this plan? If you have any coupon codes, make sure to enter them before subscribing."),
        variant: "info",
        onConfirm: () => {
          this.$inertia.post(this.route("profile.billing.update.plan"), {
            plan: id,
            coupon: this.coupon
          }, {
            onStart: () => this.sending = true,
            onFinish: () => this.sending = false
          });
        }
      });
    },
    confirmCancel() {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Your subscription will be put to an end. An expire date will be send to you when your plan expires."),
        onConfirm: () => this.cancel()
      });
    },
    cancel() {
      this.$inertia.delete(this.route("profile.billing.cancel.plan"), {
        onStart: () => this.sending = true,
        onFinish: () => this.sending = false
      });
    },
    getInvoices() {
      window.axios.get(this.route("profile.billing.invoices")).then((response) => this.invoices = response.data);
    },
    requestFilterUrl(properties) {
      this.$inertia.visit(route("profile.billing.index", properties), {
        only: ["filters", "packages"]
      });
    },
    deleteCard() {
      useConfirm({
        title: this.__("Are you sure?"),
        message: this.__("Are you sure you want to remove your card from your account? New payments will not be able to process."),
        onConfirm: () => {
          this.$inertia.delete(route("profile.billing.delete.card"), {
            onStart: () => {
              this.sending = true;
            },
            onFinish: () => {
              this.sending = false;
              this.currentCardLastFour = null;
            }
          });
        }
      });
    }
  }
};
const _hoisted_1 = { class: "grid grid-cols-1 md:grid-cols-5 gap-8" };
const _hoisted_2 = { class: "md:col-span-2 space-y-4" };
const _hoisted_3 = {
  key: 0,
  class: "space-y-4 border-b border-low-emphasis pb-4"
};
const _hoisted_4 = { class: "text-lg text-medium-emphasis" };
const _hoisted_5 = { class: "text-lg text-medium-emphasis" };
const _hoisted_6 = {
  key: 0,
  class: "border-b border-low-emphasis pb-4 space-y-2"
};
const _hoisted_7 = ["value", "textContent"];
const _hoisted_8 = { class: "w-full pb-4" };
const _hoisted_9 = {
  class: "form-label",
  for: "card-element"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", {
  id: "card-element",
  class: "form-input"
}, null, -1);
const _hoisted_11 = { class: "space-x-2" };
const _hoisted_12 = {
  key: 0,
  class: "md:col-span-3 space-y-8"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", {
  class: "bg-primary text-on-primary px-4 py-3 rounded relative space-y-2",
  role: "alert"
}, [
  /* @__PURE__ */ createBaseVNode("strong", { class: "font-bold" }, "No packages available."),
  /* @__PURE__ */ createBaseVNode("p", { class: "block" }, " There are currently no packages to choose from. If you're and administrator, you can attach packages via the administrator area. ")
], -1);
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = {
  key: 1,
  class: "md:col-span-3 space-y-8"
};
const _hoisted_16 = { class: "text-lg text-medium-emphasis" };
const _hoisted_17 = ["aria-label"];
const _hoisted_18 = ["aria-label"];
const _hoisted_19 = ["aria-label"];
const _hoisted_20 = ["aria-label"];
const _hoisted_21 = { class: "md:col-span-5 space-y-8 border-t border-low-emphasis" };
const _hoisted_22 = {
  key: 0,
  class: "mt-5 text-lg text-medium-emphasis"
};
const _hoisted_23 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_TopBar = resolveComponent("TopBar");
  const _component_Button = resolveComponent("Button");
  const _component_form_input = resolveComponent("form-input");
  const _component_form_select = resolveComponent("form-select");
  const _component_IconArrowUp = resolveComponent("IconArrowUp");
  const _component_IconArrowDown = resolveComponent("IconArrowDown");
  const _component_TableHeader = resolveComponent("TableHeader");
  const _component_IconClose = resolveComponent("IconClose");
  const _component_inertia_link = resolveComponent("inertia-link");
  const _component_TableRow = resolveComponent("TableRow");
  const _component_TableHead = resolveComponent("TableHead");
  const _component_TableData = resolveComponent("TableData");
  const _component_TableBody = resolveComponent("TableBody");
  const _component_Table = resolveComponent("Table");
  const _component_PageBody = resolveComponent("PageBody");
  const _component_Container = resolveComponent("Container");
  const _component_Content = resolveComponent("Content");
  const _component_Page = resolveComponent("Page");
  return openBlock(), createBlock(_component_Page, null, {
    default: withCtx(() => [
      createVNode(_component_Head, null, {
        default: withCtx(() => [
          createBaseVNode("title", null, toDisplayString(_ctx.__("Billing")), 1)
        ], void 0, true),
        _: 1
      }),
      createVNode(_component_TopBar, { breadcrumbs: $data.breadcrumbs }, null, 8, ["breadcrumbs"]),
      createVNode(_component_Content, null, {
        default: withCtx(() => [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, [
                      $props.ends ? (openBlock(), createElementBlock("div", _hoisted_3, [
                        createBaseVNode("h2", _hoisted_4, toDisplayString(_ctx.__("Subscription")), 1),
                        createBaseVNode("p", null, " Renews on " + toDisplayString($props.ends), 1)
                      ])) : createCommentVNode("", true),
                      createBaseVNode("h2", _hoisted_5, toDisplayString(_ctx.__("Card information")), 1),
                      createBaseVNode("form", {
                        onSubmit: _cache[5] || (_cache[5] = withModifiers((...args) => $options.updateBilling && $options.updateBilling(...args), ["prevent"])),
                        class: "space-y-4"
                      }, [
                        $data.currentCardLastFour ? (openBlock(), createElementBlock("div", _hoisted_6, [
                          createBaseVNode("p", null, " ···· ···· ····  " + toDisplayString($data.currentCardLastFour) + " (" + toDisplayString($data.currentCardBrand) + ") ", 1),
                          createVNode(_component_Button, {
                            onClick: $options.deleteCard,
                            size: "sm",
                            loading: $data.sending,
                            variant: "danger",
                            type: "button"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Remove card")), 1)
                            ], void 0, true),
                            _: 1
                          }, 8, ["onClick", "loading"])
                        ])) : createCommentVNode("", true),
                        createVNode(_component_form_input, {
                          modelValue: $data.cardHolderName,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.cardHolderName = $event),
                          errors: _ctx.$page.props.errors.card_holder_name,
                          disabled: $data.sending,
                          id: "card-holder-name",
                          label: _ctx.__("Card holder name")
                        }, null, 8, ["modelValue", "errors", "disabled", "label"]),
                        createVNode(_component_form_input, {
                          modelValue: $data.address,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.address = $event),
                          errors: _ctx.$page.props.errors.address,
                          disabled: $data.sending,
                          label: _ctx.__("Address")
                        }, null, 8, ["modelValue", "errors", "disabled", "label"]),
                        createVNode(_component_form_select, {
                          disabled: $data.sending,
                          label: _ctx.__("Country"),
                          errors: _ctx.$page.props.errors.country,
                          modelValue: $data.country,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.country = $event)
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList($props.countries, (country, code) => {
                              return openBlock(), createElementBlock("option", {
                                value: code,
                                textContent: toDisplayString(country)
                              }, null, 8, _hoisted_7);
                            }), 256))
                          ], void 0, true),
                          _: 1
                        }, 8, ["disabled", "label", "errors", "modelValue"]),
                        createVNode(_component_form_input, {
                          modelValue: $data.zip,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.zip = $event),
                          errors: _ctx.$page.props.errors.zip,
                          disabled: $data.sending,
                          label: _ctx.__("ZIP (postal code)")
                        }, null, 8, ["modelValue", "errors", "disabled", "label"]),
                        createVNode(_component_form_input, {
                          modelValue: $data.city,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.city = $event),
                          errors: _ctx.$page.props.errors.city,
                          disabled: $data.sending,
                          label: _ctx.__("City")
                        }, null, 8, ["modelValue", "errors", "disabled", "label"]),
                        createBaseVNode("div", _hoisted_8, [
                          createBaseVNode("label", _hoisted_9, toDisplayString(_ctx.__("Card details")), 1),
                          _hoisted_10
                        ]),
                        createBaseVNode("div", _hoisted_11, [
                          createVNode(_component_Button, {
                            "data-secret": $data.clientSecret,
                            id: "card-button",
                            loading: $data.sending,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                            ], void 0, true),
                            _: 1
                          }, 8, ["data-secret", "loading"])
                        ])
                      ], 32)
                    ]),
                    !$props.packages.length ? (openBlock(), createElementBlock("div", _hoisted_12, _hoisted_14)) : createCommentVNode("", true),
                    $props.packages.length ? (openBlock(), createElementBlock("div", _hoisted_15, [
                      createBaseVNode("h2", _hoisted_16, toDisplayString(_ctx.__("Available packages")), 1),
                      createVNode(_component_form_input, {
                        modelValue: $data.coupon,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.coupon = $event),
                        errors: _ctx.$page.props.errors.coupon,
                        disabled: $data.sending,
                        placeholder: _ctx.__("Enter a coupon code if you have one, before subscribing"),
                        class: "pb-4",
                        label: _ctx.__("Coupon")
                      }, null, 8, ["modelValue", "errors", "disabled", "placeholder", "label"]),
                      createVNode(_component_Table, { caption: "Package list overview" }, {
                        default: withCtx(() => [
                          createVNode(_component_TableHead, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_TableHeader, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("a", {
                                        href: "javascript:void(0);",
                                        "data-balloon-blunt": "",
                                        "aria-label": _ctx.__("Sort by name"),
                                        "data-balloon-pos": "up",
                                        class: "text-primary flex items-center space-x-2",
                                        onClick: _cache[7] || (_cache[7] = ($event) => $options.requestFilterUrl({ sortBy: { "name": $props.filters.sort.name === "asc" ? "desc" : "asc" } }))
                                      }, [
                                        createBaseVNode("span", null, toDisplayString(_ctx.__("Name")), 1),
                                        $props.filters.sort.name === "asc" ? (openBlock(), createBlock(_component_IconArrowUp, { key: 0 })) : createCommentVNode("", true),
                                        $props.filters.sort.name === "desc" ? (openBlock(), createBlock(_component_IconArrowDown, { key: 1 })) : createCommentVNode("", true)
                                      ], 8, _hoisted_17)
                                    ], void 0, true),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHeader, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("a", {
                                        href: "javascript:void(0);",
                                        "data-balloon-blunt": "",
                                        "aria-label": _ctx.__("Sort by maximum sites"),
                                        "data-balloon-pos": "up",
                                        class: "text-primary flex items-center space-x-2",
                                        onClick: _cache[8] || (_cache[8] = ($event) => $options.requestFilterUrl({ sortBy: { "sites": $props.filters.sort.sites === "asc" ? "desc" : "asc" } }))
                                      }, [
                                        createBaseVNode("span", null, toDisplayString(_ctx.__("Max sites")), 1),
                                        $props.filters.sort.sites === "asc" ? (openBlock(), createBlock(_component_IconArrowUp, { key: 0 })) : createCommentVNode("", true),
                                        $props.filters.sort.sites === "desc" ? (openBlock(), createBlock(_component_IconArrowDown, { key: 1 })) : createCommentVNode("", true)
                                      ], 8, _hoisted_18)
                                    ], void 0, true),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHeader, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("a", {
                                        href: "javascript:void(0);",
                                        "data-balloon-blunt": "",
                                        "aria-label": _ctx.__("Sort by maximum servers"),
                                        "data-balloon-pos": "up",
                                        class: "text-primary flex items-center space-x-2",
                                        onClick: _cache[9] || (_cache[9] = ($event) => $options.requestFilterUrl({ sortBy: { "servers": $props.filters.sort.servers === "asc" ? "desc" : "asc" } }))
                                      }, [
                                        createBaseVNode("span", null, toDisplayString(_ctx.__("Max servers")), 1),
                                        $props.filters.sort.servers === "asc" ? (openBlock(), createBlock(_component_IconArrowUp, { key: 0 })) : createCommentVNode("", true),
                                        $props.filters.sort.servers === "desc" ? (openBlock(), createBlock(_component_IconArrowDown, { key: 1 })) : createCommentVNode("", true)
                                      ], 8, _hoisted_19)
                                    ], void 0, true),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHeader, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("a", {
                                        href: "javascript:void(0);",
                                        "data-balloon-blunt": "",
                                        "aria-label": _ctx.__("Sort by price"),
                                        "data-balloon-pos": "up",
                                        class: "text-primary flex items-center space-x-2",
                                        onClick: _cache[10] || (_cache[10] = ($event) => $options.requestFilterUrl({ sortBy: { "price": $props.filters.sort.price === "asc" ? "desc" : "asc" } }))
                                      }, [
                                        createBaseVNode("span", null, toDisplayString(_ctx.__("Price")), 1),
                                        $props.filters.sort.price === "asc" ? (openBlock(), createBlock(_component_IconArrowUp, { key: 0 })) : createCommentVNode("", true),
                                        $props.filters.sort.price === "desc" ? (openBlock(), createBlock(_component_IconArrowDown, { key: 1 })) : createCommentVNode("", true)
                                      ], 8, _hoisted_20)
                                    ], void 0, true),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHeader, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_inertia_link, {
                                        href: _ctx.route("profile.billing.index"),
                                        "data-balloon-blunt": "",
                                        "aria-label": _ctx.__("Clear sorting"),
                                        "data-balloon-pos": "up"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_IconClose)
                                        ], void 0, true),
                                        _: 1
                                      }, 8, ["href", "aria-label"])
                                    ], void 0, true),
                                    _: 1
                                  })
                                ], void 0, true),
                                _: 1
                              })
                            ], void 0, true),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList($props.packages, (webPackage) => {
                                return openBlock(), createBlock(_component_TableRow, {
                                  key: webPackage.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableData, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(webPackage.name), 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableData, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(webPackage.maximum_sites === 0 ? "Unlimited" : webPackage.maximum_sites), 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableData, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(webPackage.maximum_servers === 0 ? "Unlimited" : webPackage.maximum_servers), 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024),
                                    webPackage.period === "monthly" ? (openBlock(), createBlock(_component_TableData, { key: 0 }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(webPackage.price_monthly) + " p/month ", 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024)) : webPackage.period === "yearly" ? (openBlock(), createBlock(_component_TableData, { key: 1 }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(webPackage.price_yearly) + " yearly ", 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true),
                                    createVNode(_component_TableData, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        !$props.subscription || webPackage.stripe_plan_id !== $props.subscription.stripe_plan ? (openBlock(), createBlock(_component_Button, {
                                          key: 0,
                                          size: "sm",
                                          disabled: $data.sending,
                                          onClick: ($event) => $options.updatePlan(webPackage.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Subscribe")), 1)
                                          ], void 0, true),
                                          _: 2
                                        }, 1032, ["disabled", "onClick"])) : createCommentVNode("", true),
                                        $props.subscription && webPackage.stripe_plan_id === $props.subscription.stripe_plan ? (openBlock(), createBlock(_component_Button, {
                                          key: 1,
                                          size: "sm",
                                          variant: "danger",
                                          disabled: $data.sending,
                                          onClick: _cache[11] || (_cache[11] = ($event) => $options.cancel())
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                                          ], void 0, true),
                                          _: 1
                                        }, 8, ["disabled"])) : createCommentVNode("", true)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024)
                                  ], void 0, true),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ], void 0, true),
                            _: 1
                          })
                        ], void 0, true),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_21, [
                      $data.invoices.length ? (openBlock(), createElementBlock("h2", _hoisted_22, toDisplayString(_ctx.__("Invoices")), 1)) : createCommentVNode("", true),
                      $data.invoices.length ? (openBlock(), createBlock(_component_Table, {
                        key: 1,
                        caption: "Invoice list overview"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_TableHead, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_TableHeader, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.__("Number")), 1)
                                    ], void 0, true),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHeader, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.__("Status")), 1)
                                    ], void 0, true),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHeader, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.__("Total")), 1)
                                    ], void 0, true),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHeader, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.__("Date")), 1)
                                    ], void 0, true),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHeader)
                                ], void 0, true),
                                _: 1
                              })
                            ], void 0, true),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createElementBlock(Fragment, null, renderList($data.invoices, (invoice) => {
                                return openBlock(), createBlock(_component_TableRow, {
                                  key: invoice.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableData, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.number), 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableData, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.status), 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableData, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.total), 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableData, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.created), 1)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableData, null, {
                                      default: withCtx(() => [
                                        createBaseVNode("a", {
                                          class: "text-primary",
                                          href: _ctx.route("profile.billing.invoices.pdf", invoice.id)
                                        }, "Download", 8, _hoisted_23)
                                      ], void 0, true),
                                      _: 2
                                    }, 1024)
                                  ], void 0, true),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ], void 0, true),
                            _: 1
                          })
                        ], void 0, true),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ])
                ], void 0, true),
                _: 1
              })
            ], void 0, true),
            _: 1
          })
        ], void 0, true),
        _: 1
      })
    ], void 0, true),
    _: 1
  });
}
const Billing = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Billing as default
};
