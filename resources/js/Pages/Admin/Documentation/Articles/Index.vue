<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Articles') }}</PageHeaderTitle>
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
                                                <TableHeader>{{ __('Category') }}</TableHeader>
                                                <TableHeader></TableHeader>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow v-for="article in articles.data" :key="article.id">
                                                <TableData>
                                                    {{ article.title }}
                                                </TableData>
                                                <TableData>{{ article.category.title }}</TableData>
                                                <TableData>
                                                    <inertia-link :href="route('admin.documentation.articles.edit', article.id)"
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
import TopBar from './../../components/TopBar'
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
import Tabs from './../Tabs';
import Table from '@/components/Table'
import TableHead from '@/components/TableHead'
import TableHeader from '@/components/TableHeader'
import TableRow from '@/components/TableRow'
import TableBody from '@/components/TableBody'
import TableData from '@/components/TableData'

export default {
    metaInfo() {
        return {
            title: `${this.__('Articles')}`,
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
        articles: Object
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
