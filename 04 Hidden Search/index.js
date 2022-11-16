"use strict";

const btnEl = document.querySelector(".icon-btn");
const inputEl = document.querySelector(".input");

btnEl.addEventListener("click", () => {
  inputEl.classList.toggle("active");
  inputEl.focus();
});
