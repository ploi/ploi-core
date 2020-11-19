<template>
    <div
        :class="[
            'absolute flex flex-col py-1 overflow-hidden rounded shadow-2xl z-20 bg-surface-1',
            positionClasses,
        ]"
    >
        <slot></slot>
    </div>
</template>

<script>
    const positionClasses = {
        top: 'right-0 top-0 mt-8',
        bottom: 'right-0 bottom-0 mb-8',
    }
    export default {
        props: {
            position: {
                type: String,
                default: () => 'top',
                validator: position => Object.keys(positionClasses).includes(position),
            },
        },
        computed: {
            positionClasses() {
                return positionClasses[this.position]
            },
        },
    }
</script>
