"use strict";
/**
 * @요구사항
 *
 */

const containerEl = document.querySelector(".container");
const imgEls = document.querySelectorAll(".img");
const backBtnEl = document.querySelector(".back");
const forwardBtnEl = document.querySelector(".forward");

let activeCount = 0;

backBtnEl.addEventListener("click", () => {
  activeCount--;

  if (activeCount < 0) {
    activeCount = imgEls.length - 1;
  }

  setBgToContainer();
  setActiveImg();
});

forwardBtnEl.addEventListener("click", () => {
  activeCount++;

  if (imgEls.length - 1 < activeCount) {
    activeCount = 0;
  }

  setBgToContainer();
  setActiveImg();
});

setBgToContainer();

function setBgToContainer() {
  containerEl.style.backgroundImage = imgEls[activeCount].style.backgroundImage;
}

function setActiveImg() {
  imgEls.forEach((el) => el.classList.remove("visible"));

  imgEls[activeCount].classList.add("visible");
}
