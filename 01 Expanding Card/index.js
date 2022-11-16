"use strict";

const imgEls = document.querySelectorAll(".item");

imgEls.forEach((el) => {
  el.addEventListener("click", () => {
    removeClass();
    el.classList.add("active");
  });
});

function removeClass() {
  imgEls.forEach((el) => el.classList.remove("active"));
}
