<template>
    <TopBar>
        <template #breadcrumbs>
            <Breadcrumbs :items="breadcrumbs" />
        </template>
        <template #tab-bar>
            <TopBarTabBarContainer>
                <TabBar :items="tabBars" />
            </TopBarTabBarContainer>
        </template>
    </TopBar>
</template>

<script>
import TopBar from '@/components/TopBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import TabBar from '@/components/TabBar'
import TopBarTabBarContainer from '@/components/TopBarTabBarContainer'

export default {
    components: {
        TopBar,
        Breadcrumbs,
        TabBar,
        TopBarTabBarContainer,
    },

    props: {
        breadcrumbs: Array,
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
                    active: this.route().current('sites.*')
                },
                {
                    title: 'Servers',
                    to: this.route('servers.index'),
                },
            ],
        }
    },
}
</script>
