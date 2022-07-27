<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Closed support requests') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <List>
                        <ListItem v-for="ticket in tickets.data" :key="ticket.id">
                            <template #title>
                                <inertia-link class="text-primary font-medium" :href="route('support.show', ticket.id)">
                                    {{ ticket.title }}
                                </inertia-link>
                            </template>
                        </ListItem>
                    </List>
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
import Modal from '@/components/Modal.vue'
import ModalContainer from '@/components/ModalContainer.vue'
import FormInput from '@/components/forms/FormInput.vue'
import FormActions from '@/components/FormActions.vue'

export default {
        metaInfo() {
            return {
                title: `${this.__('Closed support requests')}`,
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
            FormActions
        },

        props: {
            tickets: Object,
        },

        data() {
            return {
                breadcrumbs: [
                    {
                        title: this.$page.props.settings.name,
                        to: '/',
                    },
                    {
                        title: this.__('Support'),
                        to: this.route('support.index'),
                    },
                    {
                        title: this.__('Closed support requests'),
                        to: this.route('support.index.closed'),
                    },
                ],
            }
        },

        methods: {

        },
    }
</script>
