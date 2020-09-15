import Vue from 'vue'
import Vuex from 'vuex'

import { confirmDelete } from './confirm-delete/module'
import { backdrop } from './backdrop/module'
import { notification } from './notification/module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        confirmDelete,
        backdrop,
        notification,
    },
})
