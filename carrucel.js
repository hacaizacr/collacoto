const slides = document.querySelectorAll(".slide");

let index = 0;

//cambiar de imagen
function cambiarSlide() {

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  index++;
  if (index >= slides.length) {
    index = 0;
  }

  slides[index].classList.add("active");
}

// Cambio automático cada 4 segundos
setInterval(cambiarSlide, 4000);