import { OPEN_BACKDROP, CLOSE_BACKDROP } from './types'

export const mutations = {
    [OPEN_BACKDROP](state) {
        Object.assign(state, {
            ...state,
            isOpen: true,
        })
    },
    [CLOSE_BACKDROP](state) {
        Object.assign(state, {
            ...state,
            isOpen: false,
        })
    },
}
