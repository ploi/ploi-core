import Vue from 'vue'
import Vuex from 'vuex'

import { confirm } from './confirm/module'
import { backdrop } from './backdrop/module'
import { notification } from './notification/module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        confirm,
        backdrop,
        notification,
    },
})
