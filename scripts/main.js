import navBar from "./layout/navigation-bar.js";

const hamburger = document.querySelector(".nav__hamburger"),
  closeBtn = document.querySelector(".nav__close-button");

hamburger.addEventListener("click", navBar.show);
closeBtn.addEventListener("click", navBar.close);

import { changeContent } from "./utilities/change-content.js";
import move from "./utilities/forward-and-back-button.js";

const file = window.location.pathname;
const changeBtns = document.querySelectorAll(".button--content-changer");

switch (true) {
  case file.includes("/destination/"):
    changeBtns.forEach((btn, index) => {
      btn.addEventListener("click", (e) =>
        changeContent.destinations(e, index),
      );
    });
    break;

  case file.includes("/technology/"):
    changeBtns.forEach((btn, index) => {
      btn.addEventListener("click", (e) => changeContent.technology(e, index));
    });
    break;

  case file.includes("/crew/"):
    move.initialize();
    const fowardBtn = document.querySelector("#forward-btn");
    const backBtn = document.querySelector("#back-btn");

    fowardBtn.addEventListener("click", move.looping.next);
    backBtn.addEventListener("click", move.looping.prev);
    break;
}
