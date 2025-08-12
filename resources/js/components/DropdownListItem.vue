<template>
    <div class="text-medium-emphasis">
        <div v-if="componentIsInertiaLink">
            <Link
                :as="componentIs"
                :href="to"
                :method="method"
                class="flex items-center w-full h-10 px-6 whitespace-nowrap text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none"
            >
                <slot></slot>
            </Link>
        </div>
        <div v-else>
            <a :href="to" class="flex items-center w-full h-10 px-6 whitespace-nowrap text-small focus:bg-primary focus:text-on-primary hover:text-high-emphasis focus:outline-none">
                <slot></slot>
            </a>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';

export default {
    components: {
        Link
    },
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
