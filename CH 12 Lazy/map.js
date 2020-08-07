function map(transform) {
    return function reducer(arr, value) {
        const newValue = transform(value);
        return [...arr, newValue];
    }
}

function double(n){
    return n * 2;
}

const numbers = [1, 2, 3];
const newNumbers = numbers.reduce(map(double), []);
console.log(newNumbers);