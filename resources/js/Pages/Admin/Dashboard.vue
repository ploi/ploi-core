<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Administration') }} XYZ</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout space="space-y-0">
                        <template #nav>
                            <Tabs class="mb-16" />
                        </template>
                        <template #segments>
                            <div class="mb-16">
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

                            <div class="pb-4">
                                <h2>{{ __('Recent logs') }}</h2>
                                <List>
                                    <ListItem v-for="log in logs.data" :key="log.id">
                                        <template #title>
                                            {{ log.title }}
                                        </template>
                                        <template #subtitle>{{ log.description }}</template>
                                        <template #suffix>{{ log.created_at_human }}</template>
                                    </ListItem>
                                </List>
                            </div>
                            <pagination :links="logs"/>
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
import Pagination from '@/components/Pagination.vue'
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
import IconPerson from '@/components/icons/IconPerson.vue'
import IconGlobe from '@/components/icons/IconGlobe.vue'
import IconStorage from '@/components/icons/IconStorage.vue'
import IconHarddisk from '@/components/icons/IconHarddisk.vue'

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
            Pagination,
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
            logs: [Array, Object],
        }
    }
</script>
