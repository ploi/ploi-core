<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('System') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Overview') }}</template>
                                <template #subtitle>
                                    Check your system's version here. If there's an update available you'll be able to
                                    press the update button to update your system.
                                </template>

                                <template #content>
                                    <p>{{ __('Current version') }}: {{ version.current }}</p>
                                    <p>
                                        {{ __('Remote version') }}: {{ version.remote }}
                                        <button class="text-primary" type="button" v-on:click="refreshVersions">{{ 'Refresh' }}</button>
                                    </p>
                                    <p>Horizon worker status: <span v-if="horizonRunning" class="text-success">Active</span><span v-else class="text-danger">Inactive</span></p>

                                    <div v-if="version.out_of_date && !updating" class="bg-primary text-on-primary px-4 py-3 rounded relative space-y-2" role="alert">
                                        <strong class="font-bold">Update available</strong>
                                        <p class="block">
                                            An update is available for your system, please upgrade.
                                        </p>

                                        <a class="block font-bold underline" href="https://docs.ploi-core.io/digging-deeper/manual-update" target="_blank">Find out how to upgrade here</a>
                                    </div>
                                </template>
                            </SettingsSegment>

                            <SettingsSegment>
                                <template #title>{{ __('Information') }}</template>

                                <template #content>
                                    <ul class="list-disc list-inside">
                                        <li><a target="_blank" class="text-primary" href="https://docs.ploi-core.io">Ploi Core Docs</a></li>
                                        <li><a target="_blank" class="text-primary" href="https://ploi.io">Ploi Website</a></li>
                                        <li><a target="_blank" class="text-primary" href="https://ploi.io/panel">Ploi Panel</a></li>
                                        <li><a target="_blank" class="text-primary" href="https://github.com/ploi-deploy/ploi-core">Ploi Core Github Repository</a></li>
                                    </ul>
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

export default {
        metaInfo() {
            return {
                title: `${this.__('System')}`,
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
            Tabs
        },

        props: {
            version: Object,
            horizonRunning: Boolean
        },

        data() {
            return {
                sending: false,
                updating: false,
            }
        },

        methods: {
            useNotification,

            refreshVersions() {
                this.$inertia.get(this.route('admin.system') + '?flush=true');
            }
        }
    }
</script>
