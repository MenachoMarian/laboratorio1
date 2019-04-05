function candies(n,m) {
  var r = 0;
  var candy = 0;
    if (m>n) {
      r = m/n;
      candy= parceInt(r);
      return candy;
    }
}

//module.exports = candies
console.log(candies(3,10));
