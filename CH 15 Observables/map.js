import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const dataSource = of(1, 2, 3);

function double(n){
    return n * 2;
}

dataSource
  .pipe(
    map(double)
  )
  .subscribe(console.log);