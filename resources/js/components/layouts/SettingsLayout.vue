<template>
    <div class="grid grid-cols-4 gap-8 md:gap-16">
        <aside class="col-span-4 md:col-span-1">
            <slot name="nav" />
        </aside>
        <section class="col-span-4 md:col-span-3">
            <div :class="space">
                <slot name="segments"></slot>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: false,
        },
        space: {
            type: String,
            default: 'space-y-16'
        }
    },
}
</script>
