<template>
    <button
        @click="$emit('click')"
        class="inline-flex items-center justify-center w-10 h-10 text-medium-emphasis rounded-circle focus:outline-none focus:text-high-emphasis"
    >
        <slot></slot>
    </button>
</template>
