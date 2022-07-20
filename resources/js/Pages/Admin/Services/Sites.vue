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
