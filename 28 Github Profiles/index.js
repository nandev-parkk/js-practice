"use strict";
/**
 * @요구사항
 *
 */

const containerEl = document.querySelector(".container");
const resultEl = containerEl.querySelector(".result");
const formEl = containerEl.querySelector("form");
const inputEl = formEl.querySelector("input");
const API_URL = "https://api.github.com/users";

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const param = inputEl.value;

  if (!param) return;
  inputEl.value = "";
  resultEl.classList.add("visible");

  getUser(param);
});

function getUser(param) {
  handleFetch(`${API_URL}/${param}`, { method: "GET" })
    .then(createInfos)
    .catch((err) => createEmpty(err.message));

  handleFetch(`${API_URL}/${param}/repos?sort=created`, { method: "GET" })
    .then(createRepos)
    .catch(console.error);
}

function createInfos(res) {
  const { bio, name, login, avatar_url, followers, following, public_repos } =
    res;

  resultEl.innerHTML = `
    <div class="img-box">
      <img src=${avatar_url} alt="${login}" />
    </div>
    <div class="infos">
      <h2 class="name">${name}</h2>
      <p class="desc">${bio}</p>
      <div class="info">
        <span>${followers} Followers</span>
        <span>${following} Following</span>
        <span>${public_repos} Repos</span>
      </div>
      <div class="repos"></div>
    </div>
  `;
}

function createRepos(res) {
  const sortedArr = res.slice(0, 5);

  sortedArr.forEach((el) => {
    const aEl = document.createElement("a");
    aEl.append(el.name);
    aEl.href = el.url;
    aEl.target = "_blank";
    aEl.rel = "noopenner noreferrer";

    const reposEl = document.querySelector(".repos");
    reposEl.appendChild(aEl);
  });
}

function createEmpty(msg) {
  resultEl.textContent = msg;
}

async function handleFetch(url, options) {
  const fetchOptions = {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, fetchOptions);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error("No profile with this username");
  }
}
