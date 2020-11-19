<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs" />

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Dashboard') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <div>
                        <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <li class="p-6 rounded shadow bg-surface-3 transform transition duration-fast ease-in-out hover:scale-95">
                                <inertia-link :href="route('sites.index')" class="flex space-x-4">
                                    <div>
                                        <IconGlobe class="w-6 h-6"/>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-body">{{ sites }}</h3>
                                        <p class="text-medium-emphasis text-small">{{ __('Sites') }}</p>
                                    </div>
                                </inertia-link>
                            </li>
                            <li class="p-6 rounded shadow bg-surface-3 transform transition duration-fast ease-in-out hover:scale-95">
                                <inertia-link :href="route('servers.index')" class="flex space-x-4">
                                    <div>
                                        <IconStorage class="w-6 h-6"/>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-body">{{ servers }}</h3>
                                        <p class="text-medium-emphasis text-small">{{ __('Servers') }}</p>
                                    </div>
                                </inertia-link>
                            </li>
                            <li class="p-6 rounded shadow bg-surface-3 transform transition duration-fast ease-in-out hover:scale-95">
                                <inertia-link :href="$page.props.settings.billing ? route('profile.billing.index') : route('profile.index')" class="flex space-x-4">
                                    <div>
                                        <IconBox class="w-6 h-6"/>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-body">{{ $page.props.auth.package.name }}</h3>
                                        <p class="text-medium-emphasis text-small">{{ __('Package') }}</p>
                                    </div>
                                </inertia-link>
                            </li>
                        </ul>
                    </div>

                    <List>
                        <ListItem v-for="log in logs" :key="log.id">
                            <template #title>
                                {{ log.title }}
                            </template>
                            <template #subtitle>{{ log.description }}</template>
                            <template #suffix><span class="text-medium-emphasis">{{ log.created_at_human }}</span></template>
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

    import { useNotification } from '@/hooks/notification'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Dashboard')}`,
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
            IconBox,
            IconGlobe,
            IconStorage,
        },

        props: {
            sites: Number,
            servers: Number,
            package: Object,
            logs: Array,
        },

        methods: {
            useNotification
        },

        data () {
            return{
                breadcrumbs: [
                    {
                        title: this.$page.props.settings.name,
                        to: '/',
                    },
                    {
                        title: 'Dashboard',
                        to: '/',
                    },
                ],
            }
        },

        mounted() {
            if (this.$page.props.flash.info) {
                useNotification({
                    variant: 'info',
                    title: `Information`,
                    message: this.$page.props.flash.info,
                })
            }
        },
    }
</script>
