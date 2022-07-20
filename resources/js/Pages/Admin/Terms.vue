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
<!--                                            <vue-simplemde v-model="form.terms" ref="terms_of_service"/>-->
                                        </FormCustom>
                                        <FormCustom label="Content Privacy Policy">
<!--                                            <vue-simplemde v-model="form.privacy"/>-->
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
import FormCustom from '@/components/forms/FormCustom.vue'
import {useNotification} from '@/hooks/notification'
import Tabs from './Tabs.vue'
// import VueSimplemde from 'vue-simplemde'

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
        // VueSimplemde,
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
                    // this.$refs.terms_of_service.simplemde.value(response.data.content);
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
/*@import '~simplemde/dist/simplemde.min.css';*/

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
