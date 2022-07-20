<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div class="md:col-span-2 space-y-4">
                            <div v-if="ends" class="space-y-4 border-b border-low-emphasis pb-4">
                                <h2 class="text-lg text-medium-emphasis">{{ __('Subscription') }}</h2>

                                <p>
                                    Renews on {{ ends }}
                                </p>
                            </div>

                            <h2 class="text-lg text-medium-emphasis">{{ __('Card information') }}</h2>
                            <form @submit.prevent="updateBilling" class="space-y-4">
                                <div v-if="currentCardLastFour" class="border-b border-low-emphasis pb-4 space-y-2">
                                    <p>
                                        &centerdot;&centerdot;&centerdot;&centerdot;&nbsp;&centerdot;&centerdot;&centerdot;&centerdot;&nbsp;&centerdot;&centerdot;&centerdot;&centerdot;&nbsp;
                                        {{ currentCardLastFour }} ({{ currentCardBrand }})
                                    </p>
                                    <Button @click="deleteCard" size="sm" :loading="sending"
                                            variant="danger" type="button">
                                        {{ __('Remove card') }}
                                    </Button>
                                </div>

                                <form-input v-model="cardHolderName"
                                            :errors="$page.props.errors.card_holder_name"
                                            :disabled="sending"
                                            id="card-holder-name"
                                            :label="__('Card holder name')"/>

                                <form-input v-model="address"
                                            :errors="$page.props.errors.address"
                                            :disabled="sending"
                                            :label="__('Address')"/>
                                <form-select :disabled="sending" :label="__('Country')"
                                             :errors="$page.props.errors.country" v-model="country">
                                    <option :value="code" v-for="(country, code) in countries"
                                            v-text="country"></option>
                                </form-select>
                                <form-input v-model="zip"
                                            :errors="$page.props.errors.zip"
                                            :disabled="sending"
                                            :label="__('ZIP (postal code)')"/>
                                <form-input v-model="city"
                                            :errors="$page.props.errors.city"
                                            :disabled="sending"
                                            :label="__('City')"/>

                                <div class="w-full pb-4">
                                    <label class="form-label" for="card-element">{{ __('Card details') }}</label>
                                    <div id="card-element" class="form-input"></div>
                                </div>

                                <Button :data-secret="clientSecret" id="card-button" :loading="sending"
                                        type="submit">
                                    {{ __('Save') }}
                                </Button>

                                <Button @click="confirmCancel" :loading="sending"
                                        v-if="subscription"
                                        variant="danger" type="button">
                                    {{ __('Cancel') }}
                                </Button>
                            </form>
                        </div>
                        <div class="md:col-span-3 space-y-8" v-if="!packages.length">
                            <div class="bg-primary text-on-primary px-4 py-3 rounded relative space-y-2" role="alert">
                                <strong class="font-bold">No packages available.</strong>
                                <p class="block">
                                    There are currently no packages to choose from. If you're and administrator, you can
                                    attach packages via the administrator area.
                                </p>
                            </div>
                        </div>
                        <div class="md:col-span-3 space-y-8" v-if="packages.length">
                            <h2 class="text-lg text-medium-emphasis">{{ __('Available packages') }}</h2>
                            <form-input v-model="coupon"
                                        :errors="$page.props.errors.coupon"
                                        :disabled="sending"
                                        :placeholder="__('Enter a coupon code if you have one, before subscribing')"
                                        class="pb-4"
                                        :label="__('Coupon')"/>
                            <Table caption="Package list overview">
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>
                                            <a href="javascript:void(0);" data-balloon-blunt
                                               :aria-label="__('Sort by name')" data-balloon-pos="up"
                                               class="text-primary flex items-center space-x-2"
                                               @click="requestFilterUrl({sortBy: {'name' : filters.sort.name === 'asc' ? 'desc' : 'asc'}})">
                                                <span>{{ __('Name') }}</span>

                                                <IconArrowUp v-if="filters.sort.name === 'asc'"/>
                                                <IconArrowDown v-if="filters.sort.name === 'desc'"/>
                                            </a>
                                        </TableHeader>
                                        <TableHeader>
                                            <a href="javascript:void(0);" data-balloon-blunt
                                               :aria-label="__('Sort by maximum sites')" data-balloon-pos="up"
                                               class="text-primary flex items-center space-x-2"
                                               @click="requestFilterUrl({sortBy: {'sites' : filters.sort.sites === 'asc' ? 'desc' : 'asc'}})">
                                                <span>{{ __('Max sites') }}</span>

                                                <IconArrowUp v-if="filters.sort.sites === 'asc'"/>
                                                <IconArrowDown v-if="filters.sort.sites === 'desc'"/>
                                            </a>
                                        </TableHeader>
                                        <TableHeader>
                                            <a href="javascript:void(0);" data-balloon-blunt
                                               :aria-label="__('Sort by maximum servers')" data-balloon-pos="up"
                                               class="text-primary flex items-center space-x-2"
                                               @click="requestFilterUrl({sortBy: {'servers' : filters.sort.servers === 'asc' ? 'desc' : 'asc'}})">
                                                <span>{{ __('Max servers') }}</span>

                                                <IconArrowUp v-if="filters.sort.servers === 'asc'"/>
                                                <IconArrowDown v-if="filters.sort.servers === 'desc'"/>
                                            </a>
                                        </TableHeader>
                                        <TableHeader>
                                            <a href="javascript:void(0);" data-balloon-blunt
                                               :aria-label="__('Sort by price')" data-balloon-pos="up"
                                               class="text-primary flex items-center space-x-2"
                                               @click="requestFilterUrl({sortBy: {'price' : filters.sort.price === 'asc' ? 'desc' : 'asc'}})">
                                                <span>{{ __('Price') }}</span>

                                                <IconArrowUp v-if="filters.sort.price === 'asc'"/>
                                                <IconArrowDown v-if="filters.sort.price === 'desc'"/>
                                            </a>
                                        </TableHeader>
                                        <TableHeader>
                                            <inertia-link :href="route('profile.billing.index')" data-balloon-blunt
                                                          :aria-label="__('Clear sorting')" data-balloon-pos="up">
                                                <IconClose/>
                                            </inertia-link>
                                        </TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow v-for="webPackage in packages" :key="webPackage.id">
                                        <TableData>{{ webPackage.name }}</TableData>
                                        <TableData>{{
                                                webPackage.maximum_sites === 0 ? 'Unlimited' : webPackage.maximum_sites
                                            }}
                                        </TableData>
                                        <TableData>{{
                                                webPackage.maximum_servers === 0 ? 'Unlimited' : webPackage.maximum_servers
                                            }}
                                        </TableData>
                                        <TableData v-if="webPackage.period === 'monthly'">{{ webPackage.price_monthly }}
                                            p/month
                                        </TableData>
                                        <TableData v-else-if="webPackage.period === 'yearly'">{{
                                                webPackage.price_yearly
                                            }} yearly
                                        </TableData>
                                        <TableData class="text-right">
                                            <Button size="sm"
                                                    :disabled="sending || (subscription && webPackage.plan_id === subscription.stripe_plan)"
                                                    @click="updatePlan(webPackage.id)">
                                                {{ __('Subscribe') }}
                                            </Button>
                                        </TableData>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>

                        <div class="md:col-span-5 space-y-8 border-t border-low-emphasis">
                            <h2 v-if="invoices.length" class="mt-5 text-lg text-medium-emphasis">{{
                                    __('Invoices')
                                }}</h2>
                            <Table v-if="invoices.length" caption="Invoice list overview">
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>{{ __('Number') }}</TableHeader>
                                        <TableHeader>{{ __('Status') }}</TableHeader>
                                        <TableHeader>{{ __('Total') }}</TableHeader>
                                        <TableHeader>{{ __('Date') }}</TableHeader>
                                        <TableHeader></TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow v-for="invoice in invoices" :key="invoice.id">
                                        <TableData>{{ invoice.number }}</TableData>
                                        <TableData>{{ invoice.status }}</TableData>
                                        <TableData>{{ invoice.total }}</TableData>
                                        <TableData>{{ invoice.created }}</TableData>
                                        <TableData>
                                            <a class="text-primary"
                                               :href="route('profile.billing.invoices.pdf', invoice.id)">Download</a>
                                        </TableData>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </PageBody>
            </Container>
        </Content>
    </Page>
