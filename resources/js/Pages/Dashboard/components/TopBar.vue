<template>
    <TopBar>
        <template #breadcrumbs>
            <Breadcrumbs :items="breadcrumbs" />
        </template>
        <template #tab-bar>
            <TopBarTabBarContainer>
<!--                <TabBar :items="tabBars" />-->
            </TopBarTabBarContainer>
        </template>
    </TopBar>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import TopBarTabBarContainer from '@/components/TopBarTabBarContainer.vue'

export default {
    components: {
        TopBar,
        Breadcrumbs,
        // TabBar,
        TopBarTabBarContainer,
    },

    props: {
        breadcrumbs: Array,
    },

    computed: {
        hasServerAccess() {
            return this.$page.props.auth.can.length &&
                (this.$page.props.auth.can.servers.create ||
                this.$page.props.auth.can.servers.delete ||
                this.$page.props.auth.can.servers.update)
        }
    },

    data() {
        return {
            tabBars: [
                {
                    title: this.__('Dashboard'),
                    to: this.route('dashboard'),
                    active: this.route().current('dashboard')
                },
                {
                    title: this.__('Sites'),
                    to: this.route('sites.index'),
                },
                Object.keys(this.$page.props.auth.can).length && (this.$page.props.auth.can.servers.create || this.$page.props.auth.can.servers.update || this.$page.props.auth.can.servers.delete) ? {
                    title: this.__('Servers'),
                    to: this.route('servers.index'),
                } : null,
            ],
        }
    },
}
</script>
