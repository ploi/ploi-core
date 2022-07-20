<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Edit site') }}</PageHeaderTitle>
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
                                        <FormInput :label="__('Domain')" :errors="$page.props.errors.domain" v-model="form.domain" />
                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                            <Button variant="danger" type="button" @click="confirmDelete">{{ __('Delete') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment>
                                <template #title>{{ __('Attached users') }}</template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="attach">
                                        <FormInput :label="__('Email')" :errors="$page.props.errors.email" v-model="formAttach.email"/>
                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                                <template #content>
                                    <div>
                                        <Table caption="Attached users list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader>{{ __('Name') }}</TableHeader>
                                                    <TableHeader>{{ __('Email') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="user in users" :key="user.id">
                                                    <TableData>{{ user.name }}</TableData>
                                                    <TableData>{{ user.email }}</TableData>
                                                    <TableData>
                                                        <Button variant="danger" size="sm"
                                                                @click="confirmDetach(user.id)">
                                                            {{ __('Detach') }}
                                                        </Button>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
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
import TopBar from './../../components/TopBar.vue'
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
import {useConfirm} from '@/hooks/confirm'
import Tabs from './../Tabs.vue'
import Table from '@/components/Table.vue'
import TableHead from '@/components/TableHead.vue'
import TableHeader from '@/components/TableHeader.vue'
import TableRow from '@/components/TableRow.vue'
import TableBody from '@/components/TableBody.vue'
import TableData from '@/components/TableData.vue'

export default {
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
                    domain: this.site.domain
                },

                formAttach: {
                    email: null
                }
            }
        },

        props: {
            site: Object,
            users: [Object, Array]
        },

        methods: {
            submit() {
                this.sending = true

                this.$inertia.patch(this.route('admin.services.sites.update', this.site.id), this.form, {
                    onFinish: () => {
                        this.sending = false;
                    }
                })
            },

            confirmDelete() {
                useConfirm({
                    title: this.__('Are you sure?'),
                    message: this.__('Are you sure you want to delete this site? Everything associated with this site will be detached.'),
                    onConfirm: () => this.delete(),
                })
            },

            delete() {
                this.sending = true

                this.$inertia.delete(this.route('admin.services.sites.delete', this.site.id), {
                    onFinish: () => {
                        this.sending = false;
                    }
                })
            },

            attach() {
                this.sending = true

                this.$inertia.post(this.route('admin.services.sites.attach', this.site.id), this.formAttach, {
                    onFinish: () => {
                        this.sending = false

                        if (!Object.keys(this.$page.props.errors).length) {
                            this.formAttach.email = null;
                        }
                    }
                });
            },

            confirmDetach(userId) {
                useConfirm({
                    title: this.__('Are you sure?'),
                    message: this.__('Are you sure you want to detach this user from this site?'),
                    onConfirm: () => this.detach(userId),
                })
            },

            detach(userId) {
                this.sending = true

                this.$inertia.delete(this.route('admin.services.sites.detach', [this.site.id, userId]), {
                    onFinish: () => {
                        this.sending = false;
                    }
                })
            }
        }
    }
</script>
