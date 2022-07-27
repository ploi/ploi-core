 <template>
    <ul class="-ml-4 space-y-1">
        <li v-for="item in items">
            <inertia-link
                class="flex items-center h-10 px-4 font-medium text-medium-emphasis"
                :class="{'rounded shadow text-primary bg-surface-3': item.active}"
                :href="item.to"
            >{{ item.title }} {{ item.route }}</inertia-link
            >
        </li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                items: [
                    {
                        title: this.__('Overview'),
                        to: this.route('admin.support.index'),
                        active: this.route().current('admin.support.index')
                    },
                ],
            }
        },
    }
</script>
