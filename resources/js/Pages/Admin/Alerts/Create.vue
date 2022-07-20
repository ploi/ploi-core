<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Create alert') }}</PageHeaderTitle>
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
                                        __('Create a new alert here to notify your end users about a specific event. This could be anything from server maintenance to panel updates.')
                                    }}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormTextarea :label="__('Message')" :errors="$page.props.errors.message"
                                                      v-model="form.message"/>
                                        <FormInput :label="__('Expires at')" placeholder="2020-01-01 00:00:00" :errors="$page.props.errors.expires_at" v-model="form.expires_at"/>

                                        <FormSelect :errors="$page.props.errors.type" :label="__('Type')" v-model="form.type">
                                            <option value="info">{{ __('Informational') }}</option>
                                            <option value="warning">{{ __('Warning') }}</option>
                                            <option value="danger">{{ __('Danger') }}</option>
                                        </FormSelect>
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
import FormTextarea from '@/components/forms/FormTextarea.vue'
import FormSelect from '@/components/forms/FormSelect.vue'
import Form from '@/components/Form.vue'
import FormActions from '@/components/FormActions.vue'
import Tabs from './Tabs.vue'

export default {
    metaInfo() {
        return {
            title: `${this.__('Create alert')}`,
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
        FormTextarea,
        Tabs,
    },

    props: {
        providers: Object
    },

    data() {
        return {
            sending: false,

            form: {
                type: 'info',
                message: null,
                expires_at: null,
            },
        }
    },

    methods: {
        submit() {
            this.$inertia.post(this.route('admin.alerts.store'), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false
            });
        }
    }
}
</script>
