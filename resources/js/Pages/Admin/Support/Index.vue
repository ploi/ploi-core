<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Support') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsSegment>
                        <template #title>{{ __('Overview') }}</template>
                        <template #content>
                            <Table caption="Support list overview">
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>{{ __('Name') }}</TableHeader>
                                        <TableHeader>{{ __('Replies') }}</TableHeader>
                                        <TableHeader></TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow v-for="ticket in tickets" :key="ticket.id">
                                        <TableData>{{ ticket.title }}</TableData>
                                        <TableData>{{ ticket.replies_count }}</TableData>
                                        <TableData>
                                            <inertia-link :href="route('admin.support.show', ticket.id)"
                                                          class="text-primary font-medium">
                                                {{ __('View') }}
                                            </inertia-link>
                                        </TableData>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </template>
                    </SettingsSegment>
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
import Tabs from './Tabs.vue'
import Table from '@/components/Table.vue'
import TableHead from '@/components/TableHead.vue'
import TableHeader from '@/components/TableHeader.vue'
import TableRow from '@/components/TableRow.vue'
import TableBody from '@/components/TableBody.vue'
import TableData from '@/components/TableData.vue'

export default {
        metaInfo() {
            return {
                title: `${this.__('Support')}`,
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
            tickets: Array
        },

        data() {
            return {

            }
        },

        mounted() {

        },
    }
</script>
