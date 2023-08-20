const texto = "Comprometidos con tu trabajo...";
const tiempoEscritura = 52; // Velocidad de escritura en milisegundos
const delay = 7000;

const contenedorTexto = document.getElementById("texto-escritura");
let index = 0;

function escribirTexto() {
  contenedorTexto.textContent += texto[index];
  index++;
  
  if (index < texto.length) {
    setTimeout(escribirTexto, tiempoEscritura);
  } else {
    // Reiniciar el loop después del delay de 2 segundos
    setTimeout(() => {
      contenedorTexto.textContent = ""; // Reiniciar el texto
      index = 0; // Reiniciar el índice
      escribirTexto(); // Iniciar el loop nuevamente
    }, delay);
  }
}

escribirTexto();

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrollY = window.scrollY || window.pageYOffset;

  // Definimos una altura a partir de la cual queremos cambiar el estilo del navbar
  const scrollThreshold = 100;

  // Si el scroll es mayor que el umbral, agregamos la clase 'navbar-scroll'
  if (scrollY > scrollThreshold) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetOffsetTop = targetElement.offsetTop;
    const headerOffset = 50; // Ajusta el desplazamiento si tienes una barra de navegación fija

    window.scroll({
      top: targetOffsetTop - headerOffset,
      behavior: "smooth"
    });
  }
});



function playVideo() {
  var videoContainer = document.getElementById('videoContainer');
  videoContainer.innerHTML = '<iframe src="https://www.youtube.com/embed/iwdtidtt_PQ?autoplay=1" frameborder="0" allowfullscreen></iframe>';
}