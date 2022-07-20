<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Create article') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs/>
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Create') }}</template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Title')" :errors="$page.props.errors.title"
                                                   v-model="form.title"/>
                                        <FormSelect :label="__('Category')" :errors="$page.props.errors.category_id" v-model="form.category_id">
                                            <option v-for="(title, id) in categories" :value="id" v-text="title"></option>
                                        </FormSelect>
                                        <FormTextarea rows="10" :helper-text="__('You may use markdown in this field for markup')" :label="__('Content')"
                                                      :errors="$page.props.errors.content" v-model="form.content"/>

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
import TopBar from './../../components/TopBar.vue'
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
import FormSelect from '@/components/forms/FormSelect.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'
import Form from '@/components/Form.vue'
import FormActions from '@/components/FormActions.vue'
import Tabs from './../Tabs.vue'

export default {
    metaInfo() {
        return {
            title: `${this.__('Create article')}`,
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
        FormActions,
        Tabs,
        FormSelect,
    },

    props: {
        categories: Object
    },

    data() {
        return {
            sending: false,

            form: {
                title: null,
                description: null,
                category_id: null,
            },
        }
    },

    methods: {
        submit() {
            this.$inertia.post(this.route('admin.documentation.articles.store'), this.form, {
                onStart: () => this.sending = true,
                onFinish: () => this.sending = false,
            });
        }
    }
}
</script>
