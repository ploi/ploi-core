<template>
    <input
        :class="[defaultClasses]"
        :id="id"
        :type="type"
        :required="required"
        :placeholder="placeholder"
    />
</template>

<script>
const defaultClasses =
    'w-full border-medium-emphasis text-body h-10 max-w-lg px-2 border rounded bg-surface-1 focus:outline-none focus:border-primary'

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: () => 'text',
        },
        required: {
            type: Boolean,
            default: () => false,
        },
        errors: {
            type: Array,
        },
        placeholder: {
            type: String,
        },
    },
    data() {
        return {
            defaultClasses,
        }
    },
}
</script>
