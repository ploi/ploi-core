<template>
    <Page>
        <TopBar/>

        <Content>
            <Container>
                <PageHeader>
                    <template #start>
                        <PageHeaderTitle>{{ __('Application logs') }}</PageHeaderTitle>
                    </template>
                </PageHeader>

                <PageBody>
                    <SettingsLayout>
                        <template #nav>
                            <Tabs />
                        </template>
                        <template #segments>
                            <div class="space-y-4">
                                <FormSelect :label="__('Date')" v-model="searchFilters.date">
                                    <option :value="availableDate" v-for="availableDate in logData.available_dates">{{ availableDate }}</option>
                                </FormSelect>

                                <div class="overflow-scroll">
                                    <Table caption="User list overview">
                                        <TableHead>
                                            <TableRow>
                                                <TableHeader>{{ __('Content') }}</TableHeader>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow v-for="(log, index) in logData.logs" :key="index">
                                                <TableData>
                                                    {{ log.message }}

                                                    <p class="text-medium-emphasis">{{ log.type }} at {{ log.timestamp }}</p>
                                                </TableData>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>

                            </div>
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
import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'
import StatusBubble from '@/components/StatusBubble.vue'
import NotificationBadge from '@/components/NotificationBadge.vue'
import MainLayout from '@/Layouts/MainLayout.vue'
import SettingsLayout from '@/components/layouts/SettingsLayout.vue'
import SettingsSegment from '@/components/SettingsSegment.vue'
import FormInput from '@/components/forms/FormInput.vue'
import FormSelect from '@/components/forms/FormSelect.vue'
import Form from '@/components/Form.vue'
import FormActions from '@/components/FormActions.vue'
import Tabs from './Tabs.vue'
import Table from '@/components/Table.vue'
import TableHead from '@/components/TableHead.vue'
import TableHeader from '@/components/TableHeader.vue'
import TableRow from '@/components/TableRow.vue'
import TableBody from '@/components/TableBody.vue'
import TableData from '@/components/TableData.vue'
import throttle from 'lodash/throttle'
import pickBy from 'lodash/pickBy'

export default {
        metaInfo() {
            return {
                title: `${this.__('Application logs')}`,
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
            Table,
            TableHead,
            TableHeader,
            TableRow,
            TableBody,
            TableData,
        },

        props: {
            logData: Object,
            filters: Object
        },

        data() {
            return {
                searchFilters: {
                    date: this.filters.date,
                }
            }
        },

        watch: {
            searchFilters: {
                handler: throttle(function() {
                    let query = pickBy(this.searchFilters)
                    this.$inertia.replace(this.route('admin.application-logs', Object.keys(query).length ? query : { remember: 'forget' }))
                }, 150),
                deep: true,
            },
        },
    }
</script>
