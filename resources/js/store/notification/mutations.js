import { NOTIFY_NOTIFICATION, CLOSE_NOTIFICATION } from './types'

export const mutations = {
    [NOTIFY_NOTIFICATION](state, payload) {
        state.notifications.push(payload)
    },
    [CLOSE_NOTIFICATION](state) {
        state.notifications.shift()
    },
}
