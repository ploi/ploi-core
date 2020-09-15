<template>
    <label :class="['text-small']" :for="forId">
        <slot></slot>
    </label>
</template>

<script>
export default {
    props: {
        forId: {
            type: String,
            required: false,
        },
        errors: {
            type: Array,
        },
    },
}
</script>
