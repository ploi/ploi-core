<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Sites') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout main-col-span="col-span-4">
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Sites') }}</template>
                                <template #form>
                                    <form class="space-y-4 pb-5 mb-5 border-b border-low-emphasis">
                                        <FormInput :label="__('Search')" :placeholder="__('Search on site domain, or the name/email of the owner of the site')" v-model="form.search" />
                                    </form>
                                </template>
                                <template #content>
                                    <div>
                                        <Table caption="Site list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader>{{ __('Name') }}</TableHeader>
                                                    <TableHeader>{{ __('Server') }}</TableHeader>
                                                    <TableHeader>{{ __('Users') }}</TableHeader>
                                                    <TableHeader>{{ __('Date') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="site in sites.data" :key="site.id">
                                                    <TableData>
                                                        <div>{{ site.domain }}</div>

                                                        <div class="flex items-center space-x-2 text-sm text-medium-emphasis">
                                                            <div class="flex items-center space-x-2">
                                                                <span><icon-php /> </span>
                                                                <span>{{ site.php_version }}</span>
                                                            </div>

                                                            <div v-if="site.project === 'wordpress'">&centerdot;</div>
                                                            <div v-if="site.project === 'wordpress'">{{ __('WordPress installed') }}</div>
                                                        </div>

                                                    </TableData>
                                                    <TableData>
                                                        {{ site.server ? site.server.name : '-' }}
                                                    </TableData>
                                                    <TableData class="space-x-2">
                                                        <span v-if="!site.users || !site.users.length">-</span>
                                                        <inertia-link v-else class="text-primary" :href="route('admin.users.show', user.id)" :key="user.id" v-for="user in site.users">{{ user.name }}</inertia-link>
                                                    </TableData>
                                                    <TableData>
                                                        {{ site.created_at }}
                                                    </TableData>
                                                    <TableData>
                                                        <inertia-link :href="route('admin.services.sites.edit', site.id)" class="text-primary font-medium">
                                                            {{ __('Edit') }}
                                                        </inertia-link>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <pagination :links="sites"/>
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
import Table from '@/components/Table'
import TableHead from '@/components/TableHead'
import TableHeader from '@/components/TableHeader'
import TableRow from '@/components/TableRow'
import TableBody from '@/components/TableBody'
import TableData from '@/components/TableData'
import IconPhp from '@/components/icons/IconPhp'
import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";

export default {
    layout: MainLayout,

    metaInfo() {
        return {
            title: `${this.__('Sites')}`,
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
        Table,
        TableHead,
        TableHeader,
        TableRow,
        TableBody,
        TableData,
        IconPhp,
        FormInput
    },

    props: {
        sites: Object,
        filters: Object,
    },

    mounted() {
    },

    methods: {
        useNotification,
    },

    data () {
        return {
            form: {
                search: this.filters.search,
            }
        }
    },

    watch: {
        form: {
            handler: throttle(function() {
                let query = pickBy(this.form)
                this.$inertia.get(this.route('admin.sites.index', Object.keys(query).length ? query : { remember: 'forget' }), {},{
                    preserveScroll: true,
                    preserveState: true,
                })
            }, 500),
            deep: true
        },
    },
}
</script>
