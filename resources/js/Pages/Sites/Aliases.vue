<template>
    <Page>
        <Head :title="`${this.__('Aliases')} - ${this.site.domain}`"></Head>
        <TopBar :breadcrumbs="breadcrumbs" />

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Aliases') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :site="site" />
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Create') }}</template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Domain')" :errors="$page.props.errors.domain" v-model="form.domain" />
                                        <div>
                                            <input id="request_new_certificate" class="form-checkbox" type="checkbox"
                                                   v-model="form.request_new_certificate">
                                            <label for="request_new_certificate" class="ml-2 text-sm">
                                                {{ __('Request new certificate') }}
                                            </label>
                                        </div>
                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <EmptyImage v-if="!aliases.length" />

                            <SettingsSegment v-if="aliases.length">
                                <template #title>{{ __('Aliases') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="Aliases list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader></TableHeader>
                                                    <TableHeader>{{ __('Alias') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="(alias, index) in aliases" :key="index">
                                                    <TableData>
                                                        <StatusBubble :variant="'success'" />
                                                    </TableData>
                                                    <TableData>{{ alias }}</TableData>
                                                    <TableData>
                                                        <Button variant="danger" size="sm"
                                                                @click="confirmDelete(alias)">Delete
                                                        </Button>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </template>
                            </SettingsSegment>
                        </template>
                    </SettingsLayout>
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
import SettingsLayout from '@/components/layouts/SettingsLayout.vue'
import SettingsSegment from '@/components/SettingsSegment.vue'
import FormInput from '@/components/forms/FormInput.vue'
import FormSelect from '@/components/forms/FormSelect.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'
import Form from '@/components/Form.vue'
import Pagination from '@/components/Pagination.vue'
import EmptyImage from '@/components/EmptyImage.vue'
import FormActions from '@/components/FormActions.vue'
import {useConfirm} from '@/hooks/confirm'
import Tabs from './Tabs.vue'
import Table from '@/components/Table.vue'
import TableHead from '@/components/TableHead.vue'
import TableHeader from '@/components/TableHeader.vue'
import TableRow from '@/components/TableRow.vue'
import TableBody from '@/components/TableBody.vue'
import TableData from '@/components/TableData.vue'

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
        FormInput,
        FormSelect,
        FormTextarea,
        SettingsLayout,
        SettingsSegment,
        Form,
        FormActions,
        Pagination,
        Tabs,
        Table,
        TableHead,
        TableHeader,
        TableRow,
        TableBody,
        TableData,
        EmptyImage,
    },

    data() {
        return {
            sending: false,

            form: {
                domain: null,
                request_new_certificate: false,
            },

            breadcrumbs: [
                {
                    title: this.$page.props.settings.name,
                    to: '/',
                },
                {
                    title: this.__('Sites'),
                    to: this.route('sites.index'),
                },
                {
                    title: this.site.domain,
                    to: this.route('sites.show', this.site.id),
                },
                {
                    title: this.__('Aliases'),
                    to: this.route('sites.aliases.index', this.site.id),
                },
            ],
        }
    },

    mounted() {
    },

    watch: {},

    computed: {},

    props: {
        site: Object,
        aliases: [Object, Array],
    },

    methods: {
        submit() {
            this.sending = true

            this.$inertia.post(this.route('sites.aliases.store', this.site.id), this.form, {
                onFinish: () => {
                    this.sending = false
                    this.form.domain = null;
                }
            });
        },

        confirmDelete(alias) {
            useConfirm({
                title: this.__('Are you sure?'),
                message: this.__('Your alias will be deleted permanently, this action cannot be undone.'),
                onConfirm: () => this.delete(alias),
            })
        },

        delete(alias) {
            this.$inertia.delete(this.route('sites.aliases.delete', [this.site.id, alias]), {
                preserveScroll: true
            })
        },
    },
}
</script>
