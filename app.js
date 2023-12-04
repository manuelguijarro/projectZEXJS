const form = document.getElementById("stripe-login");
const submit = document.getElementById("submit");
const animationContainer = document.getElementById("animation-container");

// Prevenir el envío del formulario por defecto
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Mostrar la animación
  animationContainer.classList.remove("hidden");
  animationContainer.classList.add("visible");

  // Puedes agregar aquí cualquier lógica adicional antes de enviar el formulario si es necesario
  // Por ejemplo, podrías realizar una solicitud AJAX con los datos del formulario
});
