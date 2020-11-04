<template>
    <ul class="-ml-4 space-y-1">
        <li v-for="item in items">
            <inertia-link
                class="flex items-center h-10 px-4 font-medium text-medium-emphasis"
                :class="{'rounded shadow text-primary bg-surface-3': item.active}"
                :href="item.to"
            >{{ item.title }} {{ item.route }}
            </inertia-link
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
                    title: this.__('Categories'),
                    to: this.route('admin.documentation.index'),
                    active: this.route().current('admin.documentation.index')
                },
                {
                    title: this.__('Create category'),
                    to: this.route('admin.documentation.create'),
                    active: this.route().current('admin.documentation.create')
                },
                {
                    title: this.__('Articles'),
                    to: this.route('admin.documentation.articles.index'),
                    active: this.route().current('admin.documentation.articles.index')
                },
                {
                    title: this.__('Create article'),
                    to: this.route('admin.documentation.articles.create'),
                    active: this.route().current('admin.documentation.articles.create')
                },
            ],
        }
    },
}
</script>
