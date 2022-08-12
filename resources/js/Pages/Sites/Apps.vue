<template>
    <Page>
        <Head><title>{{ __('App') }}</title></Head>
        <TopBar :breadcrumbs="breadcrumbs" />

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Apps') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :site="site" />
                        </template>
                        <template #segments>
                            <SettingsSegment v-if="site.project">
                                <template #title>{{ __('Overview') }}</template>
                                <template #subtitle>
                                    {{ __('You currently have :application installed.', {application: site.project}) }}
                                </template>

                                <template #content>
                                    <Button variant="danger" @click="uninstall">{{ __('Uninstall') }}</Button>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment v-if="!site.project">
                                <template #title>{{ __('Overview') }}</template>
                                <template #subtitle>
                                    {{ __('You have the ability here to directly install one of these applications on the fly.') }}
                                </template>
                                <template #content>
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <Button :variant="type === 'wordpress' ? 'primary' : 'secondary'"
                                                @click="prepareInstall('wordpress')">{{ __('Install WordPress') }}
                                        </Button>
                                        <Button :variant="type === 'nextcloud' ? 'primary' : 'secondary'"
                                                @click="prepareInstall('nextcloud')">{{ __('Install Nextcloud') }}
                                        </Button>
                                        <Button :variant="type === 'october-cms' ? 'primary' : 'secondary'"
                                                @click="prepareInstall('october-cms')">{{ __('Install October CMS') }}
                                        </Button>
                                    </div>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment v-if="type === 'wordpress'">
                                <template #title>{{ __('WordPress') }}</template>
                                <template #subtitle>{{ __('WordPress is open source software you can use to create a beautiful website, blog, or app.') }}</template>
                                <template #content>
                                    <div>
                                        <input id="create_database" class="form-checkbox" type="checkbox"
                                               v-model="options.create_database">
                                        <label for="create_database" class="ml-2 text-sm">{{ __('Create database & attach to WordPress') }}</label>
                                        <p class="text-small mt-1 text-medium-emphasis">
                                            {{ __('This will also create a database and attach it directly for you so you have a easy start.') }}
                                        </p>
                                    </div>

                                    <Button @click="install">{{ __('Start installation') }}</Button>
                                    <Button variant="secondary" @click="type = null">{{ __('Cancel') }}</Button>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment v-if="type === 'nextcloud'">
                                <template #title>{{ __('Nextcloud') }}</template>
                                <template #subtitle>{{ __('Nextcloud is a suite of client-server software for creating and using file hosting services, it is comparable to Dropbox.') }}</template>
                                <template #content>
                                    <Button @click="install">{{ __('Start installation') }}</Button>
                                    <Button variant="secondary" @click="type = null">{{ __('Cancel') }}</Button>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment v-if="type === 'october-cms'">
                                <template #title>{{ __('October CMS') }}</template>
                                <template #subtitle>{{ __('October is a free, open-source and self-hosted content management system (CMS) based on the PHP programming language and Laravel web application framework.') }}</template>
                                <template #content>
                                    <Button @click="install">{{ __('Start installation') }}</Button>
                                    <Button variant="secondary" @click="type = null">{{ __('Cancel') }}</Button>
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
    },

    data() {
        return {
            sending: false,

            type: null,
            options: {
                create_database: false,
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
                    title: this.__('Apps'),
                    to: this.route('sites.apps.index', this.site.id),
                },
            ],
        }
    },

    props: {
        site: Object,
    },

    methods: {
        prepareInstall(type) {
            this.type = type;
        },

        install() {
            this.$inertia.post(this.route('sites.apps.store', this.site.id), {
                type: this.type,
                options: this.options
            }, {
                onFinish: () => {
                    this.type = null
                }
            });
        },

        uninstall() {
            this.$inertia.delete(this.route('sites.apps.delete', this.site.id))
        }
    }
}
</script>
