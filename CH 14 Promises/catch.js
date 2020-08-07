function devideBy(divisor){
    return function(number){
        const result = number / divisor; 
        return (divisor !== 0)
            ? Promise.resolve(result)
            : Promise.reject("Can't divide by 0")
    }
}

function logIdentity(value){
    console.log(value);
    return value;
}

function logError(error){
    console.error(error);
}

Promise.resolve(9)
    .then(logIdentity)
    .then(devideBy(0))
    .then(logIdentity)
    .catch(logError)