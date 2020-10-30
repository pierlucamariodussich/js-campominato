var RANDOM_NUMBERS = 16;
var MIN_BOUND = 0;
var MAX_BOUND = 99;
var USER = [];
var totalRounds = 84;

//COLLEGAMENTI container
var levelCont = document.getElementById("level");
var gameCont = document.getElementById("game");
var gameMessaggioCont = document.getElementById("game_mes");
var winCont = document.getElementById("win");
var looseCont = document.getElementById("loose");
var easyCont = document.getElementById("easy_square");
var mediumCont = document.getElementById("medium_square");
var hardCont = document.getElementById("hard_square");


//MESSAGGI
var messageGameEL = document.getElementById("message_continua");
var game = document.getElementById("message_continua");

//BUTTON
btnEasy = document.getElementById("easy");
btnMedium = document.getElementById("medium");
btnHard = document.getElementById("hard");
btnStart = document.getElementById("start")

//LEVELS

//MINE GENERATOR AVVIO
var mine = [];
 // il computer genera 16 numeri da 1 a 100 attraverso un ciclo
while (mine.length < RANDOM_NUMBERS){
   var mineGenerator =  Math.floor(Math.random()*(MAX_BOUND - MIN_BOUND)+ MIN_BOUND); //genera un numero da 1 a 100
   if(!isInArray(mineGenerator, mine)){
      mine.push(mineGenerator);
     }
}
console.log(mine)

// COLLEGO GLI SLOT HTML A JAVA CREANDO UN ARRAY
var slotEl = document.getElementsByClassName("slot");

//INIZIO UN CICLO FOR PER SELEZIONARE I VALORI DI OGNI SLOT
for(i=0; i< slotEl.length; i++){
  slotEl[i].value = i;

// EVENTO CHE AL CLICK  CONTROLLA SE IL VALORE DELLO SLOT E' UGUALE AL VALORE DI MINE
  slotEl[i].addEventListener("click",
  function(event){

    var slotValue = parseInt(event.target.value);
    // CONTROLLO SE E DOPPIONE


    // SE IL VALORE DELLA SLOT E' UGUALE A QUELLO DEL MINE APPARE BOMBA SE NO IL QUADRATO DIVENTA BIANCO
    if(isInArray(slotValue, mine)){
      event.target.style.backgroundColor="red";
      event.target.style.backgroundImage= "url('img/bomb.png')";
      messageGameEL.innerHTML = "BOOM! Hai perso ";
      messageGameEL.style.color="red";
      gameCont.className="hidden"
      looseCont.className = "container_loose"
    } else{
      event.target.style.backgroundColor="white";
      messageGameEL.innerHTML = "Sei salvo ! Continua ";
      messageGameEL.style.color="white";
      if(!isInArray(slotValue, USER)){
      USER.push(slotValue);
      }
    }
    //HAI VINTO!!
    if(USER.length === totalRounds){
    alert("haivinto");
    }

  })
  //TASTO DESTRO BANDIERINA
  slotEl[i].addEventListener("contextmenu",
    function(event){
      event.preventDefault();
      event.target.style.backgroundColor="white";
      event.target.style.backgroundImage="url('img/flag.svg')";
  })
}
console.log(USER);
