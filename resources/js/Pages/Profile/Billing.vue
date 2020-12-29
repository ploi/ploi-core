<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div class="md:col-span-2 space-y-4">
                            <h2 class="text-lg text-medium-emphasis">{{ __('Card information') }}</h2>
                            <form @submit.prevent="updateBilling" class="space-y-4">
                                <p v-if="currentCardLastFour">
                                    &centerdot;&centerdot;&centerdot;&centerdot;&nbsp;&centerdot;&centerdot;&centerdot;&centerdot;&nbsp;&centerdot;&centerdot;&centerdot;&centerdot;&nbsp; {{ currentCardLastFour }} ({{ currentCardBrand }})
                                </p>
                                <form-input v-model="cardHolderName"
                                            :errors="$page.props.errors.card_holder_name"
                                            :disabled="sending"
                                            id="card-holder-name"
                                            :label="__('Card holder name')"/>

                                <div class="w-full pb-4">
                                    <label class="form-label" for="card-element">{{ __('Card details') }}</label>
                                    <div id="card-element" class="form-input"></div>
                                </div>

                                <Button :data-secret="clientSecret" id="card-button" :loading="sending"
                                        class="btn-green" type="submit">
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
                            There are currently no packages to choose from.
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
                                            <a href="javascript:void(0);" data-balloon-blunt :aria-label="__('Sort by name')" data-balloon-pos="up" class="text-primary flex items-center space-x-2" @click="requestFilterUrl({sortBy: {'name' : filters.sort.name === 'asc' ? 'desc' : 'asc'}})">
                                                <span>{{ __('Name') }}</span>

                                                <IconArrowUp v-if="filters.sort.name === 'asc'" />
                                                <IconArrowDown v-if="filters.sort.name === 'desc'" />
                                            </a>
                                        </TableHeader>
                                        <TableHeader>
                                            <a href="javascript:void(0);" data-balloon-blunt :aria-label="__('Sort by maximum sites')" data-balloon-pos="up" class="text-primary flex items-center space-x-2" @click="requestFilterUrl({sortBy: {'sites' : filters.sort.sites === 'asc' ? 'desc' : 'asc'}})">
                                                <span>{{ __('Max sites') }}</span>

                                                <IconArrowUp v-if="filters.sort.sites === 'asc'" />
                                                <IconArrowDown v-if="filters.sort.sites === 'desc'" />
                                            </a>
                                        </TableHeader>
                                        <TableHeader>
                                            <a href="javascript:void(0);" data-balloon-blunt :aria-label="__('Sort by maximum servers')" data-balloon-pos="up" class="text-primary flex items-center space-x-2" @click="requestFilterUrl({sortBy: {'servers' : filters.sort.servers === 'asc' ? 'desc' : 'asc'}})">
                                                <span>{{ __('Max servers') }}</span>

                                                <IconArrowUp v-if="filters.sort.servers === 'asc'" />
                                                <IconArrowDown v-if="filters.sort.servers === 'desc'" />
                                            </a>
                                        </TableHeader>
                                        <TableHeader>
                                            <a href="javascript:void(0);" data-balloon-blunt :aria-label="__('Sort by price')" data-balloon-pos="up" class="text-primary flex items-center space-x-2" @click="requestFilterUrl({sortBy: {'price' : filters.sort.price === 'asc' ? 'desc' : 'asc'}})">
                                                <span>{{ __('Monthly price') }}</span>

                                                <IconArrowUp v-if="filters.sort.price === 'asc'" />
                                                <IconArrowDown v-if="filters.sort.price === 'desc'" />
                                            </a>
                                        </TableHeader>
                                        <TableHeader>
                                            <inertia-link :href="route('profile.billing.index')" data-balloon-blunt :aria-label="__('Clear sorting')" data-balloon-pos="up">
                                                <IconClose />
                                            </inertia-link>
                                        </TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow v-for="webPackage in packages" :key="webPackage.id">
                                        <TableData>{{ webPackage.name }}</TableData>
                                        <TableData>{{ webPackage.maximum_sites === 0 ? 'Unlimited' : webPackage.maximum_sites }}</TableData>
                                        <TableData>{{ webPackage.maximum_servers === 0 ? 'Unlimited' : webPackage.maximum_servers }}</TableData>
                                        <TableData>{{ webPackage.price_monthly }}</TableData>
                                        <TableData class="text-right">
                                            <Button size="sm" :disabled="sending || (subscription && webPackage.plan_id === subscription.stripe_plan)" @click="updatePlan(webPackage.id)">
                                                {{ __('Subscribe') }}
                                            </Button>
                                        </TableData>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>

                        <div class="md:col-span-5 space-y-8 border-t border-low-emphasis">
                            <h2 v-if="invoices.length" class="mt-5 text-lg text-medium-emphasis">{{ __('Invoices') }}</h2>
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
                                            <a class="text-primary" :href="route('profile.billing.invoices.pdf', invoice.id)">Download</a>
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
    import TopBar from './components/TopBar'
    import Container from '@/components/Container'
    import Content from '@/components/Content'
    import Page from '@/components/Page'
    import PageHeader from '@/components/PageHeader'
    import PageHeaderTitle from '@/components/PageHeaderTitle'
    import PageBody from '@/components/PageBody'
    import Button from '@/components/Button'
    import List from '@/components/List'
    import ListItem from '@/components/ListItem'
    import StatusBubble from '@/components/StatusBubble'
    import NotificationBadge from '@/components/NotificationBadge'
    import MainLayout from '@/Layouts/MainLayout'
    import IconBox from '@/components/icons/IconBox'
    import IconGlobe from '@/components/icons/IconGlobe'
    import IconStorage from '@/components/icons/IconStorage'
    import IconArrowUp from '@/components/icons/IconArrowUp'
    import IconArrowDown from '@/components/icons/IconArrowDown'
    import IconClose from '@/components/icons/IconClose'
    import Modal from '@/components/Modal'
    import ModalContainer from '@/components/ModalContainer'
    import FormInput from '@/components/forms/FormInput'
    import FormTextarea from '@/components/forms/FormTextarea'
    import FormActions from '@/components/FormActions'
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'
    import {useNotification} from '@/hooks/notification'
    import {useConfirmDelete} from '@/hooks/confirm-delete'

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
            subscription: [Object, null],
            public_key: String,
            data_client_secret: String,
            card: Object,
            filters: Object,
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
            sending: function(value){
                if(value){
                    this.cardElement.update({
                        disabled: true
                    });
                }else {
                    this.cardElement.update({
                        disabled: false
                    });
                }
            }
        },

        methods: {
            useNotification,
            useConfirmDelete,

            async updateBilling() {
                this.sending = true;

                const {setupIntent, error} = await this.stripe.confirmCardSetup(
                    this.clientSecret, {
                        payment_method: {
                            card: this.cardElement,
                            billing_details: {
                                name: this.cardHolderName,
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
                        billing_details: this.billingDetails
                    }, {
                        onStart: () => this.sending = true,
                        onFinish: () => this.sending = false
                    });
                }
            },

            updatePlan(id) {
                this.$inertia.post(this.route('profile.billing.update.plan'), {
                    plan: id,
                    coupon: this.coupon
                }, {
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false
                });
            },

            confirmCancel() {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__('Your subscription will be put to an end. An expire date will be send to you when your plan expires.'),
                    onConfirm: () => this.cancel(),
                })
            },

            cancel (){
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
            }
        },
    }
</script>
