import {createInertiaApp, InertiaLink} from '@inertiajs/inertia-vue3'
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import {createApp, h} from 'vue';
import {InertiaProgress} from '@inertiajs/progress'
import VueMeta from 'vue-meta'
import Store from '@/store';
import vClickOutside from 'v-click-outside'
import VueClipboard from 'vue-clipboard2'
import mixins from '@/mixins';
import axios from 'axios';
import forEach from 'lodash/forEach';
import mitt from 'mitt';
import '../sass/app.scss';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, app, props, plugin}) {
        return createApp({render: () => h(app, props)})
            .use(plugin)
            .use(vClickOutside)
            .use(VueMeta)
            .use(VueClipboard)
            .use(Store)
            .mixin({methods: {route: window.route}})
            .mixin(mixins)
            .component('InertiaLink', InertiaLink)
            .mount(el);
    },
});

InertiaProgress.init({
    delay: 250,
    color: '#1b8ae8',
    includeCSS: true,
    showSpinner: false,
})

window.axios = axios;
window._forEach = forEach;

const emitter = mitt();

window.eventBus = emitter;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
