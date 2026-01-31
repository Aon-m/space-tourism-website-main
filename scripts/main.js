import navBar from "./layout/navigation-bar.js";

const hamburger = document.querySelector(".nav__hamburger"),
  closeBtn = document.querySelector(".nav__close-button");

hamburger.addEventListener("click", navBar.show);
closeBtn.addEventListener("click", navBar.close);

import { changeContent } from "./utilities/change-content.js";
import move from "./utilities/forward-and-back-button.js";

const file = window.location.pathname;
const changeBtns = document.querySelectorAll(".button--content-changer");
const navLinks = document.querySelectorAll(".nav__link");

switch (true) {
  case file.includes("/destination/"):
    changeBtns.forEach((btn, index) => {
      btn.addEventListener("click", (e) =>
        changeContent.destinations(e, index),
      );
    });
    navLinks.forEach((link) => {
      link.classList.remove("nav-selected");
    });
    navLinks[1].classList.add("nav-selected");
    break;

  case file.includes("/technology/"):
    changeBtns.forEach((btn, index) => {
      btn.addEventListener("click", (e) => changeContent.technology(e, index));
    });
    navLinks.forEach((link) => {
      link.classList.remove("nav-selected");
    });
    navLinks[3].classList.add("nav-selected");
    break;

  case file.includes("/crew/"):
    move.initialize();
    const fowardBtn = document.querySelector("#forward-btn"),
      backBtn = document.querySelector("#back-btn");

    fowardBtn.addEventListener("click", move.looping.next);
    backBtn.addEventListener("click", move.looping.prev);

    navLinks.forEach((link) => {
      link.classList.remove("nav-selected");
    });
    navLinks[2].classList.add("nav-selected");
    break;
  case !file.includes("/crew/") &&
    !file.includes("/destination/") &&
    !file.includes("/technology/"):
    navLinks.forEach((link) => {
      link.classList.remove("nav-selected");
    });
    navLinks[0].classList.add("nav-selected");
    break;
}

document
  .querySelectorAll("header a")
  .forEach((link) => link.classList.add("underline-hover"));
document
  .querySelector("main")
  .querySelectorAll(".button--content-change")
  .forEach((link) => link.classList.add("underline-hover"));
