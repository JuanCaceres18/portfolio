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
  let isValid = true;
  e.preventDefault();
  if (!name.value.trim()){
    name.style.borderBottom = "5px solid red";
    isValid = false;
  }
  else{
    name.style.borderBottom = "5px solid #F2C94C";
  }
  if (!email.value.trim() || !email.value.includes("@")){
    email.style.borderBottom = "5px solid red";
    isValid = false;
  }
  else{
    email.style.borderBottom = "5px solid #F2C94C";
  }
  if (!number.value.trim()){
    number.style.borderBottom = "5px solid red";
    isValid = false;
  }
  else{
    number.style.borderBottom = "5px solid #F2C94C";
  }

  if (!isValid){
    e.preventDefault();
    return;
  }
  
  mostrarMensaje();


  

  function mostrarMensaje(){
    const mensajeExito = document.getElementById("mensajeExito");
    const fondoNegro = document.getElementById("fondoNegro");
    // document.body.style.overflow = "hidden";
    fondoNegro.style.display = "flex";
    mensajeExito.style.display = "block";
    document.body.classList.add("no-scroll");
    setTimeout(() => {
      fondoNegro.style.display = "none";
      mensajeExito.style.display = "none";
      document.body.classList.remove("no-scroll");
    }, 2000);
    limpiarFormulario();
  }

  function limpiarFormulario(){
    name.value = "";
    email.value = "";
    number.value = "";
  }
})
