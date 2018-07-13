$(document).ready(function(){
  $("form#myForm").submit(function(event){
    event.preventDefault()
    var userNumber=parseInt($("input#userInput").val())
    $("p.display").text(userNumber)
  });
});
