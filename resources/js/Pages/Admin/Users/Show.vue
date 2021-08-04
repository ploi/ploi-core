<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>Show user</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs />
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ user.name }}</template>

                                <template #content>
                                    <div>
                                        <Table caption="Database list overview">
                                            <TableBody>
                                                <TableRow>
                                                    <TableHeader>{{ __('Name') }}</TableHeader>
                                                    <TableData :border="false">
                                                        {{ user.name }}
                                                    </TableData>
                                                </TableRow>
                                                <TableRow>
                                                    <TableHeader>{{ __('Username') }}</TableHeader>
                                                    <TableData :border="false">
                                                        {{ user.user_name }}
                                                    </TableData>
                                                </TableRow>
                                                <TableRow>
                                                    <TableHeader>{{ __('Email address') }}</TableHeader>
                                                    <TableData :border="false">
                                                        {{ user.email }}
                                                    </TableData>
                                                </TableRow>
                                                <TableRow>
                                                    <TableHeader>{{ __('Customer payment ID') }}</TableHeader>
                                                    <TableData :border="false">
                                                        {{ user.stripe_id || '-' }}
                                                    </TableData>
                                                </TableRow>
                                                <TableRow>
                                                    <TableHeader>{{ __('Notes') }}</TableHeader>
                                                    <TableData :border="false">
                                                        {{ user.notes || '-' }}
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment>
                                <template #title>{{ __('Sites') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="Site list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader>{{ __('Name') }}</TableHeader>
                                                    <TableHeader>{{ __('Server') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="site in sites.data" :key="site.id">
                                                    <TableData>
                                                        {{ site.domain }}
                                                    </TableData>
                                                    <TableData>
                                                        {{ site.server ? site.server.name : '-' }}
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

                                    <pagination :links="sites" :preserve-scroll="true"/>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment>
                                <template #title>{{ __('Servers') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="Server list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader>{{ __('Name') }}</TableHeader>
                                                    <TableHeader>{{ __('Usage') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="server in servers.data" :key="server.id">
                                                    <TableData>
                                                        {{ server.name }}

                                                        <p class="text-medium-emphasis">{{ server.ip }}</p>

                                                        <Button class="text-small text-primary" is="a" size="sm" target="_blank" :href="`https://ploi.io/panel/servers/${server.ploi_id}`">
                                                            {{ __('View in ploi.io') }}
                                                        </Button>
                                                    </TableData>
                                                    <TableData>{{ server.sites_count }}/{{ server.maximum_sites }}</TableData>
                                                    <TableData>
                                                        <inertia-link :href="route('admin.services.servers.edit', server.id)" class="text-primary font-medium">
                                                            {{ __('Edit') }}
                                                        </inertia-link>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <pagination :links="servers" :preserve-scroll="true"/>
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
    import FormInput from '@/components/forms/FormInput'
    import FormTextarea from '@/components/forms/FormTextarea'
    import FormSelect from '@/components/forms/FormSelect'
    import Form from '@/components/Form'
    import FormActions from '@/components/FormActions'
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'
    import Tabs from './Tabs'
    import Pagination from '@/components/Pagination'

    export default {
        metaInfo() {
            return {
                title: `${this.__(this.user.name)}`,
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
            FormInput,
            FormSelect,
            SettingsLayout,
            SettingsSegment,
            Form,
            FormActions,
            Tabs,
            FormTextarea,
            Table,
            TableHead,
            TableHeader,
            TableRow,
            TableBody,
            TableData,
            Pagination
        },

        data() {
            return {

            }
        },

        props: {
            user: Object,
            sites: Object,
            servers: Object,
        },

        methods: {

        }
    }
</script>
