$(document).ready(function() {
  $("form#myForm").submit(function(event) {
    event.preventDefault()
    var userNumber = parseInt($("input#userInput").val())

    for (var i = 1; i <= userNumber; i++) {
      var result = "";
      if (i % 3 === 0) result = "ping";
      if (i % 5 === 0) result += "pong";
      $("p#display").append(result || i+"</br>")
    }

  });
});
