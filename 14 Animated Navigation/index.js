"use strict";
/**
 * @요구사항
 * 1. 버튼 클릭시 nav에 classList.add('active');
 */

const navEl = document.querySelector(".nav");
const btnEl = navEl.querySelector(".btn");

btnEl.addEventListener("click", () => {
  navEl.classList.toggle("active");
});
