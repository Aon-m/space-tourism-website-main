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
