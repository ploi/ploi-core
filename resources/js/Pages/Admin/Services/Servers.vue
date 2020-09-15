<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Synchronize servers') }}</PageHeaderTitle>
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
                                <template #subtitle>{{ __('You can synchronize your servers here. It is safe to synchronize already existing servers. If you have installed a extra PHP version for example, you can synchronize to update the versions here.') }}</template>
                                <template #content>
                                    <Table caption="Available servers overview">
                                        <TableHead>
                                            <TableRow>
                                                <TableHeader>{{ __('Name') }}</TableHeader>
                                                <TableHeader>{{ __('IP address') }}</TableHeader>
                                                <TableHeader></TableHeader>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow v-for="availableServer in availableServers" :key="availableServer.id">
                                                <TableData>{{ availableServer.name }}</TableData>
                                                <TableData>{{ availableServer.ip_address }}</TableData>
                                                <TableData>
                                                    <Button size="sm" v-on:click="syncServer(availableServer)">
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

        metaInfo() {
            return {
                title: `${this.__('Synchronize servers')}`,
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
            availableServers: Array,
        },

        methods: {
            useNotification,

            syncServer (server){
                window.axios.post(this.route('admin.services.servers.sync').url(), server)
                .then(() => {
                    useNotification({
                        variant: 'success',
                        title: `Servers`,
                        message: `Server ${server.name} has been synchronized to this system`
                    })
                });
            }
        },
    }
</script>
