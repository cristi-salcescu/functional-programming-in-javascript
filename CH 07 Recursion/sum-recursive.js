function sumAll(n, i = 0, result = 0) { 
    return (i > n)  
        ? result
        : sumAll(n, i + 1, i + result);  
}   

console.log(sumAll(10000));