"use strict";
/**
 * @요구사항
 *
 */

const containerEl = document.querySelector(".container");
const clockEl = containerEl.querySelector(".clock");
const hourHandEl = clockEl.querySelector(".hour-hand");
const minuteHandEl = clockEl.querySelector(".minute-hand");
const secondHandEl = clockEl.querySelector(".second-hand");

const wrapperEl = containerEl.querySelector(".wrapper");
const timeEl = wrapperEl.querySelector(".time");
const dayOfTheWeekEl = wrapperEl.querySelector(".dayOfTheWeek");
const today = new Date();

const dayArr = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

const monthArr = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

setInterval(() => {
  const today = new Date();

  update(today);
}, 1000);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function update(today) {
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  const day = today.getDay();
  const month = today.getMonth();
  const date = today.getDate();
  const hoursForClock = hour >= 13 ? hour % 12 : hour;
  const ampm = hour >= 12 ? "PM" : "AM";

  hourHandEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteHandEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minute,
    0,
    60,
    0,
    360
  )}deg)`;
  secondHandEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    second,
    0,
    60,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `
    ${hour < 10 ? `0${hoursForClock}` : hoursForClock}:${
    minute < 10 ? `0${minute}` : minute
  }:${second < 10 ? `0${second}` : second} ${ampm}
  `;

  dayOfTheWeekEl.innerHTML = `
    <span class="day">${dayArr[day]},</span>
    <span class="month">${monthArr[month]}</span>
    <span class="date">${date < 10 ? 0 : ""}${date}</span>
  `;
}

update(today);

// dark mode
const body = document.body;
const toggleBtnEl = document.querySelector(".toggle");

toggleBtnEl.addEventListener("click", () => {
  if (body.dataset.dark === undefined || body.dataset.dark === "false") {
    body.dataset.dark = "true";
    body.classList.add("dark-mode");
    toggleBtnEl.textContent = "Light mode";
  } else {
    body.dataset.dark = "false";
    body.classList.remove("dark-mode");
    toggleBtnEl.textContent = "Dark mode";
  }
});
