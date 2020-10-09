<template>
    <div class="flex items-center space-x-2" :class="[justify]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            justify: {
                type: String,
                default: 'justify-start'
            }
        }
    }
</script>
