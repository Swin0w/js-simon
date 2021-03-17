// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri
//  da indovinare sono stati individuati.
var aRnd = [];

function alertNumRnd (){
  for (var i = 1; i <= 5; i++) {
      var genRnd = Math.floor(Math.random() * 100) + 1;
      aRnd.push(genRnd);
  }
  alert("Ecco i 5 numeri casuali: " + aRnd);
  console.log(aRnd); // Debug
  return aRnd;
}
function search(num) {
  for (var i = 0; i < 5; i++){
    if(num.includes(aRnd)) {
      alert("Il numero è all'interno dell'array");
    } else {
      alert("Numero non presente");
    }
  }
}
alertNumRnd();
setTimeout(function(){
  var i = 0;
  while (i < 5) {
    var num = parseInt(prompt("Dammi i numeri per come gli hai visti in ordine:"));
    search();
    i++; }
  }, 3000);
