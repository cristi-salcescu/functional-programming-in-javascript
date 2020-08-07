import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const dataSource = of(1, 2, 3, 4, 5);

function isEven(n){
  return n % 2 === 0;
}

dataSource
  .pipe(
    filter(isEven)
  )
  .subscribe(console.log);