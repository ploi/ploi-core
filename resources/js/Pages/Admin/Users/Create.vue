<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Create user') }}</PageHeaderTitle>
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
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Name')" :errors="$page.props.errors.name" v-model="form.name" />
                                        <FormInput label="Email address" :errors="$page.props.errors.email" type="email" v-model="form.email" />
                                        <FormTextarea label="Notes" :errors="$page.props.errors.notes" v-model="form.notes" />
                                        <FormSelect :label="__('Role')" v-model="form.role">
                                            <option value="user">{{ __('User') }}</option>
                                            <option value="admin">{{ __('Administrator') }}</option>
                                        </FormSelect>

                                        <FormSelect :label="__('Package')" v-model="form.package">
                                            <option value="" v-text="__('None')"></option>
                                            <option v-for="(name, id) in packages" :value="id" v-text="name"></option>
                                        </FormSelect>

                                        <FormSelect :label="__('Language')" v-model="form.language">
                                            <option v-for="language in languages" :value="language" v-text="language"></option>
                                        </FormSelect>
                                        <FormTextarea :label="__('Blocked')" :errors="$page.props.errors.blocked" rows="2" v-model="form.blocked" />
                                        <div>
                                            <input id="isolate_per_site_per_user" class="form-checkbox" type="checkbox"
                                                   v-model="form.requires_password_for_ftp">
                                            <label for="isolate_per_site_per_user" class="ml-2 text-sm">{{ __('Require password to show FTP password') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('Disabling this will allow this user to get the FTP password right away.') }}
                                            </p>
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
    import FormTextarea from '@/components/forms/FormTextarea'
    import FormSelect from '@/components/forms/FormSelect'
    import Form from '@/components/Form'
    import FormActions from '@/components/FormActions'
    import Tabs from './Tabs'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Create user')}`,
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
            FormTextarea
        },

        props: {
            packages: Object,
            languages: Array,
            defaultPackage: {},
            defaultLanguage: {}
        },

        data() {
            return {
                sending: false,

                form: {
                    name: null,
                    email: null,
                    password: null,
                    role: 'user',
                    package: this.defaultPackage ?? null,
                    notes: null,
                    language: this.defaultLanguage ?? 'en',
                    blocked: null,
                    requires_password_for_ftp: true,
                },
            }
        },

        methods: {
            submit() {
                this.sending = true

                this.$inertia.post(this.route('admin.users.store'), this.form)
                    .then(() => this.sending = false)
            }
        }
    }
</script>
