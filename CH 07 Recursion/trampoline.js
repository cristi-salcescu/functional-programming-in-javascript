function sumAll(n, i = 0, result = 0) { 
  return (i > n)  
      ? () => result
      : () => sumAll(n, i + 1, i + result);
}

const _sumAll = trampoline(sumAll)

function trampoline(f) {
  return function(...args){
    let result = f(...args);
    while (typeof(result) === 'function'){
      result = result();
    } 

    return result;
  }
}


console.log(_sumAll(10000));