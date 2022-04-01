<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Aliases') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :site="site"/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Create') }}</template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput v-if="form.type === 'letsencrypt'" :label="__('Domain')" :errors="$page.props.errors.domain" v-model="form.domain"/>
                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <EmptyImage v-if="false" />

                            <SettingsSegment>
                                <template #title>{{ __('Aliases') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="Cronjob list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader></TableHeader>
                                                    <TableHeader>{{ __('Alias') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>

                                        </Table>
                                    </div>
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
    import SettingsLayout from '@/components/layouts/SettingsLayout'
    import SettingsSegment from '@/components/SettingsSegment'
    import FormInput from '@/components/forms/FormInput'
    import FormSelect from '@/components/forms/FormSelect'
    import FormTextarea from '@/components/forms/FormTextarea'
    import Form from '@/components/Form'
    import Pagination from '@/components/Pagination'
    import EmptyImage from '@/components/EmptyImage'
    import FormActions from '@/components/FormActions'
    import {useConfirmDelete} from '@/hooks/confirm-delete'
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
                title: `${this.__('Certificates')} - ${this.site.domain}`,
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
            FormTextarea,
            SettingsLayout,
            SettingsSegment,
            Form,
            FormActions,
            Pagination,
            Tabs,
            Table,
            TableHead,
            TableHeader,
            TableRow,
            TableBody,
            TableData,
            EmptyImage,
        },

        data() {
            return {
                sending: false,

                form: {
                    domain: null,
                    type: 'letsencrypt',
                    certificate: null,
                    private: null,
                },

                breadcrumbs: [
                    {
                        title: this.$page.props.settings.name,
                        to: '/',
                    },
                    {
                        title: this.__('Sites'),
                        to: this.route('sites.index'),
                    },
                    {
                        title: this.site.domain,
                        to: this.route('sites.show', this.site.id),
                    },
                    {
                        title: this.__('Aliases'),
                        to: this.route('sites.aliases.index', this.site.id),
                    },
                ],
            }
        },

        mounted() {
        },

        watch: {
        },

        computed: {
        },

        props: {
            site: Object,
            certificates: Object,
        },

        methods: {

        },
    }
</script>
