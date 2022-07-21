<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Edit provider') }}</PageHeaderTitle>
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
                                        <FormInput :label="__('Name')" :errors="$page.props.errors.name" v-model="form.name" />

                                        <div class="space-y-4">
                                            <h3 class="text-base leading-6 font-medium border-b border-dotted border-medium-emphasis pb-1">
                                                {{ __('Allowed plans') }}</h3>

                                            <p class="text-medium-emphasis">
                                                Select the plans here that your users are allowed to use for this provider.
                                                If there are no plans selected, all will be available.
                                            </p>

                                            <div>
                                                <div class="space-y-1" v-for="(name, id) in availablePlans">
                                                    <input :id="`plan-${id}`" :value="id" v-model="form.allowed_plans"
                                                           class="form-checkbox" type="checkbox">
                                                    <label :for="`plan-${id}`" class="ml-2 text-sm">{{ name }}</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="space-y-4">
                                            <h3 class="text-base leading-6 font-medium border-b border-dotted border-medium-emphasis pb-1">
                                                {{ __('Allowed regions') }}</h3>

                                            <p class="text-medium-emphasis">
                                                Select the regions here that your users are allowed to use for this provider.
                                                If there are no regions selected, all will be available.
                                            </p>

                                            <div>
                                                <div class="space-y-1" v-for="(name, id) in availableRegions">
                                                    <input :id="`region-${id}`" :value="id" v-model="form.allowed_regions"
                                                           class="form-checkbox" type="checkbox">
                                                    <label :for="`region-${id}`" class="ml-2 text-sm">{{ name }}</label>
                                                </div>
                                            </div>
                                        </div>

                                        <FormActions>
                                            <Button>{{ __('Save') }}</Button>
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
    import FormTextarea from '@/components/forms/FormTextarea'
    import FormSelect from '@/components/forms/FormSelect'
    import Form from '@/components/Form'
    import FormActions from '@/components/FormActions'
    import {useConfirm} from '@/hooks/confirm'
    import Tabs from './../Tabs'
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'

    export default {
        layout: MainLayout,

        metaInfo() {
            return {
                title: `${this.__('Edit provider')}`,
            }
        },

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
            FormTextarea,
            Table,
            TableHead,
            TableHeader,
            TableRow,
            TableBody,
            TableData,
        },

        data() {
            return {
                sending: false,

                form: {
                    name: this.provider.name,
                    allowed_plans: this.provider.allowed_plans ?? [],
                    allowed_regions: this.provider.allowed_regions ?? [],
                },
            }
        },

        props: {
            provider: Object,
            availableRegions: [Object, Array],
            availablePlans: [Object, Array]
        },

        methods: {
            submit() {
                this.$inertia.patch(this.route('admin.services.providers.update', this.provider.id), this.form, {
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false
                });
            },

            confirmDelete() {
                useConfirm({
                    title: this.__('Are you sure?'),
                    message: this.__('Are you sure you want to delete this provider?'),
                    onConfirm: () => this.delete(),
                })
            },

            delete() {
                this.$inertia.delete(this.route('admin.services.providers.delete', this.provider.id), {
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false
                })
            },
        }
    }
</script>
