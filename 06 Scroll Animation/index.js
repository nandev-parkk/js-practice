"use strict";

const itemEls = document.querySelectorAll(".item");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

const options = {
  root: null,
  rootMargin: "50px",
  threshold: 0.4,
};

const observer = new IntersectionObserver(callback, options);

itemEls.forEach((item) => {
  observer.observe(item);
});
