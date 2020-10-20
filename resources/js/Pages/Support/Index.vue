<template>
    <Page>
        <Portal to="modals">
            <ModalContainer>
                <Modal @close="modalIsOpen = false" v-if="modalIsOpen" @submit="submit">
                    <template #title>{{ __('Create support request') }}</template>

                    <template #form>
                        <FormInput :label="__('Title')" :errors="$page.props.errors.title" v-model="form.title"/>
                        <FormTextarea :label="__('Content')" :errors="$page.props.errors.content" v-model="form.content"/>
                    </template>

                    <template #form-actions>
                        <Button v-text="__('Create')"></Button>
                    </template>
                </Modal>
            </ModalContainer>
        </Portal>

        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Support') }}</PageHeaderTitle>
                    </template>
                    <template #end>
                        <Button @click="modalIsOpen = true">{{ __('Create ticket') }}</Button>
                    </template>
                </PageHeader>

                <PageBody>
                    <EmptyImage v-if="!tickets.total" />
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
    import FormTextarea from '@/components/forms/FormTextarea'
    import FormActions from '@/components/FormActions'
    import EmptyImage from '@/components/EmptyImage'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Support')}`,
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
            FormTextarea,
            FormActions,
            EmptyImage
        },

        props: {
            tickets: Object,
        },

        data() {
            return {
                loading: false,
                modalIsOpen: false,

                form: {
                    title: null,
                    content: null
                },

                breadcrumbs: [
                    {
                        title: this.$page.props.settings.name,
                        to: '/',
                    },
                    {
                        title: this.__('Support'),
                        to: this.route('support.index'),
                    },
                ],
            }
        },

        methods: {
            submit() {
                this.loading = true;

                this.$inertia.post(this.route('support.store'), this.form)
                    .then(response => {
                        if (!Object.keys(this.$page.props.errors).length) {
                            this.form.title = null;
                            this.form.content = null;
                            this.loading = false;
                            this.modalIsOpen = false;
                        }
                    })
            }
        },
    }
</script>
