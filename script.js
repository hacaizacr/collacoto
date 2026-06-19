document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");

  if (!form) {
    console.error("No se encontró el formulario");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    limpiarErrores();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    let valido = true;

    if (nombre.value.trim() === "") {
      mostrarError(nombre, "El nombre no puede estar vacío.");
      valido = false;
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      mostrarError(email, "El correo no puede estar vacío.");
      valido = false;
    } else if (!regexCorreo.test(email.value)) {
      mostrarError(email, "Ingresa un correo válido.");
      valido = false;
    }

    if (mensaje.value.trim() === "") {
      mostrarError(mensaje, "El mensaje no puede estar vacío.");
      valido = false;
    }

    if (valido) {
      mostrarExito("✅ ¡Mensaje enviado correctamente! Te responderemos pronto.");
      form.reset();
    }
  });

  function mostrarError(campo, texto) {
    campo.style.borderColor = "red";
    const error = document.createElement("span");
    error.classList.add("msg-error");
    error.textContent = texto;
    error.style.color = "red";
    error.style.fontSize = "13px";
    error.style.display = "block";
    error.style.marginTop = "4px";
    error.style.marginBottom = "6px";
    campo.parentElement.insertBefore(error, campo.nextSibling);
  }

  function mostrarExito(texto) {
    const exito = document.createElement("p");
    exito.textContent = texto;
    exito.style.color = "green";
    exito.style.fontWeight = "bold";
    exito.style.marginTop = "12px";
    exito.style.textAlign = "center";
    form.appendChild(exito);
    setTimeout(() => exito.remove(), 4000);
  }

  function limpiarErrores() {
    document.querySelectorAll(".msg-error").forEach(e => e.remove());
    [document.getElementById("nombre"), document.getElementById("email"), document.getElementById("mensaje")]
      .forEach(campo => {
        if (campo) campo.style.borderColor = "";
      });
  }
});