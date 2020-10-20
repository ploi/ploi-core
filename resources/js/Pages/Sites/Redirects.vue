<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Redirects') }}</PageHeaderTitle>
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
                                    {{ __('Create new redirects here to easily forward a url to another.') }}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('From')" :errors="$page.props.errors.redirect_from" v-model="form.redirect_from"/>
                                        <FormInput :label="__('To')" :errors="$page.props.errors.redirect_to" v-model="form.redirect_to"/>
                                        <FormSelect label="Type" v-model="form.type">
                                            <option value="redirect">{{ __('Temporary') }} (302)</option>
                                            <option value="permanent">{{ __('Permanent') }} (301)</option>
                                        </FormSelect>
                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <EmptyImage v-if="!redirects.meta.total" />

                            <SettingsSegment v-if="redirects.meta.total">
                                <template #title>{{ __('Redirects') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="Redirect list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader></TableHeader>
                                                    <TableHeader>{{ __('From') }}</TableHeader>
                                                    <TableHeader>{{ __('To') }}</TableHeader>
                                                    <TableHeader>{{ __('Type') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="redirect in redirects.data" :key="redirect.id">
                                                    <TableData><StatusBubble :variant="redirect.status === 'busy' ? 'gray' : 'success'"/></TableData>
                                                    <TableData>{{ redirect.redirect_from }}</TableData>
                                                    <TableData>{{ redirect.redirect_to }}</TableData>
                                                    <TableData>{{ redirect.type }}</TableData>
                                                    <TableData>
                                                        <Button :disabled="redirect.status === 'busy'" variant="danger" size="sm"
                                                                @click="confirmDelete(redirect)">
                                                            {{ __('Delete') }}
                                                        </Button>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <pagination :links="redirects"/>
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
    import FormSelect from '@/components/forms/FormSelect'
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
                title: `${this.__('Redirects')} - ${this.site.domain}`,
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
                    redirect_from: null,
                    redirect_to: null,
                    type: 'redirect',
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
                        title: this.__('Redirects'),
                        to: this.route('sites.redirects.index', this.site.id),
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
                return !!this.redirects.data.filter((redirect) => {
                    return redirect.status === 'busy';
                }).length;
            }
        },

        props: {
            site: Object,
            redirects: Object,
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
                this.$inertia.replace(this.route('sites.redirects.index', this.site.id), {
                    only: ['redirects'],
                    preserveScroll: true,
                })
            },

            submit() {
                this.sending = true

                this.$inertia.post(this.route('sites.redirects.store', this.site.id), this.form)
                    .then(() => {
                        this.sending = false

                        if (!Object.keys(this.$page.props.errors).length) {
                            this.form.redirect_from = null;
                            this.form.redirect_to = null;
                            this.form.type = 'redirect';
                        }
                    })
            },

            confirmDelete(redirect) {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__(`Your redirect will be deleted permanently, this action cannot be undone.`),
                    onConfirm: () => this.delete(redirect),
                })
            },

            delete(redirect) {
                this.$inertia.delete(this.route('sites.redirects.delete', [this.site.id, redirect.id]), {
                    preserveScroll: true
                })
            }
        },

        beforeDestroy(){
            this.clearPollingInterval();
        }
    }
</script>
