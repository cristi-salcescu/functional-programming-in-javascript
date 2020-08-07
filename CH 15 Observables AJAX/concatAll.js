import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, concatAll } from 'rxjs/operators';

const observable = from([
    'http://localhost:3000/dictionaries',
    'http://localhost:3000/todos'
]);

observable.pipe(
    map(ajax.getJSON),
    concatAll()
).subscribe(console.log);
//[{name: 'Dictionary'}]
//[{title: 'To Do'}]
