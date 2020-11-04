<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Edit article') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Edit') }}</template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Title')" :errors="$page.props.errors.title"
                                                   v-model="form.title"/>
                                        <FormSelect :label="__('Category')" :errors="$page.props.errors.category_id" v-model="form.category_id">
                                            <option v-for="(title, id) in categories" :value="id" v-text="title"></option>
                                        </FormSelect>
                                        <FormTextarea rows="10" :label="__('Content')" :errors="$page.props.errors.content"
                                                      v-model="form.content"/>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                        </FormActions>
                                    </form>
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
import TopBar from './../../components/TopBar'
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
import FormSelect from '@/components/forms/FormSelect'
import FormTextarea from '@/components/forms/FormTextarea'
import Form from '@/components/Form'
import FormActions from '@/components/FormActions'
import Tabs from './../Tabs'

export default {
    metaInfo() {
        return {
            title: `${this.__('Edit article')}`,
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
        FormTextarea,
        SettingsLayout,
        SettingsSegment,
        Form,
        FormSelect,
        FormActions,
        Tabs,
    },

    props: {
        article: Object,
        categories: Object,
    },

    data() {
        return {
            sending: false,

            form: {
                title: this.article.title,
                content: this.article.content,
                category_id: this.article.documentation_category_id,
            },
        }
    },

    methods: {
        submit() {
            this.$inertia.patch(this.route('admin.documentation.articles.update', this.article.id), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
            });
        }
    }
}
</script>
