"use strict";
/**
 * @요구사항
 *
 */

const rangeEl = document.querySelector(".range");
const textEl = document.querySelector(".text");

const str = "We Love Programming!";

let count = 0;
let range = 2000 / rangeEl.value;

write();

function write() {
  if (count > str.length - 1) count = 0;

  count++;

  const newStr = str.slice(0, count);
  textEl.textContent = newStr;

  setTimeout(write, range);
}

rangeEl.addEventListener("input", (e) => {
  range = 1000 / e.target.value;
});
