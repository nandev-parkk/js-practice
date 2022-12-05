"use strict";
/**
 * @요구사항
 * 1. 키가 입력되면 입력된 키의 정보를 .item의 .content에 삽입
 */

const descEl = document.querySelector(".desc");
const itemsEl = document.querySelector(".items");
const itemEls = document.querySelectorAll(".item");

window.addEventListener("keydown", (e) => {
  descEl.classList.add("invisible");
  itemsEl.classList.add("visible");

  itemEls.forEach((el) => {
    if (el.classList.contains("item-key")) {
      el.children[1].textContent = e.key === " " ? "Space" : e.key;
    } else if (el.classList.contains("item-keyCode")) {
      el.children[1].textContent = e.keyCode;
    } else {
      el.children[1].textContent = e.code;
    }
  });
});
