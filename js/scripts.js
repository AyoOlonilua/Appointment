$(document).ready(function() {
    $("#formOne").submit(function(event) {
      $(".new").click(function() {
          $("#formOne").toggle();
          $("#story").toggle();
      });
      
    const nameInput = $("#name").val();
    const appointmentInput = $("#appointment").val();
    const locationInput = $("#location").val();
    const dateInput= $("#date").val();
    const startInput= $("#start").val();
    const endInput= $("#end").val();

    $(".name").text(nameInput);
    $(".appointment").text(appointmentInput);
    $(".location").text(locationInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

      $("#story").show();
    event.preventDefault();
    });
  });