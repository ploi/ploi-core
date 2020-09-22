<template>
    <ul class="-ml-4 space-y-1">
        <li v-for="item in items" v-if="item">
            <component
                :is="item.type && item.type === 'a' ? 'a' : 'inertia-link'"
                :target="item.type && item.type === 'a' ? '_blank' : '_self'"
                class="flex items-center h-10 px-4 font-medium text-medium-emphasis"
                :class="{'rounded shadow text-primary bg-surface-3': item.active}"
                :href="item.to"
            >{{ item.title }} {{ item.route }}</component
            >
        </li>
    </ul>
</template>
<script>
    export default {
        props: {
            server: Object
        },

        data() {
            return {
                items: [
                    {
                        title: this.__('General'),
                        to: this.route('servers.show', this.server.id),
                        active: this.route().current('servers.show')
                    },
                    {
                        title: this.__('Settings'),
                        to: this.route('servers.settings.show', this.server.id),
                        active: this.route().current('servers.settings.show')
                    },
                ],
            }
        },
    }
</script>
