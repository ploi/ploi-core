<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Synchronize providers') }}</PageHeaderTitle>
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
                                <template #subtitle>{{ __('You can synchronize your server providers here. After that, you\'ll be able to set a default provider per package. So servers created by a user via a package will always be put on that selected provider.') }}</template>
                                <template #content>
                                    <Table caption="Available providers overview">
                                        <TableHead>
                                            <TableRow>
                                                <TableHeader>{{ __('Name') }}</TableHeader>
                                                <TableHeader>{{ __('Label') }}</TableHeader>
                                                <TableHeader></TableHeader>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow v-for="availableProvider in availableProviders" :key="availableProvider.id">
                                                <TableData class="space-y-2">
                                                    <div>
                                                        {{ availableProvider.name }}
                                                    </div>

                                                    <div class="space-x-1 text-xs">
                                                        <span class="text-medium-emphasis">{{ availableProvider.provider.plans.length }} plan(s)</span>
                                                        <span>&centerdot;</span>
                                                        <span class="text-medium-emphasis">{{ availableProvider.provider.regions.length }} region(s)</span>
                                                    </div>
                                                </TableData>
                                                <TableData>{{ availableProvider.label }}</TableData>
                                                <TableData class="text-right">
                                                    <Button size="sm" v-on:click="syncProvider(availableProvider)">
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
                title: `${this.__('Synchronize providers')}`,
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
            availableProviders: Array,
        },

        methods: {
            useNotification,

            syncProvider (provider){
                window.axios.post(this.route('admin.services.providers.sync', provider.id))
                .then(() => {
                    useNotification({
                        variant: 'success',
                        title: `Providers`,
                        message: `Provider has been synchronized to this system`
                    })
                });
            }
        },
    }
</script>
