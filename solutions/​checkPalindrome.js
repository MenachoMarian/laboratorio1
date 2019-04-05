<<<<<<< HEAD
function ​checkPalindrome(w){
=======
function ​sum(w){
>>>>>>> brendaexperimenta
  var count=w.length;
  var wordinverted;
  var result="";

  while (count >= 0)
 {
   wordinverted=wordinverted+w.charAt(count);
   count --;
  }


  if (w == wordinverted){
    result="true";
  }
  else {
    result="false";
  }
  return result;
}

<<<<<<< HEAD
module.exports=checkPalindrome
//var inputString = "aabaa";
//console.log(checkPalindrome(inputString));
=======
//module.exports=checkPalindrome
var inputString = "aabaa";
console.log(checkPalindrome(inputString));
>>>>>>> brendaexperimenta
