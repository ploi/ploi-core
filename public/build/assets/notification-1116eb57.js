import { s as store } from "./app-ebc4651b.js";
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
