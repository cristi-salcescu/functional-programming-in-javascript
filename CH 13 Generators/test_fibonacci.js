import { pipe } from 'lodash/fp';
import fibonacci from './fibonacci'; 
import take from './take';
import forEach from './forEach';

const generateFibonacci = fibonacci();
pipe(
    take(5),
    forEach(console.log)
)(generateFibonacci);
//0
//1
//1
//2
//3