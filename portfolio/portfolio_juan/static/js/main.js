document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Deja de observar una vez que se ha animado
        }
      });
    }, {
      threshold: 0.5 // Dispara el evento cuando el 10% de la sección es visible
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
});