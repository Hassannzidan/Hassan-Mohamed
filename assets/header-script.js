const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  burgerBtn.textContent = burgerBtn.textContent === "☰" ? "X" : "☰";
});
