"use strict";
/**
 * @요구사항
 *
 */

const titleContainerEl = document.querySelector(".title-container");
const imageContainerEl = document.querySelector(".image-container");
const titleEls = titleContainerEl.querySelectorAll(".item");
const imageEls = imageContainerEl.querySelectorAll(".item");
const upwardBtnEl = document.querySelector(".btn.upward");
const downwardBtnEl = document.querySelector(".btn.downward");

let count = 0;
const bodyHeight = document.body.clientHeight;
titleContainerEl.style.top = `-${(imageEls.length - 1) * 100}vh`;

console.log(bodyHeight);
upwardBtnEl.addEventListener("click", () => changeSlide("up"));
downwardBtnEl.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
  if (direction === "up") {
    count++;

    if (count > imageEls.length - 1) {
      count = 0;
    }
  } else {
    count--;

    if (count < 0) {
      count = imageEls.length - 1;
    }
  }

  imageContainerEl.style.transform = `translateY(-${count * bodyHeight}px)`;
  titleContainerEl.style.transform = `translateY(${count * bodyHeight}px)`;
}
