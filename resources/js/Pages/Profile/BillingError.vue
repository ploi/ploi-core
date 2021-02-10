<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    There's an issue getting in touch with the payment service provider. Please check your settings and the error log.
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
    import IconArrowUp from '@/components/icons/IconArrowUp'
    import IconArrowDown from '@/components/icons/IconArrowDown'
    import IconClose from '@/components/icons/IconClose'
    import Modal from '@/components/Modal'
    import ModalContainer from '@/components/ModalContainer'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Billing error')}`,
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
            IconArrowDown,
            IconArrowUp,
            IconClose,
            Modal,
            ModalContainer,
        },

        props: {

        },

        data() {
            return {
                breadcrumbs: [
                    {
                        title: this.$page.props.settings.name,
                        to: '/',
                    },
                    {
                        title: this.__('Billing error'),
                        to: this.route('profile.billing.index'),
                    },
                ],
            }
        },
    }
</script>
