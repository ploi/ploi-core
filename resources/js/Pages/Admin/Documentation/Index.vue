<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Documentation') }}</PageHeaderTitle>
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
                                <template #content>
                                    <Table caption="Documentation category list overview">
                                        <TableHead>
                                            <TableRow>
                                                <TableHeader>{{ __('Title') }}</TableHeader>
                                                <TableHeader></TableHeader>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow v-for="category in categories.data" :key="category.id">
                                                <TableData>
                                                    {{ category.title }}
                                                </TableData>
                                                <TableData>
                                                    <inertia-link :href="route('admin.documentation.edit', category.id)"
                                                                  class="text-primary font-medium">
                                                        {{ __('Edit') }}
                                                    </inertia-link>
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
        metaInfo() {
            return {
                title: `${this.__('Documentation')}`,
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
            categories: Object
        },

        data() {
            return {

            }
        },

        mounted() {

        },

        methods: {
            useNotification,
        },
    }
</script>
