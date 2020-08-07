function find(test) {
    return function reducer(foundValue, value) {
      if (test(value) && !foundValue) {
        return value
      } else {
        return foundValue;
      }
    }
}

function isEven(n){
    return n % 2 === 0;
}

const numbers = [1, 2, 3, 4];
const element = numbers.reduce(find(isEven), undefined);
console.log(element);