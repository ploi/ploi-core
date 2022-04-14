import store from '@/store'

export function useConfirm({ title, message, onConfirm, variant }) {
    return store.dispatch('confirm/open', {
        title,
        message,
        onConfirm: () => {
            onConfirm()
            store.dispatch('confirm/close')
        },
        variant,
    })
}
