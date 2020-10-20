<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>Cronjobs</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :site="site"/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Create') }}</template>
                                <template #subtitle>
                                    {{ __('Add a new cronjob here to run your background tasks with.') }}
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Command')" :errors="$page.props.errors.command" v-model="form.command"/>
                                        <div>
                                            <label class="inline-block text-small font-medium">
                                                Frequency ({{ convertedFrequency }})
                                            </label>
                                            <div>
                                                <label class="inline-flex items-center">
                                                    <input class="form-radio" type="radio" v-model="form.interval" value="minutely">
                                                    <span class="ml-2">Every minute</span>
                                                </label>
                                            </div>

                                            <div>
                                                <label class="inline-flex items-center">
                                                    <input type="radio" class="form-radio" name="radio" v-model="form.interval" value="hourly">
                                                    <span class="ml-2">Hourly</span>
                                                </label>
                                            </div>

                                            <div>
                                                <label class="inline-flex items-center">
                                                    <input type="radio" class="form-radio" name="radio" v-model="form.interval" value="nightly">
                                                    <span class="ml-2">Nightly (2AM)</span>
                                                </label>
                                            </div>

                                            <div>
                                                <label class="inline-flex items-center">
                                                    <input type="radio" class="form-radio" name="radio" v-model="form.interval" value="weekly">
                                                    <span class="ml-2">Weekly</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                                    <input type="radio" class="form-radio" name="radio" v-model="form.interval" value="monthly">
                                                    <span class="ml-2">Monthly</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center">
                                                    <input type="radio" class="form-radio" name="radio" v-model="form.interval" value="custom">
                                                    <span class="ml-2">Custom</span>
                                                </label>
                                            </div>

                                            <FormInput helper-text="min | hour | day/month | month | day/week" v-show="form.interval === 'custom'" v-model="form.frequency" :errors="$page.props.errors.frequency" :label="__('Custom frequency')"></FormInput>
                                        </div>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <EmptyImage v-if="!cronjobs.meta.total" />

                            <SettingsSegment v-if="cronjobs.meta.total">
                                <template #title>{{ __('Cronjobs') }}</template>
                                <template #content>
                                    <div>
                                        <Table caption="Cronjob list overview">
                                            <TableHead>
                                                <TableRow>
                                                    <TableHeader></TableHeader>
                                                    <TableHeader>{{ __('Command') }}</TableHeader>
                                                    <TableHeader>{{ __('Frequency') }}</TableHeader>
                                                    <TableHeader></TableHeader>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow v-for="cronjob in cronjobs.data" :key="cronjob.id">
                                                    <TableData><StatusBubble :variant="cronjob.status === 'busy' ? 'gray' : 'success'"/></TableData>
                                                    <TableData>{{ cronjob.command }}</TableData>
                                                    <TableData>{{ cronjob.frequency }}</TableData>
                                                    <TableData>
                                                        <Button :disabled="cronjob.status === 'busy'" variant="danger" size="sm"
                                                                @click="confirmDelete(cronjob)">
                                                            {{ __('Delete') }}
                                                        </Button>
                                                    </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <pagination :links="cronjobs"/>
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
    import EmptyImage from '@/components/EmptyImage'
    import FormActions from '@/components/FormActions'
    import {useNotification} from '@/hooks/notification'
    import {useConfirmDelete} from '@/hooks/confirm-delete'
    import Tabs from './Tabs'
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'

    export default {
        metaInfo() {
            return {
                title: `Cronjobs - ${this.site.domain}`,
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
            Pagination,
            Tabs,
            Table,
            TableHead,
            TableHeader,
            TableRow,
            TableBody,
            TableData,
            EmptyImage
        },

        data() {
            return {
                sending: false,

                form: {
                    command: `php /home/${this.$page.props.auth.user.user_name}/${this.site.domain}/script.php`,
                    interval: 'minutely',
                    frequency: '* * * * *',
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
                        title: this.__('Cronjobs'),
                        to: this.route('sites.cronjobs.index', this.site.id),
                    },
                ],
            }
        },

        mounted() {
            if(this.shouldBePolling){
                this.startPollingInterval();
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

        computed: {
            shouldBePolling() {
                return !!this.cronjobs.data.filter((cronjob) => {
                    return cronjob.status === 'busy';
                }).length;
            },
            convertedFrequency: function () {
                if (this.form.interval === 'minutely') {
                    return this.form.frequency = '* * * * *';
                } else if (this.form.interval === 'hourly') {
                    return this.form.frequency = '0 * * * *';
                } else if (this.form.interval === 'nightly') {
                    return this.form.frequency = '0 2 * * *';
                } else if (this.form.interval === 'weekly') {
                    return this.form.frequency = '0 0 * * 0';
                } else if (this.form.interval === 'monthly') {
                    return this.form.frequency = '0 0 1 * *';
                } else {
                    return this.form.frequency;
                }
            }
        },

        props: {
            site: Object,
            cronjobs: Object,
        },

        methods: {
            useNotification,

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
                this.$inertia.replace(this.route('sites.cronjobs.index', this.site.id), {
                    only: ['cronjobs'],
                    preserveScroll: true,
                })
            },

            submit() {
                this.sending = true

                this.$inertia.post(this.route('sites.cronjobs.store', this.site.id), this.form)
                    .then(() => {
                        this.sending = false

                        if (!Object.keys(this.$page.props.errors).length) {
                            this.form = {
                                command: `php /home/${this.$page.props.auth.user.user_name}/domain.com/script.php`,
                                interval: 'minutely',
                                frequency: '* * * * *',
                            }
                        }
                    })
            },

            confirmDelete(cronjob) {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__('Your cronjob will be deleted permanently, this action cannot be undone.'),
                    onConfirm: () => this.delete(cronjob),
                })
            },

            delete(cronjob) {
                this.$inertia.delete(this.route('sites.cronjobs.delete', [this.site.id, cronjob.id]), {
                    preserveScroll: true
                })
            }
        },

        beforeDestroy(){
            this.clearPollingInterval();
        }
    }
</script>
