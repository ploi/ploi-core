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
                    title: this.__('Open support requests'),
                    to: this.route('support.index'),
                    active: this.route().current('support.index')
                },
                {
                    title: this.__('Closed support requests'),
                    to: this.route('support.index.closed'),
                    active: this.route().current('support.index.closed')
                },
            ],
        }
    },
}
</script>
