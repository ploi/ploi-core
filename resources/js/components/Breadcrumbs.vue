<template>
    <ul class="flex items-center space-x-2">
        <li v-for="(item, index) in items" :key="item.title">
            <BreadcrumbsItem :to="item.to">{{ item.title }}</BreadcrumbsItem>
            <span v-if="index < items.length - 1" class="ml-2 text-low-emphasis">/</span>
        </li>
    </ul>
</template>

<script>
import BreadcrumbsItem from '@/components/BreadcrumbsItem'

export default {
    components: {
        BreadcrumbsItem,
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>
