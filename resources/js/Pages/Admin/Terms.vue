<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Terms') }}</PageHeaderTitle>
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
                                        __('Enter content for your terms of service and privacy policy here. You may use markdown.')
                                    }}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <div>
                                            <input id="terms_required" class="form-checkbox" type="checkbox"
                                                   v-model="form.terms_required">
                                            <label for="terms_required" class="ml-2 text-sm">{{
                                                    __('Require users to accept terms of service on registration')
                                                }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{
                                                    __('This will require newly registered users to accept the terms of service.')
                                                }}
                                            </p>
                                        </div>

                                        <Button type="button" size="sm" @click="getTemplate('terms')">
                                            Load Terms of Service template
                                        </Button>
                                        <FormCustom label="Content Terms Of Service">
                                            <vue-simplemde v-model="form.terms" ref="terms_of_service"/>
                                        </FormCustom>
                                        <FormCustom label="Content Privacy Policy">
                                            <vue-simplemde v-model="form.privacy"/>
                                        </FormCustom>
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
import FormCustom from '@/components/forms/FormCustom'
import {useNotification} from '@/hooks/notification'
import Tabs from './Tabs'
import VueSimplemde from 'vue-simplemde'

export default {
    metaInfo() {
        return {
            title: `${this.__('Terms')}`,
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
        VueSimplemde,
        FormCustom
    },

    data() {
        return {
            sending: false,

            form: this.$inertia.form({
                terms: this.terms_settings.terms,
                terms_required: this.terms_settings.terms_required,
                privacy: this.terms_settings.privacy,
            })
        }
    },

    props: {
        terms_settings: Object,
    },

    methods: {
        useNotification,

        submit() {
            this.form.patch(this.route('admin.settings.terms.update'));
        },

        getTemplate(type) {
            window.axios.get(this.route('admin.settings.terms.template'))
                .then(response => {
                    this.$refs.terms_of_service.simplemde.value(response.data.content);
                    this.form.terms = response.data.content;

                    useNotification({
                        variant: 'success',
                        title: this.__(`Terms`),
                        message: 'Template has been loaded in, do not forget to save.',
                    })
                })

        }
    }
}
</script>

<style>
@import '~simplemde/dist/simplemde.min.css';

.editor-toolbar.fullscreen {
    z-index: 50;
}

.CodeMirror-fullscreen {
    z-index: 50;
}

.editor-preview-side {
    z-index: 50;
}
</style>
