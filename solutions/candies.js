function candies(n,m) {
  var resp = 0;
    if (m>=n) {
      resp = Math.trunc(m/n);
       //resp= parseInt(resp);
      return resp*n;
    }
   else
  {
    return resp;
  }
}

module.exports = candies
//console.log(candies(8,2));