</template>

<script>
import TopBar from './components/TopBar.vue'
import Container from '@/components/Container.vue'
import Content from '@/components/Content.vue'
import Page from '@/components/Page.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageHeaderTitle from '@/components/PageHeaderTitle.vue'
import PageBody from '@/components/PageBody.vue'
import Button from '@/components/Button.vue'
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'
import StatusBubble from '@/components/StatusBubble.vue'
import NotificationBadge from '@/components/NotificationBadge.vue'
import MainLayout from '@/Layouts/MainLayout.vue'
import IconBox from '@/components/icons/IconBox.vue'
import IconGlobe from '@/components/icons/IconGlobe.vue'
import IconStorage from '@/components/icons/IconStorage.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconClose from '@/components/icons/IconClose.vue'
import Modal from '@/components/Modal.vue'
import ModalContainer from '@/components/ModalContainer.vue'
import FormInput from '@/components/forms/FormInput.vue'
import FormSelect from '@/components/forms/FormSelect.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'
import FormActions from '@/components/FormActions.vue'
import Table from '@/components/Table.vue'
import TableHead from '@/components/TableHead.vue'
import TableHeader from '@/components/TableHeader.vue'
import TableRow from '@/components/TableRow.vue'
import TableBody from '@/components/TableBody.vue'
import TableData from '@/components/TableData.vue'
import {useNotification} from '@/hooks/notification'
import {useConfirm} from '@/hooks/confirm'

