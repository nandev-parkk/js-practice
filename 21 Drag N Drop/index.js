"use strict";
/**
 * @요구사항
 *
 */

const containerEls = document.querySelectorAll(".container");
const boxEl = document.querySelector(".box");
boxEl.style.backgroundImage = `url(./images/img0${getRandomInt(1, 6)}.jpg)`;

// drag 시작하면 boxEl에 dragging 클래스 추가
boxEl.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});

// drag 끝나면 boxEl에서 dragging 클래스 제거
boxEl.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

containerEls.forEach((el) => {
  // drag 요소가 container에 올라오면 container에 over 클래스 추가
  el.addEventListener("dragover", (e) => {
    e.preventDefault();
    el.classList.add("over");
  });

  // drag 요소가 container에 들어왔다가 나가면 container에서 over 클래스 제거
  el.addEventListener("dragleave", (e) => {
    e.preventDefault();
    el.classList.remove("over");
  });

  // drag 요소가 container에 떨어지면 container에 boxEl 요소 추가 및 over 클래스 제거
  el.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("drop");
    el.classList.remove("over");
    el.append(boxEl);
  });
});

// 이미지를 랜덤하게 가져오기 위한 함수
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
