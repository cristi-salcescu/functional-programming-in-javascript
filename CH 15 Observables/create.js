import { Observable } from 'rxjs';

const observable = Observable.create(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

observable.subscribe(console.log);

setTimeout(()=>{
  observable.subscribe(console.log);
  //1
  //2
  //3
}, 3000);    