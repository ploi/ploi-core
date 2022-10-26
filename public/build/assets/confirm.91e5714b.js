import { s as store } from "./app.67ed15d7.js";
function useConfirm({ title, message, onConfirm, variant }) {
  return store.dispatch("confirm/open", {
    title,
    message,
    onConfirm: () => {
      onConfirm();
      store.dispatch("confirm/close");
    },
    variant
  });
}
export {
  useConfirm as u
};
