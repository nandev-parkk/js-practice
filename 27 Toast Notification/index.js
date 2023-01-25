"use strict";
/**
 * @요구사항
 *
 */

const containerEl = document.querySelector(".container");
const notificationBtnEl = containerEl.querySelector(".notification");
const toastsEl = containerEl.querySelector(".toasts");

const types = ["info", "success", "error"];
const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

notificationBtnEl.addEventListener("click", () => {
  toastsEl.classList.add("visible");

  const toast = document.createElement("div");
  toast.classList.add("toast", types[handleChange(types)]);
  toast.append(messages[handleChange()]);

  toastsEl.appendChild(toast);

  setTimeout(() => {
    toastsEl.removeChild(toast);

    if (!toastsEl.childNodes.length) {
      toastsEl.classList.remove("visible");
    }
  }, 5000);
});

function handleChange(types = null) {
  return Math.floor(
    Math.random() * `${types ? types.length : messages.length}`
  );
}
