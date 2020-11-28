<template>
    <li>
        <inertia-link
            :class="[baseClasses, transitionClasses, active ? activeClasses: null]"
            :href="to"
        >
            <slot></slot>
        </inertia-link>
    </li>
</template>

<script>
const transitionClasses =
    'transition duration-fast hover:text-high-emphasis focus:text-high-emphasis'
const baseClasses =
    'inline-flex items-center justify-center h-10 px-6 font-medium rounded text-small text-tab-bar'
const activeClasses = 'shadow text-tab-bar-active bg-tab-bar-item'

export default {
    props: {
        to: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
            default: false,
        }
    },
    data: () => ({
        baseClasses,
        activeClasses,
        transitionClasses,
    }),
}
</script>
