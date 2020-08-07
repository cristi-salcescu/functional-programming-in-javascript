import { of } from 'rxjs';
import { take } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);
source
    .pipe(
        take(3)
    )
    .subscribe(console.log);