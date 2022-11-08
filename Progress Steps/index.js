"use strict";

const barEl = document.querySelector(".bar");
const circleEls = document.querySelectorAll(".circle");
const prevBtnEl = document.querySelector(".btn--prev");
const nextBtnEl = document.querySelector(".btn--next");

let currentActive = 1;

nextBtnEl.addEventListener("click", () => {
  currentActive++;

  update();
});

prevBtnEl.addEventListener("click", () => {
  currentActive--;

  update();
});

function update() {
  circleEls.forEach((el, i) => {
    if (i < currentActive) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  const activeCircleEls = document.querySelectorAll(".active");

  barEl.style.width = `${
    ((activeCircleEls.length - 1) / (circleEls.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    prevBtnEl.setAttribute("disabled", "disabled");
  } else if (currentActive === 4) {
    nextBtnEl.setAttribute("disabled", "disabled");
  } else {
    prevBtnEl.removeAttribute("disabled", "disabled");
    nextBtnEl.removeAttribute("disabled", "disabled");
  }
}
