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

                                                    <span v-if="webPackage.plan_id" class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium leading-4 bg-primary text-on-primary">
                                                        Attached to Stripe
                                                    </span>
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
