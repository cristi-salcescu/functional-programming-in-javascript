function isEven(n){
    return n % 2 === 0;
}

function double(n){
    return n * 2;
}

const numbers = [1, 2, 3, 4];
const newNumbers = 
    numbers
        .filter(isEven)
        .map(double);
console.log(newNumbers);