"use strict";

const imgEl = document.querySelector(".bg");
const percentEl = document.querySelector(".percent");

function handleChange() {
  let percentValue = 1;

  const interval = setInterval(() => {
    if (100 <= percentValue) {
      clearInterval(interval);
    } else {
      percentValue++;
      percentEl.textContent = `${percentValue}%`;
      percentEl.style.opacity = `${1 - percentValue / 100}`;
      imgEl.style.filter = `blur(${10 - percentValue / 10}px)`;
    }
  }, 30);
}

handleChange();
