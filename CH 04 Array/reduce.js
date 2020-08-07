const numbers = [1, 3, 5, 7];

function add(total, n) {
    return total + n;
}

const total = numbers.reduce(add, 0);
console.log(total);