<template>
    <inertia-link :href="to" class="font-medium text-body text-breadcrumbs">
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
    },
}
</script>
