<template>
    <Page>
        <Head :title="`${this.__('Certificates')} - ${this.site.domain}`"></Head>
        <TopBar :breadcrumbs="breadcrumbs" />

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Certificates') }}</PageHeaderTitle>
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
                                    <span v-if="form.type === 'letsencrypt'" v-text="__('Request a new Let\'s Encrypt certificate here. Make sure that the DNS has fully propagated.')"></span>
                                    <span v-if="form.type === 'custom'" v-text="__('Install your own SSL certificate here. Make sure to enter the private key and certificate.')"></span>
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormSelect :label="__('Select certificate type')" v-model="form.type">
                                            <option value="letsencrypt">Let's Encrypt certificate</option>
                                            <option value="custom">Custom SSL certificate</option>
                                        </FormSelect>

                                        <div>
                                            <FormInput v-if="form.type === 'letsencrypt'" :label="__('Domain')" :errors="$page.props.errors.domain" v-model="form.domain" />
                                            <button type="button" @click="setDomainData(true)" class="text-primary text-small border-b border-dotted">Click here to add aliases</button>
                                        </div>

                                        <FormTextarea v-if="form.type === 'custom'" :label="__('Private key')" :errors="$page.props.errors.private" rows="2" v-model="form.private" />
                                        <FormTextarea v-if="form.type === 'custom'" :label="__('Certificate')" :errors="$page.props.errors.certificate" rows="2" v-model="form.certificate" />
                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <EmptyImage v-if="!certificates.meta.total" />

                            <SettingsSegment v-if="certificates.meta.total">
                                <template #title>{{ __('Certificates') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="Cronjob list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader></TableHeader>
                                                    <TableHeader>{{ __('Certificate') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="certificate in certificates.data" :key="certificate.id">
                                                    <TableData>
                                                        <StatusBubble :variant="certificate.status === 'busy' ? 'gray' : 'success'" />
                                                    </TableData>
                                                    <TableData>{{ certificate.domain }}</TableData>
                                                    <TableData>
                                                        <Button :disabled="certificate.status === 'busy'" variant="danger" size="sm"
                                                                @click="confirmDelete(certificate)">Delete
                                                        </Button>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <pagination :links="certificates" />
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
                type: 'letsencrypt',
                certificate: null,
                private: null,
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
                    title: this.__('Certificates'),
                    to: this.route('sites.certificates.index', this.site.id),
                },
            ],
        }
    },

    mounted() {
        if (this.shouldBePolling) {
            this.startPollingInterval();
        }

        this.setDomainData();
    },

    watch: {
        shouldBePolling: function (value) {
            if (!value) {
                this.clearPollingInterval();

                return;
            }

            if (!this.pollingInterval) {
                this.startPollingInterval();
            }
        }
    },

    computed: {
        shouldBePolling() {
            return !!this.certificates.data.filter((certificate) => {
                return certificate.status === 'busy';
            }).length;
        },
    },

    props: {
        site: Object,
        certificates: Object,
    },

    methods: {
        startPollingInterval() {
            this.pollingInterval = setInterval(function () {
                this.poll();
            }.bind(this), 3000);
        },

        clearPollingInterval() {
            clearTimeout(this.pollingInterval);
            this.pollingInterval = null;
        },

        poll() {
            this.$inertia.get(this.route('sites.certificates.index', this.site.id), {
                only: ['certificates'],
                preserveScroll: true,
            })
        },

        submit() {
            this.sending = true

            this.$inertia.post(this.route('sites.certificates.store', this.site.id), this.form, {
                onFinish: () => {
                    this.sending = false

                    if (!Object.keys(this.$page.props.errors).length) {
                        this.setDomainData();
                    }
                }
            });
        },

        confirmDelete(certificate) {
            useConfirm({
                title: this.__('Are you sure?'),
                message: `Your certificate will be deleted permanently, this action cannot be undone.`,
                onConfirm: () => this.delete(certificate),
            })
        },

        delete(certificate) {
            this.$inertia.delete(this.route('sites.certificates.delete', [this.site.id, certificate.id]), {
                preserveScroll: true
            })
        },

        setDomainData(withAliases) {
            this.form.certificate = null;
            this.form.private = null;

            if (this.site.domain.startsWith('www.')) {
                this.form.domain = this.site.domain + ',' + this.site.domain.replace('www.', '');
            } else {
                this.form.domain = this.site.domain + ',www.' + this.site.domain;
            }

            if (withAliases) {
                this.form.domain = this.form.domain + ',' + this.site.aliases.join(',');
            }
        }
    },

    beforeUnmount() {
        this.clearPollingInterval();
    }
}
</script>
