function increment(x){
    return x + 1;
}

function decrement(x){
    return x - 1;
}

const actionMap = {
    increment,
    decrement
}

function doAction(x, actionName){
    const action = actionMap[actionName];
    return action
        ? action(x)
        : x;
}

const number = 0;
const newNumber = doAction(number, 'increment');
console.log(newNumber)