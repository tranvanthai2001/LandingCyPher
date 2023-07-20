const navMenu = document.querySelector(".nav_menu"),
  toggleBtn = document.querySelector(".toggle_menu"),
  bntMobile = document.querySelector(".btn_mobile"),
  closeMenu = document.querySelector(".close_menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.add("show");
  closeMenu.style.display = "block";
  toggleBtn.style.display = "none";
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
  closeMenu.style.display = "none";
  toggleBtn.style.display = "block";
});
