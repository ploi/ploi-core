<template>
    <Page>
        <TopBar :breadcrumbs="breadcrumbs"/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ category.title }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs :items="items.data" />
                        </template>
                        <template #segments>
                            <ul class="list-disc list-inside">
                                <li v-for="article in articles">
                                    <inertia-link class="text-primary" :href="route('documentation.article.show', [category.id, article.id])">{{ article.title }}</inertia-link>
                                </li>
                            </ul>
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
import EmptyImage from '@/components/EmptyImage.vue'
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'
import StatusBubble from '@/components/StatusBubble.vue'
import NotificationBadge from '@/components/NotificationBadge.vue'
import MainLayout from '@/Layouts/MainLayout.vue'
import IconBox from '@/components/icons/IconBox.vue'
import IconGlobe from '@/components/icons/IconGlobe.vue'
import IconStorage from '@/components/icons/IconStorage.vue'
import Modal from '@/components/Modal.vue'
import ModalContainer from '@/components/ModalContainer.vue'
import FormInput from '@/components/forms/FormInput.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'
import FormActions from '@/components/FormActions.vue'
import SettingsSegment from '@/components/SettingsSegment.vue'
import SettingsLayout from '@/components/layouts/SettingsLayout.vue'
import Tabs from './Tabs.vue'

export default {
    metaInfo() {
        return {
            title: this.category.title,
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
        articles: Array,
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
            ],
        }
    },

}
</script>
