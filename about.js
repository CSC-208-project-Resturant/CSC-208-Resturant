const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 2000,
  };
  
  ScrollReveal().reveal(".hero h1", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1000,
  });
  ScrollReveal().reveal(".hero p", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,
  });
  ScrollReveal().reveal(".cta-button", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1000,
  });

  ScrollReveal().reveal(".about-image", {
    ...scrollRevealOption,
    origin: "left",
    delay: 12500,
  });
  ScrollReveal().reveal(".about-text", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1250,
  });
  
  ScrollReveal().reveal(".chefs-section", {
    ...scrollRevealOption,
    origin: "top",
    delay: 1250,
  });

  ScrollReveal().reveal(".reviews", {
    ...scrollRevealOption,
    origin: "top",
    delay: 1250,
  });




  
