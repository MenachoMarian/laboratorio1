function addTwoDigits(n){
   sum=0;
  while (n>0){
    sum=sum+n%10;
     n=parseInt(n/10);
  }
  return sum;
}
var n=29;
//console.log("la suma de los dìgitos es:"+" "+ addTwoDigits(n))
module.exports = addTwoDigits
