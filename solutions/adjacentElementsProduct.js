function adjacentElementsProduct(v){
  var product=-100;
  var major=0;
  for(var i=0 ;i<v.length; i++)
  {
    product=v[i]*v[i+1];
    if(product >= major)
    {
      major=product;
    }
  }
  return major;
}
var inputArray = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(inputArray));
//module.exports=adjacentElementsProduct
