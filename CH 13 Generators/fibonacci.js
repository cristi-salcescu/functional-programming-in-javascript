function fibonacci() {
    let a = 0;
    let b = 1;
    return function fibonacciGenerator() {
      const aResult = a;
      a = b;
      b = aResult + b;
      return aResult;
    };
  }

export default fibonacci;