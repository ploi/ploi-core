<template>
    <ul
        class="inline-flex flex-row p-1 overflow-hidden overflow-x-auto whitespace-nowrap rounded bg-tab-bar"
    >
        <TabBarItem v-for="item in items" :key="item.title" :to="item.to" :active="item.active" v-if="item">
            {{ item.title }}
        </TabBarItem>
    </ul>
</template>

<script>
import TabBarItem from '@/components/TabBarItem.vue'

export default {
    components: {
        TabBarItem,
    },
    props: {
        items: {
            required: true,
        },
    },
}
</script>
