import range from './range-finite';
import forEach from './forEach'; 

function log(x){
    console.log(x);
}

const nextNumber = range(1, 4);
forEach(log)(nextNumber);
//1
//2
//3