<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ ticket.title }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <div class="space-y-6">
                        <ul class="space-y-6">
                            <li class="p-6 rounded shadow bg-surface-3">
                                <div class="flex space-x-4">
                                    <div>
                                        <img :src="ticket.user.avatar" class="w-8 h-8 rounded-avatar bg-surface-2" />
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-small text-body">{{ ticket.user.name }}</h3>
                                        <p class="text-medium-emphasis">{{ ticket.content }}</p>
                                    </div>
                                </div>
                            </li>
                            <li class="p-6 rounded shadow bg-surface-3" v-for="reply in replies.data">
                                <div class="flex space-x-4">
                                    <div>
                                        <img :src="reply.user.avatar" class="w-8 h-8 rounded-avatar bg-surface-2" />
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-small text-body">{{ reply.user.name }}</h3>
                                        <p class="text-medium-emphasis">
                                            {{ reply.content }}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <form class="space-y-4" @submit.prevent="reply" v-if="ticket.status !== 'closed'">
                            <FormTextarea :label="__('Reply')" :errors="$page.props.errors.reply" v-model="form.content"/>

                            <FormActions>
                                <Button>{{ __('Save') }}</Button>
                                <Button type="button" @click="close" variant="secondary">{{ __('Close') }}</Button>
                            </FormActions>
                        </form>
                    </div>

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
            FormActions
        },

        props: {
            ticket: Object,
            replies: Object,
        },

        data() {
            return {
                form: {
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
                    {
                        title: this.ticket.title,
                        to: this.route('support.show', this.ticket.id),
                    },
                ],
            }
        },

        methods: {
            reply() {
                this.loading = true;

                this.$inertia.post(this.route('support.reply', this.ticket.id), this.form)
                    .then(response => {
                        this.loading = false;

                        if (!Object.keys(this.$page.props.errors).length) {
                            this.form.content = null;
                        }
                    })
            },
            close() {
                this.loading = true;

                this.$inertia.post(this.route('support.close', this.ticket.id))
                    .then(response => {
                        this.loading = false;
                    })
            }
        },
    }
</script>
