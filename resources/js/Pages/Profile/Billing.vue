<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    <Table caption="User list overview">
                        <TableHead>
                            <TableRow>
                                <TableHeader>{{ __('Name') }}</TableHeader>
                                <TableHeader></TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow v-for="webPackage in packages" :key="webPackage.id">
                                <TableData>
                                    {{ webPackage.name }}
                                </TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
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
    import Modal from '@/components/Modal'
    import ModalContainer from '@/components/ModalContainer'
    import FormInput from '@/components/forms/FormInput'
    import FormSelect from '@/components/forms/FormSelect'
    import FormActions from '@/components/FormActions'
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Billing')}`,
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
            IconBox,
            IconGlobe,
            IconStorage,
            Modal,
            ModalContainer,
            FormInput,
            FormSelect,
            FormActions,
            Table,
            TableHead,
            TableHeader,
            TableRow,
            TableBody,
            TableData,
        },

        props: {
            packages: Array,
        },

        data() {
            return {
                breadcrumbs: [
                    {
                        title: this.$page.settings.name,
                        to: '/',
                    },
                    {
                        title: this.__('Billing'),
                        to: this.route('profile.billing.index'),
                    },
                ],
            }
        },

        methods: {

        },
    }
</script>
