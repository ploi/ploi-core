<template>
    <div
        v-if="confirmDelete.isOpen"
        class="fixed inset-0 z-50 flex items-end justify-center p-2 sm:items-center"
    >
        <div v-click-outside="cancelConfirmDelete" class="w-full max-w-xs overflow-hidden rounded shadow-2xl bg-surface-1">
            <header class="px-4 py-6 space-y-2 text-center">
                <h2 class="font-medium text-body">{{ confirmDelete.title }}</h2>
                <p class="text-small text-medium-emphasis">{{ confirmDelete.message }}</p>
            </header>
            <footer
                class="grid grid-cols-2 border-t divide-x border-low-emphasis divide-low-emphasis"
            >
                <button
                    @click="cancelConfirmDelete()"
                    class="inline-flex items-center justify-center h-12 px-4 font-medium transition ease-in-out text-small focus:outline-none text-high-emphasis duration-fast"
                >
                    {{ __('Cancel') }}
                </button>
                <button
                    @click="confirmDelete.onConfirm()"
                    class="inline-flex items-center justify-center h-12 px-4 font-medium transition ease-in-out text-small text-danger focus:outline-none duration-fast"
                >
                    {{ __('Confirm') }}
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        confirmDelete() {
            return this.$store.state.confirmDelete
        },
    },
    methods: {
        cancelConfirmDelete() {
            return this.$store.dispatch('confirmDelete/close')
        },
    },
}
</script>
