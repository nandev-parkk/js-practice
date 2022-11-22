"use strict";

const itemEls = document.querySelectorAll(".item");
const height = (window.innerHeight / 5) * 4;

window.addEventListener("scroll", () => {
  itemEls.forEach((item) => {
    const rectTopValue = item.getBoundingClientRect().top;

    if (rectTopValue < height) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
});
