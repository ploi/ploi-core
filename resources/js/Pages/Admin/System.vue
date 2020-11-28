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
                                    <p>{{ __('Remote version') }}: {{ version.remote }}</p>

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
    import {useNotification} from '@/hooks/notification'
    import Tabs from './Tabs'

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
            version: Object
        },

        data() {
            return {
                sending: false,
                updating: false,
            }
        },

        methods: {
            useNotification,
        }
    }
</script>
