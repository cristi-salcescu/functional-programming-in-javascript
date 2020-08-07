function factorial(n, result = 1) { 
    //console.log(`n=${n}, result=${result}`);

    return (n === 0)  
        ? result
        : factorial(n - 1, n * result);  
}   

console.log(factorial(5));