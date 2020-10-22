<template>
    <div v-if="searchOpen" class="w-full h-screen fixed inset-0 bg-backdrop z-40 flex items-center flex-col">
        <div class="w-full max-w-4xl p-8 space-y-4" v-click-outside="closeSearch">
            <input v-model="search" ref="search" class="w-full h-12 px-4 rounded bg-surface-1 shadow-md" type="text"
                   :placeholder="__('Type to search anything...')">

            <Transition
                enter-active-class="transition ease-in-out transform duration-fast"
                leave-active-class="transition ease-in-out transform duration-fast"
                enter-class="-translate-y-4 opacity-0 scale-95"
                enter-to-class="translate-y-0 opacity-100 scale-100"
                leave-class="translate-y-0 opacity-100 scale-100"
                leave-to-class="translate-y-4 opacity-0 scale-95"
                mode="out-in"
            >
                <div v-if="!isSearching" class="rounded bg-surface-1 shadow-md p-4" key="hints">
                    <ul class="flex flex-col space-y-3">
                        <li>
                            <h3 class="text-small font-medium">{{ __('All helpful key shortcuts') }}</h3>
                        </li>
                        <li class="space-x-2 text-small">
                            <code class="rounded px-2 py-1 monospace border border-low-emphasis shadow-sm">/</code>
                            <span>{{ __('Open search') }}</span>
                        </li>
                        <li class="space-x-2 text-small">
                            <code class="rounded px-2 py-1 monospace border border-low-emphasis shadow-sm">c</code>
                            <span>{{ __('Create site') }}</span>
                        </li>
                        <li class="space-x-2 text-small">
                            <code class="rounded px-2 py-1 monospace border border-low-emphasis shadow-sm">p</code>
                            <span>{{ __('Goto profile') }}</span>
                        </li>
                    </ul>
                </div>

                <div class="rounded bg-surface-1 shadow-md overflow-hidden" key="results" v-else>
                    <ul class="flex flex-col divide-y divide-low-emphasis" v-for="category in results">
                        <li class="px-4 py-2 bg-surface-2">
                            <h3 class="text-small font-medium">{{ category.label }} ({{ category.total }})</h3>
                        </li>
                        <li v-for="result in category.results">
                            <inertia-link @click="closeSearch" class="px-4 py-3 block text-small" :href="result.route">
                                {{ result.name }}
                            </inertia-link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchOpen: false,
            search: '',
            results: [],
            timeout: null,
        }
    },
    computed: {
        isSearching() {
            return this.search.trim() !== ''
        },
    },

    watch: {
        search: function (value) {
            this.results = null;
            this.loading = true;

            this.getResults();

            this.arrowNavigation = {
                identifier: null,
                index: -1
            }
        },
    },

    mounted() {
        document.addEventListener('keydown', this.handleKeydown);

        window.eventBus.$on('openSearch', () => {
            this.openSearch();
        });
    },

    destroyed() {
        if (this.timeout) clearTimeout(this.timeout);
    },

    methods: {
        getResults() {
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                if (!this.search) {
                    this.loading = false;
                    return;
                }

                this.results = null;

                window.axios.get(this.route('search', {query: this.search}).url())
                    .then((response) => {
                        this.loading = false;
                        this.totalResults = response.data.total;

                        if (!response.data.total) {
                            this.results = null;
                        } else {
                            this.results = response.data.results;
                        }
                    })
            }, 300);
        },

        handleKeydown(event) {
            if (this.isNotInputElement(event) && event.keyCode === 191) {
                event.preventDefault()
                event.stopPropagation()

                this.openSearch();
            }

            if (event.keyCode === 27) {
                this.closeSearch();
            }

            if (!this.isNotInputElement(event)) {
                return;
            }

            if (event.ctrlKey || event.metaKey) {
                return;
            }

            if (this.$page.props.auth.user.keyboard_shortcuts) {
                if (event.key === 'c') {
                    this.$inertia.visit(this.route('sites.index', {create: true}));
                }

                if (event.key === 'p') {
                    this.$inertia.visit(this.route('profile.index'));
                }
            }
        },

        openSearch() {
            // Enable search focus
            this.searchOpen = true;
            this.$nextTick(() => {
                if (this.$refs.search) {
                    this.$refs.search.focus();
                }
            });
        },

        closeSearch() {
            this.search = '';
            this.searchOpen = false;

            // Remove search focus
            if (this.$refs.search) {
                this.$refs.search.blur();
            }
        },

        isNotInputElement(event) {
            const tagName = event.target.tagName

            return Boolean(
                tagName !== 'INPUT' &&
                tagName !== 'TEXTAREA' &&
                event.target.id !== 'code-editor' &&
                !event.target.classList.contains('form-textarea')
            )
        },
    }
}
</script>
