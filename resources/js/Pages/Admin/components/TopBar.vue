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
    data() {
        return {
            tabBars: [
                {
                    title: 'Dashboard',
                    to: this.route('admin.dashboard'),
                    active: (
                        this.route().current('admin.dashboard') ||
                        this.route().current('admin.settings') ||
                        this.route().current('admin.system')
                    )
                },
                {
                    title: this.__('Users'),
                    to: this.route('admin.users.index'),
                    active: this.route().current('admin.users.*')
                },
                {
                    title: this.__('Packages'),
                    to: this.route('admin.packages.index'),
                    active: this.route().current('admin.packages.*')
                },
                this.$page.props.settings.support ? {
                    title: `${this.__('Support')} (${this.$page.props.openTickets})`,
                    to: this.route('admin.support.index'),
                    active: this.route().current('admin.support.*')
                } : null,
                this.$page.props.settings.documentation ? {
                    title: this.__('Documentation'),
                    to: this.route('admin.documentation.index'),
                    active: this.route().current('admin.documentation.*')
                } : null,
                {
                    title: 'Services',
                    to: this.route('admin.services.index'),
                    active: this.route().current('admin.services.*')
                },
                // {
                //     title: 'Status',
                //     to: this.route('admin.status.index'),
                //     active: this.route().current('admin.status.*')
                // }
            ],
            breadcrumbs: [
                {
                    title: this.$page.props.settings.name,
                    to: '/',
                },
                {
                    title: this.__('Administration'),
                    to: this.route('admin.dashboard'),
                }
            ],
        }
    },
}
</script>
