"use strict";
/**
 * @요구사항
 *
 */

const countEl = document.querySelector(".count");
const imgContainerEl = document.querySelector(".img-container");

let count = 0;

imgContainerEl.addEventListener("dblclick", (e) => {
  count++;
  countEl.textContent = count;

  // imgContainerEl.innerHTML = `<span class="material-icons heart"> favorite </span>`;
  // const heartEl = document.querySelector(".img-container .heart");

  const heartEl = document.createElement("span");
  heartEl.classList.add("material-icons", "heart");
  heartEl.append("favorite");
  heartEl.style.top = `${e.offsetY}px`;
  heartEl.style.left = `${e.offsetX}px`;

  imgContainerEl.appendChild(heartEl);

  setTimeout(() => {
    imgContainerEl.removeChild(heartEl);
    // heartEl.remove();
  }, 2000);
});
