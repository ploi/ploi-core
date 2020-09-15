<template>
    <form class="space-y-4" @submit.prevent="$emit('submit')">
        <slot></slot>
    </form>
</template>
