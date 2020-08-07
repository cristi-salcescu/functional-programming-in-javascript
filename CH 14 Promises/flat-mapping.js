function devideBy(n, divisor){
    return n / divisor;
}

function logIdentity(value){
    console.log(value);
    return value;
}

Promise.resolve(9)
    .then(logIdentity)
    .then(n => devideBy(n, 3))
    .then(logIdentity);