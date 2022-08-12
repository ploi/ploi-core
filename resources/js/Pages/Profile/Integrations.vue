<template>
    <Page>
        <Head><title>{{ __('Integrations') }}</title></Head>
        <TopBar :breadcrumbs="breadcrumbs" />

        <Content>
            <Container>
                <PageBody>
                    <form class="space-y-4" @submit.prevent="submit">
                        <FormSelect :label="__('Select provider')" :errors="$page.props.errors.provider"
                                    v-model="form.provider">
                            <option value="cloudflare">{{ __('Cloudflare') }}</option>
                        </FormSelect>

                        <FormInput v-if="form.provider === 'cloudflare'" :label="__('API key')"
                                   :errors="$page.props.errors['meta.api_key']" v-model="form.meta.api_key" />
                        <FormInput v-if="form.provider === 'cloudflare'" :label="__('Cloudflare email')"
                                   :errors="$page.props.errors['meta.cloudflare_email']"
                                   v-model="form.meta.cloudflare_email" />

                        <FormActions>
                            <Button>{{ __('Save') }}</Button>
                        </FormActions>
                    </form>
                </PageBody>

                <PageBody v-if="providers.length">
                    <Table caption="Provider list overview">
                        <TableHead>
                            <TableRow>
                                <TableHeader>{{ __('Provider') }}</TableHeader>
                                <TableHeader>{{ __('Date') }}</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow v-for="provider in providers" :key="provider.id">
                                <TableData>{{ provider.type }}</TableData>
                                <TableData>{{ provider.created_at }}</TableData>
                                <TableData>
                                    <Button variant="danger" size="sm"
                                            @click="confirmDelete(provider)">
                                        {{ __('Delete') }}
                                    </Button>
                                </TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
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
import Table from '@/components/Table.vue'
import TableHead from '@/components/TableHead.vue'
import TableHeader from '@/components/TableHeader.vue'
import TableRow from '@/components/TableRow.vue'
import TableBody from '@/components/TableBody.vue'
import TableData from '@/components/TableData.vue'
import {useConfirm} from '@/hooks/confirm'

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
        FormActions,
        Table,
        TableHead,
        TableHeader,
        TableRow,
        TableBody,
        TableData,
    },

    props: {
        providers: Array,
    },

    data() {
        return {
            form: {
                provider: null,
                meta: {}
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
                    title: this.__('Integrations'),
                    to: this.route('profile.integrations.index'),
                },
            ],
        }
    },

    methods: {
        submit() {
            this.$inertia.post(this.route('profile.integrations.store'), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => {
                    this.sending = false;

                    if (!Object.keys(this.$page.props.errors).length) {
                        this.form = {
                            provider: null,
                            meta: {}
                        }
                    }
                }
            });
        },

        confirmDelete(provider) {
            useConfirm({
                title: this.__('Are you sure?'),
                message: this.__('Your provider integration will be deleted permanently, this cannot be undone.'),
                onConfirm: () => this.delete(provider),
            })
        },

        delete(provider) {
            this.$inertia.delete(this.route('profile.integrations.destroy', provider.id), {
                preserveScroll: true
            })
        }
    },
}
</script>
