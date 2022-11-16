"use strict";

// menu/close 버튼 클릭시 메뉴가 rotate됌
const menuIconEl = document.querySelector(".icon--menu");
const closeIconEl = document.querySelector(".icon--close");
const container = document.querySelector(".container");
const floatingEl = document.querySelector(".floating");

menuIconEl.addEventListener("click", () => {
  container.classList.add("active");
  floatingEl.classList.add("active");
});

closeIconEl.addEventListener("click", () => {
  container.classList.remove("active");
  floatingEl.classList.remove("active");
});
