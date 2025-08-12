import { s as store } from "./app-glaRp76R.js";
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
