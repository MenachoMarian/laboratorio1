function candies(n,m) {
  var resp = 0;
    if (m>=n) {
      resp = m/n;
       resp= parseInt(resp);
      return resp;
    }else
    document.write('dulces insuficientes');
}

module.exports = candies
//console.log(candies(3,6));
