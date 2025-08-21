// Interactividad básica del formulario
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Gracias por tu mensaje. Te contactaremos pronto.");
});
