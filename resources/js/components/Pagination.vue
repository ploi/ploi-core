<template>
    <div class="mt-6 -mb-1 flex flex-wrap" v-if="determineLinks.per_page < determineLinks.total">
        <template v-for="(link, key) in determineLinks.links">
            <div v-if="link.url === null" :key="key" class="mr-1 mb-1 px-3 py-1 text-sm rounded text-grey bg-white dark:bg-gray-700 dark:text-gray-300 opacity-50 cursor-not-allowed dark:border-gray-700" :class="{ 'ml-auto': link.label === 'Next' }" v-html="link.label"></div>
            <inertia-link v-else :key="key" class="mr-1 mb-1 px-2 py-1 text-sm rounded"
                          :preserve-scroll="preserveScroll"
                          :class="{ 'shadow text-high-emphasis bg-surface-1': link.active, 'ml-auto': link.label === 'Next' }" :href="link.url" v-html="link.label"></inertia-link>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            links: Object,
            preserveScroll: {
                default: true,
            },
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
