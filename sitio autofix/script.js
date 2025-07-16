$(document).ready(function() {
  // Show the modal 
  $('#btn1, #btn2, #btn3').on('click', function() {
    $('#modal').fadeIn(); // Show the modal first

    // Pre-fill the service
    let serviceType = '';
    if ($(this).attr('id') === 'btn1') {
      serviceType = 'Diagnóstico eléctrico';
    } else if ($(this).attr('id') === 'btn2') {
      serviceType = 'Cambio de frenos';
    } else if ($(this).attr('id') === 'btn3') {
      serviceType = 'Cambio de aceite';
    }

    // Pre-select 
    
    $('#servicio option').filter(function() {
      return $(this).text() === serviceType;
    }).prop('selected', true);
  });

  // Close the modal
  $('#close-btn').on('click', function() {
    $('#modal').fadeOut();
  });

});