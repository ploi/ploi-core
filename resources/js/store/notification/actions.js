import { NOTIFY_NOTIFICATION, CLOSE_NOTIFICATION } from './types'

export const actions = {
    notify({ commit }, payload) {
        commit(NOTIFY_NOTIFICATION, payload)

        setTimeout(() => commit(CLOSE_NOTIFICATION), payload.timeout ?? 4000)
    },
}
