<template>
    <div :class="[baseClasses, sizeClasses[size]]">
        <slot></slot>
    </div>
</template>

<script>
const baseClasses = 'w-full px-4 sm:px-8 mx-auto'
const sizeClasses = {
    small: 'max-w-sm',
    base: 'max-w-5xl',
    large: 'max-w-screen-xl',
    fluid: 'max-w-none',
}

export default {
    props: {
        size: {
            type: String,
            default: () => 'base',
            validator: size => Object.keys(sizeClasses).includes(size),
        },
    },
    data() {
        return {
            baseClasses,
            sizeClasses,
        }
    },
}
</script>
