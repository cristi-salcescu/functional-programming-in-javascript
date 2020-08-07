function increment(x){
    return x + 1;
}

function decrement(x){
    return x - 1;
}
  
function doAction(x, actionName){
    switch(actionName){
      case 'increment':
        return increment(x);
      case 'decrement':
        return decrement(x);
      default:
          return x;
    }
  }
  
  const number = 0;
  const newNumber = doAction(number, 'increment');
  console.log(newNumber)