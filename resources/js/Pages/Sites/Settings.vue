<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Settings') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :site="site"/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Overview') }}</template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Domain')" :errors="$page.props.errors.domain"
                                                   v-model="form.domain"/>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment>
                                <template #title>{{ __('PHP version') }}</template>
                                <template #subtitle>
                                    {{ __('Change your PHP version here. If you do not have the version available get in touch with support to get this added.') }}
                                </template>
                                <template #form>
                                    <div class="space-y-4">
                                        <FormActions>
                                            <Button class="relative"
                                                :disabled="available_php_version == site.php_version || sending"
                                                @click="changePhpVersion(available_php_version)"
                                                :key="available_php_version"
                                                v-for="available_php_version in available_php_versions">{{ available_php_version }}

                                                <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1" v-if="timeout">
                                                  <span class="animate-ping absolute inline-flex h-full w-full rounded-circle bg-surface-1 opacity-75"></span>
                                                  <span class="relative inline-flex rounded-circle h-3 w-3 bg-success"></span>
                                                </span>
                                            </Button>
                                        </FormActions>
                                    </div>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment v-if="$page.props.auth.integrations.cloudflare">
                                <template #title>{{ __('DNS settings') }}</template>
                                <template #content>
                                    <div class="bg-success text-on-primary p-4 rounded" role="alert">
                                        <p>{{ __('Cloudflare is attached to this domain') }}</p>
                                    </div>
                                </template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput label="Cloudflare zone ID" :errors="$page.props.errors.dns_id"
                                                   v-model="form.dns_id"/>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment v-if="can('sites', 'delete')">
                                <template #title>{{ __('Danger zone') }}</template>
                                <template #content>
                                    <Button @click="confirmDelete" variant="danger">{{ __('Delete') }}</Button>
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
    import FormActions from '@/components/FormActions'
    import {useConfirmDelete} from '@/hooks/confirm-delete'
    import Tabs from './Tabs'

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
        },

        data() {
            return {
                sending: false,
                timeout: null,

                form: {
                    domain: this.site.domain,
                    dns_id: null
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
                        title: this.__('Settings'),
                        to: this.route('sites.show', this.site.id),
                    },
                ],
            }
        },

        props: {
            site: Object,
            available_php_versions: Array
        },

        methods: {
            submit() {
                this.sending = true

                this.$inertia.patch(this.route('sites.settings.update', this.site.id), this.form)
                    .then(() => {
                        this.sending = false;
                    })
            },

            changePhpVersion(version) {
                this.sending = true;

                this.$inertia.patch(this.route('sites.settings.php-version', this.site.id), {
                    version: version
                })
                    .then(() => {
                        this.timeout = setTimeout(() => {
                            this.clearTimeoutInterval();
                            this.sending = false;

                            this.$inertia.replace(this.route('sites.settings.show', this.site.id));
                        }, 3000);
                    })
            },

            confirmDelete() {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__('Your site will be deleted completely, this action is irreversible.'),
                    onConfirm: () => this.delete(),
                })
            },

            delete() {
                this.$inertia.delete(this.route('sites.delete', this.site.id))
            },

            clearTimeoutInterval() {
                clearTimeout(this.timeout);
                this.timeout = null;
            },
        },

        beforeDestroy() {
            this.clearTimeoutInterval();
        }
    }
</script>
