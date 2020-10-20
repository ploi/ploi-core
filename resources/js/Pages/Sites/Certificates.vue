<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Certificates') }}</PageHeaderTitle>
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
                                    {{ __('Request a new Let\'s Encrypt certificate here. Make sure that the DNS has fully propagated.')}}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Domain')" :errors="$page.props.errors.domain" v-model="form.domain"/>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <EmptyImage v-if="!certificates.meta.total" />

                            <SettingsSegment v-if="certificates.meta.total">
                                <template #title>{{ __('Certificates') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="Cronjob list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader></TableHeader>
                                                    <TableHeader>{{ __('Certificate') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="certificate in certificates.data" :key="certificate.id">
                                                    <TableData><StatusBubble :variant="certificate.status === 'busy' ? 'gray' : 'success'"/></TableData>
                                                    <TableData>{{ certificate.domain }}</TableData>
                                                    <TableData>
                                                        <Button :disabled="certificate.status === 'busy'" variant="danger" size="sm"
                                                                @click="confirmDelete(certificate)">Delete
                                                        </Button>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <pagination :links="certificates"/>
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
                title: `${this.__('Certificates')} - ${this.site.domain}`,
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

                form: {
                    domain: null,
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
                        title: this.__('Certificates'),
                        to: this.route('sites.cronjobs.index', this.site.id),
                    },
                ],
            }
        },

        mounted() {
            if(this.shouldBePolling){
                this.startPollingInterval();
            }

            this.setDomainData();
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
                return !!this.certificates.data.filter((certificate) => {
                    return certificate.status === 'busy';
                }).length;
            },
        },

        props: {
            site: Object,
            certificates: Object,
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
                this.$inertia.replace(this.route('sites.certificates.index', this.site.id), {
                    only: ['certificates'],
                    preserveScroll: true,
                })
            },

            submit() {
                this.sending = true

                this.$inertia.post(this.route('sites.certificates.store', this.site.id), this.form)
                    .then(() => {
                        this.sending = false

                        if (!Object.keys(this.$page.props.errors).length) {
                            this.setDomainData();
                        }
                    })
            },

            confirmDelete(certificate) {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: `Your certificate will be deleted permanently, this action cannot be undone.`,
                    onConfirm: () => this.delete(certificate),
                })
            },

            delete(certificate) {
                this.$inertia.delete(this.route('sites.certificates.delete', [this.site.id, certificate.id]), {
                    preserveScroll: true
                })
            },

            setDomainData(){
                if (this.site.domain.startsWith('www.')) {
                    this.form.domain = this.site.domain + ',' + this.site.domain.replace('www.', '');
                } else {
                    this.form.domain = this.site.domain + ',www.' + this.site.domain;
                }
            }
        },

        beforeDestroy(){
            this.clearPollingInterval();
        }
    }
</script>
