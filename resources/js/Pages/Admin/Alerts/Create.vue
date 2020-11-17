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
