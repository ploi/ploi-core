import { PROMPT_CONFIRM_DELETE, CANCEL_CONFIRM_DELETE } from './types'

export const actions = {
    open({ dispatch, commit }, payload) {
        dispatch('backdrop/open', null, { root: true })
        commit(PROMPT_CONFIRM_DELETE, payload)
    },
    close({ dispatch, commit }) {
        dispatch('backdrop/close', null, { root: true })
        commit(CANCEL_CONFIRM_DELETE)
    },
}
