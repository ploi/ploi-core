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
                            <Tabs />
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Create') }}</template>
                                <template #subtitle>
                                    {{ __('Create a new package here to attach to your users. You can create as many packages as you want, the advantage is that you are able to provide custom packages for your users.') }}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Name')" :errors="$page.errors.name" v-model="form.name" />
                                        <FormInput :label="__('Maximum sites')" type="number" min="0" :errors="$page.errors.maximum_sites" v-model="form.maximum_sites" />
                                        <FormInput :label="__('Maximum servers')" type="number" min="0" :errors="$page.errors.maximum_servers" v-model="form.maximum_servers" />

                                        <div class="space-y-2">
                                            <h3 class="text-base leading-6 font-medium border-b border-dotted border-medium-emphasis pb-1">Server permissions</h3>

                                            <div>
                                                <input id="server_create" class="form-checkbox" type="checkbox"
                                                       v-model="form.server_permissions['create']">
                                                <label for="server_create" class="ml-2 text-sm">{{ __('Allow server creation') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to create servers') }}
                                                </p>
                                            </div>
                                            <div>
                                                <input id="server_update" class="form-checkbox" type="checkbox"
                                                       v-model="form.server_permissions['update']">
                                                <label for="server_update" class="ml-2 text-sm">{{ __('Allow server updating') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to update servers') }}
                                                </p>
                                            </div>
                                            <div>
                                                <input id="server_delete" class="form-checkbox" type="checkbox"
                                                       v-model="form.server_permissions['delete']">
                                                <label for="server_delete" class="ml-2 text-sm">{{ __('Allow server deletion') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to delete servers') }}
                                                </p>
                                            </div>
                                        </div>

                                        <div class="space-y-2">
                                            <h3 class="text-base leading-6 font-medium border-b border-dotted border-medium-emphasis pb-1">Site permissions</h3>

                                            <div>
                                                <input id="site_create" class="form-checkbox" type="checkbox"
                                                       v-model="form.site_permissions['create']">
                                                <label for="site_create" class="ml-2 text-sm">{{ __('Allow site creation') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to create sites') }}
                                                </p>
                                            </div>
                                            <div>
                                                <input id="site_update" class="form-checkbox" type="checkbox"
                                                       v-model="form.site_permissions['update']">
                                                <label for="site_update" class="ml-2 text-sm">{{ __('Allow site updating') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to update sites') }}
                                                </p>
                                            </div>
                                            <div>
                                                <input id="site_delete" class="form-checkbox" type="checkbox"
                                                       v-model="form.site_permissions['delete']">
                                                <label for="site_delete" class="ml-2 text-sm">{{ __('Allow site deletion') }}</label>
                                                <p class="text-small mt-1 text-medium-emphasis">
                                                    {{ __('This will allow users to delete sites') }}
                                                </p>
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
    import Tabs from './Tabs'

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

        data() {
            return {
                sending: false,

                form: {
                    name: null,
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
                },
            }
        },

        methods: {
            submit() {
                this.sending = true

                this.$inertia.post(this.route('admin.packages.store'), this.form)
                    .then(() => this.sending = false)
            }
        }
    }
</script>
