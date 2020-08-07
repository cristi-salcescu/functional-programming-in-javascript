import {cond, equals, identity, T} from 'ramda'

function increment(x){
    return x + 1;
}

function decrement(x){
    return x - 1;
}

const doAction = cond([
    [equals('increment'), () => increment],
    [equals('decrement'), () => decrement],
    [T, ()=> identity]
]);

const number = 0;
const newNumber = doAction('increment')(number);
console.log(newNumber)