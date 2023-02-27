"use strict";
/**
 * @요구사항
 *
 */

const containerEl = document.querySelector(".container");
const pwEl = document.querySelector(".pw");
const copyBtnEl = document.querySelector(".copy");
const lengthEl = document.querySelector("#length");
const generateBtnEl = document.querySelector(".generate");

const NUMBERS = "0123456789";
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const SYMBOLS = '`₩~!@#$%^&*()-_=+[]{};:",.<>/?|';
const condition = {
  uppercase: ALPHABET.toUpperCase(),
  lowercase: ALPHABET,
  numbers: NUMBERS,
  symbols: SYMBOLS,
};

containerEl.addEventListener("change", handleChange);
copyBtnEl.addEventListener("click", copyToClipBoard);
generateBtnEl.addEventListener("click", generatePassword);

// change input checked
function handleChange(e) {
  if (e.target.id === "uppercase") {
    condition.uppercase = e.target.checked ? ALPHABET.toUpperCase() : "";
  } else if (e.target.id === "lowercase") {
    condition.lowercase = e.target.checked ? ALPHABET : "";
  } else if (e.target.id === "numbers") {
    condition.numbers = e.target.checked ? NUMBERS : "";
  } else if (e.target.id === "symbols") {
    condition.symbols = e.target.checked ? SYMBOLS : "";
  }
}

//generate pw
function generatePassword() {
  const length = lengthEl.value;
  const { uppercase, lowercase, numbers, symbols } = condition;
  const joinCondition = [uppercase, lowercase, numbers, symbols].join("");
  const pwArr = [];

  for (let i = 0; i < length; i++) {
    const randomChar =
      joinCondition[Math.floor(Math.random() * joinCondition.length)];
    pwArr.push(randomChar);
  }

  pwEl.textContent = pwArr.join("");
}

// copy
function copyToClipBoard() {
  const text = pwEl.textContent;

  if (!text) {
    return alert("0 char");
  }

  navigator.clipboard
    .writeText(text) //
    .then(console.log) //
    .catch(console.error);
}
