$(document).ready(function() {
  // Array con la lista delle cose da fare
  var arrayCoseDaFare = [
    "Doccia",
    "Esercizi",
    "Ordina pizze"
  ];
  console.log(arrayCoseDaFare);

  // Ciclo per popolare la lista nel DOM con la lista dell'array
  for (var i = 0; i < arrayCoseDaFare.length; i++) {
    var cloneLi = $('.template li').clone();
    cloneLi.prepend(arrayCoseDaFare[i]);
    $('.todo-lista ul').append(cloneLi);
  }

  // Tasto per rimuovere le cose già fatte (cliccare sui tick)
  // $('.delete-item').click(function(){
  //   $(this).parent().remove();
  // });

  // Per essere sicuri che funziona anche con gli elementi che creo
  // tramite un prompt
  // il tasto rimuovi lo uso con la funzione .on, forma estesa di click
  $(document).on('click','.delete-item', function(){
    $(this).parent().remove();
  });


});
