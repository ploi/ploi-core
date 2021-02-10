<template>
    <Page>
        <Portal to="modals" v-if="can('servers', 'create')">
            <ModalContainer>
                <Modal @close="modalIsOpen = false" v-if="modalIsOpen" @submit="submit">
                    <template #title>{{ __('Create a server') }}</template>

                    <template #form>
                        <FormInput :loading="loading" :label="__('Name')" placeholder="webserver-01"
                                   :errors="$page.props.errors.name" v-model="form.name"/>

                        <FormSelect :loading="loading" :errors="$page.props.errors.provider" :label="__('Select provider')"
                                    v-model="form.provider">
                            <option :value="`${null}`">{{ __('Select random provider') }}</option>
                            <option v-for="(name, id) in providers" :value="id">{{ name }}</option>
                        </FormSelect>

                        <FormSelect :loading="loading" :errors="$page.props.errors.region" :label="__('Select region')"
                                    v-model="form.region">
                            <option :value="`${null}`">{{ __('Select random region') }}</option>
                            <option v-for="(name, id) in regions" :value="id">{{ name }}</option>
                        </FormSelect>

                        <FormSelect :loading="loading" :errors="$page.props.errors.plan" :label="__('Select plan')"
                                    v-model="form.plan">
                            <option :value="`${null}`">{{ __('Select random plan') }}</option>
                            <option v-for="(name, id) in plans" :value="id">{{ name }}</option>
                        </FormSelect>
                    </template>

                    <template #form-actions>
                        <Button v-text="__('Create')"></Button>
                    </template>
                </Modal>
            </ModalContainer>
        </Portal>

        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Servers') }}</PageHeaderTitle>
                    </template>
                    <template #end v-if="can('servers', 'create')">
                        <Button @click="modalIsOpen = true">{{ __('Create server') }}</Button>
                    </template>
                </PageHeader>

                <PageBody>
                    <EmptyImage v-if="!servers.meta.total"/>
                    <List>
                        <ListItem v-for="server in servers.data" :key="server.id">
                            <template #prefix>
                                <StatusBubble :variant="server.status === 'busy' ? 'gray' : 'success'"/>
                            </template>
                            <template #title>
                                <inertia-link class="text-primary font-medium" :href="route('servers.show', server.id)">
                                    {{ server.name }}
                                </inertia-link>
                            </template>
                            <template #subtitle>{{ server.ip }} <span v-if="server.ip">&centerdot;</span>
                                {{ server.sites_count }} {{ __choice('site|sites', server.sites_count) }}
                            </template>
                            <template #suffix>
                                <Dropdown v-slot="{ isOpen, toggle, position }">
                                    <IconButton @click="toggle">
                                        <IconMore class="w-5 h-5"/>
                                    </IconButton>

                                    <DropdownList :position="position" v-if="isOpen">
                                        <DropdownListItem :to="route('servers.show', server.id)">View</DropdownListItem>
                                        <DropdownListItemButton v-if="can('servers', 'delete')" class="text-danger"
                                                                @click="confirmDelete(server)">
                                            Delete
                                        </DropdownListItemButton>
                                    </DropdownList>
                                </Dropdown>
                            </template>
                        </ListItem>
                    </List>
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
import IconButton from '@/components/IconButton'
import IconMore from '@/components/icons/IconMore'
import EmptyImage from '@/components/EmptyImage'
import Modal from '@/components/Modal'
import ModalContainer from '@/components/ModalContainer'
import FormInput from '@/components/forms/FormInput'
import FormSelect from '@/components/forms/FormSelect'
import FormActions from '@/components/FormActions'
import Dropdown from '@/components/Dropdown'
import DropdownList from '@/components/DropdownList'
import DropdownListItem from '@/components/DropdownListItem'
import DropdownListItemButton from '@/components/DropdownListItemButton'
import {useConfirmDelete} from '@/hooks/confirm-delete'

export default {
    metaInfo() {
        return {
            title: `${this.__('Servers')}`,
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
        IconButton,
        IconMore,
        ListItem,
        StatusBubble,
        NotificationBadge,
        IconBox,
        IconGlobe,
        IconStorage,
        EmptyImage,
        Modal,
        ModalContainer,
        FormInput,
        FormActions,
        FormSelect,
        Dropdown,
        DropdownList,
        DropdownListItem,
        DropdownListItemButton
    },

    props: {
        servers: Object,
        dataProviders: [Array, Object],
    },

    computed: {
        shouldBePolling() {
            return !!this.servers.data.filter((server) => {
                return server.status === 'busy';
            }).length;
        }
    },

    mounted() {
        if (this.shouldBePolling) {
            this.startPollingInterval();
        }
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
        },

        'form.provider': function (value) {
            // Reset values if null
            if (!value) {
                this.regions = [];
                this.plans = [];
                return;
            }

            this.loading = true;

            window.axios.get(this.route('servers.plans-and-regions', value))
                .then(response => {
                    this.loading = false;
                    this.regions = response.data.regions;
                    this.plans = response.data.plans;
                })
                .catch(error => {
                    this.loading = false;
                })
        }
    },

    data() {
        return {
            loading: false,

            form: {
                name: null,
                provider: null,
                region: null,
                plan: null,
            },

            providers: this.dataProviders,
            regions: [],
            plans: [],

            pollingInterval: null,

            modalIsOpen: false,
            breadcrumbs: [
                {
                    title: this.$page.props.settings.name,
                    to: '/',
                },
                {
                    title: this.__('Servers'),
                    to: this.route('servers.index'),
                },
            ],
        }
    },

    methods: {
        startPollingInterval() {
            this.pollingInterval = setInterval(function () {
                this.poll();
            }.bind(this), 120000);
        },

        clearPollingInterval() {
            clearTimeout(this.pollingInterval);
            this.pollingInterval = null;
        },

        poll() {
            this.$inertia.replace(this.route('servers.index'), {
                only: ['servers'],
                preserveScroll: true,
            })
        },

        submit() {
            this.$inertia.post(this.route('servers.store'), this.form, {
                only: ['errors', 'flash', 'servers'],
                onStart: () => this.loading = true,
                onSuccess: () => {
                    if (!Object.keys(this.$page.props.errors).length) {
                        this.form.domain = null;
                        this.modalIsOpen = false;

                        this.form = {
                            name: null,
                            provider: null,
                            region: null,
                            plan: null,
                        }
                    }
                },
                onFinish: () => this.loading = false
            });
        },

        confirmDelete(server) {
            useConfirmDelete({
                title: this.__('Are you sure?'),
                message: `Your server will be deleted completely, this action is irreversible.`,
                onConfirm: () => this.delete(server),
            })
        },

        delete(server) {
            this.$inertia.delete(this.route('servers.delete', server.id))
        }
    },

    beforeDestroy() {
        this.clearPollingInterval();
    }
}
</script>
