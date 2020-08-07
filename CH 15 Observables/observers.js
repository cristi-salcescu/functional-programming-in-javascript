import { Observable } from 'rxjs';

const observer = {
    next(value){
        console.log(`Next: ${value}`)
    },
    error(msg){
        console.error(`Error: ${msg}`)
    },
    complete(value){
        console.error(`Complete`)
    }
};

const observable = Observable.create(observer => {
    observer.next(1);
    observer.next(2);
    observer.complete('Done');
});
observable.subscribe(observer);

const observable1 = Observable.create(observer => {
    observer.next(1);
    observer.next(2);
    observer.error('Failed');
});
observable1.subscribe(observer);

observable.subscribe(value => console.log(`Next: ${value}`));

observable.subscribe(
    value => console.log(`Next: ${value}`),
    msg => console.error(`Error: ${msg}`),
    () => console.error(`Complete`)
  );