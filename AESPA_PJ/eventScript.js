const menuIcon = document.querySelector(".hamberger-icon-box");
const popupMemu = document.querySelector(".pop-up-menu");
// console.log(menuIcon);
menuIcon.addEventListener("click", function () {
  if (menuIcon.classList.contains("close-btn")) {
    menuIcon.classList.remove("close-btn");
    popupMemu.classList.add("hidden");
  } else {
    menuIcon.classList.add("close-btn");
    popupMemu.classList.remove("hidden");
  }
});
