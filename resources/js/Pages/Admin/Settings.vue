<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Settings') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Overview') }}</template>
                                <template #subtitle>
                                    {{ __('Change all the system settings here. All changes are in effect immediately.')}}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Company name')" :errors="$page.props.errors.name"
                                                   v-model="form.name"/>

                                        <FormInput :label="__('E-mail address')" :errors="$page.props.errors.email"
                                                   v-model="form.email"/>

                                        <FormFileInput accept="image/*" :label="__('Logo')" type="file" :errors="$page.props.errors.logo"
                                                   v-model="form.logo"/>

                                        <FormInput :helper-text="__('Separate by comma to allow more email addresses')" :label="__('Support email addresses')" :errors="$page.props.errors.support_emails"
                                                   v-model="form.support_emails"/>

                                        <FormSelect :helper-text="__('Select the default package a user should get when you create or they register')" :label="__('Select default package')" v-model="form.default_package">
                                            <option v-for="(name, id) in packages" :value="id" v-text="name"></option>
                                        </FormSelect>

                                        <FormSelect :helper-text="__('Select the default package a user should get when you create or they register')" :label="__('Select default language')" v-model="form.default_language">
                                            <option v-for="language in languages" :value="language" v-text="language"></option>
                                        </FormSelect>

                                        <div>
                                            <input id="support" class="form-checkbox" type="checkbox"
                                                   v-model="form.support">
                                            <label for="support" class="ml-2 text-sm">{{ __('Enable support platform') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('This will allow your customers to make support requests to you.') }}
                                            </p>
                                        </div>

                                        <div>
                                            <input id="documentation" class="form-checkbox" type="checkbox"
                                                   v-model="form.documentation">
                                            <label for="documentation" class="ml-2 text-sm">{{ __('Enable documentation platform') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('This will allow you to create articles for your users to look at.') }}
                                            </p>
                                        </div>

                                        <div>
                                            <input id="allow_registration" class="form-checkbox" type="checkbox"
                                                   v-model="form.allow_registration">
                                            <label for="allow_registration" class="ml-2 text-sm">{{ __('Allow customer registration') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('This will allow public users to register on your platform.') }}
                                            </p>
                                        </div>

                                        <div>
                                            <input id="receive_email_on_server_creation" class="form-checkbox" type="checkbox"
                                                   v-model="form.receive_email_on_server_creation">
                                            <label for="receive_email_on_server_creation" class="ml-2 text-sm">{{ __('Receive email when customers create server') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('This will send an email to all admins notifying them about a new server installation.') }}
                                            </p>
                                        </div>

                                        <div>
                                            <input id="enable_api" class="form-checkbox" type="checkbox"
                                                   v-model="form.enable_api">
                                            <label for="enable_api" class="ml-2 text-sm">{{ __('Enable API') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('This will allow you to interact with your system via the API.') }} <a href="https://docs.ploi-core.io/core-api/introduction" class="text-primary" target="_blank">More information</a>
                                            </p>
                                        </div>

                                        <div>
                                            <input id="isolate_per_site_per_user" class="form-checkbox" type="checkbox"
                                                   v-model="form.isolate_per_site_per_user">
                                            <label for="isolate_per_site_per_user" class="ml-2 text-sm">{{ __('Enable site isolation per site & user') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('This will make sure each site created by 1 user is always isolated from another.') }}
                                            </p>
                                        </div>

                                        <FormInput v-if="form.enable_api" allow-random-string :label="__('API token')" :errors="$page.props.errors.api_token"
                                                   v-model="form.api_token"/>

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
    import SettingsLayout from '@/components/layouts/SettingsLayout'
    import SettingsSegment from '@/components/SettingsSegment'
    import FormInput from '@/components/forms/FormInput'
    import FormFileInput from '@/components/forms/FormFileInput'
    import FormSelect from '@/components/forms/FormSelect'
    import Form from '@/components/Form'
    import FormActions from '@/components/FormActions'
    import {useNotification} from '@/hooks/notification'
    import Tabs from './Tabs'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Settings')}`,
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
            FormFileInput,
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
                    name: this.company_settings.name,
                    email: this.company_settings.email,
                    support_emails: this.company_settings.support_emails,
                    support: this.company_settings.support,
                    enable_api: this.company_settings.enable_api,
                    api_token: this.company_settings.api_token,
                    documentation: this.company_settings.documentation,
                    allow_registration: this.company_settings.allow_registration,
                    receive_email_on_server_creation: this.company_settings.receive_email_on_server_creation,
                    default_package: this.company_settings.default_package,
                    isolate_per_site_per_user: this.company_settings.isolate_per_site_per_user,
                    default_language: this.company_settings.default_language,
                    logo: null,
                },
            }
        },

        props: {
            company_settings: Object,
            packages: {},
            languages: {}
        },

        methods: {
            useNotification,

            submit() {
                var data = new FormData();
                data.append('name', this.form.name || '')
                data.append('email', this.form.email || '')
                data.append('support_emails', this.form.support_emails || '')
                data.append('support', this.form.support || false)
                data.append('enable_api', this.form.enable_api || false)
                data.append('api_token', this.form.api_token || '')
                data.append('documentation', this.form.documentation || false)
                data.append('allow_registration', this.form.allow_registration || false)
                data.append('receive_email_on_server_creation', this.form.receive_email_on_server_creation || false)
                data.append('default_package', this.form.receive_email_on_server_creation || '')
                data.append('isolate_per_site_per_user', this.form.isolate_per_site_per_user || false)
                data.append('default_language', this.form.default_language || 'en')
                data.append('logo', this.form.logo || '')
                data.append('_method', 'patch')

                this.$inertia.post(this.route('admin.settings.update'), data, {
                    preserveScroll: true,
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false,
                    onSuccess: () => {
                        if (Object.keys(this.$page.props.errors).length === 0) {
                            this.form.logo = null
                        }
                    },
                })
            },
        }
    }
</script>
