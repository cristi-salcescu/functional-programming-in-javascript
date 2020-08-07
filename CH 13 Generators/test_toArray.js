import range from './range-finite';
import toArray from './toArray'; 

const numbers = toArray(range(1, 5));
console.log(numbers);
//[1, 2, 3, 4]