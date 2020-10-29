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
var mine = [];
var user = [];
// collego bottone start
var btnStart = document.getElementById("start")
// avvio
btnStart.addEventListener('click',
   function() {

     // il computer genera 16 numeri da 1 a 100 attraverso un ciclo
    while (mine.length < 16){
       var mineGenerator =  Math.floor(Math.random()*100)+1; //genera un numero da 1 a 100
       var mineDuplicate = mine.includes(mineGenerator);  // variabile che identifica che il numero non sia ripetuto

       if(!mineDuplicate){
          mine.push(mineGenerator)
         }

         while(user.length < 84){
           var number = parseInt(prompt("inserisci un numero da 1 a 100")); // chiedi  un numero
           var numberDuplicate = user.includes(number);  // è un duplicato se uguale ad un elemento dell'arrey user
           var numberMine = mine.includes(number);


           if(!numberDuplicate && !numberMine){
              user.push(number)
           } else {
                document.getElementById("result").innerHTML = "BOOM! E' esplosa una tua mina. Riprova senza digitare numeri che hai già inserito";
                break;
             }
           }
           console.log(mine);
           console.log(user);
    }
    console.log(mine);
    /*In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
    L'utente non può inserire più volte lo stesso numero.*/


        console.log(user);




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

   })
