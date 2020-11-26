<template>
    <div class="antialiased font-body text-high-emphasis bg-surface">
        <div class="relative bg-primary text-white" v-if="$page.props.settings.demo">
            <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div class="pr-16 sm:text-center sm:px-16">
                    <p class="font-medium text-on-primary">
                        You are currently in a demo environment.
                    </p>
                </div>
            </div>
        </div>

        <div class="relative text-white" :class="{
            'bg-primary' : $page.props.system_alert.type === 'info',
            'bg-warning' : $page.props.system_alert.type === 'warning',
            'bg-danger' : $page.props.system_alert.type === 'danger',
        }" v-if="$page.props.system_alert">
            <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div class="pr-16 sm:text-center sm:px-16">
                    <p class="font-medium text-on-primary">
                        {{ $page.props.system_alert.message }}
                    </p>
                </div>
            </div>
        </div>

        <PortalTarget name="modals"/>

        <div class="fixed inset-0 z-50 flex items-start justify-end p-5 pointer-events-none">
            <TransitionGroup
                enter-active-class="transition ease-out transform duration-fast"
                enter-class="translate-x-6 opacity-0"
                enter-to-class="translate-x-0 opacity-100"
                leave-active-class="transition ease-in transform duration-fast"
                leave-class="opacity-100"
                leave-to-class="scale-50 -translate-y-6 opacity-0"
                tag="div"
                class="flex flex-col space-y-2"
            >
                <Notification v-for="(notification, index) in notifications" :key="index">
                    <template #prefix>
                        <IconDanger
                            v-if="notification.variant === 'danger' || notification.variant === 'error'"
                            class="flex-shrink-0 w-6 h-6 text-danger"
                        />
                        <IconSuccess
                            v-if="notification.variant === 'success'"
                            class="flex-shrink-0 w-6 h-6 text-success"
                        />
                        <IconInfo
                            v-if="notification.variant === 'info'"
                            class="flex-shrink-0 w-6 h-6 text-primary"
                        />
                        <IconWarning
                            v-if="notification.variant === 'warning'"
                            class="flex-shrink-0 w-6 h-6 text-warning"
                        />
                    </template>
                    <template #title>{{ notification.title }}</template>
                    <template #subtitle>{{ notification.message }}</template>
                </Notification>
            </TransitionGroup>
        </div>

        <Transition
            enter-active-class="transition ease-in-out duration-fast"
            leave-active-class="transition ease-in-out duration-fast"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-if="backdropIsOpen" class="fixed inset-0 z-40 bg-backdrop"></div>
        </Transition>

        <SearchPalette/>

        <Transition
            enter-active-class="transition ease-in-out transform duration-fast"
            leave-active-class="transition ease-in-out transform duration-fast"
            enter-class="translate-y-8 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <ConfirmDelete/>
        </Transition>
        <slot/>
    </div>
</template>

<script>
    import ConfirmDelete from '@/components/ConfirmDelete'
    import Notification from '@/components/Notification'
    import IconDanger from '@/components/icons/IconDanger'
    import IconWarning from '@/components/icons/IconWarning'
    import IconSuccess from '@/components/icons/IconSuccess'
    import IconInfo from '@/components/icons/IconInfo'
    import SearchPalette from '@/components/SearchPalette'
    import {useNotification} from '@/hooks/notification'

    export default {
        components: {
            ConfirmDelete,
            Notification,
            IconDanger,
            IconWarning,
            IconSuccess,
            IconInfo,
            SearchPalette
        },

        data() {
            return {
                searchOpen: false,
            }
        },

        computed: {
            backdropIsOpen() {
                return this.$store.state.backdrop.isOpen
            },
            notifications() {
                return this.$store.state.notification.notifications
            },
        },

        watch: {
            '$page.props.flash.success': function () {
                if (this.$page.props.flash.success) {
                    useNotification({
                        variant: 'success',
                        title: this.__(`Success`),
                        message: this.$page.props.flash.success,
                    })

                    this.$page.props.flash.success = null;
                }
            },
            '$page.props.flash.info': function () {
                if (this.$page.props.flash.info) {
                    useNotification({
                        variant: 'info',
                        title: this.__(`Info`),
                        message: this.$page.props.flash.info,
                    })

                    this.$page.props.flash.info = null;
                }
            },
            '$page.props.flash.error': function () {
                if (this.$page.props.flash.error) {
                    useNotification({
                        variant: 'danger',
                        title: this.__(`Error`),
                        message: this.$page.props.flash.error,
                    })

                    this.$page.props.flash.error = null;
                }
            }
        },

        methods: {
            useNotification,
        },
    }
</script>
