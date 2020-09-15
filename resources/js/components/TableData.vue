<template>
    <td class="py-2" :class="{ 'border-t border-low-emphasis' : border }">
        <slot></slot>
    </td>
</template>

<script>
    export default {
        props: {
            border: {
                type: Boolean,
                default: true,
            }
        }
    }
</script>
