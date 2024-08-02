document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  const modal = document.querySelector("#videoModal");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById('videoPlayer');
  videoButton.addEventListener("click", () => {
    modal.style.display = "block";
    videoPlayer.src = 'https://www.youtube.com/embed/LXYjFsuVOoc';
  });
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    videoPlayer.src = '';
  });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      videoPlayer.src = '';
    }
  })
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