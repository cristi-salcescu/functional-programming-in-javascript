import { Range } from 'immutable';

function logIdentity(n){
  console.log(n);
  return n;
}

Range(1, 4)
    .forEach(logIdentity);    


