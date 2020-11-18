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
                    title: this.__('Profile'),
                    to: this.route('profile.index'),
                    active: this.route().current('profile.index')
                },
                {
                    title: this.__('Security'),
                    to: this.route('profile.security.index'),
                    active: this.route().current('profile.security.index')
                },
                {
                    title: this.__('Settings'),
                    to: this.route('profile.settings.index'),
                    active: this.route().current('profile.settings.index')
                },
                {
                    title: this.__('Integrations'),
                    to: this.route('profile.integrations.index'),
                    active: this.route().current('profile.integrations.index')
                },
                this.$page.props.settings.billing ? {
                    title: this.__('Billing'),
                    to: this.route('profile.billing.index'),
                    active: this.route().current('profile.billing.index')
                } : null,
            ],
        }
    },
}
</script>
