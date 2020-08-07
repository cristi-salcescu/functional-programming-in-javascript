import { Map } from 'immutable';

function logIdentity(x){
    console.log(x);
    return x
}

Map({ a: 1, b: 2 })
    .map(x => 10 * x)
    .map(logIdentity)

const x = Map({ a: 1, b: 2, c:3, d:4 })
    .filter(x => x%2 === 0)
    .map(logIdentity)
    
console.log(x)