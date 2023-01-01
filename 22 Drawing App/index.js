"use strict";
/**
 * @요구사항
 *
 */

const canvasEl = document.querySelector("#canvas");
const increaseBtnEl = document.querySelector(".increase");
const decreaseBtnEl = document.querySelector(".decrease");
const sizeEl = document.querySelector(".size");
const colorEl = document.querySelector(".color");
const clearEl = document.querySelector(".clear");

// getContext() 함수는 드잉에 필요한 속성과 함수를 가진 객체를 생성
const ctx = canvasEl.getContext("2d");

let size = 5;
let isPressed = false;
// colorEl.value = "black";
let color = colorEl.value;
let x;
let y;

canvasEl.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvasEl.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = null;
  y = null;
});

canvasEl.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

// 마우스 좌표에 원을 생성하는 함수
function drawCircle(x, y) {
  // 도형을 그리기 시작하는 함수
  ctx.beginPath();

  // 좌표를 중심으로 반지름 크기의 시작점부터 끝나는 점까지 잇는 곡선을 그린다(반시계 또는 시계 방향 설정 가능)
  // arc(x, y, radius, startAngle, endAngle, actiClockwise)
  ctx.arc(x, y, size, 0, Math.PI * 2);

  // 면색을 지정
  ctx.fillStyle = color;

  // 경로의 내부를 색으로 채움
  ctx.fill();
}

// 마우스를 따라 끊기지 않게 선을 그리는 함수
function drawLine(x, y, x2, y2) {
  ctx.beginPath();

  // 선이 시작될 좌표를 설정
  ctx.moveTo(x, y);

  // 선이 끝나는 좌표를 설정
  ctx.lineTo(x2, y2);

  // 테두리 색 설정
  ctx.strokeStyle = color;

  // 테두리 굵기 설정
  ctx.lineWidth = size * 2;

  // 선을 그리기 시작
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.textContent = size;
}

increaseBtnEl.addEventListener("click", () => {
  size += 1;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtnEl.addEventListener("click", () => {
  size -= 1;

  if (size < 1) {
    size = 1;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));

clearEl.addEventListener("click", () =>
  // clearRect(x, y, width, height);
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
);
