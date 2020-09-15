import store from '@/store'

export function useNotification({ title, message, variant, timeout }) {
    return store.dispatch('notification/notify', {
        title,
        message,
        variant,
        timeout,
    })
}
