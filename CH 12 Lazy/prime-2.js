import { Range } from 'immutable';

Range(0, 10)
  .filter(isPrime)
  .forEach(log);

function log(number) {
  console.log(number);
}

function isPrime(number){
    if (number <= 1){
        return false;
    }

    for (let i=2; i<=number/2; i++)
    {
       if (number % i === 0 )
        return false;
    }
    
    return true;
 }