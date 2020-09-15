<template>
    <table class="w-full text-left table-auto text-small">
        <caption class="sr-only">{{ caption }}</caption>
        <slot></slot>
    </table>
</template>

<script>
    export default {
        props: {
            caption: {
                type: String,
                required: true,
            },
        },
    }
</script>
