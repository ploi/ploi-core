<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ server.name }}</PageHeaderTitle>
                    </template>

                    <template v-if="can('sites', 'create')" #end>
                        <Button as="inertia-link" :href="route('sites.index', {create: true, server: server.id})">{{ __('Create site') }}</Button>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :server="server"/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Sites') }}</template>

                                <template #content>
                                    <div>
                                        <Table caption="Site list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader>{{ __('Domain') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="site in sites.data" :key="site.id">
                                                    <TableData>
                                                        {{ site.domain }}
                                                    </TableData>
                                                    <TableData>
                                                        <inertia-link :href="route('sites.show', site.id)" class="text-primary font-medium">
                                                            {{ __('Manage') }}
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
    import TopBar from './components/TopBar'
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
    import IconBox from '@/components/icons/IconBox'
    import IconGlobe from '@/components/icons/IconGlobe'
    import IconStorage from '@/components/icons/IconStorage'
    import IconButton from '@/components/IconButton'
    import IconMore from '@/components/icons/IconMore'
    import EmptyImage from '@/components/EmptyImage'
    import Modal from '@/components/Modal'
    import ModalContainer from '@/components/ModalContainer'
    import FormInput from '@/components/forms/FormInput'
    import FormActions from '@/components/FormActions'
    import Dropdown from '@/components/Dropdown'
    import DropdownList from '@/components/DropdownList'
    import DropdownListItem from '@/components/DropdownListItem'
    import DropdownListItemButton from '@/components/DropdownListItemButton'
    import SettingsLayout from '@/components/layouts/SettingsLayout'
    import SettingsSegment from '@/components/SettingsSegment'
    import Pagination from '@/components/Pagination'
    import Tabs from './Tabs'
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Servers')}`,
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
            IconButton,
            IconMore,
            ListItem,
            StatusBubble,
            NotificationBadge,
            IconBox,
            IconGlobe,
            IconStorage,
            EmptyImage,
            Modal,
            ModalContainer,
            FormInput,
            FormActions,
            Dropdown,
            DropdownList,
            DropdownListItem,
            DropdownListItemButton,
            SettingsSegment,
            SettingsLayout,
            Tabs,
            Table,
            TableHead,
            TableHeader,
            TableRow,
            TableBody,
            TableData,
            Pagination
        },

        props: {
            server: Object,
            sites: Object,
        },

        data() {
            return {
                breadcrumbs: [
                    {
                        title: this.$page.props.settings.name,
                        to: '/',
                    },
                    {
                        title: this.server.name,
                        to: this.route('servers.show', this.server.id),
                    },
                ],
            }
        },

        methods: {},
    }
</script>
