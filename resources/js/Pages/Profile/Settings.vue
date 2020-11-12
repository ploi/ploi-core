<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    <form class="space-y-4" @submit.prevent="submit">
                        <FormSelect :label="__('Theme')" :errors="$page.props.errors.theme" v-model="form.theme">
                            <option value="light">{{ __('Light') }}</option>
                            <option value="dark">{{ __('Dark') }}</option>
                            <option value="auto">{{ __('Auto') }}</option>
                        </FormSelect>

                        <div>
                            <input id="keyboard_shortcuts" class="form-checkbox" type="checkbox"
                                   v-model="form.keyboard_shortcuts">
                            <label for="keyboard_shortcuts" class="ml-2 text-sm">{{ __('Enable keyboard shortcuts') }}</label>
                            <p class="text-small mt-1 text-medium-emphasis">
                                {{ __('This will allow you to do keyboard shortcuts for navigation, which is visible when you press "/"') }}
                            </p>
                        </div>

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
                    keyboard_shortcuts: this.profile.keyboard_shortcuts
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
                        title: this.__('Settings'),
                        to: this.route('profile.settings.index'),
                    },
                ],
            }
        },

        methods: {
            submit() {
                this.$inertia.patch(this.route('profile.settings.update'), this.form, {
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false,
                });
            }
        },
    }
</script>
