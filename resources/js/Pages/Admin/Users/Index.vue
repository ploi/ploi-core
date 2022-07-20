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
                                                        <inertia-link :href="route('admin.users.show', user.id)">
                                                            <span class="text-primary">{{ user.name }}</span>

                                                            <p class="text-medium-emphasis">{{ user.email }}</p>
                                                            <p class="text-medium-emphasis">{{ user.sites_count }} {{ __choice('site|sites', user.sites_count) }} &centerdot; {{ user.servers_count }} {{ __choice('server|servers', user.servers_count) }}</p>
                                                        </inertia-link>

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
import FormInput from '@/components/forms/FormInput.vue'
import Tabs from './Tabs.vue'
import Table from '@/components/Table.vue'
import TableHead from '@/components/TableHead.vue'
import TableHeader from '@/components/TableHeader.vue'
import TableRow from '@/components/TableRow.vue'
import TableBody from '@/components/TableBody.vue'
import TableData from '@/components/TableData.vue'
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
                    this.$inertia.get(this.route('admin.users.index', Object.keys(query).length ? query : { remember: 'forget' }),{}, {
                        preserveState: true,
                    })
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
