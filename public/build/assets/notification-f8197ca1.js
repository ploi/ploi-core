import { s as store } from "./app-415e6225.js";
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
