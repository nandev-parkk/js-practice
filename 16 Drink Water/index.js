"use strict";
/**
 * @요구사항
 *
 */

const volumeEl = document.querySelector(".volume");
const volumeTopEl = volumeEl.querySelector(".top");
const literEl = volumeTopEl.querySelector(".liter");
const volumeBottomEl = volumeEl.querySelector(".bottom");
const cupsEl = document.querySelector(".cups");

let count = 8;

for (let i = 1; i <= count; i++) {
  const cupEl = document.createElement("button");
  cupEl.append("250ml");
  cupEl.setAttribute("type", "button");
  cupEl.classList.add("cup");
  cupEl.id = i;
  cupsEl.appendChild(cupEl);
}

const cupEls = cupsEl.querySelectorAll(".cup");

// 없어도 잘되네;;
// updateBigCup();

// cupEl을 클릭하면 highlightCpus 함수 실행
cupEls.forEach((el, i) => {
  el.addEventListener("click", () => highlightCups(i));
});

function highlightCups(i) {
  // i가 7(마지막 el)이고 마지막 el에 class 'fill'이 포함되어 있으면 i를 1 뺀다.
  // el i번째에 class 'fill'이 포함되어 있고 el i번째 다음 형제 엘리먼트에 class 'fill'이 포함되어 있지 않으면 i를 1 뺀다.
  if (i === 7 && cupEls[i].classList.contains("fill")) {
    i--;
  } else if (
    cupEls[i].classList.contains("fill") &&
    !cupEls[i].nextElementSibling.classList.contains("fill")
  ) {
    i--;
  }

  cupEls.forEach((el, idx) => {
    // 위 코드에서 계산 i보다 작은 idx의 el에 class 'fill'을 추가
    // 그 밖에는 class 'fill'을 제거
    if (idx <= i) {
      el.classList.add("fill");
    } else {
      el.classList.remove("fill");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fillCupEls = document.querySelectorAll(".cup.fill").length;
  const totalCupEls = cupEls.length;

  // 채워진 cup el이 없으면
  if (fillCupEls === 0) {
    volumeBottomEl.style.visibility = "hidden";
    volumeBottomEl.style.height = 0;
  } else {
    volumeBottomEl.style.visibility = "visible";
    volumeBottomEl.style.height = `${(fillCupEls / totalCupEls) * 330}px`;
    volumeBottomEl.textContent = `${(fillCupEls / totalCupEls) * 100}%`;
  }

  if (fillCupEls === totalCupEls) {
    volumeTopEl.style.height = 0;
    volumeTopEl.style.visibility = "hidden";
  } else {
    volumeTopEl.style.visibility = "visible";
    literEl.textContent = `${2 - (250 * fillCupEls) / 1000}L`;
  }
}

// 코드 짜다 망함~
// const cupEls = cupsEl.querySelectorAll(".cup");

// cupEls.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.target.classList.toggle("fill");
//     const fillElLength = document.querySelectorAll(".fill").length;

//     const bottomElHeight = volumeBottomEl.style.height;
//     const topElHeight = volumeTopEl.style.height;
//     volumeBottomEl.style.height = `${bottomElHeight + 12.5}%`;
//     volumeTopEl.style.height = `${topElHeight - 12.5}%`;
//   });
// });
