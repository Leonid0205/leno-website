document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
})
// Navbar Background on Scroll
window.addEventListener('scroll', function (e) {
  const navbar = document.querySelector('.navbar');
  if (this.window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  }
  else {
    navbar.classList.remove('navbar--scroll');
  }
});