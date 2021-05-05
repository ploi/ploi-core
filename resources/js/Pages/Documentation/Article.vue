<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ article.title }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :items="items.data" />
                        </template>
                        <template #segments>
                            <div class="prose" v-html="article.content"></div>
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
import EmptyImage from '@/components/EmptyImage'
import List from '@/components/List'
import ListItem from '@/components/ListItem'
import StatusBubble from '@/components/StatusBubble'
import NotificationBadge from '@/components/NotificationBadge'
import MainLayout from '@/Layouts/MainLayout'
import IconBox from '@/components/icons/IconBox'
import IconGlobe from '@/components/icons/IconGlobe'
import IconStorage from '@/components/icons/IconStorage'
import Modal from '@/components/Modal'
import ModalContainer from '@/components/ModalContainer'
import FormInput from '@/components/forms/FormInput'
import FormTextarea from '@/components/forms/FormTextarea'
import FormActions from '@/components/FormActions'
import SettingsSegment from '@/components/SettingsSegment'
import SettingsLayout from '@/components/layouts/SettingsLayout'
import Tabs from './Tabs';

export default {
    metaInfo() {
        return {
            title: this.article.title,
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
        Modal,
        ModalContainer,
        FormInput,
        FormTextarea,
        FormActions,
        EmptyImage,
        Tabs,
        SettingsLayout,
        SettingsSegment
    },

    props: {
        category: Object,
        items: Object,
        article: Object,
    },

    data() {
        return {
            breadcrumbs: [
                {
                    title: this.$page.props.settings.name,
                    to: '/',
                },
                {
                    title: this.__('Documentation'),
                    to: this.route('documentation.index'),
                },
                {
                    title: this.category.title,
                    to: this.route('documentation.show', this.category.id),
                },
                {
                    title: this.article.title,
                    to: this.route('documentation.article.show', [this.category.id, this.article.id]),
                },
            ],
        }
    },
}
</script>
