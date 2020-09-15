<template>
    <div
        class="inline-flex items-center justify-center w-6 h-6 font-medium bg-danger text-on-danger text-small rounded-circle"
    >
        {{ cappedCount }}
    </div>
</template>

<script>
export default {
    props: {
        count: {
            type: Number,
            required: true,
        },
    },
    computed: {
        cappedCount() {
            return this.count < 9 ? this.count : 9
        },
    },
}
</script>
