function devideBy(divisor){
    return function(number){
        const result = number / divisor;
        return Promise.resolve(result);
    }
}

function logIdentity(value){
    console.log(value);
    return value;
}

Promise.resolve(9)
    .then(logIdentity)
    .then(devideBy(3))
    .then(logIdentity);