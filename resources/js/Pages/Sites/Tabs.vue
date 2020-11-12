<template>
    <ul class="md:-ml-4 space-y-1">
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
            site: Object
        },

        data() {
            return {
                items: [
                    {
                        title: this.__('General'),
                        to: this.route('sites.show', this.site.id),
                        active: this.route().current('sites.show')
                    },
                    {
                        title: this.__('Apps'),
                        to: this.route('sites.apps.index', this.site.id),
                        active: this.route().current('sites.apps.index')
                    },
                    {
                        title: this.__('Databases'),
                        to: this.route('sites.databases.index', this.site.id),
                        active: this.route().current('sites.databases.index')
                    },
                    {
                        title: this.__('Cronjobs'),
                        to: this.route('sites.cronjobs.index', this.site.id),
                        active: this.route().current('sites.cronjobs.index')
                    },
                    {
                        title: this.__('Redirects'),
                        to: this.route('sites.redirects.index', this.site.id),
                        active: this.route().current('sites.redirects.index')
                    },
                    {
                        title: this.__('Certificates'),
                        to: this.route('sites.certificates.index', this.site.id),
                        active: this.route().current('sites.certificates.index')
                    },
                    this.site.dns_id ? {
                        title: this.__('DNS'),
                        to: this.route('sites.dns.index', this.site.id),
                        active: this.route().current('sites.dns.index')
                    }:  null,
                    this.can('sites', 'update') ? {
                        title: this.__('Settings'),
                        to: this.route('sites.settings.show', this.site.id),
                        active: this.route().current('sites.settings.show')
                    } : null,
                    {
                        title: this.__('View site'),
                        to: `http://${this.site.domain}`,
                        type: 'a'
                    },
                ],
            }
        },
    }
</script>
