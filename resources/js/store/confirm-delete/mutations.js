import { PROMPT_CONFIRM_DELETE, CANCEL_CONFIRM_DELETE } from './types'

export const mutations = {
    [PROMPT_CONFIRM_DELETE](state, payload) {
        Object.assign(state, {
            ...state,
            isOpen: true,
            ...payload,
        })
    },
    [CANCEL_CONFIRM_DELETE](state) {
        Object.assign(state, {
            ...state,
            isOpen: false,
        })
    },
}
