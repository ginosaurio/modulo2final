$(document).ready(function() {
    $(".text-body-secondary").click(function() {
      var idBoton = $(this).attr("id");
      $("#detalles" + idBoton).toggle();
    });


    $(".btn-close").click(function() {
        $(".detalles").hide();
    });
  });


  document.querySelector('form').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('inputEmail4');
    var emailValue = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        event.preventDefault(); // Evita el envío del formulario
        alert('Por favor ingresa un correo válido.');
        emailInput.focus();
    }
});

  