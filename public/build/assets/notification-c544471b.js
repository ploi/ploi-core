<<<<<<<< HEAD:public/build/assets/notification.544829a1.js
import { s as store } from "./app.67ed15d7.js";
========
import { s as store } from "./app-9a1c122c.js";
>>>>>>>> develop:public/build/assets/notification-c544471b.js
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
