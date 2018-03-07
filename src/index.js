module.exports = 
function getZerosCount(number, base) {
    // your implementation
    var arrOfZero = [];
    var basePrimes = base;
    for (var prime = 2; prime <= base; prime++) {
        if (basePrimes % prime === 0) {
            var countOfPrimes = 0;
            while (basePrimes % prime === 0) {
                basePrimes = basePrimes / prime;
                countOfPrimes++; //степень одного простого числа
            }
            var sum = 0; 
            var z = Math.floor(number / prime);
            while (z > 0) {
               sum += z;
                z = Math.floor(z / prime);// формула  z = a/b + a/b^n + ....
            }
            arrOfZero.push(Math.floor(sum / countOfPrimes));
            var numOfZero = Math.min.apply(null, arrOfZero);
        }
    }
    return numOfZero;
};
//console.log(getZerosCount(12, 10)); //2