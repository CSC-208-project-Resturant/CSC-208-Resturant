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
    duration: 2000,
  };
  
  ScrollReveal().reveal(".hero", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1500,
  });

  ScrollReveal().reveal(".menu h2", {
    ...scrollRevealOption,
    origin: "top",
    delay: 1500,
  });

  ScrollReveal().reveal(".menu-align", {
    ...scrollRevealOption,
    origin: "top",
    delay: 2000,
  });

  ScrollReveal().reveal(".hi", {
    ...scrollRevealOption,
    origin: "top",
    delay: 15000,
  });

  ScrollReveal().reveal(".menu-img", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1500,
  });
  ScrollReveal().reveal(".food-menu", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1500,
  });