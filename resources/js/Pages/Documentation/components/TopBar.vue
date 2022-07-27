<template>
    <TopBar>
        <template #breadcrumbs>
            <Breadcrumbs :items="breadcrumbs" />
        </template>
        <template #tab-bar>
            <TopBarTabBarContainer>
                <!-- -->
            </TopBarTabBarContainer>
        </template>
    </TopBar>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import TopBarTabBarContainer from '@/components/TopBarTabBarContainer.vue'
import TabBar from "@/components/TabBar.vue";

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
}
</script>
