import { OPEN_BACKDROP, CLOSE_BACKDROP } from './types'

export const actions = {
    open({ commit }, payload) {
        commit(OPEN_BACKDROP, payload)
    },
    close({ commit }) {
        commit(CLOSE_BACKDROP)
    },
}
