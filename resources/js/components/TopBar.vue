<template>
    <header class="sticky top-0 border-b border-low-emphasis bg-top-bar z-30">
        <div class="w-full px-4 sm:px-8 mx-auto max-w-top-bar-container">
            <div class="flex flex-col">
                <nav
                    class="flex flex-col items-center justify-between py-4 space-y-4 md:space-y-0 md:flex-row text-top-bar"
                >
                    <div class="flex items-center space-x-5">
                        <img class="h-top-bar-logo" v-if="$page.props.settings.logo" :src="$page.props.settings.logo" />
                        <slot name="breadcrumbs"></slot>
                    </div>

                    <ul class="flex items-center space-x-4">
                        <li :aria-label="__('Search')" data-balloon-blunt data-balloon-pos="down">
                            <IconButton @click="triggerSearch">
                                <IconSearch class="text-top-bar"/>
                            </IconButton>
                        </li>
                        <li :aria-label="themeMode === 'light' ? __('Enable dark mode') : __('Enable light mode')" data-balloon-blunt data-balloon-pos="down">
                            <IconButton @click="toggleTheme">
                                <IconMoon class="text-top-bar" v-if="themeMode === 'light'"/>
                                <IconSun class="text-top-bar" v-if="themeMode === 'dark'"/>
                            </IconButton>
                        </li>
                        <li>
                            <Dropdown v-slot="{ toggle, isOpen }">
                                <button class="flex h-auto m-0 appearance-none items-center" @click="toggle">
                                    <span>{{ $page.props.auth.user.name }}</span>
                                    <img
                                        class="ml-2 inline w-8 h-8 rounded-avatar bg-surface-2"
                                        :src="$page.props.auth.user.avatar"
                                        :alt="$page.props.auth.user.name"
                                    />
                                </button>

                                <DropdownList v-if="isOpen">
                                    <DropdownListItem v-if="$page.props.settings.support" to="/support">{{ __('Support') }}
                                    </DropdownListItem>
                                    <DropdownListItem v-if="$page.props.settings.documentation" to="/documentation">{{ __('Documentation') }}</DropdownListItem>
                                    <DropdownListItem :to="route('profile.index')">{{ __('Profile') }}
                                    </DropdownListItem>
                                    <DropdownListItem v-if="$page.props.settings.billing" :to="route('profile.billing.index')">{{ __('Billing') }}
                                    </DropdownListItem>
                                    <DropdownListItem class="text-danger" v-if="$page.props.auth.user.role === 'admin'"
                                                      :to="route('admin.dashboard')">{{ __('Administration') }}
                                    </DropdownListItem>
                                    <DropdownListItem :to="route('logout')" method="post">{{ __('Sign out') }}
                                    </DropdownListItem>
                                </DropdownList>
                            </Dropdown>
                        </li>
                    </ul>
                </nav>

                <slot name="tab-bar"></slot>
            </div>
        </div>
    </header>
</template>

<script>
import Container from '@/components/Container'
import Dropdown from '@/components/Dropdown'
import DropdownList from '@/components/DropdownList'
import DropdownListItem from '@/components/DropdownListItem'
import IconMoon from '@/components/icons/IconMoon'
import IconSun from '@/components/icons/IconSun'
import IconSearch from '@/components/icons/IconSearch'
import IconButton from '@/components/IconButton'

export default {
    components: {
        Container,
        Dropdown,
        DropdownList,
        DropdownListItem,
        IconMoon,
        IconSearch,
        IconSun,
        IconButton
    },

    data() {
        return {
            themeMode: this.$page.props.auth.user.theme,
        }
    },

    mounted() {
        this.setDarkMode();
    },

    methods: {
        toggleTheme() {
            window.axios.post(`/profile/toggle-theme`).then(response => {
                this.themeMode = response.data;

                this.setDarkMode();
            });
        },

        setDarkMode() {
            if (this.themeMode === 'auto') {
                if (this.checkDarkMode()) {
                    document.documentElement.classList.add('theme--dark');
                } else {
                    document.documentElement.classList.remove('theme--dark');
                }
            } else if (this.themeMode === 'dark') {
                document.documentElement.classList.add('theme--dark');
            } else {
                document.documentElement.classList.remove('theme--dark');
            }
        },

        checkDarkMode() {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        },

        triggerSearch() {
            window.eventBus.$emit('openSearch');
        }
    }
}
</script>
