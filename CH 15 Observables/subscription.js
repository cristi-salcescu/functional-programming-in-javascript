import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe(console.log);

// Later
setTimeout(() => {
    subscription.unsubscribe();
}, 3500);
