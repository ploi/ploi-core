<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    <form class="space-y-4" @submit.prevent="submit">
                        <FormInput :label="__('Name')" :errors="$page.props.errors.name" v-model="form.name" />
                        <FormInput :label="__('Email')" type="email" :errors="$page.props.errors.email" v-model="form.email" />
                        <FormSelect :label="__('Language')" :errors="$page.props.errors.language" v-model="form.language">
                            <option value="en">English</option>
                            <option value="nl">Dutch</option>
                            <option value="fr">French</option>
                            <option value="da">Danish</option>
                            <option value="nb-no">Norwegian</option>
                            <option value="pt">Portuguese</option>
                        </FormSelect>

                        <FormInput :label="__('Address')" type="text" :errors="$page.props.errors.address" v-model="form.address" />
                        <FormSelect :label="__('Country')" :errors="$page.props.errors.country" v-model="form.country">
                            <option :value="code" v-for="(country, code) in countries" v-text="country"></option>
                        </FormSelect>
                        <FormInput :label="__('ZIP')" type="text" :errors="$page.props.errors.zip" v-model="form.zip" />
                        <FormInput :label="__('City')" type="text" :errors="$page.props.errors.city" v-model="form.city" />

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
                title: `${this.__('Profile')}`,
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
            countries: Object,
        },

        data() {
            return {
                form: {
                    name: this.profile.name,
                    email: this.profile.email,
                    language: this.profile.language,

                    address: this.profile.address,
                    country: this.profile.country,
                    zip: this.profile.zip,
                    city: this.profile.city,
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
                ],
            }
        },

        methods: {
            submit(){
                this.$inertia.patch(this.route('profile.update'), this.form, {
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false
                });
            }
        },
    }
</script>
