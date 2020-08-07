function sumAll(n) {       
    let total = 0;
    let i = 1;
    while(i <= n){
        total = total + i;
        i = i + 1;
    }

    return total;
}

console.log(sumAll(10000));