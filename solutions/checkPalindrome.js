function checkPalindrome(cadena){
  for(i=0; i<cadena.length/2; i++){
    if(cadena[i] != cadena[cadena.length-1-i]){
      return false;
    }
  }
  return true;
}
var inputString="a";
console.log("checkPalindrome="+" "+ checkPalindrome(inputString))
//module.exports = checkPalindrome
