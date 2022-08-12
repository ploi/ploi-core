<template>
    <Page>
        <Head><title>{{ __('Billing error') }}</title></Head>
        <TopBar :breadcrumbs="breadcrumbs" />

        <Content>
            <Container>
                <PageBody>
                    <div class="bg-warning text-on-warning px-4 py-3 rounded relative space-y-2" role="alert">
                        <strong class="font-bold">Problem with billing provider.</strong>
                        <p class="block">
                            There's an issue getting in touch with the payment service provider. Please check your settings and the error log or get in touch
                            with the administrator of this software.
                        </p>

                        <a class="block font-bold underline" href="https://docs.ploi-core.io/digging-deeper/using-stripe" target="_blank">How to setup Stripe for billing</a>
                    </div>
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
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconClose from '@/components/icons/IconClose.vue'
import Modal from '@/components/Modal.vue'
import ModalContainer from '@/components/ModalContainer.vue'

export default {
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

    props: {},

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
