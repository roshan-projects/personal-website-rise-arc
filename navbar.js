document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
    });
  }
});
