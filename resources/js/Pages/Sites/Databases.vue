<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>Databases</PageHeaderTitle>
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
                                    {{ __('Create a new database here to store your application data in.') }}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Name')" :errors="$page.props.errors.name" v-model="form.name"/>
                                        <FormInput :label="__('User')" :errors="$page.props.errors.user_name" v-model="form.user_name"/>
                                        <FormInput :label="__('Password')" :errors="$page.props.errors.password" v-model="form.password"/>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <EmptyImage v-if="!databases.meta.total" />

                            <SettingsSegment v-if="databases.meta.total">
                                <template #title>{{ __('Databases') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="Database list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader></TableHeader>
                                                    <TableHeader>{{ __('Name') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="database in databases.data" :key="database.id">
                                                    <TableData><StatusBubble :variant="database.status === 'busy' ? 'gray' : 'success'"/></TableData>
                                                    <TableData>{{ database.name }}</TableData>
                                                    <TableData>
                                                        <Button :disabled="database.status === 'busy'" variant="danger" size="sm"
                                                                @click="confirmDelete(database)">
                                                            {{ __('Delete') }}
                                                        </Button>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <pagination :links="databases"/>
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
    import EmptyImage from '@/components/EmptyImage'
    import FormActions from '@/components/FormActions'
    import {useConfirmDelete} from '@/hooks/confirm-delete'
    import Tabs from './Tabs'
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'

    export default {
        metaInfo() {
            return {
                title: `Databases - ${this.site.domain}`,
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
            EmptyImage
        },

        data() {
            return {
                sending: false,

                form: {
                    name: null,
                    user_name: null,
                    password: null,
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
                        title: this.__('Databases'),
                        to: this.route('sites.databases.index', this.site.id),
                    },
                ],
            }
        },

        mounted() {
            if(this.shouldBePolling){
                this.startPollingInterval();
            }
        },

        watch: {
            shouldBePolling: function (value) {
                if (!value) {
                    this.clearPollingInterval();

                    return;
                }

                if(!this.pollingInterval){
                    this.startPollingInterval();
                }
            }
        },

        computed: {
            shouldBePolling() {
                return !!this.databases.data.filter((database) => {
                    return database.status === 'busy';
                }).length;
            }
        },

        props: {
            site: Object,
            databases: Object,
        },

        methods: {
            startPollingInterval(){
                this.pollingInterval = setInterval(function () {
                    this.poll();
                }.bind(this), 3000);
            },

            clearPollingInterval(){
                clearTimeout(this.pollingInterval);
                this.pollingInterval = null;
            },

            poll() {
                this.$inertia.replace(this.route('sites.databases.index', this.site.id), {
                    only: ['databases'],
                    preserveScroll: true,
                })
            },

            submit() {
                this.sending = true

                this.$inertia.post(this.route('sites.databases.store', this.site.id), this.form)
                    .then(() => {
                        this.sending = false

                        if (!Object.keys(this.$page.props.errors).length) {
                            this.form.name = null;
                            this.form.user_name = null;
                            this.form.password = null;
                        }
                    })
            },

            confirmDelete(database) {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__('Your database will be deleted permanently, this action cannot be undone.'),
                    onConfirm: () => this.delete(database),
                })
            },

            delete(database) {
                this.$inertia.delete(this.route('sites.databases.delete', [this.site.id, database.id]), {
                    preserveScroll: true
                })
            }
        },

        beforeDestroy(){
            this.clearPollingInterval();
        }
    }
</script>
