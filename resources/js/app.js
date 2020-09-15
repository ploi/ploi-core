import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue';
import VueMeta from 'vue-meta'
import store from '@/store'
import PortalVue from 'portal-vue'
import vClickOutside from 'v-click-outside'
import VueClipboard from 'vue-clipboard2'
window._forEach = require('lodash/forEach');

Vue.use(vClickOutside)
Vue.use(PortalVue)
Vue.use(InertiaApp)
Vue.use(VueMeta)
Vue.use(VueClipboard)
Vue.mixin({ methods: { route: window.route } })
Vue.mixin(require('./mixins'));

window.eventBus = new Vue();

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = document.getElementById('app')

let pageData = JSON.parse(app.dataset.page)

new Vue({
    store,
    metaInfo: {
        titleTemplate: (title) => title ? `${title} - ${pageData.props.settings.name}` : pageData.props.settings.name
    },
    render: h => h(InertiaApp, {
        props: {
            initialPage: pageData,
            resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
