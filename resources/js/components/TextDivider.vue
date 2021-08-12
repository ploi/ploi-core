<template>
    <div class="relative flex items-center justify-center">
        <div class="absolute inset-x-0 w-full border-t border-low-emphasis"></div>
        <div v-if="!withoutText" class="relative px-2 py-1 bg-surface-1 text-body text-medium-emphasis">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        withoutText: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
