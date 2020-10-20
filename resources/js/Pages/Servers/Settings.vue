<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Settings') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :server="server"/>
                        </template>
                        <template #segments>
                            <SettingsSegment v-if="can('servers', 'update')">
                                <template #title>{{ __('Overview') }}</template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Name')" :errors="$page.props.errors.name"
                                                   v-model="form.name"/>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment v-if="can('servers', 'delete')">
                                <template #title>{{ __('Danger zone') }}</template>
                                <template #content>
                                    <Button @click="confirmDelete" variant="danger">{{ __('Delete') }}</Button>
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
    import {useConfirmDelete} from '@/hooks/confirm-delete'

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
        },

        data() {
            return {
                form: {
                    name: this.server.name
                },

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

        methods: {
            useConfirmDelete,

            submit() {
                this.$inertia.patch(this.route('servers.settings.update', this.server.id), this.form, {
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false
                })
            },

            confirmDelete() {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__('Your server will be deleted completely, this action is irreversible.'),
                    onConfirm: () => this.delete(),
                })
            },

            delete() {
                this.$inertia.delete(this.route('servers.delete', this.server.id))
            },
        },
    }
</script>
