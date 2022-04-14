import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'

export const confirm = {
    namespaced: true,
    state,
    mutations,
    actions,
}
