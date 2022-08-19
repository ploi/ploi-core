<template>
    <Page>
        <Head><title>{{ __('We were unable to find this page.') }}</title></Head>
        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>Page not found</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <div class="space-y-4">
                        <p>We were unable to find this page.</p>

                        <p>
                            <a class="text-primary" href="/">Go home</a>
                        </p>
                    </div>
                </PageBody>
            </Container>
        </Content>
    </Page>
</template>

<script>
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

export default {
    layout: MainLayout,

    components: {
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
    }
}
</script>
