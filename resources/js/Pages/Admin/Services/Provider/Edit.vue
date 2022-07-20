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
import FormTextarea from '@/components/forms/FormTextarea.vue'
import FormSelect from '@/components/forms/FormSelect.vue'
import Form from '@/components/Form.vue'
import FormActions from '@/components/FormActions.vue'
import {useConfirm} from '@/hooks/confirm'
import Tabs from './../Tabs.vue'
import Table from '@/components/Table.vue'
import TableHead from '@/components/TableHead.vue'
import TableHeader from '@/components/TableHeader.vue'
import TableRow from '@/components/TableRow.vue'
import TableBody from '@/components/TableBody.vue'
import TableData from '@/components/TableData.vue'

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
