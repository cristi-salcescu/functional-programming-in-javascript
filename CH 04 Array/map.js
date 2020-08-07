const numbers = [1, 2, 3, 4];

function triple(n) {
    return n * 3;
}

const newNumbers = numbers.map(triple);
console.log(newNumbers);