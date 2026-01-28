const navBar = (function () {
  const mobileNavBar = document.querySelector(".nav--dialog");

  function show() {
    mobileNavBar.showModal();
  }
  function close() {
    mobileNavBar.close();
  }

  return {
    show: show,
    close: close,
  };
})();

export default navBar;

const hamburger = document.querySelector(".nav__hamburger"),
  closeBtn = document.querySelector(".nav__close-button");

hamburger.addEventListener("click", navBar.show);
closeBtn.addEventListener("click", navBar.close);
