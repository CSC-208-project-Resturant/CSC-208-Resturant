const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 2000,
  };
  
  ScrollReveal().reveal(".hero", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1000,
  });

  ScrollReveal().reveal(".special-menu", {
    ...scrollRevealOption,
    origin: "top",
    delay: 1250,
  });

  ScrollReveal().reveal(".menu-items", {
    ...scrollRevealOption,
    origin: "top",
    delay: 1750,
  });