<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    <form class="space-y-4" @submit.prevent="submit">
                        <FormSelect :label="__('Theme')" :errors="$page.errors.theme" v-model="form.theme">
                            <option value="light">{{ __('Light') }}</option>
                            <option value="dark">{{ __('Dark') }}</option>
                            <option value="auto">{{ __('Auto') }}</option>
                        </FormSelect>

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
                title: `${this.__('Settings')}`,
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
        },

        data() {
            return {
                form: {
                    theme: this.profile.theme,
                },

                breadcrumbs: [
                    {
                        title: this.$page.settings.name,
                        to: '/',
                    },
                    {
                        title: this.__('Profile'),
                        to: this.route('profile.index'),
                    },
                    {
                        title: this.__('Settings'),
                        to: this.route('profile.settings.index'),
                    },
                ],
            }
        },

        methods: {
            submit() {
                this.sending = true;

                this.$inertia.patch(this.route('profile.settings.update'), this.form)
                    .then(response => {
                        this.sending = false;
                    })
            }
        },
    }
</script>
