<template>
    <button
        @click="$emit('click')"
        class="flex items-center w-full h-10 px-6 whitespace-no-wrap text-medium-emphasis text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        as: {
            default: 'inertia-link'
        },
        to: {
            type: String,
            required: false,
        },
        method: {
            required: false,
            default: 'get'
        }
    },
}
</script>
