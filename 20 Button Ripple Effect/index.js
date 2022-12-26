"use strict";
/**
 * @요구사항
 *
 */

const rippleBtnEl = document.querySelector(".ripple");

// this를 사용하기 위해 일반 함수 사용
rippleBtnEl.addEventListener("click", function (e) {
  const x = e.offsetX;
  const y = e.offsetY;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  this.appendChild(circle);
  setTimeout(() => circle.remove(), 500);
});
