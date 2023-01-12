<<<<<<<< HEAD:public/build/assets/confirm.91e5714b.js
import { s as store } from "./app.67ed15d7.js";
========
import { s as store } from "./app-9a1c122c.js";
>>>>>>>> develop:public/build/assets/confirm-eb12c83b.js
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
