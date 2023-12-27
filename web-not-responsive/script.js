// Función para desplazarse suavemente a la sección objetivo
function scrollToSection(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

  const targetId = event.target.getAttribute('href'); // Obtener el ID del enlace clicado
  const targetSection = document.querySelector(targetId); // Seleccionar la sección objetivo

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Agregar el evento de clic a los enlaces de la barra de navegación
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});
