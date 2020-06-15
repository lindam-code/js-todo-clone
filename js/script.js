$(document).ready(function() {

  var arrayCoseDaFare = [
    "Doccia",
    "Esercizi",
    "Ordina pizze"
  ];
  console.log(arrayCoseDaFare);

  for (var i = 0; i < arrayCoseDaFare.length; i++) {
    var cloneLi = $('.template li').clone();
    cloneLi.text(arrayCoseDaFare[i]);
    $('.todo-lista ul').append(cloneLi);
  }

});
