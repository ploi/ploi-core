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
import TopBar from './components/TopBar.vue'
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
import IconBox from '@/components/icons/IconBox.vue'
import IconGlobe from '@/components/icons/IconGlobe.vue'
import IconStorage from '@/components/icons/IconStorage.vue'
import IconButton from '@/components/IconButton.vue'
import IconMore from '@/components/icons/IconMore.vue'
import EmptyImage from '@/components/EmptyImage.vue'
import Modal from '@/components/Modal.vue'
import ModalContainer from '@/components/ModalContainer.vue'
import FormInput from '@/components/forms/FormInput.vue'
import FormActions from '@/components/FormActions.vue'
import Dropdown from '@/components/Dropdown.vue'
import DropdownList from '@/components/DropdownList.vue'
import DropdownListItem from '@/components/DropdownListItem.vue'
import DropdownListItemButton from '@/components/DropdownListItemButton.vue'
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
