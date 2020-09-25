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
    import TopBar from './components/TopBar'
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
    import Tabs from './Tabs'
    import Table from '@/components/Table'
    import TableHead from '@/components/TableHead'
    import TableHeader from '@/components/TableHeader'
    import TableRow from '@/components/TableRow'
    import TableBody from '@/components/TableBody'
    import TableData from '@/components/TableData'
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
