import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

//Left identity
//M(x).flatMap(f) === f(x)

function f(n){
    return of(n + 1);
}

of(1)
  .pipe(
    mergeMap(f)
  )
  .subscribe(console.log);
  //Observable 2

f(1)
.subscribe(console.log);
//Observable 2

//Right identity
//monad.flatMap(M) === monad

function unit(value){
    return of(value)
}

of(1)
    .pipe(
        mergeMap(unit)
    )
    .subscribe(console.log);
    //Observable 1

//Associativity
//monad.flatMap(f).flatMap(g) 
//  === monad.flatMap(x => f(x).flatMap(g)))

function g(n){
    return of(n * 2);
}

of(1)
    .pipe(
        mergeMap(f),
        mergeMap(g)
    )
    .subscribe(console.log);
    //Observable 4

of(1)
    .pipe(
        mergeMap( x => f(x).pipe(mergeMap(g)))
    )
    .subscribe(console.log);
    //Observable 4

    
    
