$(document).ready(function() {

  // Función para validar el formulario
  function validarFormulario() {
    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var asunto = $("#asunto").val();
    var mensaje = $("#mensaje").val();

    if (nombre === '' || correo === '' || asunto === '' || mensaje === '') {
      alert("Por favor, completa todos los campos.");
      return false;
    }
    return true;
  }

  // Evento de click en el botón de enviar
  $("#enviar-btn").click(function() {
    if (validarFormulario()) {
      s
      alert("El formulario ha sido enviado.");
      limpiarFormulario();
    }
  });
});

function limpiarFormulario() {
  document.getElementById("contact-form").reset();
}



