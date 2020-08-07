import { interval } from 'rxjs';

/* number of milliseconds */
const observable = interval(1000);
observable.subscribe(console.log);
//0
//1
//2
//3
//4
//5
