const toggleBtn = document.querySelector(".banner__menu-toggle-wrapper");
const menu = document.querySelector(".banner__menu-wrapper");
const navLinks = document.querySelectorAll(".banner__menu-item");

const windowWidth = window.innerWidth;

const showMenu = () => {
  menu.classList.remove("hide");
};

const hideMenu = () => {
  menu.classList.add("hide");
};

const showMenuButton = () => {
  toggleBtn.classList.remove("hide");
};

const hideMenuButton = () => {
  toggleBtn.classList.add("hide");
};

if (windowWidth >= 999) {
  showMenu();
  hideMenuButton();
} else {
  hideMenu();
  showMenuButton();
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 999) {
    hideMenu();
    showMenuButton();
  }
});

toggleBtn.addEventListener("click", () => {
  showMenu();
  hideMenuButton();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hideMenu();
    showMenuButton();
  });
});
