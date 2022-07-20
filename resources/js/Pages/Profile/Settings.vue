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
                            <label for="keyboard_shortcuts" class="ml-2 text-sm">{{
                                    __('Enable keyboard shortcuts')
                                }}</label>
                            <p class="text-small mt-1 text-medium-emphasis">
                                {{
                                    __('This will allow you to do keyboard shortcuts for navigation, which is visible when you press "/"')
                                }}
                            </p>
                        </div>

                        <FormActions>
                            <Button>{{ __('Save changes') }}</Button>
                        </FormActions>
                    </form>
                </PageBody>

                <div class="border-t border-low-emphasis"></div>

                <PageBody>
                    <form class="space-y-4" @submit.prevent="deleteAccount">
                        <p>
                            You can remove your account here. This will remove all data of your account.
                        </p>
                        <FormActions>
                            <Button variant="danger">{{ __('Delete account') }}</Button>
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
import {useConfirm} from '@/hooks/confirm'

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
        },
        deleteAccount() {
            useConfirm({
                title: this.__('Are you sure?'),
                message: `Are you sure you want to remove your account? All data will be deleted and services will be detached.`,
                onConfirm: () => {
                    this.$inertia.delete(this.route('profile.delete-account'));
                }
            })
        }
    },
}
</script>
