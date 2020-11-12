<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    <form class="space-y-4" @submit.prevent="submit">
                        <FormInput :label="__('Current password')" type="password" :errors="$page.props.errors.current_password" v-model="form.current_password"/>
                        <FormInput :label="__('New password')" type="password" :errors="$page.props.errors.password" v-model="form.password"/>
                        <FormInput :label="__('Confirm new password')" type="password" :errors="$page.props.errors.password_confirmation" v-model="form.password_confirmation"/>
                        <FormActions>
                            <Button>{{ __('Save changes') }}</Button>
                        </FormActions>
                    </form>
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

    export default {
        metaInfo() {
            return {
                title: `${this.__('Security')}`,
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
            FormActions
        },

        props: {
            profile: Object,
            languages: Array
        },

        data() {
            return {
                form: {
                    current_password: null,
                    password: null,
                    password_confirmation: null,
                },

                breadcrumbs: [
                    {
                        title: this.$page.props.settings.name,
                        to: '/',
                    },
                    {
                        title: this.__('Profile'),
                        to: this.route('profile.index'),
                    },
                    {
                        title: this.__('Security'),
                        to: this.route('profile.security.index'),
                    },
                ],
            }
        },

        methods: {
            submit() {
                this.$inertia.patch(this.route('profile.security.update'), this.form, {
                    onStart: () => this.sending = true,
                    onFinish: () => {
                        this.sending = false;

                        if (!Object.keys(this.$page.props.errors).length) {
                            this.form = {
                                current_password: null,
                                password: null,
                                password_confirmation: null,
                            }
                        }
                    }
                });
            }
        },
    }
</script>
