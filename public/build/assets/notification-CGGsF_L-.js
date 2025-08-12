import { s as store } from "./app-B9WIo_5_.js";
function useNotification({ title, message, variant, timeout }) {
  return store.dispatch("notification/notify", {
    title,
    message,
    variant,
    timeout
  });
}
export {
  useNotification as u
};
