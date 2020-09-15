<template>
    <Component
        @click="$emit('click')"
        :class="[
            baseClasses,
            sizeClasses[size],
            variantClasses[variant],
            block ? flexClasses : inlineFlexClasses,
            disabled || loading ? 'opacity-50' : '',
            loading ? 'cursor-wait' : '',
            ]"
        :is="as"
        :disabled="loading || disabled"
        :href="href"
    >
        <slot></slot>
    </Component>
</template>

<script>
const baseClasses =
    'items-center justify-center font-medium capitalize rounded select-none focus:outline-none'
const flexClasses = 'flex w-full text-body'
const inlineFlexClasses = 'inline-flex text-small'
const variantClasses = {
    primary: 'bg-primary text-on-primary shadow',
    danger: 'bg-danger text-on-danger shadow',
    secondary: 'bg-surface-2 text-high-emphasis',
}
const sizeClasses = {
    sm: 'h-8 px-2',
    md: 'h-10 px-5'
}

export default {
    props: {
        as: {
            default: () => 'button',
        },
        href: {
            default: () => null
        },
        block: {
            type: Boolean,
            default: () => false,
        },
        variant: {
            type: String,
            default: () => 'primary',
            validator: variant => Object.keys(variantClasses).includes(variant),
        },
        size: {
            type: String,
            default: 'md'
        },
        loading: {
            default: false,
        },
        disabled: {
            default: false,
        },
    },
    data() {
        return {
            baseClasses,
            flexClasses,
            inlineFlexClasses,
            variantClasses,
            sizeClasses,
        }
    },
}
</script>
