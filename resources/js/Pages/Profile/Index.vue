<template>
    <Page>
        <Head><title>{{ __('Profile') }}</title></Head>
        <TopBar :breadcrumbs="breadcrumbs" />

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
                            <option value="zh">Chinese</option>
                        </FormSelect>

                        <FormInput :label="__('Address')" type="text" :errors="$page.props.errors.address" v-model="form.address" />
                        <FormSelect :label="__('Country')" :errors="$page.props.errors.country" v-model="form.country">
                            <option :value="code" v-for="(country, code) in countries" v-text="country"></option>
                        </FormSelect>
                        <FormInput :label="__('ZIP')" type="text" :errors="$page.props.errors.zip" v-model="form.zip" />
                        <FormInput :label="__('City')" type="text" :errors="$page.props.errors.city" v-model="form.city" />

                        <FormActions>
                            <Button>{{ __('Save') }}</Button>
                        </FormActions>
                    </form>
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
import FormSelect from '@/components/forms/FormSelect.vue'
import FormActions from '@/components/FormActions.vue'

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
        submit() {
            this.$inertia.patch(this.route('profile.update'), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false
            });
        }
    },
}
</script>
