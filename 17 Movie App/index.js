"use strict";
/**
 * @요구사항
 *
 */

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const moviesEl = document.querySelector(".movies");
const formEl = document.querySelector(".form");
const inputEl = formEl.querySelector("input");

window.addEventListener("DOMContentLoaded", () => {
  handleFetch(API_URL, {
    method: "GET",
  })
    .then((res) => {
      const movies = res.results;

      createMovie(movies);
    })
    .catch(console.error);
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const param = e.target[1].value;

  handleFetch(`${SEARCH_API}/${param}`, {
    method: "GET",
  })
    .then((res) => {
      moviesEl.textContent = "";
      const movies = res.results;

      if (movies.length === 0) {
        moviesEl.classList.add("empty");
        const emptyEl = document.createElement("p");
        emptyEl.classList.add("movie-empty");
        emptyEl.append("no search");
        moviesEl.appendChild(emptyEl);
      } else {
        moviesEl.classList.remove("empty");
      }

      createMovie(movies);
    })
    .catch(console.error);
});

async function handleFetch(url, options) {
  const fetchOption = {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, fetchOption);
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data);
  }
}

function createMovie(movies) {
  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    const movieImgEl = document.createElement("img");
    movieImgEl.classList.add("movie-img");
    movieImgEl.src = `${IMG_PATH}${movie.poster_path}`;
    movieImgEl.alt = `${movie.original_title}`;

    const movieInfoEl = document.createElement("div");
    movieInfoEl.classList.add("movie-info");

    const movieTitleEl = document.createElement("h2");
    movieTitleEl.classList.add("movie-title");
    movieTitleEl.append(movie.original_title);

    const movieAverageEl = document.createElement("span");
    if (movie.vote_average <= 5) {
      movieAverageEl.classList.add("movie-average", "row");
    } else if (5 < movie.vote_average && movie.vote_average < 8) {
      movieAverageEl.classList.add("movie-average");
    } else {
      movieAverageEl.classList.add("movie-average", "high");
    }
    movieAverageEl.append(movie.vote_average);
    movieInfoEl.appendChild(movieTitleEl);
    movieInfoEl.appendChild(movieAverageEl);

    const movieOverviewEl = document.createElement("div");
    movieOverviewEl.classList.add("movie-overview");

    const movieOvervieEltitleEl = document.createElement("h3");
    movieOvervieEltitleEl.classList.add("movie-overview__title");

    const movieOvervieEldescEl = document.createElement("p");
    movieOvervieEldescEl.classList.add("movie-overview__desc");

    movieOvervieEltitleEl.append("Overview");
    movieOvervieEldescEl.append(movie.overview);
    movieOverviewEl.append(movieOvervieEltitleEl);
    movieOverviewEl.append(movieOvervieEldescEl);

    movieEl.appendChild(movieImgEl);
    movieEl.appendChild(movieInfoEl);
    movieEl.appendChild(movieOverviewEl);
    moviesEl.appendChild(movieEl);
  });
}
