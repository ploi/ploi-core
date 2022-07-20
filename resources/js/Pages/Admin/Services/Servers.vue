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
                            <Tabs/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Overview') }}</template>
                                <template #subtitle>{{
                                        __('You can synchronize your servers here. It is safe to synchronize already existing servers. If you have installed a extra PHP version for example, you can synchronize to update the versions here.')
                                    }}
                                </template>
                                <template #content>
                                    <Button size="sm" :disabled="loading" v-on:click="syncAll">
                                        {{ __('Synchronize all servers') }}
                                    </Button>

                                    <Table caption="Available servers overview">
                                        <TableHead>
                                            <TableRow>
                                                <TableHeader>{{ __('Name') }}</TableHeader>
                                                <TableHeader>{{ __('IP address') }}</TableHeader>
                                                <TableHeader></TableHeader>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow v-for="availableServer in availableServers"
                                                      :key="availableServer.id">
                                                <TableData>{{ availableServer.name }}</TableData>
                                                <TableData>{{ availableServer.ip_address }}</TableData>
                                                <TableData class="flex justify-end">
                                                    <Button :disabled="loading" size="sm"
                                                            v-on:click="syncServer(availableServer)">
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
import TopBar from './../components/TopBar.vue'
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
import Pagination from '@/components/Pagination.vue'
import {useNotification} from '@/hooks/notification'
import Tabs from './Tabs.vue'
import Table from '@/components/Table.vue'
import TableHead from '@/components/TableHead.vue'
import TableHeader from '@/components/TableHeader.vue'
import TableRow from '@/components/TableRow.vue'
import TableBody from '@/components/TableBody.vue'
import TableData from '@/components/TableData.vue'

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

    data() {
        return {
            loading: false,
        }
    },

    methods: {
        useNotification,

        syncServer(server) {
            this.loading = true;

            window.axios.post(this.route('admin.services.servers.sync'), server)
                .then(() => {
                    this.loading = false;
                    useNotification({
                        variant: 'success',
                        title: `Servers`,
                        message: `Server ${server.name} has been synchronized to this system`
                    })
                })
                .catch(error => {
                    this.loading = false;
                })
        },

        syncAll() {
            this.loading = true;

            window.axios.post(this.route('admin.services.servers.sync.all'))
                .then(() => {
                    this.loading = false;

                    useNotification({
                        variant: 'success',
                        title: `Servers`,
                        message: `All servers have been synchronized to this system`
                    })
                })
                .catch(error => {
                    this.loading = false;
                })
        }
    },
}
</script>
