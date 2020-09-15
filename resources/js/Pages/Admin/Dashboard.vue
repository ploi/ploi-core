<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Administration') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs />
                        </template>
                        <template #segments>
                            <div>
                                <ul class="grid grid-cols-3 gap-4">
                                    <li class="p-6 rounded shadow bg-surface-3">
                                        <div class="flex space-x-4">
                                            <div>
                                                <IconHarddisk class="w-6 h-6"/>
                                            </div>
                                            <div>
                                                <h3 class="font-semibold text-body" v-text="servers"></h3>
                                                <p class="text-medium-emphasis text-small">{{ __('Servers') }}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="p-6 rounded shadow bg-surface-3">
                                        <div class="flex space-x-4">
                                            <div>
                                                <IconGlobe class="w-6 h-6"/>
                                            </div>
                                            <div>
                                                <h3 class="font-semibold text-body" v-text="sites"></h3>
                                                <p class="text-medium-emphasis text-small">{{ __('Sites') }}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="p-6 rounded shadow bg-surface-3">
                                        <div class="flex space-x-4">
                                            <div>
                                                <IconPerson class="w-6 h-6"/>
                                            </div>
                                            <div>
                                                <h3 class="font-semibold text-body" v-text="users"></h3>
                                                <p class="text-medium-emphasis text-small">{{ __('Users') }}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2>{{ __('Recent logs') }}</h2>
                                <List>
                                    <ListItem v-for="log in logs" :key="log.id">
                                        <template #title>
                                            {{ log.title }}
                                        </template>
                                        <template #subtitle>{{ log.description }}</template>
                                        <template #suffix>{{ log.created_at_human }}</template>
                                    </ListItem>
                                </List>
                            </div>

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
    import Tabs from './Tabs'
    import IconPerson from '@/components/icons/IconPerson'
    import IconGlobe from '@/components/icons/IconGlobe'
    import IconStorage from '@/components/icons/IconStorage'
    import IconHarddisk from '@/components/icons/IconHarddisk'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Administration')}`,
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
            IconPerson,
            IconGlobe,
            IconStorage,
            IconHarddisk,
        },

        props: {
            servers: Number,
            sites: Number,
            users: Number,
            logs: Array,
        }
    }
</script>
