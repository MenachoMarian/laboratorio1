function candies(n,m) {
  var r = 0;
//  var candy = 0;
    if (m>n) {
      r = m/n;
       parceInt(r);

      return r;
    }
}

//module.exports = candies
console.log(candies(3,10));
