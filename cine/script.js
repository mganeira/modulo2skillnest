$(document).ready(function() {
  // Mostrar el modal cuando se hace clic en un botón de comprar
  $('.buy-btn').on('click', function() {
    $('#modal').fadeIn();
  });

  // Cerrar el modal cuando se hace clic en la X
  $('#close-btn').on('click', function() {
    $('#modal').fadeOut();
  });

  // Opcional: cerrar modal al hacer clic fuera del formulario
  $('#modal').on('click', function(e) {
    if ($(e.target).is('#modal')) {
      $('#modal').fadeOut();
    }
  });
});
