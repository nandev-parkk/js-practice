"use strict";
/**
 * @요구사항
 * 1. expand 버튼 클릭시 expand 버튼 invisible,
 * 해당 아이템 설명 visible, close 버튼 visible,
 * background-color: white, background image 추가
 */

const itemEls = document.querySelectorAll(".item");

itemEls.forEach((el) => {
  const btnEl = el.children[0].children[1];

  btnEl.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});
