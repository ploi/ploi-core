<template>
    <Page>
        <Portal to="modals" v-if="can('sites', 'create')">
            <ModalContainer>
                <Modal @close="closeModal" v-if="modalIsOpen" @submit="submit">
                    <template #title>{{ __('Create a site') }}</template>

                    <template #form>
                        <FormInput :label="__('Domain')" :errors="$page.props.errors.domain" v-model="form.domain"/>

                        <FormSelect v-if="Object.keys(availableServers).length" :label="__('Select server')" v-model="form.server_id">
                            <option :value="`${null}`">{{ __('Select random server') }}</option>
                            <option v-for="(name, id) in availableServers" :value="id" v-text="name"></option>
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
                        <PageHeaderTitle>{{ __('Sites') }}</PageHeaderTitle>
                    </template>
                    <template v-if="can('sites', 'create')" #end>
                        <Button @click="modalIsOpen = true">{{ __('Create site') }}</Button>
                    </template>
                </PageHeader>

                <PageBody>
                    <EmptyImage v-if="!sites.meta.total" />

                    <List>
                        <ListItem v-for="site in sites.data" :key="site.id">
                            <template #prefix>
                                <StatusBubble :variant="site.status === 'busy' ? 'gray' : 'success'"/>
                            </template>
                            <template #title>
                                <inertia-link class="text-primary font-medium" :href="route('sites.show', site.id)">
                                    {{ site.domain }}
                                </inertia-link>
                            </template>
                            <template v-if="site.project === 'wordpress'" #subtitle>WordPress installed</template>
                            <template #suffix>
                                <Dropdown v-slot="{ isOpen, toggle, position }">
                                    <IconButton @click="toggle">
                                        <IconMore class="w-5 h-5" />
                                    </IconButton>

                                    <DropdownList :position="position" v-if="isOpen">
                                        <DropdownListItem :to="route('sites.show', site.id)">{{ __('View') }}</DropdownListItem>
                                        <DropdownListItemButton v-if="can('sites', 'delete')" class="text-danger" @click="confirmDelete(site)">{{ __('Delete') }}</DropdownListItemButton>
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
    import EmptyImage from '@/components/EmptyImage'
    import IconBox from '@/components/icons/IconBox'
    import IconGlobe from '@/components/icons/IconGlobe'
    import IconStorage from '@/components/icons/IconStorage'
    import IconButton from '@/components/IconButton'
    import IconMore from '@/components/icons/IconMore'
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
                title: `${this.__('Sites')}`,
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
            EmptyImage,
            IconBox,
            IconGlobe,
            IconStorage,
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
            sites: Object,
            availableServers: [Array, Object]
        },

        computed: {
            shouldBePolling() {
                return !!this.sites.data.filter((site) => {
                    return site.status === 'busy';
                }).length;
            }
        },

        mounted(){
            if(this.shouldBePolling){
                this.startPollingInterval();
            }

            // If it includes a create true parameter, then we open the creation modal
            if(window.location.search.includes('create=true')){
                this.modalIsOpen = true;
            }
            if(window.location.search.includes('server=')){
                let urlParams = new URLSearchParams(window.location.search);

                this.form.server_id = urlParams.get('server');
            }
        },

        watch: {
            shouldBePolling: function (value) {
                if (!value) {
                    this.clearPollingInterval();

                    return;
                }

                if(!this.pollingInterval){
                    this.startPollingInterval();
                }
            }
        },

        data() {
            return {
                form: {
                    domain: null,
                    server_id: null,
                },

                pollingInterval: null,

                modalIsOpen: false,
                breadcrumbs: [
                    {
                        title: this.$page.props.settings.name,
                        to: '/',
                    },
                    {
                        title: this.__('Sites'),
                        to: this.route('sites.index'),
                    },
                ],
            }
        },

        methods: {
            startPollingInterval(){
                this.pollingInterval = setInterval(function () {
                    this.poll();
                }.bind(this), 3000);
            },

            clearPollingInterval(){
                clearTimeout(this.pollingInterval);
                this.pollingInterval = null;
            },

            poll() {
                this.$inertia.replace(this.route('sites.index'), {
                    only: ['sites'],
                    preserveScroll: true,
                })
            },

            closeModal() {
                this.modalIsOpen = false;
                this.form.domain = null;
                this.$page.props.errors = [];
            },

            submit() {
                this.$inertia.post(this.route('sites.store'), this.form, {
                    only: ['errors', 'flash', 'sites'],
                    onFinish: () => {
                        if (!Object.keys(this.$page.props.errors).length) {
                            this.form.domain = null;
                            this.form.server_id = null;
                            this.modalIsOpen = false;
                        }
                    }
                });
            },

            confirmDelete(site) {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__('Your site will be deleted completely, this action is irreversible.'),
                    onConfirm: () => this.delete(site),
                })
            },

            delete(site) {
                this.$inertia.delete(this.route('sites.delete', site.id))
            }
        },

        beforeDestroy(){
            this.clearPollingInterval();
        }
    }
</script>
