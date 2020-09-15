<template>
    <div class="mt-6 -mb-1 flex flex-wrap" v-if="determineLinks.per_page < determineLinks.total">
        <template v-for="(link, key) in determineLinks.links">
            <div v-if="link.url === null" :key="key" class="mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400" :class="{ 'ml-auto': link.label === 'Next' }">{{ link.label }}</div>
            <inertia-link v-else :key="key" class="mr-1 mb-1 px-2 py-1 text-sm rounded"
                          :class="{ 'shadow text-high-emphasis bg-surface-1': link.active, 'ml-auto': link.label === 'Next' }" :href="link.url">{{ link.label }}</inertia-link>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            links: Object,
        },

        computed: {
            determineLinks() {
                if(this.links.meta){
                    return this.links.meta;
                }

                return this.links;
            }
        }
    }
</script>
