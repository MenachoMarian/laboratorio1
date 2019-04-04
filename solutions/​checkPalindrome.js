function ​checkPalindrome(word){
  var count=word.length;
  var wordinverted;
  var result;

  while (count >= 0)
  {
    wordinverted=wordinverted+word.charAt(count);
    count --;
  }

  if (word === wordinverted){
    result="true";
  }
  else {
    result="false";
  }
  return result;
}

//module.exports=checkPalindrome
//var inputString = "aabaa";
console.log(checkPalindrome("aabaa"));
