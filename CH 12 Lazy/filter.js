function filter(test) {
    return function reducer(arr, value) {
      if (test(value)) {
        return [...arr, value]
      } else {
          return arr;
      }
    }
}

function isEven(n){
    return n % 2 === 0;
}

const numbers = [1 ,2 ,3 , 4];
const newNumbers = numbers.reduce(filter(isEven), []);
console.log(newNumbers);