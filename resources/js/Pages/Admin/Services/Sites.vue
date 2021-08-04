<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>Synchronize sites</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs />
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Overview') }}</template>
                                <template #subtitle>{{ __('You can synchronize your sites here. It is safe to synchronize already existing sites.') }}</template>
                                <template #content>
                                    <Button size="sm" :disabled="loading" v-on:click="syncAll">
                                        {{ __('Synchronize all sites') }}
                                    </Button>

                                    <Table caption="Available sites overview">
                                        <TableHead>
                                            <TableRow>
                                                <TableHeader>{{ __('Domain') }}</TableHeader>
                                                <TableHeader></TableHeader>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow v-for="availableSite in availableSites" :key="availableSite.id">
                                                <TableData>{{ availableSite.domain }}</TableData>
                                                <TableData class="flex justify-end">
                                                    <Button :disabled="loading" size="sm" v-on:click="syncSite(availableSite)">
                                                        {{ __('Synchronize') }}
                                                    </Button>
                                                </TableData>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
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
    import Pagination from '@/components/Pagination'
    import {useNotification} from '@/hooks/notification'
    import Tabs from './Tabs';
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'

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
            SettingsLayout,
            SettingsSegment,
            Pagination,
            Tabs,
            Table,
            TableHead,
            TableHeader,
            TableRow,
            TableBody,
            TableData,
        },

        props: {
            availableSites: Array,
        },

        data() {
            return {
                loading: false,
            }
        },

        methods: {
            useNotification,

            syncSite (site){
                this.loading = true;

                window.axios.post(this.route('admin.services.sites.sync'), site)
                    .then(() => {
                        this.loading = false;

                        useNotification({
                            variant: 'success',
                            title: `Sites`,
                            message: `Site ${site.domain} has been synchronized to this system`
                        })
                    })
                    .catch(error => {
                        this.loading = false;
                    })
            },

            syncAll() {
                this.loading = true;

                window.axios.post(this.route('admin.services.sites.sync.all'))
                    .then(() => {
                        this.loading = false;

                        useNotification({
                            variant: 'success',
                            title: `Sites`,
                            message: `All sites have been synchronized to this system`
                        })
                    })
                    .catch(error => {
                        this.loading = false;
                    })
            }
        },
    }
</script>
