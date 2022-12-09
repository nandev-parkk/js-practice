"use strict";
/**
 * @요구사항
 * 못풀어서 코드 봐버림
 */

const formEl = document.querySelector(".form");
const wordsEl = document.querySelector(".words");

// change event는 입력시 event가 일어나지 않고 focus를 옮길 때 일어남
// formEl.addEventListener("change", addText);
formEl.addEventListener("keyup", addText);

function addText(e) {
  let value = e.target.value;
  const wordLength = wordsEl.childNodes.length;

  // 인자로 입력한 텍스트 전달
  createWords(value);

  if (e.key === "Enter") {
    // word가 없거나 1개이면 enter 쳐도 함수 실행되지 않도록 추가
    if (wordLength === 0) {
      e.target.value = "";
      return;
    } else if (wordLength === 1) {
      return;
    }

    // randomSelect 함수가 실행되도록 하기 위해 setTimeout 사용?
    // 딜레이 주기 위해 사용
    if (e.key === "Enter") {
      // setTimeout(() => {
      // }, 10);

      randomSelect();
      e.target.value = "";
    }
  }
}

// string.prototype.trim(): 문자열 양 끝의 공백을 제거하고 원본은 훼손하지 않은채 새로운 문자열 반환
// string.prototype.trimStart(): 문자열 시작 공백 제거
// string.prototype.trimEnd(): 문자열 끝 공백 제거

function createWords(value) {
  /**
   * value를 ,로 구분해서 문자열을 배열로 나눈다.
   * words에 담긴 문자열 중 앞 뒤 공백을 제거했을 때 빈 문자열이 아닌 것만 담는다.
   * 담긴 문자열을 다시 한번 앞 뒤 공백을 제거한다.
   */
  const words = value
    .split(",")
    .filter((word) => word.trim() !== "")
    .map((word) => word.trim());

  // 왜 이걸 해야 정상적으로 동작하는거지?
  wordsEl.textContent = "";

  /**
   * words를 순회한다.
   * span 태그를 만들고 className을 부여한다.
   * span 태그에 문자열을 넣는다.
   * wordsEl에 span 태그를 넣는다.
   */
  words.forEach((word) => {
    const wordEl = document.createElement("span");
    wordEl.classList.add("word");
    wordEl.append(word);
    wordsEl.appendChild(wordEl);
  });
}

function randomSelect() {
  const times = 30;

  // 0.1초마다 interval 함수 실행
  const interval = setInterval(() => {
    const randomWord = pickRandomWord();

    if (randomWord !== undefined) {
      // add classList
      highlightWord(randomWord);

      // 0.1초 후에 remove classList
      setTimeout(() => {
        unHighlightWord(randomWord);
      }, 100);
    }
  }, 100);

  // 30초 후에 setTimeout 함수 실행
  setTimeout(() => {
    // interval 제거
    clearInterval(interval);

    // 0.1초 후에 random한 word 선택해서 add classList
    setTimeout(() => {
      const randomWord = pickRandomWord();

      highlightWord(randomWord);
    }, 100);
  }, times * 100);
}

// wordEl을 전부 선택해서 그 중 랜덤하게 선택된 wordEl을 반환한다.
function pickRandomWord() {
  const words = document.querySelectorAll(".word");
  return words[Math.floor(Math.random() * words.length)];
}

// 인자로 들어온 word에 클래스 부여
function highlightWord(word) {
  word.classList.add("highlight");
}

// 인자로 들어온 word에 클래스 제거
function unHighlightWord(word) {
  word.classList.remove("highlight");
}
