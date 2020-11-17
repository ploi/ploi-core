<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Edit alert') }}</PageHeaderTitle>
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
import FormTextarea from '@/components/forms/FormTextarea'
import FormSelect from '@/components/forms/FormSelect'
import Form from '@/components/Form'
import FormActions from '@/components/FormActions'
import {useConfirmDelete} from '@/hooks/confirm-delete'
import Tabs from './Tabs'

export default {
    metaInfo() {
        return {
            title: `${this.__('Edit alert')}`,
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
        FormTextarea,
        FormActions,
        Tabs,
    },

    data() {
        return {
            sending: false,

            form: {
                type: 'info',
                message: this.alert.message,
                expires_at: this.alert.expires_at,
            },
        }
    },

    props: {
        alert: Object,
    },

    methods: {
        submit() {
            this.$inertia.patch(this.route('admin.alerts.update', this.alert.id), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false
            })
        },

        confirmDelete() {
            useConfirmDelete({
                title: this.__('Are you sure?'),
                message: this.__('Are you sure you want to delete this alert?'),
                onConfirm: () => this.delete(),
            })
        },

        delete() {
            this.$inertia.delete(this.route('admin.alerts.delete', this.alert.id), {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false
            })
        }
    }
}
</script>
