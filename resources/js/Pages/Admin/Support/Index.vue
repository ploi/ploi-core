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
    import Tabs from './Tabs';
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'

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
