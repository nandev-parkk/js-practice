"use strict";
/**
 * @요구사항
 * 몰라서 봐버림 ㅋㅋ
 */

const numsEls = document.querySelectorAll(".nums");

numsEls.forEach((el) => {
  // 그냥 숫자를 넣어도 문자열 타입으로 들어감
  // 왜 넣는겨? 안넣어도 되는데
  el.textContent = "0";

  function updateNum() {
    // data-num 값을 가져와서 데이터 타입을 숫자타입으로 변경
    const target = +el.getAttribute("data-num");

    // 현재 el에 들어있는 숫자를 구한다.
    const currentValue = +el.textContent;

    // 증가시키고자하는 만큼의 숫자를 구한다
    const increment = target / 500;

    // currentValue가 target보다 작을 때까지 함수 실행
    if (currentValue < target) {
      // 소수점을 제거하기 위해 ceil 사용한듯? floor(내림)이나 round(반올림) 사용해도 동일하게 동작한다.
      el.textContent = `${Math.ceil(currentValue + increment)}`;

      // 0.001초마다 자기 자신 함수를 실행
      setTimeout(updateNum, 1);
    } else {
      // 마지막엔 data-num 값을 넣는다.
      // 없어도 되지 않나? 잘 동작하는데
      el.textContent = target;
    }
  }

  updateNum();
});
