import { s as store } from "./app.ca29ef16.js";
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
