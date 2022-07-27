<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs" />

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('DNS') }}</PageHeaderTitle>
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
                                <template #subtitle>
                                    {{ __('Create a new DNS record here.') }}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :disabled="sending" :label="__('Name')" :errors="action === 'create' ? $page.props.errors.name : []" v-model="form.name" />
                                        <FormInput :disabled="sending" :label="__('IPv4 address')" :errors="action === 'create' ? $page.props.errors.content : []" v-model="form.content" />

                                        <div class="grid grid-cols-2 gap-x-4">
                                            <FormSelect class="col-span-1" :disabled="sending" :label="__('Type')" :errors="action === 'create' ? $page.props.errors.type : []" v-model="form.type">
                                                <option value="A">{{ __('A') }}</option>
                                                <option value="AAAA">{{ __('AAAA') }}</option>
                                                <option value="CNAME">{{ __('CNAME') }}</option>
                                                <option value="HTTPS">{{ __('HTTPS') }}</option>
                                                <option value="TXT">{{ __('TXT') }}</option>
                                                <option value="SRV">{{ __('SRV') }}</option>
                                                <option value="LOC">{{ __('LOC') }}</option>
                                                <option value="MX">{{ __('MX') }}</option>
                                                <option value="NS">{{ __('NS') }}</option>
                                                <option value="CERT">{{ __('CERT') }}</option>
                                                <option value="DNSKEY">{{ __('DNSKEY') }}</option>
                                                <option value="DS">{{ __('DS') }}</option>
                                                <option value="NAPTR">{{ __('NAPTR') }}</option>
                                                <option value="SMIMEA">{{ __('SMIMEA') }}</option>
                                                <option value="SSHFP">{{ __('SSHFP') }}</option>
                                                <option value="SVCB">{{ __('SVCB') }}</option>
                                                <option value="TLSA">{{ __('TLSA') }}</option>
                                            </FormSelect>
                                            <FormInput type="number" :disabled="sending" :label="__('TTL')" :errors="action === 'create' ? $page.props.errors.ttl : []" v-model="form.ttl" />
                                        </div>

                                        <FormActions>
                                            <Button>{{ __('Save') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <EmptyImage v-if="records === null && !loading" />

                            <div v-if="loading" class="inline-flex px-4">
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Loading records..
                            </div>

                            <SettingsSegment v-if="records.length">
                                <template #title>{{ __('Records') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="DNS records list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader>{{ __('Type') }}</TableHeader>
                                                    <TableHeader>{{ __('Name') }}</TableHeader>
                                                    <TableHeader>{{ __('Content') }}</TableHeader>
                                                    <TableHeader>{{ __('TTL') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="(record, index) in records" :key="record.id" class="px-2">
                                                    <TableData class="pr-4">
                                                        <FormSelect :value="record.type" :disabled="sending" :id="record.id + '-type'" :errors="(action === 'update' && recordIdBeingUpdated === record.id) ? $page.props.errors.type : []">
                                                            <option value="A">{{ __('A') }}</option>
                                                            <option value="AAAA">{{ __('AAAA') }}</option>
                                                            <option value="CNAME">{{ __('CNAME') }}</option>
                                                            <option value="HTTPS">{{ __('HTTPS') }}</option>
                                                            <option value="TXT">{{ __('TXT') }}</option>
                                                            <option value="SRV">{{ __('SRV') }}</option>
                                                            <option value="LOC">{{ __('LOC') }}</option>
                                                            <option value="MX">{{ __('MX') }}</option>
                                                            <option value="NS">{{ __('NS') }}</option>
                                                            <option value="CERT">{{ __('CERT') }}</option>
                                                            <option value="DNSKEY">{{ __('DNSKEY') }}</option>
                                                            <option value="DS">{{ __('DS') }}</option>
                                                            <option value="NAPTR">{{ __('NAPTR') }}</option>
                                                            <option value="SMIMEA">{{ __('SMIMEA') }}</option>
                                                            <option value="SSHFP">{{ __('SSHFP') }}</option>
                                                            <option value="SVCB">{{ __('SVCB') }}</option>
                                                            <option value="TLSA">{{ __('TLSA') }}</option>
                                                        </FormSelect>
                                                    </TableData>
                                                    <TableData class="pr-4">
                                                        <FormInput class="col-span-2" :value="record.name" type="text" :id="record.id + '-name'" :errors="(action === 'update' && recordIdBeingUpdated === record.id) ? $page.props.errors.name : []" />
                                                    </TableData>
                                                    <TableData class="pr-4">
                                                        <FormInput class="col-span-2" :value="record.content" type="text" :id="record.id + '-content'" :errors="(action === 'update' && recordIdBeingUpdated === record.id) ? $page.props.errors.content : []" />
                                                    </TableData>
                                                    <TableData class="pr-4">
                                                        <FormInput class="!w-16" :value="record.ttl" type="number" :id="record.id + '-ttl'" :disabled="sending" :errors="(action === 'update' && recordIdBeingUpdated === record.id) ? $page.props.errors.ttl : []" />
                                                    </TableData>
                                                    <TableData>
                                                        <div class="col-span-1 flex flex-col gap-y-2">
                                                            <Button @click="save(record, index)" variant="primary" size="sm">Save</Button>
                                                            <Button @click="confirmDelete(record)" variant="danger" size="sm">Delete</Button>
                                                        </div>
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
import SettingsLayout from '@/components/layouts/SettingsLayout'
import SettingsSegment from '@/components/SettingsSegment'
import FormInput from '@/components/forms/FormInput'
import Form from '@/components/Form'
import Pagination from '@/components/Pagination'
import FormActions from '@/components/FormActions'
import {useConfirm} from '@/hooks/confirm'
import {useNotification} from '@/hooks/notification'
import Tabs from './Tabs'
import Table from '@/components/Table'
import TableHead from '@/components/TableHead'
import TableHeader from '@/components/TableHeader'
import TableRow from '@/components/TableRow'
import TableBody from '@/components/TableBody'
import TableData from '@/components/TableData'
import EmptyImage from '@/components/EmptyImage'
import Input from "../../components/Input";
import FormSelect from "../../components/forms/FormSelect";

export default {
    metaInfo() {
        return {
            title: `${this.__('DNS')} - ${this.site.domain}`,
        }
    },

    layout: MainLayout,

    components: {
        FormSelect,
        Input,
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
            loading: true,
            action: 'create',
            recordIdBeingUpdated: null,

            records: {},

            form: {
                name: null,
                content: null,
                type: null,
                ttl: null,
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
                    title: this.__('DNS'),
                    to: this.route('sites.dns.index', this.site.id),
                },
            ],
        }
    },

    props: {
        site: Object,
    },

    mounted() {
        this.getRecords();
    },

    methods: {
        useNotification,

        submit() {
            this.$inertia.post(this.route('sites.dns.store', this.site.id), this.form, {
                onStart: () => {
                    this.action = 'create';
                    this.recordIdBeingUpdated = null;
                    this.sending = true;
                    this.records = [];
                },
                onFinish: () => {
                    this.sending = false;
                    this.records = [];
                    this.getRecords();

                    this.form = {
                        name: null,
                        content: null,
                        type: null,
                        ttl: null,
                    };
                }
            })

        },

        getRecords() {
            this.loading = true;

            window.axios.get(this.route('sites.dns.records', this.site.id))
                .then(response => {
                    this.loading = false;
                    this.records = response.data;
                })
                .catch(error => {
                    this.loading = false;
                })
        },

        save(record, index) {
            // Vue is not reactive on nested arrays. That's why we cannot use the v-model directive on the input fields,
            // because the input fields are part of a v-for. 
            let type = document.getElementById(record.id + '-type').value;
            let name = document.getElementById(record.id + '-name').value;
            let content = document.getElementById(record.id + '-content').value;
            let ttl = document.getElementById(record.id + '-ttl').value;

            this.records[index].type = type;
            this.records[index].name = name;
            this.records[index].content = content;
            this.records[index].ttl = ttl;

            this.$inertia.put(this.route('sites.dns.update', [this.site.id, record.id]), {
                type: type,
                name: name,
                content: content,
                ttl: ttl,
            }, {
                preserveScroll: true,
                onStart: () => {
                    this.sending = true;
                    this.action = 'update';
                    this.recordIdBeingUpdated = record.id;
                },
                onFinish: () => {
                    this.sending = false;
                    this.getRecords();
                }
            });
        },

        confirmDelete(record) {
            useConfirm({
                title: this.__('Are you sure?'),
                message: this.__('Your DNS will be completely removed.'),
                onConfirm: () => this.delete(record),
            })
        },

        delete(record) {
            this.$inertia.delete(this.route('sites.dns.delete', [this.site.id, record.id]), {
                preserveScroll: true,
                onStart: () => this.sending = true,
                onFinish: () => {
                    this.sending = false;
                    this.records = [];
                    this.getRecords();
                }
            })
        }
    },
}
</script>
