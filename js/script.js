/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50*/

/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati*/
//COSTANTS
var RANDOM_NUMBERS = 16;
var MIN_BOUND = 1;

//BUTTON AND INPUT
var btnStart = document.getElementById("start"); // collego bottone start
var btnEasy = document.getElementById("easy");
var btnMedium = document.getElementById("medium");
var btnHard = document.getElementById("hard");
var inpEasy = document.getElementById("number");
var maxMessageEl = document.getElementById("max_message");


// level EASY
btnEasy.addEventListener ('click',
   function () {
      MAX_BOUND = 100;
      ROUNDS = (MAX_BOUND - MIN_BOUND);
      inpEasy.max = "100";
      maxMessageEl.innerHTML = "inserisci un numero da "+ MIN_BOUND + " a " + MAX_BOUND + " : "

})

// level MEDIUM
btnMedium.addEventListener ('click',
   function () {
      MAX_BOUND = 80;
      ROUNDS = (MAX_BOUND - MIN_BOUND);
      inpEasy.max = "80";
      maxMessageEl.innerHTML = "inserisci un numero da "+ MIN_BOUND + " a " + MAX_BOUND + " : "

})

// level HARD
btnHard.addEventListener ('click',
   function () {
      MAX_BOUND = 50;
      ROUNDS = (MAX_BOUND - MIN_BOUND);
      inpEasy.max = "50";
      maxMessageEl.innerHTML = "inserisci un numero da "+ MIN_BOUND + " a " + MAX_BOUND + " : "

})

// AVVIO

btnStart.addEventListener ('click',
   function () {


    var mine = [];
     // il computer genera 16 numeri da 1 a 100 attraverso un ciclo
    while (mine.length < RANDOM_NUMBERS){
       var mineGenerator =  Math.floor(Math.random()*(MAX_BOUND - MIN_BOUND)+ MIN_BOUND); //genera un numero da 1 a 100
       if(!isInArray(mineGenerator, mine)){
          mine.push(mineGenerator);
         }
    }

    console.log(mine);
    /*In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
    */
    var resultEl = document.getElementById("result");
    var scoreEl = document.getElementById("click");
    var hasWon = false;
    var isAlive = true;
    var user = [];


    while (!hasWon && isAlive ){

      var number = parseInt(prompt("inserisci un numero da "+ MIN_BOUND + " a " + MAX_BOUND)); // chiedi  un numero
      //L'utente non può inserire più volte lo stesso numero.

      if(isInArray(number, user)){
        document.getElementById("result").innerHTML = "BOOM! E' esplosa una tua mina. Riprova senza digitare numeri che hai già inserito";
        alert( "HAI PERSO !");
      } else {
        user.push(number);

        if(isInArray(number, mine)){
          isAlive = false;
          resultEl.innerHTML = "BOOM! hai perso";
        }
        if(user.length === ROUNDS){
          hasWon = true;
          resultEl.innerHTML = "Hai Vinto!";
        }
      }


      var score = parseInt(user.length);
      scoreEl.innerHTML = score;
      }



})












    //
    //
    //
    //
    // // se il numero dell'utente è uguale hai numeri dell'arrey mine o uguale ad un numero già inserito la partita finisce
    // // se il numero dell'utente non è presente ricomunicia il ciclo
    //    if(!numberDuplicate) {
    //      user.push(number);
    //   }
    // }
    //
    //   // è true se il numero è uguale ad un all'interno di mine
    //
    // if (numberMine){
    //   document.getElementById("result").innerHTML = " BOOM! hai perso";
    // } else {
    //   document.getElementById("result").innerHTML = " sei stato fortunato, evita le mine";
    // }
       // } else {
       //   document.getElementById("result").innerHTML = "BOOM! E' esplosa una tua mina. Riprova senza digitare numeri che hai già inserito";
       // }
