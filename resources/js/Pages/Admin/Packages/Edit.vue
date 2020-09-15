<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Edit package') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs />
                        </template>
                        <template #segments>
                            <SettingsSegment>
                                <template #title>{{ __('Edit') }}</template>
                                <template #form>
                                    <form class="space-y-4" @submit.prevent="submit">
                                        <FormInput :label="__('Name')" :errors="$page.errors.name" v-model="form.name" />
                                        <FormInput :label="__('Maximum sites')" type="number" min="0" :errors="$page.errors.maximum_sites" v-model="form.maximum_sites" />

                                        <div>
                                            <input id="server_creation" class="form-checkbox" type="checkbox"
                                                   v-model="form.server_creation">
                                            <label for="server_creation" class="ml-2 text-sm">{{ __('Allow server creation') }}</label>
                                            <p class="text-small mt-1 text-medium-emphasis">
                                                {{ __('This will allow users to create servers') }}
                                            </p>
                                        </div>

                                        <FormActions>
                                            <Button>{{ __('Save changes') }}</Button>
                                            <Button variant="danger" type="button" @click="confirmDelete">{{ __('Delete') }}</Button>
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
    import TopBar from './../components/TopBar'
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
    import Form from '@/components/Form'
    import FormActions from '@/components/FormActions'
    import { useConfirmDelete } from '@/hooks/confirm-delete'
    import Tabs from './Tabs'

    export default {
        metaInfo() {
            return {
                title: `${this.__('Edit package')}`,
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
            FormSelect,
            SettingsLayout,
            SettingsSegment,
            Form,
            FormActions,
            Tabs,
        },

        data() {
            return {
                sending: false,

                form: {
                    name: this.package.name,
                    maximum_sites: this.package.maximum_sites,
                    server_creation: this.package.server_creation,
                },
            }
        },

        props: {
            package: Object,
        },

        methods: {
            submit() {
                this.sending = true

                this.$inertia.patch(this.route('admin.packages.update', this.package.id), this.form)
                    .then(() => this.sending = false)
            },

            confirmDelete() {
                useConfirmDelete({
                    title: this.__('Are you sure?'),
                    message: this.__('Are you sure you want to delete this package? Everything associated with this package will be detached.'),
                    onConfirm: () => this.delete(),
                })
            },

            delete() {
                this.sending = true

                this.$inertia.delete(this.route('admin.packages.destroy', this.package.id))
                    .then(() => this.sending = false)
            }
        }
    }
</script>
