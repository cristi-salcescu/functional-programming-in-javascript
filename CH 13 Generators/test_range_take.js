import { pipe } from 'lodash/fp';
import range from './range'; 
import take from './take';
import forEach from './forEach';

const nextNumber = range();
pipe(
    take(3),
    forEach(console.log)
)(nextNumber);