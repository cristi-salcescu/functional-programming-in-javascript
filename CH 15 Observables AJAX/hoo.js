import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const observable = from([
    'http://localhost:3000/dictionaries',
    'http://localhost:3000/todos'
]);

observable.pipe(
    map(ajax.getJSON)
).subscribe(console.log);
