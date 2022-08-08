import {createInertiaApp, InertiaLink} from '@inertiajs/inertia-vue3'
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import {createApp, h} from 'vue';
import {InertiaProgress} from '@inertiajs/progress'
import Store from '@/store';
import PortalVue from 'portal-vue'
import vClickOutside from 'v-click-outside'
import VueClipboard from 'vue-clipboard2'
import mixins from '@/mixins';
import axios from 'axios';
import forEach from 'lodash/forEach';
import mitt from 'mitt';
import '../sass/app.scss';
import Vue from 'vue'

Vue.configureCompat({ RENDER_FUNCTION: false, COMPONENT_V_MODEL: false });

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        createApp({
            render: () => h(App, props),
        })
            .use(plugin)
            .use(vClickOutside)
            .use(VueClipboard)
            .use(Store)
            .use(PortalVue)
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
