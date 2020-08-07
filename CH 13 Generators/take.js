function take(n) {
    return function(generate) {
      let count = 0;
      return function() {
        if (count < n) {
          count += 1;
          return generate();
        }
      };
    };
  }

export default  take;