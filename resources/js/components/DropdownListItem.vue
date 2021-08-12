<template>
    <inertia-link
        :as="componentIs"
        :href="to"
        :method="method"
        class="flex items-center w-full h-10 px-6 whitespace-nowrap text-medium-emphasis text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none"
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
        componentIs: {
            type: String,
            default: 'a'
        },
        method: {
            required: false,
            default: 'get'
        }
    },
}
</script>
