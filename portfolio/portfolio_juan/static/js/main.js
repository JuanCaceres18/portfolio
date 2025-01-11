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
if (sectionContact){
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
      sectionContact.scrollIntoView({ behavior: "smooth" });
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
}

// Cambiar idioma de la página
// Guardar traducciones según el idioma
const translations = {
  EN: {
    m_home: "Home",
    name_home: "Juan Pablo",
    m_about: "About me",
    m_skills: "Skills",
    m_work: "Work",
    m_contact: "Contact",
    h_name_1: "I'M <span class='name-home'>Juan Pablo</span>",
    h_job: "Full-Stack Developer",
    h_job_2: "Web Designer",
    h_contact: "Hire me",
    p_about: "I'm 19 years old and I'm studying a career as a Systems Analyst. I'm passionate about full-stack development and web design. I mainly dedicate myself to making landing pages for companies or ventures.",
    btn_about: "My resume",
    t_skills: "My skills",
    t_work: "Work",
    project_1: "Project 1",
    d_project_1: "Personal portfolio in which I show my projects and the technologies I use. Additionally, the viewer can download my CV and contact me through a form.",
    option_1: "Live preview",
    option_2: "View code",
    project_2: "Project 2",
    d_project_2: "This was a project I did for the Front-End part of the Codo a Codo course called 'Full-Stack Python'. Basically, this is a clone of the Netflix page GUI including a registration form that has data validation",
    project_3: "Project 3",
    d_project_3: "This is a simple page that honors the renowned band Pescado Rabioso. On that page I experimented a lot with the DOM in JavaScript.",
    btn_view_all: "View All",
    t_form: "Drop a message",
    d_form: "If you're interested in working with me or have any questions, feel free to fill out the form or reach out to me through any of the methods below. We can work together!",
    btn_submit: "Submit",
    msg_form: "Form submitted successfully",
    t_projects: "All of my projects",
    footer: "2024 - Juan Pablo Caceres, all rights reserved",
    pl_name: "Enter your name",
    pl_email: "Enter your email",
    pl_phone: "Enter your phone",
    search: "Search"
  },
  ES : {
    m_home: "Inicio",
    m_about: "Sobre mí",
    m_skills: "Habilidades",
    m_work: "Proyectos",
    m_contact: "Contacto",
    h_name_1: "SOY <span class='name-home'>Juan Pablo</span>",
    h_job: "Desarrollador Full-Stack",
    h_job_2: "Diseñador Web",
    h_contact: "Contáctame",
    p_about: "Tengo 19 años y estoy estudiando la carrera de Analista de Sistemas. Me apasiona el Desarrollo Full-Stack y el Diseño Web. Me dedico principalmente a realizar landing pages para empresas o emprendimientos.",
    btn_about: "Mi CV",
    t_skills: "Habilidades",
    t_work: "Mis proyectos",
    project_1: "Proyecto 1",
    d_project_1: "Portafolio personal en el que muestro mis proyectos y las tecnologías que uso. Además, el espectador puede descargar mi CV y ​​contactarme a través de un formulario.",
    option_1: "Ver página",
    option_2: "Ver código",
    project_2: "Proyecto 2",
    d_project_2: "Este fue un proyecto que hice para la parte Front-End del curso Codo a Codo llamado 'Full-Stack Python'. Básicamente, este es un clon de la GUI de la página de Netflix que incluye un formulario de registro que tiene validación de datos.",
    project_3: "Proyecto 3",
    d_project_3: "Esta es una página sencilla que rinde homenaje a la reconocida banda Pescado Rabioso. En esa página experimenté mucho con el DOM en JavaScript.",
    btn_view_all: "Ver todos",
    t_form: "Deja un mensaje",
    d_form: "Si está interesado en trabajar conmigo o tiene alguna pregunta, no dude en completar el formulario o comunicarse conmigo a través de cualquiera de los métodos siguientes. ¡Podemos trabajar juntos!",
    btn_submit: "Enviar",
    msg_form: "Formulario enviado correctamente",
    t_projects: "Todos mis proyectos",
    footer: "2024 - Juan Pablo Caceres, todos los derechos reservados",
    pl_name: "Ingresa tu nombre",
    pl_email: "Ingresa tu email",
    pl_phone: "Ingresa tu teléfono",
    search: "Buscar"
  }
}

// Lógica para cambiar de idioma
const languageSelector = document.getElementById("language");

// Función para cambiar el idioma
function changeLanguage(lang){
  console.log("Objeto translations:", translations);
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  console.log("Elementos detectados para traducir: ", elementsToTranslate);

  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (key && translations[lang][key]){
      if (element.placeholder){
        element.setAttribute("placeholder", translations[lang][key]);
      }
      else{
        element.innerHTML = translations[lang][key];
      }
    } 
    else{
      console.warn(`No se encontró traducción para la clave: ${key}`)
    }
  });
}

// Detectar cambio de idioma
languageSelector.addEventListener("change", (e) => {
  const selectedLanguage = e.target.value;
  changeLanguage(selectedLanguage);

  // Guardar idioma seleccionado en el Local Storage
  localStorage.setItem("language", selectedLanguage);
});

// Cargar el idioma guardado desde el Local Storage
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "EN";
  languageSelector.value = savedLanguage;
  changeLanguage(savedLanguage);
  console.log("Cargado...");
});