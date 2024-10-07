const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
}); 

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line")
})

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 3000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 4000,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content span", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".header__content button", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".special__container h1", {
  ...scrollRevealOption,
  origin: "top",
  delay: 1000,
});
ScrollReveal().reveal(".special__item", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});
ScrollReveal().reveal(".special__container button", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});


ScrollReveal().reveal(".about__section", {
  ...scrollRevealOption,
  origin: "top",
  delay: 1000,
});


ScrollReveal().reveal(".im", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});
ScrollReveal().reveal(".ti", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});
ScrollReveal().reveal(".section__container2 h1", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 2000,
});

ScrollReveal().reveal(".menu__container h1", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 2000,
});
ScrollReveal().reveal(".menu__item", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});