$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var food = $("#food").val();
    var genre = $("input:radio[name=genre]:checked").val();

    $("#output").text("Your name: " + name + " Favorite food: " + food + " You listen to: " + genre);
  });
});
