import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

const dictionariesObservable = ajax.getJSON('http://localhost:3000/dictionaries');
const todosObservable = ajax.getJSON('http://localhost:3000/todos');

forkJoin({
      dictionaries: dictionariesObservable,
      todos: todosObservable
    }
  )
  .subscribe(console.log);
  //{dictionaries: Array(), todos: Array()}
