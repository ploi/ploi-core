import store from '@/store'

export function useConfirmDelete({ title, message, onConfirm }) {
    return store.dispatch('confirmDelete/open', {
        title,
        message,
        onConfirm: () => {
            onConfirm()
            store.dispatch('confirmDelete/close')
        },
    })
}
