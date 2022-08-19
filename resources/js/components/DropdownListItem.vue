<template>
    <div class="text-medium-emphasis">
        <div v-if="componentIsInertiaLink">
            <inertia-link
                :as="componentIs"
                :href="to"
                :method="method"
                class="flex items-center w-full h-10 px-6 whitespace-nowrap text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none"
            >
                <slot></slot>
            </inertia-link>
        </div>
        <div v-else>
            <a :href="to" class="flex items-center w-full h-10 px-6 whitespace-nowrap text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none">
                <slot></slot>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true,
        },
        componentIs: {
            type: String,
            default: 'a'
        },
        method: {
            required: false,
            default: 'get'
        },
        componentIsInertiaLink: {
            type: Boolean,
            default: true
        }
    },
}
</script>
