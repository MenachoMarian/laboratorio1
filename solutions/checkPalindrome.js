function checkPalindrome(cadena){
  var count = cadena.length;
  var nuevap="";

  while(count>-1){
    nuevap = nuevap + cadena.charAt(count);
    count--;
  }
  if(nuevap===cadena)
  {
    return "true";
  }
  else{
    return "false";
  }
  //return nuevap;
}

var inputString="a";
console.log(checkPalindrome(inputString));
//module.exports=checkPalindrome
