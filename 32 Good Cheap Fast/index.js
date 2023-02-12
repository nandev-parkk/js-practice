"use strict";
/**
 * @요구사항
 *
 */
const inputContainer = document.querySelector(".input-container");
const inputEls = inputContainer.querySelectorAll(".input");

inputContainer.addEventListener("change", (e) => {
  if (inputEls[0].checked && inputEls[1].checked && inputEls[2].checked) {
    if (e.target.classList[1] === "good") {
      inputEls[2].checked = false;
    } else if (e.target.classList[1] === "cheap") {
      inputEls[0].checked = false;
    } else {
      inputEls[1].checked = false;
    }
  }
});
