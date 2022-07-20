<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Packages') }}</PageHeaderTitle>
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
                                    <Table caption="Package list overview">
                                        <TableHead>
                                            <TableRow>
                                                <TableHeader>{{ __('Name') }}</TableHeader>
                                                <TableHeader>Max. sites</TableHeader>
                                                <TableHeader>Max. servers</TableHeader>
                                                <TableHeader>{{ __('Users') }}</TableHeader>
                                                <TableHeader></TableHeader>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow v-for="webPackage in packages" :key="webPackage.id">
                                                <TableData>
                                                    {{ webPackage.name }}

                                                    <p class="text-medium-emphasis" v-if="webPackage.plan_id">Attached to stripe &centerdot; {{ webPackage.price_monthly }} {{ webPackage.currency }}</p>
                                                </TableData>
                                                <TableData>{{ webPackage.maximum_sites === 0 ? 'Unlimited' : webPackage.maximum_sites }}</TableData>
                                                <TableData>{{ webPackage.maximum_servers === 0 ? 'Unlimited' : webPackage.maximum_servers }}</TableData>
                                                <TableData>{{ webPackage.users_count }}</TableData>
                                                <TableData>
                                                    <inertia-link :href="route('admin.packages.edit', webPackage.id)"
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
                title: `${this.__('Packages')}`,
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
            packages: Array
        },

        data() {
            return {
                items: [
                    {
                        title: 'Overview',
                        to: this.route('admin.users.index'),
                    },
                    {
                        title: 'Create',
                        to: this.route('admin.users.create'),
                    }
                ],
            }
        },
    }
</script>
