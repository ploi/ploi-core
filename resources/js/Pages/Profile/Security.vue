<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    <SettingsSegment>
                        <template #title>
                            {{ __('Password')}}
                        </template>
                        <template #subtitle>
                            {{ __('Change your password') }}
                        </template>
                        <template #form>
                            <form class="space-y-4" @submit.prevent="submit">
                                <FormInput :label="__('Current password')" type="password" :errors="$page.props.errors.current_password" v-model="form.current_password"/>
                                <div class="w-full flex space-x-4">
                                    <FormInput :label="__('New password')" type="password" :errors="$page.props.errors.password" v-model="form.password" class="w-1/2" />
                                    <FormInput :label="__('Confirm new password')" type="password" :errors="$page.props.errors.password_confirmation" v-model="form.password_confirmation" class="w-1/2" />
                                </div>
                                <FormActions>
                                    <Button>{{ __('Save changes') }}</Button>
                                </FormActions>
                            </form>
                        </template>
                    </SettingsSegment>
                    <SettingsSegment>
                        <template #title>
                            {{ __('Two-factor authentication') }}
                        </template>
                        <template #subtitle>
                            {{ __('Manage two-factor authentication for your account.') }}
                        </template>
                        <template #content>
                            <TwoFactorAuthentication :secret="twoFactor.secret" :recoveryCodes="twoFactor.recoveryCodes" :enabled="twoFactor.enabled" />
                        </template>
                    </SettingsSegment>
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
import SettingsSegment from "../../components/SettingsSegment.vue";
import TwoFactorAuthentication from "./components/TwoFactorAuthentication.vue";

export default {
        metaInfo() {
            return {
                title: `${this.__('Security')}`,
            }
        },

        layout: MainLayout,

        components: {
            TwoFactorAuthentication,
            SettingsSegment,
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
            languages: Array,
            twoFactor: Object,
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
                this.$inertia.patch(this.route('profile.security.updatePassword'), this.form, {
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
