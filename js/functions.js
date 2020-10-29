// FUNCTION

function isInArray(inputNum, arrayNum){
   for(var i = 0; i < arrayNum.length; i++) {
     if(inputNum === arrayNum[i]){
       return true;
     }
   }
   return false;
}
