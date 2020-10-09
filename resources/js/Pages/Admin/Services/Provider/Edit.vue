<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Edit provider') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs />
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Edit') }}</template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Name')" :errors="$page.errors.name" v-model="form.name" />
                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                            <Button variant="danger" type="button" @click="confirmDelete">{{ __('Delete') }}</Button>
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
    import TopBar from './../../components/TopBar'
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
    import { useConfirmDelete } from '@/hooks/confirm-delete'
    import Tabs from './../Tabs'
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'

    export default {
        layout: MainLayout,

        metaInfo() {
            return {
                title: `${this.__('Edit provider')}`,
            }
        },

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
            FormTextarea,
            Table,
            TableHead,
            TableHeader,
            TableRow,
            TableBody,
            TableData,
        },

        data() {
            return {
                sending: false,

                form: {
                    name: this.provider.name,
                },
            }
        },

        props: {
            provider: Object,
        },

        methods: {
            submit() {
                this.$inertia.patch(this.route('admin.services.providers.update', this.provider.id), this.form, {
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false
                });
            },

            confirmDelete() {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__('Are you sure you want to delete this server? Everything associated with this server will be detached.'),
                    onConfirm: () => this.delete(),
                })
            },

            delete() {
                this.sending = true

                this.$inertia.delete(this.route('admin.services.servers.delete', this.server.id))
                    .then(() => this.sending = false)
            },

            attach() {
                this.sending = true

                this.$inertia.post(this.route('admin.services.servers.attach', this.server.id), this.formAttach)
                    .then(() => {
                        this.sending = false

                        if (!Object.keys(this.$page.errors).length) {
                            this.formAttach.email = null;
                        }
                    })
            },

            confirmDetach(userId) {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__('Are you sure you want to detach this user from this server?'),
                    onConfirm: () => this.detach(userId),
                })
            },

            detach(userId) {
                this.sending = true

                this.$inertia.delete(this.route('admin.services.servers.detach', [this.server.id, userId]))
                    .then(() => this.sending = false)
            }
        }
    }
</script>
