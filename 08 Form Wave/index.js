"use strict";

const inputEls = document.querySelectorAll("input");

inputEls.forEach((el) => {
  const nextEl = el.nextElementSibling;

  for (let i = 0; i < nextEl.children.length; i++) {
    nextEl.children[i].style.transitionDelay = `${i * 50}ms`;
  }

  el.addEventListener("focus", (e) => {
    nextEl.classList.add("active");
  });

  el.addEventListener("focusout", (e) => {
    if (e.target.validity.valid) {
      return;
    }

    nextEl.classList.remove("active");
  });
});