export default {
    metaInfo() {
        return {
            title: `${this.__('Billing')}`,
        }
    },

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
        TableData,
    },

    props: {
        packages: Array,
        countries: Object,
        subscription: [Object, null],
        public_key: String,
        data_client_secret: String,
        card: Object,
        filters: Object,
        ends: String,
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
            coupon: '',

            address: this.$page.props.auth.user.address,
            country: this.$page.props.auth.user.country,
            zip: this.$page.props.auth.user.zip,
            city: this.$page.props.auth.user.city,

            invoices: [],

            breadcrumbs: [
                {
                    title: this.$page.props.settings.name,
                    to: '/',
                },
                {
                    title: this.__('Billing'),
                    to: this.route('profile.billing.index'),
                },
            ],
        }
    },

    mounted() {
        const stripe = Stripe(this.public_key);
        this.stripe = stripe;

        const elements = stripe.elements();
        const cardElement = elements.create('card');

        cardElement.mount('#card-element');

        this.cardElement = cardElement;

        this.getInvoices();
    },

    watch: {
        sending: function (value) {
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

            const {setupIntent, error} = await this.stripe.confirmCardSetup(
                this.clientSecret, {
                    payment_method: {
                        card: this.cardElement,
                        billing_details: {
                            name: this.cardHolderName,
                            address: {
                                line1: this.address,
                                postal_code: this.zip,
                                city: this.city,
                                country: this.country,
                            }
                        }
                    }
                }
            );

            if (error) {
                this.sending = false;

                this.useNotification({
                    variant: 'danger',
                    title: this.__(`Error`),
                    message: error.message,
                })
            } else {
                const paymentMethod = setupIntent.payment_method;
                this.$inertia.post(this.route('profile.billing.update.card'), {
                    payment_method: paymentMethod,
                    billing_details: {
                        name: this.cardHolderName,
                        address: {
                            line1: this.address,
                            postal_code: this.zip,
                            city: this.city,
                            country: this.country,
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
                title: this.__('Are you sure?'),
                message: this.__('Are you ready to subscribe to this plan? If you have any coupon codes, make sure to enter them before subscribing.'),
                variant: 'info',
                onConfirm: () => {
                    this.$inertia.post(this.route('profile.billing.update.plan'), {
                        plan: id,
                        coupon: this.coupon
                    }, {
                        onStart: () => this.sending = true,
                        onFinish: () => this.sending = false
                    });
                }
            })
        },

        confirmCancel() {
            useConfirm({
                title: this.__('Are you sure?'),
                message: this.__('Your subscription will be put to an end. An expire date will be send to you when your plan expires.'),
                onConfirm: () => this.cancel(),
            })
        },

        cancel() {
            this.$inertia.delete(this.route('profile.billing.cancel.plan'), {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
            });
        },

        getInvoices() {
            window.axios.get(this.route('profile.billing.invoices')).then(response => this.invoices = response.data);
        },

        requestFilterUrl(properties) {
            this.$inertia.visit(route('profile.billing.index', properties), {
                only: ['filters', 'packages']
            })
        },

        deleteCard() {
            useConfirm({
                title: this.__('Are you sure?'),
                message: this.__('Are you sure you want to remove your card from your account? New payments will not be able to process.'),
                onConfirm: () => {
                    this.$inertia.delete(route('profile.billing.delete.card'), {
                        onStart: () => {
                            this.sending = true
                        },
                        onFinish: () => {
                            this.sending = false;
                            this.currentCardLastFour = null;
                        }
                    });
                }
            })

        }
    },
}
</script>
