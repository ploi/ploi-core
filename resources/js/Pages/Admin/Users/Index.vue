<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Users') }}</PageHeaderTitle>
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
                                <template #form>
                                    <form class="space-y-4 pb-5 mb-5 border-b border-low-emphasis">
                                        <FormInput :label="__('Search')" v-model="form.search" />
                                    </form>
                                </template>
                                <template #content>
                                    <div>
                                        <Table caption="User list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader>{{ __('Name') }}</TableHeader>
                                                    <TableHeader>{{ __('User name') }}</TableHeader>
                                                    <TableHeader>{{ __('Role') }}</TableHeader>
                                                    <TableHeader>{{ __('Package') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="user in users.data" :key="user.id">
                                                    <TableData>
                                                        {{ user.name }}

                                                        <p class="text-medium-emphasis">{{ user.email }}</p>
                                                    </TableData>
                                                    <TableData>{{ user.user_name }}</TableData>
                                                    <TableData>{{ user.role }}</TableData>
                                                    <TableData>{{ user.package ? user.package.name : '-' }}</TableData>
                                                    <TableData>
                                                        <inertia-link :href="route('admin.users.edit', user.id)"
                                                                      class="text-primary font-medium">
                                                            {{ __('Edit') }}
                                                        </inertia-link>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <pagination :links="users"/>
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
    import FormInput from '@/components/forms/FormInput'
    import Tabs from './Tabs';
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'
    import pickBy from 'lodash/pickBy'
    import throttle from 'lodash/throttle'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Users')}`,
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
            FormInput,
        },

        props: {
            users: Object,
            filters: Object,
        },

        data() {
            return {
                form:{
                    search: this.filters.search,
                }
            }
        },

        watch: {
            form: {
                handler: throttle(function() {
                    let query = pickBy(this.form)
                    this.$inertia.replace(this.route('admin.users.index', Object.keys(query).length ? query : { remember: 'forget' }))
                }, 500),
                deep: true
            },
        },

        mounted() {
            if (this.$page.props.flash.success) {
                useNotification({
                    variant: 'success',
                    title: `Users`,
                    message: this.$page.props.flash.success,
                })
            }
        },

        methods: {
            useNotification,
        },
    }
</script>
