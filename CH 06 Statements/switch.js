function increment(x){
  return x + 1;
}

function decrement(x){
  return x - 1;
}

function doAction(actionName){
  switch(actionName){
    case "increment":
      number = increment(number);
    break;
    case "decrement":
      number = decrement(number);
    break;
  }
}

let number = 0;
doAction('increment')
console.log(number)