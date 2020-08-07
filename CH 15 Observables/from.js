import { from } from 'rxjs';

const observable = from([1, 2, 3]);
observable.subscribe(console.log);
// 1
// 2
// 3