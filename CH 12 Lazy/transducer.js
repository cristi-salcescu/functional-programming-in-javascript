import { pipe, compose } from 'lodash/fp';

function _filter(test) {
    return function(reducer){
        return function filterReducer(arr, value){
            if(test(value)){
                return reducer(arr, value);
            } else {
                return arr;
            }
        }
    }
}

const filter = test => reducer => {
        return function filterReducer(arr, value){
            return test(value)
                ? reducer(arr, value)
                : arr
        }
    }

const map = transform => reducer => {
    return function mapReducer(arr, value){
        const newValue = transform(value);
        return reducer(arr, newValue);
    }
}

const toArrayReducer = (arr, value) => {
    return [...arr, value]
  };

function isEven(n){
    return n % 2 === 0;
}

function double(n){
    return n * 2;
}

const numbers = [1 , 2, 3, 4];

//
const filterTransducer = filter(isEven);
const mapTransducer = map(double);

const newNumbers = numbers
  .reduce(filterTransducer(mapTransducer(toArrayReducer)), []);
console.log(newNumbers);

//
const newReducer = compose(
    filter(isEven),
    map(double)
)(toArrayReducer);
console.log(numbers.reduce(newReducer, []));