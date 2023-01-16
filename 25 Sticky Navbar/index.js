"use strict";
/**
 * @요구사항
 *
 */

const hd = document.querySelector("header");

window.addEventListener("wheel", () => {
  if (window.scrollY > 200) {
    hd.classList.add("active");
  } else {
    hd.classList.remove("active");
  }
});
