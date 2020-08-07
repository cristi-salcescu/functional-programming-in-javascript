import { Range } from 'immutable';

Range(0, 10)
  .filter(isPrime)
  .forEach(log);

function isPrime(number) {
    if (number > 2){
        const firstDivisor = findFirstDivisor(number);
        return !firstDivisor;
    } else {
        return (number === 2) 
            ? true
            : false;
    }
}

function findFirstDivisor(number){
    return Range(2, (number / 2) + 1)        
            .find(isDivisorOf(number));
}

function isDivisorOf(number) {
  return function(divisor) {
    return (number > 1)
        ? number % divisor === 0
        : false
  };
}

function log(number) {
  console.log(number);
}