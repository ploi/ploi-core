<template>
    <ul
        class="inline-flex flex-row p-1 overflow-hidden overflow-x-auto whitespace-no-wrap rounded bg-tab-bar"
    >
        <TabBarItem v-for="item in items" :key="item.title" :to="item.to" :active="item.active" v-if="item">
            {{ item.title }}
        </TabBarItem>
    </ul>
</template>

<script>
import TabBarItem from '@/components/TabBarItem'

export default {
    components: {
        TabBarItem,
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>
