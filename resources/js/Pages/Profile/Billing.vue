<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    <form @submit.prevent="updateBilling">
                        <h2 v-if="currentCardLastFour" class="border-b pb-4 mb-4">
                            •••• •••• •••• {{ currentCardLastFour }} ({{ currentCardBrand }})
                        </h2>
                        <form-input v-model="cardHolderName"
                                    :errors="$page.errors.card_holder_name"
                                    id="card-holder-name"
                                    label="Card Holder Name"/>

                        <form-textarea v-model="billingDetails"
                                        :errors="$page.errors.billing_details"
                                        id="card-billing-details"
                                        label="Billing details"/>

                        <div class="pb-4 w-full">
                            <label class="form-label" for="card-element">Card details</label>
                            <div id="card-element" class="form-input" style="width: 100%"></div>
                        </div>

                        <Button :data-secret="clientSecret" id="card-button" :loading="sending"
                                        class="btn-green" type="submit">
                            Save
                        </Button>
                    </form>

                    <Table caption="User list overview">
                        <TableHead>
                            <TableRow>
                                <TableHeader>{{ __('Name') }}</TableHeader>
                                <TableHeader></TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow v-for="webPackage in packages" :key="webPackage.id">
                                <TableData>
                                    {{ webPackage.name }}
                                </TableData>
                                <TableData>
                                    <Button @click="updatePlan(webPackage.id)">
                                        Subscribe
                                    </Button>
                                </TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
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
            data_card_last_four: String,
            data_card_brand: String,
        },

        data() {
            return {
                sending: false,

                // Payment method stuff
                clientSecret: this.data_client_secret,
                stripe: null,
                cardElement: null,
                cardHolderName: this.$page.auth.user.name,
                billingDetails: this.$page.auth.user.billing_details,
                currentCardLastFour: this.data_card_last_four,
                currentCardBrand: this.data_card_brand,
                coupon: '',


                breadcrumbs: [
                    {
                        title: this.$page.settings.name,
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
        },

        methods: {
            useNotification,

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
                    }).then((response) => {
                        this.sending = false;

                    }).catch((err) => {
                        this.sending = false;
                    });
                }
            },

            updatePlan(id) {
                this.sending = true;

                this.$inertia.post(this.route('profile.billing.update.plan'), {
                    plan: id,
                    coupon: this.coupon
                }).then((response) => {
                    this.sending = false;

                }).catch((err) => {
                    this.sending = false;

                });
            },
        },
    }
</script>
