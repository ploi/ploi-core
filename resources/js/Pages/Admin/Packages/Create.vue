<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Create package') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Create') }}</template>
                                <template #subtitle>
                                    {{
                                        __('Create a new package here to attach to your users. You can create as many packages as you want, the advantage is that you are able to provide custom packages for your users.')
                                    }}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Name')" :errors="$page.props.errors.name"
                                                   v-model="form.name"/>
                                        <FormInput :label="__('Maximum sites')" type="number" min="0"
                                                   :errors="$page.props.errors.maximum_sites"
                                                   helper-text="Set to 0 for unlimited"
                                                   v-model="form.maximum_sites"/>
                                        <FormInput :label="__('Maximum servers')" type="number" min="0"
                                                   :errors="$page.props.errors.maximum_servers"
                                                   helper-text="Set to 0 for unlimited"
                                                   v-model="form.maximum_servers"/>
                                        <FormInput :label="__('Plan ID')" :errors="$page.props.errors.plan_id"
                                                   helper-text="Enter the pricing ID from Stripe here"
                                                   v-model="form.plan_id"/>
                                        <FormInput v-if="form.plan_id" :label="__('Monthly price')"
                                                   helper-text="Fill this in if you want it to be monthly payments"
                                                   :errors="$page.props.errors.price_monthly"
                                                   v-model="form.price_monthly"/>
                                        <FormInput v-if="form.plan_id" :label="__('Yearly price')"
                                                   helper-text="Fill this in if you want it to be yearly payments"
                                                   :errors="$page.props.errors.price_yearly"
                                                   v-model="form.price_yearly"/>
                                        <FormSelect :errors="$page.props.errors.currency" v-if="form.plan_id"
                                                    :label="__('Currency')" v-model="form.currency">
                                            <option value="usd">{{ __('USD $') }}</option>
                                            <option value="eur">{{ __('Euro €') }}</option>
                                            <option value="gbp">{{ __('GBP £') }}</option>
                                            <option value="nok">{{ __('NOK (Norwegian Krone)') }}</option>
                                            <option value="aud">{{ __('AUD (Australian dollar)') }}</option>
                                            <option value="cad">{{ __('CAD (Canadian dollar)') }}</option>
                                            <option value="inr">{{ __('INR ₹ (Indian rupee)') }}</option>
                                            <option value="thb">{{ __('THB (Thai bath)') }}</option>
                                            <option value="brl">{{ __('BRL R$ (Brazilian Real)') }}</option>
                                        </FormSelect>

                                        <div class="space-y-4">
                                            <h3 class="text-base leading-6 font-medium border-b border-dotted border-medium-emphasis pb-1">
                                                {{ __('Server permissions') }}</h3>

                                            <div>
                                                <input id="server_create" class="form-checkbox" type="checkbox"
                                                       v-model="form.server_permissions['create']">
                                                <label for="server_create"
                                                       class="ml-2 text-sm">{{ __('Allow server creation') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to create servers') }}
                                                </p>
                                            </div>
                                            <div>
                                                <input id="server_update" class="form-checkbox" type="checkbox"
                                                       v-model="form.server_permissions['update']">
                                                <label for="server_update"
                                                       class="ml-2 text-sm">{{ __('Allow server updating') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to update servers') }}
                                                </p>
                                            </div>
                                            <div>
                                                <input id="server_delete" class="form-checkbox" type="checkbox"
                                                       v-model="form.server_permissions['delete']">
                                                <label for="server_delete"
                                                       class="ml-2 text-sm">{{ __('Allow server deletion') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to delete servers') }}
                                                </p>
                                            </div>
                                        </div>

                                        <div class="space-y-2">
                                            <h3 class="text-base leading-6 font-medium border-b border-dotted border-medium-emphasis pb-1">
                                                {{ __('Site permissions') }}</h3>

                                            <div>
                                                <input id="site_create" class="form-checkbox" type="checkbox"
                                                       v-model="form.site_permissions['create']">
                                                <label for="site_create"
                                                       class="ml-2 text-sm">{{ __('Allow site creation') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to create sites') }}
                                                </p>
                                            </div>
                                            <div>
                                                <input id="site_update" class="form-checkbox" type="checkbox"
                                                       v-model="form.site_permissions['update']">
                                                <label for="site_update"
                                                       class="ml-2 text-sm">{{ __('Allow site updating') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to update sites') }}
                                                </p>
                                            </div>
                                            <div>
                                                <input id="site_delete" class="form-checkbox" type="checkbox"
                                                       v-model="form.site_permissions['delete']">
                                                <label for="site_delete"
                                                       class="ml-2 text-sm">{{ __('Allow site deletion') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to delete sites') }}
                                                </p>
                                            </div>
                                        </div>

                                        <div class="space-y-2" v-if="form.server_permissions['create']">
                                            <h3 class="text-base leading-6 font-medium border-b border-dotted border-medium-emphasis pb-1">
                                                {{ __('Available server providers') }}</h3>

                                            <div v-if="!Object.keys(providers).length" class="bg-primary text-on-primary px-4 py-3 rounded relative space-y-2" role="alert">
                                                <p class="block">
                                                    There are no server providers to select from. You can synchronize new server providers from the Services tab.
                                                </p>
                                            </div>

                                            <div v-for="(name, id) in providers">
                                                <input :id="`provider-${id}`" :value="id" v-model="form.providers"
                                                       class="form-checkbox" type="checkbox">
                                                <label :for="`provider-${id}`" class="ml-2 text-sm">{{ name }}</label>
                                            </div>
                                        </div>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>
                        </template>
                    </SettingsLayout>
                </PageBody>
            </Container>
        </Content>
    </Page>
</template>

<script>
import TopBar from './../components/TopBar.vue'
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
import SettingsLayout from '@/components/layouts/SettingsLayout.vue'
import SettingsSegment from '@/components/SettingsSegment.vue'
import FormInput from '@/components/forms/FormInput.vue'
import FormSelect from '@/components/forms/FormSelect.vue'
import Form from '@/components/Form.vue'
import FormActions from '@/components/FormActions.vue'
import Tabs from './Tabs.vue'

export default {
    metaInfo() {
        return {
            title: `${this.__('Create package')}`,
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
        FormInput,
        FormSelect,
        SettingsLayout,
        SettingsSegment,
        Form,
        FormActions,
        Tabs,
    },

    props: {
        providers: [Array, Object]
    },

    data() {
        return {
            sending: false,

            form: {
                name: null,
                plan_id: null,
                currency: 'usd',
                maximum_sites: 10,
                maximum_servers: 1,
                server_permissions: {
                    create: false,
                    update: false,
                    delete: false,
                },
                site_permissions: {
                    create: false,
                    update: false,
                    delete: false
                },
                price_monthly: null,
                price_yearly: null,
                providers: []
            },
        }
    },

    methods: {
        submit() {
            this.$inertia.post(this.route('admin.packages.store'), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false
            })
        }
    }
}
</script>
