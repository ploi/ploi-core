<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('DNS') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :site="site"/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Create') }}</template>
                                <template #subtitle>
                                    Text
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :disabled="sending" :label="__('Name')" :errors="$page.props.errors.name" v-model="form.name"/>
                                        <FormInput :disabled="sending" :label="__('IPv4 address')" :errors="$page.props.errors.address" v-model="form.address"/>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <EmptyImage v-if="!records.length && !loading" />

                            <SettingsSegment v-if="records.length">
                                <template #title>{{ __('Records') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="DNS records list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader>{{ __('Name') }}</TableHeader>
                                                    <TableHeader>{{ __('Content') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="record in records" :key="record.id">
                                                    <TableData>{{ record.name }}</TableData>
                                                    <TableData>{{ record.display_content }}</TableData>
                                                    <TableData>
                                                        <Button @click="confirmDelete(record)" variant="danger" size="sm">Delete</Button>
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
    import Form from '@/components/Form'
    import Pagination from '@/components/Pagination'
    import FormActions from '@/components/FormActions'
    import {useConfirmDelete} from '@/hooks/confirm-delete'
    import {useNotification} from '@/hooks/notification'
    import Tabs from './Tabs'
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'
    import EmptyImage from '@/components/EmptyImage'

    export default {
        metaInfo() {
            return {
                title: `${this.__('DNS')} - ${this.site.domain}`,
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
            SettingsLayout,
            SettingsSegment,
            Form,
            FormActions,
            Pagination,
            Tabs,
            Table,
            TableHead,
            TableHeader,
            TableRow,
            TableBody,
            TableData,
            EmptyImage,
        },

        data() {
            return {
                sending: false,
                loading: true,

                records: [],

                form: {
                    name: null,
                    address: null,
                },

                breadcrumbs: [
                    {
                        title: this.$page.props.settings.name,
                        to: '/',
                    },
                    {
                        title: this.__('Sites'),
                        to: this.route('sites.index'),
                    },
                    {
                        title: this.site.domain,
                        to: this.route('sites.show', this.site.id),
                    },
                    {
                        title: this.__('DNS'),
                        to: this.route('sites.dns.index', this.site.id),
                    },
                ],
            }
        },

        props: {
            site: Object,
        },

        mounted () {
            this.getRecords();
        },

        methods: {
            useNotification,

            submit() {
                this.$inertia.post(this.route('sites.dns.store', this.site.id), this.form, {
                    onStart: () => this.sending = true,
                    onFinish: () => {
                        this.sending = false;
                        this.getRecords();

                        this.form = {
                            name: null,
                            address: null,
                        };
                    }
                })

            },

            getRecords() {
                this.loading = true;

                axios.get(this.route('sites.dns.records', this.site.id))
                    .then(response => {
                        this.loading = false;
                        this.records = response.data
                    })
                    .catch(error => {
                        this.loading = false;
                    })
            },

            confirmDelete(record) {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__('Your DNS will be completely removed.'),
                    onConfirm: () => this.delete(record),
                })
            },

            delete(record) {
                this.$inertia.delete(this.route('sites.dns.delete', [this.site.id, record.id]), {
                    preserveScroll: true
                }, {
                    onStart: () => this.loading = true,
                    onFinish: () => {

                    }
                })
            }
        },
    }
</script>
