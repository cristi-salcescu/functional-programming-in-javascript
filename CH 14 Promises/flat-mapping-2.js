function devideBy(divisor){
    return function(n){
        return n / divisor;
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