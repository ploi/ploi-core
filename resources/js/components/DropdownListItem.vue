<template>
    <inertia-link
        :href="to"
        :method="method"
        class="flex items-center w-full h-10 px-6 whitespace-no-wrap text-medium-emphasis text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none"
    >
        <slot></slot>
    </inertia-link>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true,
        },
        method: {
            required: false,
            default: 'get'
        }
    },
}
</script>
