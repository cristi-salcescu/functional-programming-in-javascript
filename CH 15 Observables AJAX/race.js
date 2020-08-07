import { ajax } from 'rxjs/ajax';
import { race } from 'rxjs';

const dictionariesObservable = ajax.getJSON('http://localhost:3000/dictionaries');
const todosObservable = ajax.getJSON('http://localhost:3000/todos');

//take the first observable to emit
const observable = race(
  dictionariesObservable,
  todosObservable
);

observable.subscribe(console.log);

