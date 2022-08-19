<template>
    <Page>
        <Head><title>{{ __('Support') }}</title></Head>
        <Portal to="modals">
            <ModalContainer>
                <Modal @close="modalIsOpen = false" v-if="modalIsOpen" @submit="submit">
                    <template #title>{{ __('Create support request') }}</template>

                    <template #form>
                        <FormInput :label="__('Title')" :errors="$page.props.errors.title" v-model="form.title" />
                        <FormTextarea :label="__('Content')" :errors="$page.props.errors.content" v-model="form.content" />
                    </template>

                    <template #form-actions>
                        <Button v-text="__('Create')"></Button>
                    </template>
                </Modal>
            </ModalContainer>
        </Portal>

        <TopBar :breadcrumbs="breadcrumbs" />

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
import FormTextarea from '@/components/forms/FormTextarea.vue'
import FormActions from '@/components/FormActions.vue'
import EmptyImage from '@/components/EmptyImage.vue'

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

            this.$inertia.post(this.route('support.store'), this.form, {
                onFinish: () => {
                    if (!Object.keys(this.$page.props.errors).length) {
                        this.form.title = null;
                        this.form.content = null;
                        this.loading = false;
                        this.modalIsOpen = false;
                    }
                }
            })
        }
    },
}
</script>
