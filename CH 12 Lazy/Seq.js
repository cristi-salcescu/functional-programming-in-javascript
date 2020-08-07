import { Seq } from 'immutable';

function isEven(n){
    return n % 2 === 0;
}

function double(n){
    return n * 2;
}

function logIdentity(n){
  console.log(n);
  return n;
}

const sequence = Seq([ 1, 2, 3, 4])
  .filter(isEven)
  .map(double)
  .map(logIdentity);

console.log(sequence);

const newArray = sequence.toArray();
console.log(newArray);