<template>
    <Page>
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
