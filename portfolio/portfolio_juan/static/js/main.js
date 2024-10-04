// Animation al detectar scrolling en Skills
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (sectionPosition < screenPosition) {
      skillsSection.classList.add('animated');
    }
});