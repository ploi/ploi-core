<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Servers') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout main-col-span="col-span-4">
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Servers') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="Server list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader>{{ __('Name') }}</TableHeader>
                                                    <TableHeader>{{ __('IP') }}</TableHeader>
                                                    <TableHeader>{{ __('Users') }}</TableHeader>
                                                    <TableHeader>{{ __('Date') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="server in servers.data" :key="server.id">
                                                    <TableData>
                                                        <div>{{ server.name }}</div>
                                                    </TableData>
                                                    <TableData>
                                                        {{ server.ip }}
                                                    </TableData>
                                                    <TableData class="space-x-2">
                                                        <span v-if="!server.users || !server.users.length">-</span>
                                                        <inertia-link v-else class="text-primary" :href="route('admin.users.show', user.id)" :key="user.id" v-for="user in server.users">{{ user.name }}</inertia-link>
                                                    </TableData>
                                                    <TableData>
                                                        {{ server.created_at }}
                                                    </TableData>
                                                    <TableData>
                                                        <inertia-link :href="route('admin.services.sites.edit', server.id)" class="text-primary font-medium">
                                                            {{ __('Edit') }}
                                                        </inertia-link>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <pagination :links="servers"/>
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
import Table from '@/components/Table'
import TableHead from '@/components/TableHead'
import TableHeader from '@/components/TableHeader'
import TableRow from '@/components/TableRow'
import TableBody from '@/components/TableBody'
import TableData from '@/components/TableData'
import IconPhp from '@/components/icons/IconPhp'

export default {
    layout: MainLayout,

    metaInfo() {
        return {
            title: `${this.__('Servers')}`,
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
        Table,
        TableHead,
        TableHeader,
        TableRow,
        TableBody,
        TableData,
        IconPhp,
    },

    props: {
        servers: Object,
    },

    mounted() {
    },

    methods: {
        useNotification,
    },
}
</script>
