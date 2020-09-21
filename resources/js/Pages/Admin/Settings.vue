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
                                        <FormInput :label="__('Company name')" :errors="$page.errors.name"
                                                   v-model="form.name"/>

                                        <FormInput :label="__('E-mail address')" :errors="$page.errors.email"
                                                   v-model="form.email"/>

                                        <FormInput :helper-text="__('Separate by comma to allow more email addresses')" :label="__('Support email addresses')" :errors="$page.errors.support_emails"
                                                   v-model="form.support_emails"/>

                                        <FormSelect :helper-text="__('Select the default package a user should get when you create or they register')" :label="__('Select default package')" v-model="form.default_package">
                                            <option v-for="(name, id) in packages" :value="id" v-text="name"></option>
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
                                            <input id="enable_api" class="form-checkbox" type="checkbox"
                                                   v-model="form.enable_api">
                                            <label for="enable_api" class="ml-2 text-sm">{{ __('Enable API') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('This will allow you to interact with your system via the API.') }}
                                            </p>
                                        </div>

                                        <FormInput v-if="form.enable_api" :label="__('API token')" :errors="$page.errors.api_token"
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
                    default_package: this.company_settings.default_package,
                },
            }
        },

        props: {
            company_settings: Object,
            packages: {}
        },

        methods: {
            useNotification,

            submit() {
                this.sending = true

                this.$inertia.patch(this.route('admin.settings.update'), this.form)
                    .then(() => {
                        this.sending = false;
                    })
            },
        }
    }
</script>
