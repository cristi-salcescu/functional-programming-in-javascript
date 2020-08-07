const numbers = [1, 2, 3, 4];

function isEven(n) {
    return n % 2 == 0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);