$(document).ready(function() {
  $("#blanks form").submit(function(event) {
  var food = $("#food").val();
  var music = $("input:radio[name=type]:checked").val();

  $("#response").show();
  

   event.preventDefault();

  });
});
