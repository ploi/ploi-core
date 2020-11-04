<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Edit package') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Edit') }}</template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Name')" :errors="$page.props.errors.name" v-model="form.name"/>
                                        <FormInput :label="__('Maximum sites')" type="number" min="0"
                                                   :errors="$page.props.errors.maximum_sites" v-model="form.maximum_sites"/>
                                        <FormInput :label="__('Maximum servers')" type="number" min="0"
                                                   :errors="$page.props.errors.maximum_servers"
                                                   v-model="form.maximum_servers"/>
                                        <FormInput :label="__('Plan ID')" :errors="$page.props.errors.plan_id"
                                                   v-model="form.plan_id"/>
                                        <FormInput v-if="form.plan_id" :label="__('Monthly price')"
                                                   :errors="$page.props.errors.price_monthly" v-model="form.price_monthly"/>
                                        <FormSelect :errors="$page.props.errors.currency" v-if="form.plan_id" :label="__('Currency')" v-model="form.currency">
                                            <option value="usd">{{ __('USD $') }}</option>
                                            <option value="eur">{{ __('Euro €') }}</option>
                                            <option value="nok">{{ __('NOK (Norwegian Krone)') }}</option>
                                            <option value="aud">{{ __('AUD (Australian dollar)') }}</option>
                                            <option value="cad">{{ __('CAD (Canadian dollar)') }}</option>
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

                                        <div class="space-y-2">
                                            <h3 class="text-base leading-6 font-medium border-b border-dotted border-medium-emphasis pb-1">
                                                {{ __('Available server providers') }}</h3>

                                            <div v-for="(name, id) in providers">
                                                <input :id="`provider-${id}`" :value="id" v-model="form.providers"
                                                       class="form-checkbox" type="checkbox">
                                                <label :for="`provider-${id}`" class="ml-2 text-sm">{{ name }}</label>
                                            </div>
                                        </div>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                            <Button variant="danger" type="button" @click="confirmDelete">
                                                {{ __('Delete') }}
                                            </Button>
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
import TopBar from './../components/TopBar'
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
import SettingsLayout from '@/components/layouts/SettingsLayout'
import SettingsSegment from '@/components/SettingsSegment'
import FormInput from '@/components/forms/FormInput'
import FormSelect from '@/components/forms/FormSelect'
import Form from '@/components/Form'
import FormActions from '@/components/FormActions'
import {useConfirmDelete} from '@/hooks/confirm-delete'
import Tabs from './Tabs'

export default {
    metaInfo() {
        return {
            title: `${this.__('Edit package')}`,
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

    data() {
        return {
            sending: false,

            form: {
                name: this.package.name,
                currency: this.package.currency,
                plan_id: this.package.plan_id,
                maximum_sites: this.package.maximum_sites,
                maximum_servers: this.package.maximum_servers,
                server_permissions: this.package.server_permissions ?? [],
                site_permissions: this.package.site_permissions ?? [],
                price_monthly: this.package.price_monthly,
                providers: this.syncedProviders ?? []
            },
        }
    },

    props: {
        package: Object,
        providers: [Array, Object],
        syncedProviders: Array,
    },

    methods: {
        submit() {
            this.$inertia.patch(this.route('admin.packages.update', this.package.id), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false
            })
        },

        confirmDelete() {
            useConfirmDelete({
                title: this.__('Are you sure?'),
                message: this.__('Are you sure you want to delete this package? Everything associated with this package will be detached.'),
                onConfirm: () => this.delete(),
            })
        },

        delete() {
            this.$inertia.delete(this.route('admin.packages.destroy', this.package.id), {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false
            })
        }
    }
}
</script>
