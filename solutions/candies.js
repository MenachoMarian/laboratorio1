function candies(n,m) {
  var r = 0;
    if (m>=n) {
      r = m/n;
       r= parseInt(r);
      return r;
    }else
    document.write('dulces insuficientes');
}

module.exports = candies
//console.log(candies(3,6));
