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
  if (!name.value){
    name.style.borderBottom = "5px solid red";
  }
  else{
    name.style.borderBottom = "5px solid #F2C94C";
  }
  if (!email.value || !email.includes("@")){
    email.style.borderBottom = "5px solid red";
  }
  else{
    email.style.borderBottom = "5px solid #F2C94C";
  }
  if (!number.value){
    number.style.borderBottom = "5px solid red";
  }
  else{
    number.style.borderBottom = "5px solid #F2C94C";
  }

  if(!name.value || !number.value || !email.value){
    e.preventDefault();
  }
  else{
    mostrarMensaje();
    limpiarFormulario();
  }

  function mostrarMensaje(){
    const mensajeExito = document.getElementById("mensajeExito");
    mensajeExito.innerHTML = "<p>Mensaje enviado correctamente!</p>";
  }

  function limpiarFormulario(){
    name.value = "";
    email.value = "";
    number.value = "";

  }
})
