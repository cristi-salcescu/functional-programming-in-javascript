import { of } from 'rxjs';
import { map } from 'rxjs/operators';

//Identity law
function identity(n){
    return n;
}

of(1, 2, 3)
  .pipe(
    map(identity)
  )
  .subscribe(console.log);
  //Observable 1,2,3

//Composition law
//observable.map(f).map(g) === observable.map(x => g(f(x)))

function increment(n){
    return n + 1;
}

function double(n){
    return n * 2
}

of(1, 2, 3)
  .pipe(
    map(increment),
    map(double)
  )
  .subscribe(console.log);
  //Observable 4,6,8
    
of(1, 2, 3)
  .pipe(
    map(x => double(increment(x)))
  )
  .subscribe(console.log);
  //Observable 4,6,8