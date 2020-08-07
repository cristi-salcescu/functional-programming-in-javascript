function sum(x, y){
    return x + y;
}

function sumAll(arr){
    return arr.reduce(sum, 0);
}

console.log(sumAll([1, 2, 3]));
//6