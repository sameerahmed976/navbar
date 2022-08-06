const btn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navLinks = document.querySelector(".nav-links");

btn.addEventListener("click", () => {
  if (!navLinks.classList.contains("active")) {
    btn.classList.add("hamburger-active");
    navLinks.classList.add("active");
    closeBtn.classList.add("close-active");
  }
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.remove("close-active");
  navLinks.classList.remove("active");
  btn.classList.remove("hamburger-active");
});
