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
                                    {{
                                        __('Change all the system settings here. All changes are in effect immediately.')
                                    }}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Company name')" :errors="$page.props.errors.name"
                                                   v-model="form.name"/>

                                        <FormInput :label="__('E-mail address')" :errors="$page.props.errors.email"
                                                   v-model="form.email"/>

                                        <FormFileInput accept="image/*" :label="__('Logo')" type="file"
                                                       :errors="$page.props.errors.logo"
                                                       v-model="form.logo"/>

                                        <Button v-if="company_settings.has_logo" variant="danger" type="button"
                                                class="ml-2 px-4 py-1 bg-red-500 hover:bg-red-700 rounded-sm text-xs font-medium text-white"
                                                @click="removeLogo">
                                            Remove logo
                                        </Button>

                                        <FormInput :helper-text="__('Separate by comma to allow more email addresses')"
                                                   :label="__('Support email addresses')"
                                                   :errors="$page.props.errors.support_emails"
                                                   v-model="form.support_emails"/>

                                        <FormSelect
                                            :helper-text="__('Select the default package a user should get when you create or they register')"
                                            :label="__('Select default package')" v-model="form.default_package">
                                            <option v-for="(name, id) in packages" :value="id" v-text="name"></option>
                                        </FormSelect>

                                        <FormSelect
                                            :helper-text="__('Select the default package a user should get when you create or they register')"
                                            :label="__('Select default language')" v-model="form.default_language">
                                            <option v-for="language in languages" :value="language"
                                                    v-text="language"></option>
                                        </FormSelect>

                                        <FormSelect
                                            :helper-text="__('This will rotate any logs older than selected, this helps cleanup your database')"
                                            :label="__('Rotate logs after')" v-model="form.rotate_logs_after">
                                            <option value="">Don't rotate logs</option>
                                            <option value="weeks-1">Older than 1 week</option>
                                            <option value="months-1">Older than 1 month</option>
                                            <option value="months-3">Older than 3 months</option>
                                            <option value="months-6">Older than 6 months</option>
                                            <option value="years-1">Older than 1 year</option>
                                            <option value="years-2">Older than 2 years</option>
                                            <option value="years-3">Older than 3 years</option>
                                            <option value="years-4">Older than 4 years</option>
                                        </FormSelect>

                                        <div>
                                            <input id="trial" class="form-checkbox" type="checkbox"
                                                   v-model="form.trialEnabled">
                                            <label for="trial" class="ml-2 text-sm">{{
                                                    __('Enable trial')
                                                }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('This will allow you to have users with trials.') }}
                                            </p>
                                        </div>

                                        <FormInput v-if="form.trialEnabled" type="number" :label="__('Trial days')"
                                                   :errors="$page.props.errors.trial"
                                                   v-model="form.trial"/>

                                        <FormSelect
                                            v-if="form.trialEnabled"
                                            :errors="$page.props.errors.trial_package"
                                            :helper-text="__('Select the trial package a user should get when they get their trial')"
                                            :label="__('Select trial package')" v-model="form.trial_package">
                                            <option v-for="(name, id) in packages" :value="id" v-text="name"></option>
                                        </FormSelect>

                                        <div>
                                            <input id="support" class="form-checkbox" type="checkbox"
                                                   v-model="form.support">
                                            <label for="support" class="ml-2 text-sm">{{
                                                    __('Enable support platform')
                                                }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{
                                                    __('This will allow your customers to make support requests to you.')
                                                }}
                                            </p>
                                        </div>

                                        <div>
                                            <input id="documentation" class="form-checkbox" type="checkbox"
                                                   v-model="form.documentation">
                                            <label for="documentation" class="ml-2 text-sm">{{
                                                    __('Enable documentation platform')
                                                }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{
                                                    __('This will allow you to create articles for your users to look at.')
                                                }}
                                            </p>
                                        </div>

                                        <div>
                                            <input id="allow_registration" class="form-checkbox" type="checkbox"
                                                   v-model="form.allow_registration">
                                            <label for="allow_registration"
                                                   class="ml-2 text-sm">{{ __('Allow customer registration') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('This will allow public users to register on your platform.') }}
                                            </p>
                                        </div>

                                        <div>
                                            <input id="receive_email_on_server_creation" class="form-checkbox"
                                                   type="checkbox"
                                                   v-model="form.receive_email_on_server_creation">
                                            <label for="receive_email_on_server_creation" class="ml-2 text-sm">{{
                                                    __('Receive email when customers create server')
                                                }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{
                                                    __('This will send an email to all admins notifying them about a new server installation.')
                                                }}
                                            </p>
                                        </div>

                                        <div>
                                            <input id="receive_email_on_site_creation" class="form-checkbox"
                                                   type="checkbox"
                                                   v-model="form.receive_email_on_site_creation">
                                            <label for="receive_email_on_site_creation" class="ml-2 text-sm">{{
                                                    __('Receive email when customers create site')
                                                }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{
                                                    __('This will send an email to all admins notifying them about a new site installation.')
                                                }}
                                            </p>
                                        </div>

                                        <div>
                                            <input id="enable_api" class="form-checkbox" type="checkbox"
                                                   v-model="form.enable_api">
                                            <label for="enable_api" class="ml-2 text-sm">{{ __('Enable API') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{
                                                    __('This will allow you to interact with your system via the API.')
                                                }} <a href="https://docs.ploi-core.io/core-api/introduction"
                                                      class="text-primary"
                                                      target="_blank">{{ __('More information') }}</a>
                                            </p>
                                        </div>

                                        <FormInput v-if="form.enable_api" allow-random-string :label="__('API token')"
                                                   :errors="$page.props.errors.api_token"
                                                   v-model="form.api_token"/>

                                        <div>
                                            <input id="isolate_per_site_per_user" class="form-checkbox" type="checkbox"
                                                   v-model="form.isolate_per_site_per_user">
                                            <label for="isolate_per_site_per_user" class="ml-2 text-sm">{{
                                                    __('Enable site isolation per site & user')
                                                }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{
                                                    __('This will make sure each site created by one user is always isolated from another.')
                                                }}
                                            </p>
                                        </div>

                                        <FormActions>
                                            <Button>{{ __('Save') }}</Button>
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
import SettingsLayout from '@/components/layouts/SettingsLayout.vue'
import SettingsSegment from '@/components/SettingsSegment.vue'
import FormInput from '@/components/forms/FormInput.vue'
import FormFileInput from '@/components/forms/FormFileInput.vue'
import FormSelect from '@/components/forms/FormSelect.vue'
import Form from '@/components/Form.vue'
import FormActions from '@/components/FormActions.vue'
import {useNotification} from '@/hooks/notification'
import Tabs from './Tabs.vue'

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
                receive_email_on_site_creation: this.company_settings.receive_email_on_site_creation,
                default_package: this.company_settings.default_package,
                isolate_per_site_per_user: this.company_settings.isolate_per_site_per_user,
                default_language: this.company_settings.default_language,
                logo: null,
                rotate_logs_after: this.company_settings.rotate_logs_after,
                trialEnabled: false,
                trial: this.company_settings.trial,
                trial_package: this.company_settings.trial_package,
            },
        }
    },

    mounted() {
        this.form.trialEnabled = !!this.company_settings.trial;
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
            data.append('receive_email_on_site_creation', this.form.receive_email_on_site_creation || false)
            data.append('default_package', this.form.default_package || '')
            data.append('isolate_per_site_per_user', this.form.isolate_per_site_per_user || false)
            data.append('default_language', this.form.default_language || 'en')
            data.append('logo', this.form.logo || '')
            data.append('rotate_logs_after', this.form.rotate_logs_after || '')
            data.append('trial', this.form.trial || '')
            data.append('trial_package', this.form.trial_package || '')
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

        removeLogo() {
            this.$inertia.delete(this.route('admin.settings.remove-logo'), {
                preserveScroll: true,
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
            });
        }
    }
}
</script>
