"use strict";
/**
 * @요구사항
 * 1. 리프레시되면 // Joke goes here 출력 후 올바른 콘텐츠가 나타나도록
 * 2. 리프레스되면 콘텐츠가 랜덤하게 출력되도록
 * 3. 버튼 클릭시 콘텐츠가 랜덤하게 출력되도록
 */

const messages = [
  "A quick shoutout to all of the sidewalks out there... Thanks for keeping me off the streets.",
  "What do you call a fake noodle? An impasta.",
  "How do you fix a damaged jack-o-lantern? You use a pumpkin patch.",
  "Two fish are in a tank, one turns to the other and says, 'how do you drive this thing?'",
  "Why do crabs never give to charity? Because they’re shellfish.",
  "What did the digital clock say to the grandfather clock? Look, no hands!",
  "A butcher accidentally backed into his meat grinder and got a little behind in his work that day.",
];
const descEl = document.querySelector(".desc");
const btnEl = document.querySelector(".btn");

window.addEventListener("DOMContentLoaded", handleRandomText);

btnEl.addEventListener("click", handleRandomText);

function handleRandomText() {
  setTimeout(() => {
    descEl.firstChild.remove();
    descEl.append(messages[Math.floor(Math.random() * messages.length)]);
  }, 500);
}
