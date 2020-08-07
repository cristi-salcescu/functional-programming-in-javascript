import { of, from } from 'rxjs'; 
import { map, mergeMap, mergeAll } from 'rxjs/operators';

function createGetNTerm(c){
  return function(n){
    return n * c + 1
  }
}

function toSequence(x) {
  const getNTerm = createGetNTerm(x);
  return of(1, 2, 3).pipe(
    map(getNTerm)
  )
}

toSequence(2)
  //.subscribe(console.log);

toSequence(4)
  //.subscribe(console.log);

// using map and mergeAll
from([2, 4]).pipe(
  map(toSequence),
  mergeAll()
)
//.subscribe(console.log);

// using mergeMap
from([2, 4]).pipe(
  mergeMap(toSequence)
)
.subscribe(console.log);