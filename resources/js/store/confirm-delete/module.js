import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'

export const confirmDelete = {
    namespaced: true,
    state,
    mutations,
    actions,
}
