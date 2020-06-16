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

  // Per essere sicuri che il tasto rimuovi funzioni anche con gli elementi che aggiungo
  // tramite prompt, lo uso con la funzione .on, forma estesa di .click
  $(document).on('click','.delete-item', function(){
    $(this).parent().remove();
  });

  // Prompt per aggiungere elementi alla lista delle cose da fare cliccando il bottone aggiungi
  $('.btn-add-item').click(function(){
    var elementoDaAggiungere = $('.prompt-item').val();
    var cloneLiDaAggiungere = $('.template li').clone();
    cloneLiDaAggiungere.prepend(elementoDaAggiungere);
    $('.todo-lista ul').append(cloneLiDaAggiungere);
    $('.prompt-item').val('');
  });

  // Prompt per aggiungere elementi alla lista delle cose da fare cliccando invio
  $('.prompt-item').keypress(function(event){
    if (event.which === 13) {
      var elementoDaAggiungere = $('.prompt-item').val();
      var cloneLiDaAggiungere = $('.template li').clone();
      cloneLiDaAggiungere.prepend(elementoDaAggiungere);
      $('.todo-lista ul').append(cloneLiDaAggiungere);
      $('.prompt-item').val('');
    }

  });

});
