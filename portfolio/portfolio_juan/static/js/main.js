// Fade-in en scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        else{
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.3 // Dispara el evento cuando el 30% de la sección es visible
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
});

// Validación de datos en contact
const formContact = document.querySelector(".form-container");
const name = formContact.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const botonSubmit = formContact.querySelector(".btn-submit-contact");

console.log(name);

formContact.addEventListener("submit", (e) =>{
  e.preventDefault();
  if (!name){
    alert("Ingresa el nombre");
  
  }
})
