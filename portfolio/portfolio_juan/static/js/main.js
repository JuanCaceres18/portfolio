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
const sectionContact = document.getElementById("contact");
const containerContact = sectionContact.querySelector(".global-container-contact");
const formContact = containerContact.querySelector(".form-container");
const name = formContact.querySelector("#name");
const email = formContact.querySelector("#email");
const number = formContact.querySelector("#phone");
const botonSubmit = formContact.querySelector(".btn-submit-contact");

console.log(name);

formContact.addEventListener("submit", (e) =>{
  let formValido = true;
  if (!name.value){
    name.style.borderBottom = "5px solid red";
    formValido = false;
  }
  else{
    name.style.borderBottom = "5px solid #F2C94C";
  }
  if (!email.value || !email.includes("@")){
    email.style.borderBottom = "5px solid red";
    formValido = false;
  }
  else{
    email.style.borderBottom = "5px solid #F2C94C";
  }
  if (!number.value){
    number.style.borderBottom = "5px solid red";
    formValido = false;
  }
  else{
    number.style.borderBottom = "5px solid #F2C94C";
  }

  if(!formValido){
    e.preventDefault();
  }
  else{
    
  }

})
