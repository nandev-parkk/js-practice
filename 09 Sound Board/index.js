"use strict";
/**
 * @요구사항
 * 1. 버튼 클릭시 오디오 재생
 * 2. 오디오 재생 중 다른 버튼 클릭시 기존 오디오 재생 중단 후 새로운 오디오 재생
 * 3. 화면 버튼들이 깨지지 않고 자연스럽게 줄바꿈 되도록
 */

// 처음 구현한 코드
// 이벤트 버블링, 이벤트 위임
// const containerEl = document.querySelector(".container");

// containerEl.addEventListener("click", (e) => {
//   const target = e.target;
//   const childEl = target.childNodes[1];
//   childEl.play();
// });

// 두번째 구현한 코드, 원본 코드 참고
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const audios = document.querySelector(".audios");
const btns = document.querySelector(".btns");

sounds.forEach((sound) => {
  const audio = new Audio(`./sounds/sound-board_sounds_${sound}.mp3`);
  audio.classList.add(sound);

  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = sound;
  btn.addEventListener("click", () => {
    stopSongs();
    audio.play();
  });

  audios.appendChild(audio);
  btns.appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.querySelector(`.${sound}`);

    song.pause();
    // 재생시점 할당
    song.currentTime = 0;
  });
}

// 원본 코드
// const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// sounds.forEach(sound => {
//     const btn = document.createElement('button')
//     btn.classList.add('btn')

//     btn.innerText = sound

//     btn.addEventListener('click', () => {
//         stopSongs()

//         document.getElementById(sound).play()
//     })

//     document.getElementById('buttons').appendChild(btn)
// })

// function stopSongs() {
//     sounds.forEach(sound => {
//         const song = document.getElementById(sound)

//         song.pause()
//         song.currentTime = 0;
//     })
// }
