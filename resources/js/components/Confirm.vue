<template>
    <div
        v-if="confirm.isOpen"
        class="fixed inset-0 z-50 flex items-end justify-center p-2 sm:items-center"
    >
        <div v-click-outside="cancelConfirm" class="w-full max-w-xs overflow-hidden rounded shadow-2xl bg-surface-1">
            <header class="px-4 py-6 space-y-2 text-center">
                <h2 class="font-medium text-body">{{ confirm.title }}</h2>
                <p class="text-small text-medium-emphasis">{{ confirm.message }}</p>
            </header>
            <footer
                class="grid grid-cols-2 border-t divide-x border-low-emphasis divide-low-emphasis"
            >
                <button
                    @click="cancelConfirm()"
                    class="inline-flex items-center justify-center h-12 px-4 font-medium transition ease-in-out text-small focus:outline-none text-high-emphasis duration-fast"
                >
                    {{ __('Cancel') }}
                </button>
                <button
                    @click="confirm.onConfirm()"
                    class="inline-flex items-center justify-center h-12 px-4 font-medium transition ease-in-out text-small focus:outline-none duration-fast"
                    :class="variantClasses[confirm.variant ? confirm.variant : 'danger']"
                >
                    {{ __('Confirm') }}
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
const variantClasses = {
    danger: 'text-danger',
    info: 'text-primary'
}

export default {
    data() {
        return {
            variantClasses,
        }
    },

    computed: {
        confirm() {
            return this.$store.state.confirm
        },
    },
    methods: {
        cancelConfirm() {
            return this.$store.dispatch('confirm/close')
        },
    },
}
</script>
