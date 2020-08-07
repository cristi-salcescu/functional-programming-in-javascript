import { map, mapTo, take, tap, concatAll } from 'rxjs/operators';
import { interval } from 'rxjs';

const obs1 = interval(10000).pipe(
        take(1), 
        mapTo('1st')
    );

const obs2 = interval(3000)
    .pipe(
        take(1), 
        mapTo('2nd')
    );

obs1
    .pipe(
        tap(console.log),
        //map(() => obs2),
        mapTo(obs2),
        concatAll()
    )
    .subscribe(console.log)
