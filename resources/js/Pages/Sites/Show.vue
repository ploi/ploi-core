<template>
    <Page>
        <Portal to="modals">
            <ModalContainer>
                <Modal @close="() => closeModal()" v-if="modalIsOpen" @submit="requestFtpPassword">
                    <template #title>{{ __('Request FTP password') }}</template>

                    <template #form>
                        <FormInput type="password" :label="__('Enter your account password to reveal FTP password')"
                                   v-model="form.password"
                                   :errors="$page.props.errors.password" />
                    </template>

                    <template #form-actions>
                        <Button v-text="__('Request')"></Button>
                    </template>
                </Modal>
            </ModalContainer>
        </Portal>

        <TopBar :breadcrumbs="breadcrumbs" />

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle class="flex space-x-2 items-center">
                            <span>{{ site.domain }}</span>
                            <a :href="`http://${site.domain}`" class="text-primary" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :site="site" />
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Overview') }}</template>

                                <template #content>
                                    <div>
                                        <Table caption="Database list overview">
                                            <TableBody>
                                                <TableRow>
                                                    <TableHeader>{{ __('Website path') }}</TableHeader>
                                                    <TableData :border="false">
                                                        /home/{{ system_user.user_name }}/{{ site.domain }}
                                                    </TableData>
                                                </TableRow>
                                                <TableRow>
                                                    <TableHeader>{{ __('FTP host') }}</TableHeader>
                                                    <TableData :border="false">
                                                        <copy :label="`${ip_address}`" :value="ip_address" />
                                                    </TableData>
                                                </TableRow>
                                                <TableRow>
                                                    <TableHeader>{{ __('FTP user') }}</TableHeader>
                                                    <TableData :border="false">
                                                        <copy :label="`${system_user.user_name}`"
                                                              :value="system_user.user_name" />
                                                    </TableData>
                                                </TableRow>
                                                <TableRow>
                                                    <TableHeader>{{ __('FTP password') }}</TableHeader>
                                                    <TableData :border="false">
                                                        <div v-if="ftp_password">
                                                            <span v-text="ftp_password"></span>
                                                            <copy :label="`${ftp_password}`" :value="ftp_password" />
                                                        </div>

                                                        <Button variant="secondary" @click="confirmRequestFtpPassword"
                                                                size="sm" v-else>
                                                            {{ __('Request FTP password') }}
                                                        </Button>
                                                    </TableData>
                                                </TableRow>
                                                <TableRow>
                                                    <TableHeader>{{ __('Creation date') }}</TableHeader>
                                                    <TableData :border="false">{{ site.created_at }}</TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment>
                                <template #title>{{ __('DNS settings') }}</template>
                                <template #subtitle>
                                    {{ __('Setup these DNS records to attach your webhosting to your domain.') }}
                                </template>
                                <template #form>
                                    <form class="space-y-4">
                                        <div class="grid grid-cols-2 gap-4">
                                            <div class="col-span-2 md:col-span-1">
                                                <FormInput label="A" :errors="$page.props.errors.domain"
                                                           :value="mainDnsRecord" />
                                            </div>
                                            <div class="col-span-2 md:col-span-1">
                                                <FormInput label="IP" allow-copy :errors="$page.props.errors.domain"
                                                           :value="ip_address" />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div class="col-span-2 md:col-span-1">
                                                <FormInput label="A" :errors="$page.props.errors.domain"
                                                           :value="`www`" />
                                            </div>
                                            <div class="col-span-2 md:col-span-1">
                                                <FormInput label="IP" allow-copy :errors="$page.props.errors.domain"
                                                           :value="ip_address" />
                                            </div>
                                        </div>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment v-if="site.aliases.length">
                                <template #title>{{ __('DNS settings for aliases') }}</template>
                                <template #subtitle>
                                    {{ __('Setup these DNS records to attach your webhosting to your domain.') }}
                                </template>
                                <template #form>
                                    <form class="space-y-4">
                                        <div class="grid grid-cols-2 gap-4" v-for="alias in site.aliases">
                                            <div class="col-span-2 md:col-span-1">
                                                <FormInput label="A" :errors="$page.props.errors.domain"
                                                           :value="alias" />
                                            </div>
                                            <div class="col-span-2 md:col-span-1">
                                                <FormInput label="IP" allow-copy :errors="$page.props.errors.domain"
                                                           :value="ip_address" />
                                            </div>
                                        </div>
                                    </form>
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
import Form from '@/components/Form.vue'
import FormActions from '@/components/FormActions.vue'
import {useNotification} from '@/hooks/notification'
import Tabs from './Tabs.vue'
import Table from '@/components/Table.vue'
import TableHead from '@/components/TableHead.vue'
import TableHeader from '@/components/TableHeader.vue'
import TableRow from '@/components/TableRow.vue'
import TableBody from '@/components/TableBody.vue'
import TableData from '@/components/TableData.vue'
import Modal from '@/components/Modal.vue'
import ModalContainer from '@/components/ModalContainer.vue'
import Copy from '@/components/Copy.vue'

export default {
    metaInfo() {
        return {
            title: this.site.domain,
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
        FormInput,
        SettingsLayout,
        SettingsSegment,
        Form,
        FormActions,
        Tabs,
        Table,
        TableHead,
        TableHeader,
        TableRow,
        TableBody,
        TableData,
        Modal,
        ModalContainer,
        Copy
    },

    data() {
        return {
            sending: false,

            modalIsOpen: false,

            ftp_password: null,

            form: {
                password: null
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
            ],
        }
    },

    props: {
        site: Object,
        ip_address: String,
        system_user: Object,
    },

    computed: {
        mainDnsRecord() {
            if (this.site.domain.includes('www')) {
                return this.site.domain.replace('www.', '');
            }
            return this.site.domain;
        }
    },

    methods: {
        useNotification,

        confirmRequestFtpPassword() {
            if (!this.$page.props.auth.user.requires_password_for_ftp) {
                this.requestFtpPassword();
            } else {
                this.modalIsOpen = true;
            }
        },

        closeModal() {
            this.form.password = null;
            this.modalIsOpen = false;
            this.$page.props.errors = [];
        },

        requestFtpPassword() {
            this.$page.props.errors = [];

            window.axios.post(this.route('sites.request-ftp-password', this.site.id), this.form)
                .then(response => {
                    if (!response.data.ftp_password) {
                        this.useNotification({
                            variant: 'danger',
                            title: this.__('FTP password'),
                            message: this.__('Unable to retrieve FTP password'),
                        })

                        return;
                    }

                    this.form.password = null;
                    this.modalIsOpen = false;

                    this.ftp_password = response.data.ftp_password;
                })
                .catch(errors => {
                    this.$page.props.errors = errors.response.data.errors;
                })
        }
    }
}
</script>
