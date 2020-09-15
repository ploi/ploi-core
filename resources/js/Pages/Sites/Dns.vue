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
                                        <FormInput :label="__('A')" :errors="$page.errors.a" v-model="form.a"/>

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
    import {useNotification} from '@/hooks/notification'
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
        },

        data() {
            return {
                sending: false,

                form: {
                    a: null,
                },

                breadcrumbs: [
                    {
                        title: this.$page.settings.name,
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

        mounted() {
            if (this.$page.flash.success) {
                useNotification({
                    variant: 'success',
                    title: `Databases`,
                    message: this.$page.flash.success,
                })
            }

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
            useNotification,

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

                        if (!Object.keys(this.$page.errors).length) {
                            this.form.name = null;
                            this.form.user_name = null;
                            this.form.password = null;
                        }
                    })
            },

            confirmDelete(database) {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: `Your database will be deleted permanently, this action cannot be undone.`,
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
