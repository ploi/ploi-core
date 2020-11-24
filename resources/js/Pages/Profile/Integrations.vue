<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageBody>
                    <form class="space-y-4" @submit.prevent="submit">
                        <FormSelect :label="__('Select provider')" :errors="$page.props.errors.provider"
                                    v-model="form.provider">
                            <option value="cloudflare">{{ __('Cloudflare') }}</option>
                        </FormSelect>

                        <FormInput v-if="form.provider === 'cloudflare'" :label="__('API key')"
                                   :errors="$page.props.errors['meta.api_key']" v-model="form.meta.api_key"/>
                        <FormInput v-if="form.provider === 'cloudflare'" :label="__('Cloudflare email')"
                                   :errors="$page.props.errors['meta.cloudflare_email']"
                                   v-model="form.meta.cloudflare_email"/>

                        <FormActions>
                            <Button>{{ __('Save changes') }}</Button>
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
import Table from '@/components/Table'
import TableHead from '@/components/TableHead'
import TableHeader from '@/components/TableHeader'
import TableRow from '@/components/TableRow'
import TableBody from '@/components/TableBody'
import TableData from '@/components/TableData'
import {useConfirmDelete} from '@/hooks/confirm-delete'

export default {
    metaInfo() {
        return {
            title: `${this.__('Integrations')}`,
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
            useConfirmDelete({
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
